"use client";
import * as React from "react";
import { AlertTriangle, Archive, Check, Cloud, Download, FlaskConical, Home, Redo2, RotateCcw, Sparkles, Undo2, UnfoldHorizontal, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MookoopLogo } from "@/components/brand/logo";
import { DemosDialog } from "./demos-dialog";
import type { DemoPreset } from "@/lib/demos";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SCREENSHOT_FONTS, THEMES, fontAvailable, screenshotFontFamily, themeById } from "@/lib/constants";
import {
  DEVICES,
  PLATFORMS,
  deviceForOrientation,
  staysStraight,
  orientationOf,
  platformDevices as devicesOf,
  platformOf,
  supportsLandscape,
} from "@/lib/devices";
import type { Device, ImportedFont, Orientation, Platform, Scene, ScreenshotFontId, Theme } from "@/lib/types";
import { FontImporter, type FontImporterHandle } from "./font-importer";
import { ScenePlayground } from "./scene-playground";

const IMPORT_FONT_ACTION = "__import-font__";

type Props = {
  appName: string;
  setAppName: (v: string) => void;
  themeId: string;
  setThemeId: (v: string) => void;
  connectedCanvas: boolean;
  setConnectedCanvas: (v: boolean) => void;
  scene: Scene | undefined;
  setScene: (scene: Scene | undefined) => void;
  onOpenStyleLab: () => void;
  fontId: ScreenshotFontId;
  setFontId: (v: ScreenshotFontId) => void;
  importedFont?: ImportedFont;
  setImportedFont: (font: ImportedFont) => void;
  locale: string;
  setLocale: (v: string) => void;
  locales: string[];
  device: Device;
  setDevice: (v: Device) => void;
  orientation: Orientation;
  setOrientation: (v: Orientation) => void;
  onExport: () => void;
  onDownloadSingle?: () => void;
  onResetAll: () => void;
  onResetDevice: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  exporting: string | null;
  savedAt: number | null;
  saveError: string | null;
  onRetrySave?: () => void;
  onLoadDemo: (demo: DemoPreset) => void;
  busy: boolean;
};

export function Toolbar(props: Props) {
  const platform = platformOf(props.device);
  const hasLandscape = supportsLandscape(props.device);
  const [resetOpen, setResetOpen] = React.useState(false);
  const [demosOpen, setDemosOpen] = React.useState(false);

  const lastByPlatform = React.useRef<Record<Platform, Device>>(
    Object.fromEntries(PLATFORMS.map(({ id }) => [id, id === platform ? props.device : devicesOf(id)[0]])) as Record<Platform, Device>,
  );
  React.useEffect(() => {
    lastByPlatform.current[platform] = props.device;
  }, [platform, props.device]);

  const showLocale = props.locales.length > 1;

  // Paired orientations share one picker entry; the Orientation menu switches.
  const pickerDevice = deviceForOrientation(props.device, "portrait");
  const platformDevices = devicesOf(platform).filter((d) => deviceForOrientation(d, "portrait") === d);
  const orientation = orientationOf(props.device, props.orientation);
  const activeTheme = themeById(props.themeId);

  const fontImporter = React.useRef<FontImporterHandle>(null);
  const [importingFont, setImportingFont] = React.useState(false);
  const fontIds = (Object.keys(SCREENSHOT_FONTS) as ScreenshotFontId[]).filter((id) => fontAvailable(id, props.importedFont));
  const fontLabel = (id: ScreenshotFontId) =>
    id === "self-hosted" && props.importedFont?.name ? props.importedFont.name : SCREENSHOT_FONTS[id].name;

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-[#f0f0f0] bg-[#ffffff] px-4 py-2.5 shadow-[0_1px_3px_rgba(16,16,16,0.03)] z-30">
      <div className="flex items-center gap-2 mr-1 shrink-0">
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          title="Retour à la page d'accueil"
        >
          <div
            className="w-7 h-7 rounded-[7px] flex items-center justify-center shadow-sm shrink-0"
            style={{
              background:
                "linear-gradient(0deg, rgb(240, 100, 19) -29.375%, rgb(254, 171, 48) 100%)",
            }}
          >
            <div className="w-3 h-3 bg-white rounded-[2px]" />
          </div>
          <span className="text-xs font-bold text-[#101010] hidden sm:inline tracking-tight">mookoop</span>
        </a>
      </div>

      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6e6e73] hover:text-[#101010] px-2.5 py-1 rounded-full hover:bg-[#f5f5f7] transition-colors mr-1"
        title="Retourner à la page d'accueil"
      >
        <Home className="h-3.5 w-3.5" />
        <span className="hidden md:inline">Accueil</span>
      </a>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 gap-1.5 px-3 rounded-full text-xs font-semibold text-[#f06413] bg-[#f06413]/10 border-[#f06413]/25 hover:bg-[#f06413]/20 hover:text-[#ea580c] transition-all"
        onClick={() => setDemosOpen(true)}
        disabled={props.busy}
        title="Explorer les modèles et démos universelles"
      >
        <Sparkles className="h-3.5 w-3.5 text-[#f06413]" />
        <span>Modèles</span>
      </Button>

      <span aria-hidden className="mx-1 h-5 w-px bg-border" />

      <Input
        value={props.appName}
        onChange={(e) => props.setAppName(e.target.value)}
        className="h-8 w-36 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] px-3.5 text-xs font-semibold text-[#101010] focus-visible:bg-white focus-visible:border-[#0088ff] focus-visible:ring-1 focus-visible:ring-[#0088ff]"
        placeholder="App name"
        aria-label="App name"
        title="App name (click to edit)"
        disabled={props.busy}
      />

      <span aria-hidden className="mx-1 h-5 w-px bg-border" />

      <Button
        type="button"
        variant={props.connectedCanvas ? "secondary" : "outline"}
        size="sm"
        className="h-8 gap-1.5 px-2 text-xs"
        onClick={() => props.setConnectedCanvas(!props.connectedCanvas)}
        aria-pressed={props.connectedCanvas}
        title={
          props.connectedCanvas
            ? "Connected canvas enabled"
            : "Isolated screens; turn on to let elements cross screen edges"
        }
        disabled={props.busy}
      >
        <UnfoldHorizontal className="h-3.5 w-3.5" />
        {props.connectedCanvas ? "Connected" : "Isolated"}
      </Button>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 gap-1.5 px-2 text-xs"
        onClick={props.onOpenStyleLab}
        disabled={props.busy}
        title="Style Lab: try complete looks for this deck side by side"
      >
        <FlaskConical className="h-3.5 w-3.5" />
        Style Lab
      </Button>
      <ScenePlayground scene={props.scene} theme={activeTheme} disabled={props.busy} straightDevices={staysStraight(props.device)} onChange={props.setScene} />

      <Select value={activeTheme.id} onValueChange={props.setThemeId} disabled={props.busy}>
        <SelectTrigger className="h-8 w-40 text-xs" title="Theme" aria-label="Theme">
          <SelectValue>
            <ThemeOption theme={activeTheme} />
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Object.values(THEMES).map((theme) => (
            <SelectItem key={theme.id} value={theme.id}>
              <ThemeOption theme={theme} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={props.fontId}
        onValueChange={(fontId) => {
          if (fontId === IMPORT_FONT_ACTION) fontImporter.current?.open();
          else props.setFontId(fontId as ScreenshotFontId);
        }}
        disabled={props.busy || importingFont}
      >
        <SelectTrigger className="h-8 w-36 text-xs" title="Screenshot font" aria-label="Screenshot font">
          <SelectValue placeholder="Font">
            <span className="truncate">{importingFont ? "Importing font…" : fontLabel(props.fontId)}</span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {fontIds.map((id) => (
            <SelectItem key={id} value={id}>
              <span style={{ fontFamily: screenshotFontFamily(id) }}>{fontLabel(id)}</span>
            </SelectItem>
          ))}
          <SelectSeparator />
          <SelectItem value={IMPORT_FONT_ACTION}>
            <span className="flex items-center gap-1.5">
              <Upload className="h-3.5 w-3.5" />
              {props.importedFont ? "Replace imported font…" : "Import font…"}
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
      <FontImporter ref={fontImporter} onImported={props.setImportedFont} onUploadingChange={setImportingFont} />

      <span aria-hidden className="mx-1 h-5 w-px bg-border" />

      <Tabs
        value={platform}
        onValueChange={(p) => {
          if (props.busy) return;
          const next = lastByPlatform.current[p as Platform];
          props.setDevice(next);
        }}
      >
        <TabsList className="h-8 p-1 bg-[#f5f5f7] rounded-full border border-[#e5e5ea]/60">
          {PLATFORMS.map(({ id, label }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="h-6 px-3 text-xs rounded-full data-[state=active]:bg-white data-[state=active]:text-[#101010] data-[state=active]:shadow-sm font-medium transition-all"
              disabled={props.busy}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {platformDevices.length > 1 && (
        <Select
          value={pickerDevice}
          onValueChange={(v) => {
            // Moving between Duo displays keeps the orientation you're working in.
            const keep = DEVICES[props.device].orientations ? orientation : "portrait";
            props.setDevice(deviceForOrientation(v as Device, keep));
          }}
          disabled={props.busy}
        >
          <SelectTrigger className="h-8 w-36 text-xs" aria-label="Device" title="Device">
            <SelectValue placeholder="Device">{DEVICES[pickerDevice].label}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {platformDevices.map((d) => (
              <SelectItem key={d} value={d}>{DEVICES[d].label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {hasLandscape && (
        <Select
          value={orientation}
          onValueChange={(v) => props.setOrientation(v as Orientation)}
          disabled={props.busy}
        >
          <SelectTrigger className="h-8 w-28 text-xs" aria-label="Orientation">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="portrait">Portrait</SelectItem>
            <SelectItem value="landscape">Landscape</SelectItem>
          </SelectContent>
        </Select>
      )}

      {showLocale && (
        <Select value={props.locale} onValueChange={props.setLocale} disabled={props.busy}>
          <SelectTrigger className="h-8 w-20 text-xs" aria-label="Locale">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {props.locales.map((l) => (
              <SelectItem key={l} value={l}>
                {l.toUpperCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      <div className="ml-auto flex shrink-0 items-center gap-2.5">
        <SaveStatus savedAt={props.savedAt} saveError={props.saveError} />
        {props.saveError && props.onRetrySave && (
          <Button variant="ghost" size="sm" disabled={props.busy} onClick={props.onRetrySave}>Retry save</Button>
        )}
        
        <div className="flex items-center bg-[#f5f5f7] rounded-full p-0.5 border border-[#e5e5ea]">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-7 w-7 rounded-full text-[#6e6e73] hover:text-[#101010] hover:bg-white transition-all"
            onClick={props.onUndo}
            title="Undo (⌘Z)"
            aria-label="Undo"
            disabled={props.busy || !props.canUndo}
          >
            <Undo2 className="h-3.5 w-3.5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-7 w-7 rounded-full text-[#6e6e73] hover:text-[#101010] hover:bg-white transition-all"
            onClick={props.onRedo}
            title="Redo (⌘⇧Z)"
            aria-label="Redo"
            disabled={props.busy || !props.canRedo}
          >
            <Redo2 className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 rounded-full text-[#6e6e73] hover:text-[#101010] hover:bg-white transition-all"
            onClick={() => setResetOpen(true)}
            title="Reset screens to defaults"
            aria-label="Reset"
            disabled={props.busy}
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
        </div>

        <Button
          variant="outline"
          onClick={props.onDownloadSingle}
          disabled={!!props.exporting || importingFont}
          size="sm"
          className="h-8 gap-1.5 px-3.5 rounded-full text-xs font-medium border-[#d0d0d3] hover:bg-[#f5f5f7] text-[#101010] transition-colors"
          title="Télécharger immédiatement cet écran en PNG haute résolution"
        >
          <Download className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Télécharger (PNG)</span>
        </Button>

        <Button
          onClick={props.onExport}
          disabled={!!props.exporting || importingFont}
          size="sm"
          className="h-8 gap-1.5 px-4 rounded-full text-xs font-semibold bg-[#0088ff] hover:bg-[#1c95ff] text-white shadow-sm transition-all active:scale-[0.98]"
          title="Exporter tous les écrans et toutes les résolutions dans une archive ZIP"
        >
          <Archive className="h-3.5 w-3.5" />
          {props.exporting ? `Exportation ${props.exporting}` : "Tout exporter (ZIP)"}
        </Button>
      </div>

      <Dialog open={resetOpen} onOpenChange={setResetOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Reset to defaults?</DialogTitle>
            <DialogDescription>
              Choose whether to reset just <span className="font-medium">{DEVICES[props.device].label}</span> or every device deck. Your canvas edits, uploaded screenshots, and copy will be lost.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => setResetOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setResetOpen(false);
                props.onResetDevice();
              }}
            >
              Reset {DEVICES[props.device].label} only
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => {
                setResetOpen(false);
                props.onResetAll();
              }}
            >
              Reset all devices
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <DemosDialog
        open={demosOpen}
        onOpenChange={setDemosOpen}
        onSelectDemo={props.onLoadDemo}
      />
    </div>
  );
}

function ThemeOption({ theme }: { theme: Theme }) {
  return (
    <span className="flex min-w-0 items-center gap-2">
      <span
        aria-hidden
        className="flex h-4 w-7 shrink-0 overflow-hidden rounded-sm ring-1 ring-black/10"
      >
        <span className="flex-1" style={{ background: theme.bg }} />
        <span className="flex-1" style={{ background: theme.bgAlt }} />
        <span className="w-1.5" style={{ background: theme.accent }} />
      </span>
      <span className="truncate">{theme.name}</span>
    </span>
  );
}

function SaveStatus({ savedAt, saveError }: { savedAt: number | null; saveError: string | null }) {
  const [, setTick] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 60_000);
    return () => clearInterval(t);
  }, []);

  if (saveError) {
    return (
      <span
        className="flex items-center gap-1 text-xs text-destructive"
        title={saveError}
      >
        <AlertTriangle className="h-3.5 w-3.5" /> save failed
      </span>
    );
  }

  if (!savedAt) {
    return (
      <span className="flex items-center gap-1 text-xs text-muted-foreground" title="Not saved yet">
        <Cloud className="h-3.5 w-3.5" /> <span className="hidden 2xl:inline">not saved yet</span>
      </span>
    );
  }
  const seconds = Math.max(0, Math.round((Date.now() - savedAt) / 1000));
  const label =
    seconds < 5
      ? "saved"
      : seconds < 60
        ? `saved ${seconds}s ago`
        : seconds < 3600
          ? `saved ${Math.round(seconds / 60)}m ago`
          : `saved ${Math.round(seconds / 3600)}h ago`;
  return (
    <span className="flex items-center gap-1 text-xs text-muted-foreground" title={`Project ${label}`}>
      <Check className="h-3.5 w-3.5 text-green-500" /> <span className="hidden 2xl:inline">{label}</span>
    </span>
  );
}
