"use client";

import * as React from "react";
import { Sparkles, ArrowRight, Layers, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DEMO_PRESETS, type DemoPreset } from "@/lib/demos";
import type { ProjectState } from "@/lib/types";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectDemo: (demo: DemoPreset) => void;
};

export function DemosDialog({ open, onOpenChange, onSelectDemo }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <DialogTitle className="text-base font-bold">Modèles & Démos Universelles</DialogTitle>
              <DialogDescription className="text-xs">
                Chargez un gabarit complet prêt à l'emploi pour démarrer rapidement vos mockups.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {DEMO_PRESETS.map((demo) => {
            const slideCount = demo.state.slidesByDevice.android?.length || 0;
            return (
              <div
                key={demo.id}
                className="group flex flex-col justify-between rounded-xl border bg-card p-4 hover:border-indigo-500/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {demo.category}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border">
                      {demo.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-foreground mb-1 group-hover:text-indigo-500 transition-colors">
                    {demo.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {demo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Layers className="h-3.5 w-3.5" />
                    <span>{slideCount} slides + Bannière</span>
                  </div>

                  <Button
                    size="sm"
                    className="h-7 text-xs gap-1"
                    onClick={() => {
                      onSelectDemo(demo);
                      onOpenChange(false);
                    }}
                  >
                    <span>Charger</span>
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
