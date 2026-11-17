"use client";
import * as React from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Device, Orientation, Scene, Slide, Theme } from "@/lib/types";
import { DEVICES } from "@/lib/devices";
import { newSlide } from "@/lib/defaults";
import { SlideThumb } from "./slide-thumb";

type Props = {
  slides: Slide[];
  activeId: string | null;
  device: Device;
  orientation: Orientation;
  theme: Theme;
  locale: string;
  appName?: string;
  appIcon?: string;
  fontFamily?: string;
  connectedCanvas: boolean;
  scene?: Scene;
  disabled?: boolean;
  onReorder: (next: Slide[]) => void;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onAdd: (slide: Slide) => void;
};

export function Sidebar({
  slides,
  activeId,
  device,
  orientation,
  theme,
  locale,
  appName,
  appIcon,
  fontFamily,
  connectedCanvas,
  scene,
  disabled,
  onReorder,
  onSelect,
  onDelete,
  onDuplicate,
  onAdd,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const oldIdx = slides.findIndex((s) => s.id === active.id);
    const newIdx = slides.findIndex((s) => s.id === over.id);
    if (oldIdx === -1 || newIdx === -1) return;
    onReorder(arrayMove(slides, oldIdx, newIdx));
  };

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="border-b border-[#f0f0f0] p-3.5">
        <h2 className="text-sm font-semibold text-[#101010]">Écrans du projet</h2>
        <p className="text-xs text-[#6e6e73]">
          {slides.length} écran{slides.length > 1 ? "s" : ""} · glisser pour réordonner
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-2.5 custom-scrollbar">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={slides.map((s) => s.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-2">
              {slides.map((slide, i) => (
                <SlideThumb
                  key={slide.id}
                  slide={slide}
                  slides={slides}
                  index={i}
                  active={slide.id === activeId}
                  device={device}
                  orientation={orientation}
                  theme={theme}
                  locale={locale}
                  appName={appName}
                  appIcon={appIcon}
                  fontFamily={fontFamily}
                  connectedCanvas={connectedCanvas}
                  scene={scene}
                  onSelect={() => onSelect(slide.id)}
                  onDelete={() => onDelete(slide.id)}
                  onDuplicate={() => onDuplicate(slide.id)}
                />
              ))}
              {slides.length === 0 && (
                <div className="rounded-xl border border-dashed border-[#d0d0d3] p-6 text-center bg-[#f5f5f7]">
                  <p className="text-xs font-semibold text-[#101010]">Aucun écran</p>
                  <p className="mt-1 text-[11px] text-[#6e6e73]">
                    Cliquez sur <span className="font-semibold text-[#101010]">Add screen</span> pour commencer.
                  </p>
                </div>
              )}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      <div className="border-t border-[#f0f0f0] bg-white p-3">
        <Button
          type="button"
          className="w-full rounded-full bg-[#0088ff] hover:bg-[#1c95ff] text-white font-semibold text-xs h-9 shadow-sm transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
          variant="default"
          onClick={() =>
            onAdd(
              newSlide(DEVICES[device].newSlideLayout),
            )
          }
          disabled={disabled}
        >
          <Plus className="h-4 w-4" /> Add screen
        </Button>
      </div>
    </div>
  );
}
