"use client";
import * as React from "react";
import { Maximize2, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEVICES, canvasSize, centredCrop, creativeSpec, isCreative } from "@/lib/devices";
import { layoutLabel } from "@/lib/layouts";
import type {
  Device,
  ElementId,
  ElementTransform,
  Orientation,
  Scene,
  SelectedElement,
  Slide,
  Theme,
} from "@/lib/types";
import { DeckCanvas, SlideCanvas } from "./slide-canvas";

type Props = {
  slides: Slide[];
  activeSlideId: string | null;
  device: Device;
  orientation: Orientation;
  theme: Theme;
  locale: string;
  appName?: string;
  appIcon?: string;
  fontFamily: string;
  connectedCanvas: boolean;
  scene?: Scene;
  selectedElement: SelectedElement | null;
  onActiveSlideChange: (id: string) => void;
  onLabelChange: (slideId: string, v: string) => void;
  onHeadlineChange: (slideId: string, v: string) => void;
  onTextElementTextChange: (slideId: string, id: string, v: string) => void;
  onElementChange: (slideId: string, id: ElementId, t: ElementTransform) => void;
  onSelectElement: (element: SelectedElement | null) => void;
};

// Fits one full-resolution screen inside the viewport while keeping the whole
// deck horizontally scrollable as one connected canvas.
export function PreviewStage({
  slides,
  activeSlideId,
  device,
  orientation,
  theme,
  locale,
  appName,
  appIcon,
  fontFamily,
  connectedCanvas,
  scene,
  selectedElement,
  onActiveSlideChange,
  onLabelChange,
  onHeadlineChange,
  onTextElementTextChange,
  onElementChange,
  onSelectElement,
}: Props) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const suppressNextActiveScreenPanRef = React.useRef(false);
  const [fitScale, setFitScale] = React.useState(0.2);
  const [zoom, setZoom] = React.useState(1);
  const { cW, cH } = canvasSize(device, orientation);
  const totalW = Math.max(1, slides.length) * cW;
  const scale = fitScale * zoom;
  const activeIndex = Math.max(0, slides.findIndex((slide) => slide.id === activeSlideId));
  const activeSlide = slides[activeIndex] || slides[0] || null;
  const activeId = activeSlide?.id;

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const sx = (rect.width - 96) / cW;
      const sy = (rect.height - 96) / cH;
      setFitScale(Math.max(0.05, Math.min(sx, sy)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [cW, cH]);

  React.useEffect(() => {
    setZoom(1);
  }, [device, orientation]);

  const panToActiveScreen = React.useCallback((nextScale: number, smooth = true) => {
    const scroller = scrollerRef.current;
    if (!scroller || !activeId) return;
    const screenLeft = activeIndex * cW * nextScale;
    const screenWidth = cW * nextScale;
    const targetLeft = Math.max(0, screenLeft - (scroller.clientWidth - screenWidth) / 2);
    scroller.scrollTo({ left: targetLeft, behavior: smooth ? "smooth" : "auto" });
  }, [activeIndex, activeId, cW]);

  const lastActiveIdRef = React.useRef(activeId);
  React.useEffect(() => {
    if (lastActiveIdRef.current !== activeId) {
      lastActiveIdRef.current = activeId;
      if (suppressNextActiveScreenPanRef.current) {
        suppressNextActiveScreenPanRef.current = false;
        return;
      }
      panToActiveScreen(scale, true);
    }
  }, [activeId, panToActiveScreen, scale]);

  const handleCanvasActiveSlideChange = React.useCallback(
    (id: string) => {
      if (id !== activeSlideId) {
        suppressNextActiveScreenPanRef.current = true;
      }
      onActiveSlideChange(id);
    },
    [activeSlideId, onActiveSlideChange],
  );

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Zoom on Ctrl / Cmd + wheel or trackpad pinch
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      setZoom((z) => Math.min(2.5, Math.max(0.2, Math.round(z * zoomFactor * 100) / 100)));
      return;
    }
    // Convert vertical wheel to horizontal panning on scroller
    if (scrollerRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scrollerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-[#f5f5f7] select-none"
    >
      <div
        ref={scrollerRef}
        onWheel={handleWheel}
        className="h-full w-full overflow-auto p-12 custom-scrollbar"
      >
        <div
          style={{
            width: totalW * scale,
            height: cH * scale,
            position: "relative",
            flexShrink: 0,
            filter: "drop-shadow(0 24px 60px rgba(16, 16, 16, 0.12))",
          }}
        >
          <div
            style={{
              width: totalW,
              height: cH,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <DeckCanvas
              slides={slides}
              device={device}
              orientation={orientation}
              theme={theme}
              locale={locale}
              appName={appName}
              appIcon={appIcon}
              fontFamily={fontFamily}
              connectedCanvas={connectedCanvas}
              scene={scene}
              editable
              previewScale={scale}
              selectedElement={selectedElement}
              activeSlideId={activeSlide?.id || null}
              showGuides
              edit={{
                onLabelChange,
                onHeadlineChange,
                onTextElementTextChange,
                onElementChange,
                onSelectElement,
                onSelectScreen: handleCanvasActiveSlideChange,
              }}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs text-[#6e6e73] shadow-sm backdrop-blur border border-[#e5e5ea]">
        <span className="font-semibold text-[#101010]">{DEVICES[device].label}</span>
        {activeSlide && (
          <>
            <span aria-hidden>·</span>
            <span>Screen {activeIndex + 1}</span>
            <span aria-hidden>·</span>
            <span>{layoutLabel(activeSlide.layout, device)}</span>
          </>
        )}
        {orientation === "landscape" && (
          <>
            <span aria-hidden>·</span>
            <span>landscape</span>
          </>
        )}
        {!connectedCanvas && (
          <>
            <span aria-hidden>·</span>
            <span>isolated</span>
          </>
        )}
      </div>

      {isCreative(device) && creativeSpec(device).crops.length > 0 && activeSlide && (
        <PlacementPreviews
          slide={activeSlide}
          index={activeIndex}
          count={slides.length}
          device={device}
          orientation={orientation}
          theme={theme}
          locale={locale}
          appName={appName}
          appIcon={appIcon}
          fontFamily={fontFamily}
          scene={scene}
        />
      )}

      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs tabular-nums text-[#6e6e73] shadow-sm backdrop-blur border border-[#e5e5ea]">
        <span className="px-1 text-[11px] font-mono">{slides.length}× {cW}×{cH}</span>
        <span aria-hidden className="text-[#e5e5ea]">|</span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full hover:bg-[#f5f5f7] text-[#101010]"
          onClick={() => setZoom((value) => Math.max(0.25, Number((value - 0.1).toFixed(2))))}
          disabled={zoom <= 0.25}
          title="Zoom out"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-3.5 w-3.5" />
        </Button>
        <span className="min-w-10 text-center font-medium text-[#101010]">{(scale * 100).toFixed(0)}%</span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full hover:bg-[#f5f5f7] text-[#101010]"
          onClick={() => setZoom((value) => Math.min(2, Number((value + 0.1).toFixed(2))))}
          disabled={zoom >= 2}
          title="Zoom in"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-3.5 w-3.5" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full hover:bg-[#f5f5f7] text-[#101010]"
          onClick={() => {
            setZoom(1);
            panToActiveScreen(fitScale, true);
          }}
          title="Fit active screen"
          aria-label="Fit active screen"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}

// How the active universal creative reads in each App Store placement, using
// the same estimated crops as the canvas guides. Rendered like an export.
function PlacementPreviews({
  slide,
  index,
  count,
  device,
  orientation,
  theme,
  locale,
  appName,
  appIcon,
  fontFamily,
  scene,
}: {
  slide: Slide;
  index: number;
  count: number;
  device: Device;
  orientation: Orientation;
  theme: Theme;
  locale: string;
  appName?: string;
  appIcon?: string;
  fontFamily: string;
  scene?: Scene;
}) {
  const { cW, cH } = canvasSize(device, orientation);
  const crops = isCreative(device) ? creativeSpec(device).crops : [];
  return (
    <div
      aria-label="Placement previews"
      className="pointer-events-none absolute bottom-4 left-4 hidden items-end gap-3 rounded-md bg-background/85 p-2 shadow-sm backdrop-blur md:flex"
    >
      {crops.map((crop) => {
        const r = centredCrop(cW, cH, crop.aspect);
        const width = crop.aspect > 2 ? 240 : 150;
        const k = width / r.w;
        return (
          <figure key={crop.label} className="space-y-1">
            <div className="relative overflow-hidden rounded-sm ring-1 ring-black/10" style={{ width, height: r.h * k }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: cW,
                  height: cH,
                  transform: `scale(${k}) translate(${-r.x}px, ${-r.y}px)`,
                  transformOrigin: "top left",
                }}
              >
                <SlideCanvas
                  slide={slide}
                  device={device}
                  orientation={orientation}
                  theme={theme}
                  locale={locale}
                  appName={appName}
                  appIcon={appIcon}
                  fontFamily={fontFamily}
                  scene={scene}
                  stripIndex={index}
                  stripCount={count}
                  hideEmpty
                />
              </div>
            </div>
            <figcaption className="text-[10px] text-muted-foreground">{crop.label.replace(" crop", "")} (estimated crop)</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
