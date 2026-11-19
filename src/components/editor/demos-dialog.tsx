"use client";

import * as React from "react";
import { ArrowRight, Layers } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DEMO_PRESETS, type DemoPreset } from "@/lib/demos";
import { useI18n } from "@/lib/i18n";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectDemo: (demo: DemoPreset) => void;
};

export function DemosDialog({ open, onOpenChange, onSelectDemo }: Props) {
  const { t } = useI18n();
  const dd = t.studio.demosDialog;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-7 rounded-2xl bg-white border border-[#f0f0f0]">
        <DialogHeader className="space-y-1.5 pb-2">
          <DialogTitle className="text-lg font-semibold tracking-tight text-[#101010]">
            {dd.title}
          </DialogTitle>
          <DialogDescription className="text-xs text-[#6e6e73] leading-relaxed">
            {dd.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
          {DEMO_PRESETS.map((demo) => {
            const slideCount =
              demo.state.slidesByDevice.iphone?.length ||
              demo.state.slidesByDevice.android?.length ||
              0;
            const localized = t.demos.presets[demo.id];
            const name = localized?.name || demo.name;
            const description = localized?.description || demo.description;
            const badge = localized?.badge || demo.badge;
            const category = localized?.category || demo.category;

            return (
              <div
                key={demo.id}
                className="group flex flex-col justify-between rounded-xl border border-[#e5e5ea] bg-white p-3.5 hover:border-[#0088ff]/40 hover:bg-[#fbfbfd] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider">
                      {category}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#f5f5f7] text-[#101010] border border-[#e5e5ea]">
                      {badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    {demo.screenshot && (
                      <div className="w-12 h-20 rounded-lg overflow-hidden bg-[#0A0A0C] shrink-0 border border-[#27272A] shadow-sm">
                        <img
                          src={demo.screenshot}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-[#101010] group-hover:text-[#0088ff] transition-colors truncate">
                        {name}
                      </h3>
                      <p className="text-xs text-[#6e6e73] leading-relaxed line-clamp-3 mt-0.5">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-[#f0f0f0]">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#6e6e73]">
                    <Layers className="h-3 w-3 text-[#a1a1aa]" />
                    <span>{slideCount} {dd.screensCount}</span>
                  </div>

                  <Button
                    size="sm"
                    className="h-7 text-xs px-3 rounded-full bg-[#0088ff] hover:bg-[#1c95ff] text-white font-medium shadow-none transition-all flex items-center gap-1 active:scale-[0.98]"
                    onClick={() => {
                      onSelectDemo(demo);
                      onOpenChange(false);
                    }}
                  >
                    <span>{dd.applyButton}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
