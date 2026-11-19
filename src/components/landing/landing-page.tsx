"use client";

import React, { useState } from "react";
import { MookoopLogo } from "@/components/brand/logo";
import { DEMO_PACKS, type DemoPreset, type DemoPresetId } from "@/lib/demos";
import { DemosShowcase } from "./demos-showcase";
import { useI18n } from "@/lib/i18n";
import {
  ArrowRight,
  Github,
  Check,
  ShieldCheck,
  Move,
  Sparkles,
  Cpu,
} from "lucide-react";

interface LandingPageProps {
  onOpenStudio: (presetId?: DemoPresetId) => void;
}

export function LandingPage({ onOpenStudio }: LandingPageProps) {
  const { t, locale, setLocale } = useI18n();
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);

  const specsList = t.specs.items;
  const activeSpec = specsList[activeSpecIndex] || specsList[0];

  const architectureIcons = [
    <Cpu key="cpu" className="w-5 h-5" />,
    <ShieldCheck key="shield" className="w-5 h-5" />,
    <Move key="move" className="w-5 h-5" />,
    <Check key="check" className="w-5 h-5" />,
  ];

  const architectureAccentClasses = [
    {
      bgIcon: "bg-[#0088ff]/10 text-[#0088ff]",
      tag: "text-[#0088ff]",
    },
    {
      bgIcon: "bg-[#34c759]/10 text-[#34c759]",
      tag: "text-[#34c759]",
    },
    {
      bgIcon: "bg-[#cb30e0]/10 text-[#cb30e0]",
      tag: "text-[#cb30e0]",
    },
    {
      bgIcon: "bg-[#ff383c]/10 text-[#ff383c]",
      tag: "text-[#ff383c]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#101010] font-system selection:bg-[#feab30]/20 selection:text-[#101010]">
      {/* 1. TOP STICKY NAVIGATION BAR (Épuré, Aéré, 56-64px) */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.05] transition-all">
        <div className="mx-auto max-w-[1200px] h-14 md:h-16 px-6 flex items-center justify-between">
          {/* Brand Mark (Official Vector Wordmark) */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="mookoop"
          >
            <MookoopLogo className="h-9 md:h-10.5 w-auto" />
          </button>

          {/* Navigation Links (3 concis, typographie sobre) */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#6e6e73]">
            <a href="#demos" className="hover:text-[#101010] transition-colors">
              {t.nav.models}
            </a>
            <a href="#specs" className="hover:text-[#101010] transition-colors">
              {t.nav.specs}
            </a>
            <a href="#architecture" className="hover:text-[#101010] transition-colors">
              {t.nav.architecture}
            </a>
          </nav>

          {/* Actions Droite : Switcher i18n discret + GitHub icône + CTA Studio élégant */}
          <div className="flex items-center gap-3">
            {/* Language Switcher [ FR | EN ] */}
            <div
              className="flex items-center p-0.5 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] text-[11px] font-semibold text-[#6e6e73]"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  locale === "fr"
                    ? "bg-white text-[#101010] shadow-sm font-bold"
                    : "hover:text-[#101010]"
                }`}
                aria-pressed={locale === "fr"}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  locale === "en"
                    ? "bg-white text-[#101010] shadow-sm font-bold"
                    : "hover:text-[#101010]"
                }`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>

            {/* Minimalist GitHub icon button */}
            <a
              href="https://github.com/Monde123/mookoop"
              target="_blank"
              rel="noreferrer"
              aria-label={t.nav.github}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#6e6e73] hover:text-[#101010] hover:bg-[#f5f5f7] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Studio Pill Button */}
            <button
              type="button"
              onClick={() => onOpenStudio()}
              className="bg-[#101010] hover:bg-[#262626] text-white text-[13px] font-semibold h-8 px-4 rounded-full shadow-sm transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>{t.nav.openStudio}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="px-6 pt-16 md:pt-20 pb-16 max-w-[1200px] mx-auto text-center">
        {/* Subtle Category Marker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f7] text-[13px] font-medium text-[#101010] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#0088ff]" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-[62px] font-bold text-[#101010] tracking-[-0.7px] leading-[1.08] max-w-[960px] mx-auto mb-6">
          {t.hero.title}
        </h1>

        {/* Lucid Subtitle */}
        <p className="text-[18px] sm:text-[20px] font-normal text-[#6e6e73] max-w-[760px] mx-auto leading-relaxed mb-10">
          {t.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            type="button"
            onClick={() => onOpenStudio()}
            className="bg-[#0088ff] hover:bg-[#1c95ff] text-white text-[15px] font-semibold px-7 py-3 rounded-full shadow-sm transition-all flex items-center gap-2 active:scale-[0.98] cursor-pointer"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#demos"
            className="bg-transparent hover:bg-[#f5f5f7] border border-[#d0d0d3] text-[#101010] text-[15px] font-medium px-7 py-3 rounded-full transition-all flex items-center gap-2"
          >
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>

        {/* 3. HERO COMPOSITE MOCKUP SHOWCASE */}
        <div id="showcase" className="relative mx-auto max-w-[1100px] pt-4">
          <div
            className="rounded-[24px] bg-[#f5f5f7] p-6 sm:p-10 border border-[#f0f0f0]"
            style={{ boxShadow: "rgba(16, 16, 16, 0.08) 0px 20px 60px 0px" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
              {/* iPhone 16 Pro Max Mockup with Natural Floating Levitation */}
              <div className="w-[280px] sm:w-[320px] rounded-[44px] bg-[#0A0A0C] p-3 shadow-2xl border-4 border-[#27272A] relative transform animate-float-subtle hover:scale-[1.02] transition-transform">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] ml-auto mr-3" />
                </div>
                <div className="rounded-[34px] overflow-hidden bg-black aspect-[9/19.5] relative">
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.09]" />
                  <img
                    src="/screenshots/demos/novapay.png"
                    alt="NovaPay Fintech Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-3 text-[11px] font-medium text-[#a1a1aa]">
                  {t.hero.deviceLabel}
                </div>
              </div>

              {/* Google Play Feature Graphic Banner with Gentle Float */}
              <div className="w-full lg:w-[600px] flex flex-col gap-4 animate-float-opposite">
                <div className="rounded-[20px] overflow-hidden border border-[#e2e8f0] bg-gradient-to-br from-[#0F172A] to-[#020617] p-6 text-white shadow-xl relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-bold tracking-wider text-[#A78BFA] bg-[#1E1B4B] px-3 py-1 rounded-full border border-[#6366F1]/40">
                      {t.hero.featureGraphicTag}
                    </span>
                    <span className="text-xs text-[#94A3B8]">{t.hero.featureGraphicRatio}</span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold tracking-tight mb-2">
                        {t.hero.featureGraphicTitle}
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                        {t.hero.featureGraphicDesc}
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#34D399] bg-[#065F46]/40 px-3 py-1.5 rounded-full border border-[#059669]/30">
                        <Check className="w-3.5 h-3.5" />
                        <span>{t.hero.featureGraphicCheck}</span>
                      </div>
                    </div>

                    <div className="w-[140px] sm:w-[170px] rounded-[24px] bg-[#111] p-1.5 shadow-2xl border-2 border-[#475569] transform rotate-[-8deg] hover:rotate-0 transition-transform">
                      <div className="rounded-[18px] overflow-hidden aspect-[9/19.5]">
                        <img
                          src="/screenshots/demos/pulseai.png"
                          alt="PulseAI App Screen"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Mockup: LuxeShop iPad Pro preview */}
                <div className="rounded-[20px] bg-white p-5 border border-[#e2e8f0] shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-[14px] bg-[#FAF9F6] border border-[#E7E5E4] p-1 overflow-hidden shrink-0">
                      <img
                        src="/screenshots/demos/luxeshop.png"
                        alt="LuxeShop UI"
                        className="w-full h-full object-cover rounded-[10px]"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#101010]">
                        {t.hero.cardIpadTitle}
                      </h4>
                      <p className="text-xs text-[#6e6e73]">
                        {t.hero.cardIpadDesc}
                      </p>
                    </div>
                  </div>
                  <span className="text-[12px] font-semibold text-[#0088ff] bg-[#0088ff]/10 px-3 py-1 rounded-full shrink-0">
                    2064 × 2752 px
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION DES SPÉCIFICATIONS & MATRICE DES STORES */}
      <section id="specs" className="bg-[#f5f5f7] py-24 px-6 transition-all">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-[-0.7px] leading-tight mb-4"
              style={{
                background:
                  "linear-gradient(0deg, rgb(240, 100, 19) -29.375%, rgb(254, 171, 48) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.specs.title}
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed">
              {t.specs.subtitle}
            </p>
          </div>

          {/* Interactive Store Spec Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {specsList.map((spec, idx) => (
              <button
                key={spec.target}
                type="button"
                onClick={() => setActiveSpecIndex(idx)}
                className={`text-[14px] font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  activeSpecIndex === idx
                    ? "bg-[#101010] text-white shadow-sm"
                    : "bg-white text-[#6e6e73] hover:text-[#101010] hover:bg-white/80 border border-[#d0d0d3]/50"
                }`}
              >
                {spec.target}
              </button>
            ))}
          </div>

          {/* Active Spec Inspector Card */}
          <div
            className="bg-white rounded-[20px] p-8 border border-[#e2e8f0] max-w-[960px] mx-auto"
            style={{ boxShadow: "rgba(16, 16, 16, 0.08) 0px 20px 40px 0px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Device Preview */}
              <div className="flex flex-col items-center justify-center bg-[#f5f5f7] rounded-[16px] p-6 border border-[#e2e8f0]">
                <div className="w-[180px] sm:w-[220px] rounded-[24px] bg-[#111] p-2 shadow-xl border border-[#333]">
                  <div className="rounded-[18px] overflow-hidden aspect-[9/19.5] bg-black">
                    <img
                      src={activeSpec.mockupImage}
                      alt={activeSpec.target}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#6e6e73]">
                  {t.specs.renderedIn} {activeSpec.target}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-bold text-[#0088ff] bg-[#0088ff]/10 px-2.5 py-0.5 rounded-full">
                    {activeSpec.store}
                  </span>
                  <span className="text-xs text-[#ababb0]">{t.specs.verifiedBadge}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#101010] tracking-tight">
                  {activeSpec.target}
                </h3>

                <div className="space-y-2.5 pt-2">
                  <div className="flex justify-between py-2 border-b border-[#f0f0f0] text-sm">
                    <span className="text-[#6e6e73]">{t.specs.fieldDimensions}</span>
                    <span className="font-mono font-bold text-[#101010]">{activeSpec.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0f0f0] text-sm">
                    <span className="text-[#6e6e73]">{t.specs.fieldAspect}</span>
                    <span className="font-mono font-bold text-[#101010]">{activeSpec.aspect}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0f0f0] text-sm">
                    <span className="text-[#6e6e73]">{t.specs.fieldColorDepth}</span>
                    <span className="font-mono font-bold text-[#101010]">{activeSpec.colorDepth}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0f0f0] text-sm">
                    <span className="text-[#6e6e73]">{t.specs.fieldAlpha}</span>
                    <span className="font-mono font-semibold text-[#34c759]">{activeSpec.alpha}</span>
                  </div>
                </div>

                <p className="text-xs text-[#6e6e73] leading-relaxed pt-2">
                  {activeSpec.notes}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenStudio()}
                    className="bg-[#0088ff] hover:bg-[#1c95ff] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.specs.ctaDesign}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VITRINE DES 6 DÉMOS RÉELLES (COMPOSITE APP STORE MOCKUPS & ANIMATIONS) */}
      <DemosShowcase onOpenStudio={onOpenStudio} />

      {/* 6. ARCHITECTURE TECHNIQUE & VÉRITÉ ZÉRO-CLOUD */}
      <section id="architecture" className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-[#101010] tracking-[-0.7px] mb-4">
              {t.architecture.title}
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed">
              {t.architecture.subtitle}
            </p>
          </div>

          {/* 4 Category Color Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.architecture.cards.map((card, idx) => {
              const accent = architectureAccentClasses[idx] || architectureAccentClasses[0];
              const icon = architectureIcons[idx] || architectureIcons[0];

              return (
                <div
                  key={card.tag}
                  className="bg-white rounded-[20px] p-8 border border-[#e2e8f0]"
                  style={{ boxShadow: "rgba(16, 16, 16, 0.06) 0px 10px 30px 0px" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${accent.bgIcon}`}
                    >
                      {icon}
                    </div>
                    <div>
                      <span className={`text-[11px] font-bold tracking-wider uppercase ${accent.tag}`}>
                        {card.tag}
                      </span>
                      <h3 className="font-bold text-lg text-[#101010]">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101010] tracking-[-0.7px] mb-6">
          {t.cta.title}
        </h2>
        <p className="text-[18px] text-[#6e6e73] max-w-[640px] mx-auto leading-relaxed mb-10">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onOpenStudio()}
            className="bg-[#0088ff] hover:bg-[#1c95ff] text-white text-[16px] font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all flex items-center gap-2 active:scale-[0.98] cursor-pointer"
          >
            <span>{t.cta.launchStudio}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://github.com/Monde123/mookoop"
            target="_blank"
            rel="noreferrer"
            className="border border-[#d0d0d3] hover:bg-[#f5f5f7] text-[#101010] text-[16px] font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>{t.cta.githubSource}</span>
          </a>
        </div>
      </section>

      {/* 8. FOOTER ÉPURÉ */}
      <footer className="border-t border-[#f0f0f0] py-12 px-6 bg-[#ffffff]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6e73]">
          <div className="flex items-center gap-2">
            <MookoopLogo className="h-6.5 md:h-7 w-auto" />
            <span>— {t.footer.tagline}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Monde123/mookoop"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0088ff] transition-colors"
            >
              {t.footer.repo}
            </a>
            <a
              href="https://github.com/Monde123/mookoop/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0088ff] transition-colors"
            >
              {t.footer.license}
            </a>
            <span>{t.footer.zeroCloud}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
