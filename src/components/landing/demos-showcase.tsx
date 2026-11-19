"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, ArrowRight, Layers } from "lucide-react";
import { DEMO_PACKS, type DemoPreset } from "@/lib/demos";
import { DemoMockupCard } from "./demo-mockup-card";
import { useI18n } from "@/lib/i18n";

interface DemosShowcaseProps {
  onOpenStudio: (presetId?: string) => void;
}

type CategoryKey = "all" | "fintech" | "ai" | "ecommerce" | "food" | "fitness" | "social";

export function DemosShowcase({ onOpenStudio }: DemosShowcaseProps) {
  const { t, locale } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");

  const categories: { key: CategoryKey; label: string; count: number }[] = useMemo(() => {
    const isFr = locale === "fr";
    return [
      { key: "all", label: isFr ? "Tous les modèles" : "All Models", count: DEMO_PACKS.length },
      { key: "fintech", label: isFr ? "Fintech & Sécurité" : "Fintech & Security", count: 1 },
      { key: "ai", label: isFr ? "IA & Productivité" : "AI & Productivity", count: 1 },
      { key: "ecommerce", label: isFr ? "E-Commerce & Luxe" : "E-Commerce & Luxury", count: 1 },
      { key: "food", label: isFr ? "Food & Livraison" : "Food & Delivery", count: 1 },
      { key: "fitness", label: isFr ? "Santé & Fitness" : "Health & Fitness", count: 1 },
      { key: "social", label: isFr ? "Réseaux Sociaux" : "Social & Creators", count: 1 },
    ];
  }, [locale]);

  const filteredDemos = useMemo(() => {
    if (selectedCategory === "all") return DEMO_PACKS;
    if (selectedCategory === "fintech") return DEMO_PACKS.filter((d) => d.id === "novapay");
    if (selectedCategory === "ai") return DEMO_PACKS.filter((d) => d.id === "pulseai");
    if (selectedCategory === "ecommerce") return DEMO_PACKS.filter((d) => d.id === "luxeshop");
    if (selectedCategory === "food") return DEMO_PACKS.filter((d) => d.id === "nomnom");
    if (selectedCategory === "fitness") return DEMO_PACKS.filter((d) => d.id === "aurafit");
    if (selectedCategory === "social") return DEMO_PACKS.filter((d) => d.id === "sphere");
    return DEMO_PACKS;
  }, [selectedCategory]);

  return (
    <section id="demos" className="py-24 px-6 max-w-[1240px] mx-auto transition-all">
      {/* 1. SECTION HEADER */}
      <div className="text-center max-w-[820px] mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] text-[12px] font-semibold text-[#6e6e73] mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#f06413]" />
          <span>{t.demos?.badge || "Galerie Haute-Fidélité"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-[#101010] tracking-[-0.7px] leading-tight mb-4">
          {t.demos?.title || "Véritables mockups prêts pour l'App Store & Google Play"}
        </h2>
        <p className="text-[17px] text-[#6e6e73] leading-relaxed">
          {t.demos?.subtitle ||
            "Explorez nos compositions préconçues. Chaque modèle intègre des fonds thématiques, des accroches typographiques et des cadres d'appareils officiels."}
        </p>
      </div>

      {/* 2. CATEGORY PILL FILTER BAR */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                isActive
                  ? "bg-[#101010] text-white shadow-sm"
                  : "bg-[#f5f5f7] hover:bg-[#eaeaea] text-[#6e6e73] hover:text-[#101010] border border-transparent"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-black/[0.06] text-[#8e8e93]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. DYNAMIC BENTO GRID OF TRUE APP STORE MOCKUPS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
        {filteredDemos.map((demo, idx) => (
          <DemoMockupCard
            key={demo.id}
            demo={demo}
            onOpenStudio={onOpenStudio}
            index={idx}
          />
        ))}
      </div>

      {/* 4. BOTTOM FAST-FORWARD CTA BANNER */}
      <div className="rounded-[24px] bg-gradient-to-r from-[#0A0A0C] via-[#111827] to-[#0A0A0C] p-8 sm:p-10 border border-white/10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] bg-[#1E3A8A]/50 px-3 py-1 rounded-full border border-[#3B82F6]/30 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Studio Libre & Multi-Formats</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            Vous souhaitez créer votre propre composition sur mesure ?
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-[620px]">
            Ouvrez un canvas vierge ou personnalisez l'un des 6 modèles. Tous vos visuels sont exportables en PNG 24 bits certifiés sans canal alpha.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenStudio()}
          className="bg-[#0088ff] hover:bg-[#1c95ff] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-lg transition-all flex items-center gap-2 shrink-0 active:scale-95 cursor-pointer"
        >
          <span>Créer dans le Studio</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
