"use client";

import React, { useState } from "react";
import { DEMO_PACKS, type DemoPreset, type DemoPresetId } from "@/lib/demos";
import {
  Smartphone,
  Layers,
  ArrowRight,
  Github,
  Check,
  ShieldCheck,
  Laptop,
  Move,
  RotateCw,
  Sparkles,
  ExternalLink,
  Code2,
  FileJson,
  Cpu,
  Monitor,
  Maximize2,
} from "lucide-react";

interface LandingPageProps {
  onOpenStudio: (presetId?: DemoPresetId) => void;
}

// Exact Store Specifications & Ratios
const STORE_SPECS = [
  {
    target: "iPhone 16 Pro Max / 15 Plus",
    store: "Apple App Store",
    category: "ios",
    dimensions: "1320 × 2868 px",
    aspect: "9:19.5",
    colorDepth: "24-bit RGB",
    alpha: "0 (Canal alpha interdit)",
    mockupImage: "/screenshots/demos/novapay.png",
    notes: "Format obligatoire 6.9\" & 6.5\" pour toute soumission iOS sur App Store Connect.",
  },
  {
    target: "Bannière Feature Graphic",
    store: "Google Play Store",
    category: "android",
    dimensions: "1024 × 500 px",
    aspect: "2.048:1",
    colorDepth: "24-bit RGB",
    alpha: "0 (Aucune transparence)",
    mockupImage: "/screenshots/demos/pulseai.png",
    notes: "Bannière promotionnelle requise en haut de la fiche Play Store. Supporte l'inclinaison 3D.",
  },
  {
    target: "iPad Pro 13\" & 12.9\"",
    store: "Apple App Store",
    category: "ios",
    dimensions: "2064 × 2752 px",
    aspect: "3:4",
    colorDepth: "24-bit RGB",
    alpha: "0 (Canal alpha interdit)",
    mockupImage: "/screenshots/demos/luxeshop.png",
    notes: "Résolution native plein écran pour iPadOS avec cadre fin Liquid Retina XDR.",
  },
  {
    target: "Android Phone Universel",
    store: "Google Play Store",
    category: "android",
    dimensions: "1080 × 1920 px",
    aspect: "9:16",
    colorDepth: "24-bit RGB",
    alpha: "0 (Aucune transparence)",
    mockupImage: "/screenshots/demos/nomnom.png",
    notes: "Format standard FHD vertical pour les téléphones Android modernes.",
  },
  {
    target: "Apple Watch Ultra 3 & Series 10",
    store: "Apple App Store",
    category: "ios",
    dimensions: "410 × 502 px",
    aspect: "1:1.22",
    colorDepth: "24-bit RGB",
    alpha: "0 (Canal alpha interdit)",
    mockupImage: "/screenshots/demos/aurafit.png",
    notes: "Cadran coussin caractéristique avec couronne numérique et bouton latéral modélisés.",
  },
  {
    target: "Mac Desktop",
    store: "Mac App Store",
    category: "macos",
    dimensions: "2880 × 1800 px",
    aspect: "16:10",
    colorDepth: "24-bit RGB",
    alpha: "0 (Canal alpha interdit)",
    mockupImage: "/screenshots/demos/sphere.png",
    notes: "Affichage Retina 16:10 pour les applications macOS sur le Mac App Store.",
  },
];

export function LandingPage({ onOpenStudio }: LandingPageProps) {
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);
  const activeSpec = STORE_SPECS[activeSpecIndex];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#101010] font-system selection:bg-[#feab30]/20 selection:text-[#101010]">
      {/* 1. TOP STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#ffffff]/90 backdrop-blur-md border-b border-[#f0f0f0] transition-all">
        <div className="mx-auto max-w-[1200px] h-[72px] px-6 flex items-center justify-between">
          {/* Brand Mark (Warm Amber Flame Gradient Logo) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity text-left cursor-pointer"
            >
              <div
                className="w-8 h-8 rounded-[8px] flex items-center justify-center shadow-sm"
                style={{
                  background:
                    "linear-gradient(0deg, rgb(240, 100, 19) -29.375%, rgb(254, 171, 48) 100%)",
                }}
              >
                <div className="w-3.5 h-3.5 bg-white rounded-[2px]" />
              </div>
              <span className="font-semibold text-[19px] tracking-tight text-[#000000]">
                mookoop
              </span>
            </button>
            <span className="text-[12px] font-medium text-[#6e6e73] bg-[#f5f5f7] px-2.5 py-0.5 rounded-full">
              Open Source
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-normal text-[#000000]">
            <a href="#showcase" className="hover:text-[#0088ff] transition-colors">
              Mockups Réels
            </a>
            <a href="#specs" className="hover:text-[#0088ff] transition-colors">
              Normes Stores
            </a>
            <a href="#demos" className="hover:text-[#0088ff] transition-colors">
              6 Modèles Prêts
            </a>
            <a href="#architecture" className="hover:text-[#0088ff] transition-colors">
              Architecture Zéro-Cloud
            </a>
            <a
              href="https://github.com/Monde123/mookoop"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0088ff] transition-colors flex items-center gap-1.5 text-[#6e6e73]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Primary CTA (100px Pill Radius, Signal Blue #0088ff) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenStudio()}
              className="bg-[#0088ff] hover:bg-[#1c95ff] text-white text-[15px] font-semibold px-5 py-2 rounded-full shadow-sm transition-all flex items-center gap-2 active:scale-[0.98] cursor-pointer"
            >
              <span>Ouvrir le Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (White Background, Pure Contrast, Lucide Copy) */}
      <section className="px-6 pt-20 pb-16 max-w-[1200px] mx-auto text-center">
        {/* Subtle Category Marker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f7] text-[13px] font-medium text-[#101010] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#0088ff]" />
          <span>Générateur certifié aux spécifications App Store & Google Play</span>
        </div>

        {/* Display Headline (system-ui 54-64px, weight 700, tight tracking) */}
        <h1 className="text-4xl sm:text-5xl md:text-[62px] font-bold text-[#101010] tracking-[-0.7px] leading-[1.08] max-w-[960px] mx-auto mb-6">
          Générez vos captures officielles App Store & Google Play.
        </h1>

        {/* Lucid Subtitle (No AI Fluff, 18px Smoke #6e6e73) */}
        <p className="text-[18px] sm:text-[20px] font-normal text-[#6e6e73] max-w-[760px] mx-auto leading-relaxed mb-10">
          Gabarits certifiés aux normes des stores, positionnement libre d'écrans et export PNG 24-bit sans canal alpha. Tout s'exécute localement dans votre navigateur, sans abonnement et sans aucun transfert de données.
        </p>

        {/* Action Buttons (100px pill radius) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            type="button"
            onClick={() => onOpenStudio()}
            className="bg-[#0088ff] hover:bg-[#1c95ff] text-white text-[16px] font-semibold px-8 py-3 rounded-full shadow-sm transition-all flex items-center gap-2 active:scale-[0.98] cursor-pointer"
          >
            <span>Démarrer dans le Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#demos"
            className="bg-transparent hover:bg-[#f5f5f7] border border-[#d0d0d3] text-[#101010] text-[16px] font-medium px-8 py-3 rounded-full transition-all flex items-center gap-2"
          >
            <span>Explorer les 6 démos réelles</span>
          </a>
        </div>

        {/* 3. HERO COMPOSITE MOCKUP SHOWCASE (Vraies applications intégrées) */}
        <div id="showcase" className="relative mx-auto max-w-[1100px] pt-4">
          <div
            className="rounded-[24px] bg-[#f5f5f7] p-6 sm:p-10 border border-[#f0f0f0]"
            style={{ boxShadow: "rgba(16, 16, 16, 0.08) 0px 20px 60px 0px" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
              {/* iPhone 16 Pro Max Mockup (NovaPay Fintech App) */}
              <div className="w-[280px] sm:w-[320px] rounded-[44px] bg-[#0A0A0C] p-3 shadow-2xl border-4 border-[#27272A] relative transform hover:scale-[1.02] transition-transform">
                {/* Dynamic Island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] ml-auto mr-3" />
                </div>
                {/* Real Screen Image */}
                <div className="rounded-[34px] overflow-hidden bg-black aspect-[9/19.5]">
                  <img
                    src="/screenshots/demos/novapay.png"
                    alt="NovaPay Fintech Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-3 text-[11px] font-medium text-[#a1a1aa]">
                  iPhone 16 Pro Max • 1320 × 2868 px
                </div>
              </div>

              {/* Google Play Feature Graphic Banner (PulseAI in 3D Perspective) */}
              <div className="w-full lg:w-[600px] flex flex-col gap-4">
                <div className="rounded-[20px] overflow-hidden border border-[#e2e8f0] bg-gradient-to-br from-[#0F172A] to-[#020617] p-6 text-white shadow-xl relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-bold tracking-wider text-[#A78BFA] bg-[#1E1B4B] px-3 py-1 rounded-full border border-[#6366F1]/40">
                      GOOGLE PLAY FEATURE GRAPHIC 1024×500
                    </span>
                    <span className="text-xs text-[#94A3B8]">Ratio 2.048:1 • 24-bit RGB</span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold tracking-tight mb-2">
                        PulseAI Copilot
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                        Modèle de bannière obligatoire Google Play avec smartphone incliné et badge certifié.
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#34D399] bg-[#065F46]/40 px-3 py-1.5 rounded-full border border-[#059669]/30">
                        <Check className="w-3.5 h-3.5" />
                        <span>Validé Play Console (0 Alpha)</span>
                      </div>
                    </div>

                    {/* Smartphone incliné avec screen réel */}
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

                {/* Second Mockup: LuxeShop Minimalist (iPad Pro preview) */}
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
                        Format iPad Pro & Mac Desktop
                      </h4>
                      <p className="text-xs text-[#6e6e73]">
                        Export multi-résolutions instantané en pack ZIP structuré.
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

      {/* 4. SECTION DES SPÉCIFICATIONS & MATRICE DES STORES (Fond Gris Neige #f5f5f7) */}
      <section id="specs" className="bg-[#f5f5f7] py-24 px-6 transition-all">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header with Signature Amber Flame Gradient Text */}
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
              Spécifications & Ratios Stores
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed">
              Apple App Store et Google Play imposent des règles dimensionnelles et colorimétriques strictes. mookoop applique automatiquement chaque exigence au pixel près.
            </p>
          </div>

          {/* Interactive Store Spec Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {STORE_SPECS.map((spec, idx) => (
              <button
                key={spec.target}
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
              {/* Device Preview with Real Generated Screenshot */}
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
                  Rendu direct généré dans {activeSpec.target}
                </div>
              </div>

              {/* Technical Specifications Truth */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-bold text-[#0088ff] bg-[#0088ff]/10 px-2.5 py-0.5 rounded-full">
                    {activeSpec.store}
                  </span>
                  <span className="text-xs text-[#ababb0]">Norme officielle validée</span>
                </div>

                <h3 className="text-2xl font-bold text-[#101010] tracking-tight">
                  {activeSpec.target}
                </h3>

                <div className="space-y-2.5 pt-2">
                  <div className="flex justify-between py-2 border-b border-[#f0f0f0] text-sm">
                    <span className="text-[#6e6e73]">Dimensions en pixels</span>
                    <span className="font-mono font-bold text-[#101010]">{activeSpec.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0f0f0] text-sm">
                    <span className="text-[#6e6e73]">Ratio d'aspect</span>
                    <span className="font-mono font-bold text-[#101010]">{activeSpec.aspect}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0f0f0] text-sm">
                    <span className="text-[#6e6e73]">Profondeur de couleur</span>
                    <span className="font-mono font-bold text-[#101010]">{activeSpec.colorDepth}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0f0f0] text-sm">
                    <span className="text-[#6e6e73]">Exigence Transparence</span>
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
                    <span>Concevoir pour ce format</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VITRINE DES 6 DÉMOS RÉELLES (Fond Blanc #ffffff) */}
      <section id="demos" className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] text-[12px] font-semibold text-[#6e6e73] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#f06413]" />
            <span>6 Packs Clés en Main Réels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-[#101010] tracking-[-0.7px] mb-4">
            Explorez les 6 Déclinaisons Concrètes
          </h2>
          <p className="text-[17px] text-[#6e6e73] leading-relaxed">
            Chaque modèle intègre son interface d'application dessinée, son jeu de typographies et ses palettes coordonnées. Chargeables en un seul clic dans le studio.
          </p>
        </div>

        {/* Grid of the 6 Real Presets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMO_PACKS.map((demo: DemoPreset) => (
            <div
              key={demo.id}
              className="bg-white rounded-[20px] border border-[#e2e8f0] overflow-hidden flex flex-col justify-between hover:translate-y-[-4px] transition-all"
              style={{ boxShadow: "rgba(16, 16, 16, 0.06) 0px 10px 30px 0px" }}
            >
              {/* Real Screenshot Preview Card */}
              <div className="p-6 bg-[#f5f5f7] border-b border-[#f0f0f0] flex flex-col items-center">
                <div className="w-[140px] rounded-[22px] bg-[#111] p-1.5 shadow-md border border-[#333]">
                  <div className="rounded-[16px] overflow-hidden aspect-[9/19.5] bg-black">
                    <img
                      src={demo.screenshot || "/screenshots/demos/novapay.png"}
                      alt={demo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-semibold text-[#6e6e73] bg-[#f5f5f7] px-2.5 py-0.5 rounded-full">
                      {demo.category}
                    </span>
                    <span className="text-[11px] font-bold text-[#f06413] bg-[#f06413]/10 px-2.5 py-0.5 rounded-full">
                      {demo.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl text-[#101010] mb-2">{demo.name}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-4">
                    {demo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                  <span className="text-[12px] font-mono text-[#ababb0]">
                    Thème: {demo.themeId}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenStudio(demo.id)}
                    className="bg-[#0088ff] hover:bg-[#1c95ff] text-white text-[13px] font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-1 active:scale-[0.98] cursor-pointer"
                  >
                    <span>Lancer dans le studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ARCHITECTURE TECHNIQUE & VÉRITÉ ZÉRO-CLOUD (Fond Gris Neige #f5f5f7) */}
      <section id="architecture" className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-[#101010] tracking-[-0.7px] mb-4">
              Architecture Technique & Transparence
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed">
              mookoop est conçu pour les développeurs et designers qui exigent un contrôle total, sans boîte noire, sans stockage cloud distant et sans dépendance propriétaire.
            </p>
          </div>

          {/* 4 Category Color Cards (Paste Category Accent System) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Category Blue #0088ff (Productivité & Exécution Client) */}
            <div
              className="bg-white rounded-[20px] p-8 border border-[#e2e8f0]"
              style={{ boxShadow: "rgba(16, 16, 16, 0.06) 0px 10px 30px 0px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0088ff]/10 text-[#0088ff] flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#0088ff] uppercase">
                    Moteur de Rendu Client
                  </span>
                  <h3 className="font-bold text-lg text-[#101010]">
                    100% Exécuté dans le Navigateur
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Le rendu vectoriel et matriciel s'appuie sur <span className="font-semibold text-[#101010]">html-to-image</span> et l'API HTML5 Canvas native. Aucun rendu côté serveur, aucun délai de file d'attente. Votre machine génère les images à pleine puissance.
              </p>
            </div>

            {/* 2. Category Green #34c759 (Sécurité & Zéro-Cloud) */}
            <div
              className="bg-white rounded-[20px] p-8 border border-[#e2e8f0]"
              style={{ boxShadow: "rgba(16, 16, 16, 0.06) 0px 10px 30px 0px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#34c759]/10 text-[#34c759] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#34c759] uppercase">
                    Confidentialité Absolue
                  </span>
                  <h3 className="font-bold text-lg text-[#101010]">
                    Zéro Hébergement Distant
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Vos captures d'écran préliminaires, clés secrètes ou textes inédits ne transitent jamais sur un serveur tiers. La persistance s'effectue dans <span className="font-mono text-xs bg-[#f5f5f7] px-1.5 py-0.5 rounded">localStorage</span> et par export JSON local.
              </p>
            </div>

            {/* 3. Category Magenta #cb30e0 (Libre Composition) */}
            <div
              className="bg-white rounded-[20px] p-8 border border-[#e2e8f0]"
              style={{ boxShadow: "rgba(16, 16, 16, 0.06) 0px 10px 30px 0px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#cb30e0]/10 text-[#cb30e0] flex items-center justify-center font-bold">
                  <Move className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#cb30e0] uppercase">
                    Manipulation Interactive
                  </span>
                  <h3 className="font-bold text-lg text-[#101010]">
                    Positionnement & Alignement Libres
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Glissez, déposez, redimensionnez et tournez les mockups d'appareils et zones de texte à la volée. Alignement typographique gauche, centre ou droite sur chaque slide avec support des polices personnalisées (TTF, OTF, WOFF2).
              </p>
            </div>

            {/* 4. Category Red #ff383c (Export Conforme Stores) */}
            <div
              className="bg-white rounded-[20px] p-8 border border-[#e2e8f0]"
              style={{ boxShadow: "rgba(16, 16, 16, 0.06) 0px 10px 30px 0px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#ff383c]/10 text-[#ff383c] flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#ff383c] uppercase">
                    Conformité Certification
                  </span>
                  <h3 className="font-bold text-lg text-[#101010]">
                    PNG 24-bit Strict Sans Canal Alpha
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                App Store Connect et Play Console rejettent automatiquement les fichiers contenant un canal de transparence. mookoop force l'encodage RGB 24-bit opaque pour garantir 100% de validation dès le premier upload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION (Blanc #ffffff, Grand Contraste & Bouton Pilule 100px) */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101010] tracking-[-0.7px] mb-6">
          Prêt à composer vos mockups officiels ?
        </h2>
        <p className="text-[18px] text-[#6e6e73] max-w-[640px] mx-auto leading-relaxed mb-10">
          Sans compte obligatoire, sans carte de crédit et sans filigrane. Ouvrez le studio et exportez vos visuels en quelques minutes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onOpenStudio()}
            className="bg-[#0088ff] hover:bg-[#1c95ff] text-white text-[16px] font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all flex items-center gap-2 active:scale-[0.98] cursor-pointer"
          >
            <span>Lancer mookoop Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://github.com/Monde123/mookoop"
            target="_blank"
            rel="noreferrer"
            className="border border-[#d0d0d3] hover:bg-[#f5f5f7] text-[#101010] text-[16px] font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>Code Source sur GitHub</span>
          </a>
        </div>
      </section>

      {/* 8. FOOTER ÉPURÉ */}
      <footer className="border-t border-[#f0f0f0] py-12 px-6 bg-[#ffffff]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6e73]">
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-[4px] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(0deg, rgb(240, 100, 19) -29.375%, rgb(254, 171, 48) 100%)",
              }}
            >
              <div className="w-2 h-2 bg-white rounded-[1px]" />
            </div>
            <span className="font-semibold text-[#101010]">mookoop</span>
            <span>— Studio Open Source de Mockups Stores</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Monde123/mookoop"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0088ff] transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="https://github.com/Monde123/mookoop/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0088ff] transition-colors"
            >
              Licence CC BY-NC 4.0
            </a>
            <span>Zéro hébergement distant requis</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
