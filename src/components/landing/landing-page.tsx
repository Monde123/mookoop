"use client";

import React from "react";
import { MookoopLogo } from "@/components/brand/logo";
import { DEMO_PACKS, type DemoPreset, type DemoPresetId } from "@/lib/demos";
import {
  Smartphone,
  Layers,
  Download,
  Sparkles,
  ArrowRight,
  Github,
  Check,
  ShieldCheck,
  GitBranch,
  Laptop,
  Maximize2,
  Move,
  RotateCw,
  ExternalLink,
} from "lucide-react";

const categoryIcons: Record<string, string> = {
  "Productivité & IA": "✨",
  "Fintech & Sécurité": "💳",
  "Santé & Bien-être": "🌱",
  "Voyage & Monde": "🌍",
  "Réseaux Sociaux": "🌐",
  "E-commerce": "🛍️",
};

interface LandingPageProps {
  onOpenStudio: (presetId?: DemoPresetId) => void;
}

export function LandingPage({ onOpenStudio }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#f1f5f8] text-[#1f1f1f] font-mulish selection:bg-[#fff7ca] selection:text-[#1f1f1f]">
      {/* 1. TOP FLOATING NAVIGATION BAR */}
      <header className="sticky top-4 z-50 px-4 sm:px-6">
        <nav className="mx-auto max-w-[1200px] bg-[#ffffff] rounded-[16px] border border-[#e2e8f0] px-4 sm:px-6 py-3 shadow-[0_2px_8px_rgba(31,31,31,0.06)] flex items-center justify-between transition-all">
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity text-left"
            >
              <MookoopLogo size={32} />
              <span className="font-bold text-lg tracking-tight text-[#1f1f1f] hidden sm:inline">
                mookoop
              </span>
            </button>
            <span className="bg-[#fb9100] text-white text-[11px] font-bold px-2 py-0.5 rounded-[10px] tracking-wide">
              v1.0 OPEN SOURCE
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[15px] font-medium text-[#2d2f33]">
            <a href="#features" className="hover:text-[#478cd0] transition-colors">
              Fonctionnalités
            </a>
            <a href="#formats" className="hover:text-[#478cd0] transition-colors">
              Formats
            </a>
            <a href="#demos" className="hover:text-[#478cd0] transition-colors">
              Modèles
            </a>
            <a href="#why" className="hover:text-[#478cd0] transition-colors">
              Philosophie
            </a>
            <a
              href="https://github.com/Monde123/mookoop"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#478cd0] transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onOpenStudio()}
              className="bg-[#478cd0] hover:bg-[#3b7bbd] text-white text-[14px] font-semibold px-4 sm:px-5 py-2.5 rounded-[10px] shadow-sm transition-all flex items-center gap-1.5 active:scale-[0.98]"
            >
              <span>Ouvrir le Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section className="px-4 sm:px-6 pt-12 sm:pt-16 pb-12 max-w-[1200px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-[#ffffff] border border-[#e2e8f0] text-xs font-semibold text-[#2d2f33] mb-6 shadow-[0_1px_3px_rgba(31,31,31,0.04)]">
          <Sparkles className="w-3.5 h-3.5 text-[#fb9100]" />
          <span>Studio interactif de captures d'écran mobiles</span>
        </div>

        <h1 className="font-charter text-4xl sm:text-5xl md:text-6xl text-[#1f1f1f] font-normal tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
          Des captures d'écran prêtes pour l'App Store,{" "}
          <span className="italic">sans compromis esthétique.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#2d2f33] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          Concevez, personnalisez et exportez vos visuels officiels pour l'
          <span className="highlight-wash font-medium">Apple App Store</span> et le{" "}
          <span className="highlight-wash font-medium">Google Play Store</span>. Vos données restent 100%
          privées sur votre machine,{" "}
          <span className="highlight-wash font-medium">zéro hébergement</span> requis.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            type="button"
            onClick={() => onOpenStudio()}
            className="w-full sm:w-auto bg-[#478cd0] hover:bg-[#3b7bbd] text-white text-base font-semibold px-7 py-3.5 rounded-[10px] shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <span>Lancer le Studio Gratuitement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#demos"
            className="w-full sm:w-auto bg-[#ffffff] hover:bg-[#f8fafc] text-[#1f1f1f] border border-[#1f1f1f] text-base font-semibold px-6 py-3.5 rounded-[10px] transition-all flex items-center justify-center gap-2"
          >
            <span>Explorer les 6 modèles</span>
            <span>↓</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#2d2f33]">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#478cd0]" />
            <span>100% Gratuit & Open-Source</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#478cd0]" />
            <span>Export certifié 24-bit RGB sans alpha</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#478cd0]" />
            <span>Aucune inscription ni compte requis</span>
          </span>
        </div>
      </section>

      {/* 3. PRODUCT HERO MOCKUP (STUDIO SHOWCASE) */}
      <section className="px-4 sm:px-6 pb-20 max-w-[1200px] mx-auto">
        <div className="relative rounded-[16px] bg-[#ffffff] border border-[#e2e8f0] p-4 sm:p-6 shadow-[0_20px_40px_rgba(31,31,31,0.12)] overflow-hidden">
          {/* Mockup Top Window Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e2e8f0]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="ml-3 text-xs font-semibold text-[#2d2f33]">
                mookoop studio — Connected Canvas Mode
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#478cd0]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Studio Prêt</span>
            </div>
          </div>

          {/* Visual Canvas Representation */}
          <div className="bg-[#f8fafc] rounded-[10px] p-6 border border-[#e2e8f0] flex flex-col lg:flex-row items-center justify-center gap-6 overflow-hidden min-h-[380px]">
            {/* Visual 1: Smartphone Card */}
            <div className="w-[240px] bg-white rounded-[14px] p-4 border border-[#e2e8f0] shadow-sm flex flex-col items-center">
              <span className="text-[10px] font-bold text-[#478cd0] tracking-wider mb-1">
                FEATURE SPOTLIGHT
              </span>
              <p className="font-charter text-sm font-semibold text-center text-[#1f1f1f] mb-3">
                Investissez dans le futur en 1 clic
              </p>
              <div className="w-full h-[220px] rounded-[10px] bg-gradient-to-b from-indigo-900 to-slate-900 border-2 border-slate-700 p-2 flex flex-col justify-between text-white text-[10px]">
                <div className="flex justify-between items-center opacity-70">
                  <span>9:41</span>
                  <span>●●● 5G</span>
                </div>
                <div className="bg-white/10 p-2 rounded backdrop-blur text-center">
                  <div className="text-[12px] font-bold text-emerald-400">+24.8%</div>
                  <div className="text-[8px] text-slate-300">Portefeuille NovaPay</div>
                </div>
                <div className="h-1 bg-white/20 rounded-full w-12 mx-auto" />
              </div>
            </div>

            {/* Visual 2: Play Store Feature Graphic (1024x500 banner simulation) */}
            <div className="w-full max-w-[460px] bg-white rounded-[14px] p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] font-semibold text-[#2d2f33] mb-2">
                <span>Play Store Feature Graphic (1024 × 500)</span>
                <span className="text-[#fb9100] bg-[#fff7ca] px-2 py-0.5 rounded text-[10px]">
                  3D Tilt & Sizing
                </span>
              </div>
              <div className="h-[200px] rounded-[10px] bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-4 relative overflow-hidden flex items-center justify-between text-white">
                <div className="z-10 max-w-[220px]">
                  <span className="inline-block text-[9px] font-bold bg-[#fb9100] text-white px-2 py-0.5 rounded mb-2">
                    NOUVELLE VERSION
                  </span>
                  <h4 className="font-charter text-lg font-bold leading-tight mb-1">
                    PulseAI Health
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    Votre bien-être quotidien, analysé par intelligence artificielle.
                  </p>
                </div>
                <div className="w-[110px] h-[190px] rounded-[12px] bg-slate-800 border-2 border-indigo-400/40 shadow-2xl rotate-6 transform translate-x-2 p-1.5 flex flex-col justify-between text-[8px]">
                  <div className="text-center text-indigo-300 font-bold mt-2">Pulse Monitor</div>
                  <div className="h-12 bg-indigo-500/20 rounded flex items-center justify-center text-emerald-400 font-mono">
                    72 BPM ♥
                  </div>
                  <div className="h-1 bg-white/20 rounded-full w-8 mx-auto" />
                </div>
              </div>
            </div>

            {/* Visual 3: Controls callout card */}
            <div className="w-[220px] bg-white rounded-[14px] p-4 border border-[#e2e8f0] shadow-sm space-y-3">
              <div className="text-xs font-bold text-[#1f1f1f] pb-2 border-b border-[#e2e8f0]">
                Outils de Création
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2d2f33]">
                <Move className="w-3.5 h-3.5 text-[#478cd0]" />
                <span>Placement libre au pixel</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2d2f33]">
                <Maximize2 className="w-3.5 h-3.5 text-[#fb9100]" />
                <span>Échelle 40% à 160%</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2d2f33]">
                <RotateCw className="w-3.5 h-3.5 text-emerald-600" />
                <span>Perspective 3D (−30° à +30°)</span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenStudio()}
                  className="w-full bg-[#f1f5f8] hover:bg-[#e2e8f0] text-[#1f1f1f] text-xs font-semibold py-2 rounded-[8px] transition-colors"
                >
                  Essayer en direct →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRUCTURE : COMMENT ÇA FONCTIONNE (3 STEPS) */}
      <section id="features" className="px-4 sm:px-6 py-16 max-w-[1200px] mx-auto">
        <h2 className="font-charter text-2xl sm:text-3xl md:text-4xl text-[#1f1f1f] font-normal text-center mb-12">
          Voici comment fonctionne <span className="italic">mookoop</span> :
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-[#ffffff] rounded-[10px] p-6 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#478cd0] text-white flex items-center justify-center font-bold mb-5 shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-charter text-xl font-semibold text-[#1f1f1f] mb-2">
                1. Choisissez vos gabarits
              </h3>
              <p className="text-sm text-[#2d2f33] leading-relaxed">
                Accédez à l'ensemble des cibles officielles : iPhone 18 Pro Max, iPad Pro, Android
                Phone & Tablet, Mac ou la bannière{" "}
                <span className="highlight-wash font-medium">Feature Graphic 1024×500</span>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f1f5f8] text-xs font-semibold text-[#478cd0]">
              Bezels Apple & Android réels
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#ffffff] rounded-[10px] p-6 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#6366f1] text-white flex items-center justify-center font-bold mb-5 shadow-sm">
                <Move className="w-5 h-5" />
              </div>
              <h3 className="font-charter text-xl font-semibold text-[#1f1f1f] mb-2">
                2. Composez en toute liberté
              </h3>
              <p className="text-sm text-[#2d2f33] leading-relaxed">
                Alignez vos titres à gauche, centre ou droite. Déplacez vos téléphones par
                glisser-déposer, réglez leur échelle, et inclinez-les avec une{" "}
                <span className="highlight-wash font-medium">perspective 3D dynamique</span>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f1f5f8] text-xs font-semibold text-[#6366f1]">
              Alignements RTL & LTR natifs
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#ffffff] rounded-[10px] p-6 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#fb9100] text-white flex items-center justify-center font-bold mb-5 shadow-sm">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="font-charter text-xl font-semibold text-[#1f1f1f] mb-2">
                3. Exportez en 1 clic
              </h3>
              <p className="text-sm text-[#2d2f33] leading-relaxed">
                Téléchargez un seul mockup en PNG haute définition instantané ou générez l'archive{" "}
                <span className="highlight-wash font-medium">ZIP complète 24-bit RGB</span> prête pour
                App Store Connect et Google Play Console.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f1f5f8] text-xs font-semibold text-[#fb9100]">
              Zéro doublon de capture
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRUCTURE : MATRICE DES FORMATS & APPAREILS */}
      <section id="formats" className="px-4 sm:px-6 py-16 max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-charter text-2xl sm:text-3xl md:text-4xl text-[#1f1f1f] font-normal mb-3">
            Tous les formats officiels des stores.
          </h2>
          <p className="text-sm sm:text-base text-[#2d2f33]">
            Fini les calculs fastidieux de pixels et les rejets de dimensions lors de la publication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Apple App Store Card */}
          <div className="bg-[#ffffff] rounded-[10px] p-6 sm:p-8 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">🍏</span>
                <h3 className="font-charter text-xl font-semibold text-[#1f1f1f]">
                  Apple App Store
                </h3>
              </div>
              <span className="bg-[#f1f5f8] text-[#1f1f1f] text-xs font-semibold px-2.5 py-1 rounded-[6px]">
                iOS & macOS
              </span>
            </div>
            <p className="text-sm text-[#2d2f33] mb-5">
              Formats adaptés aux spécifications strictes d'Apple avec bezels matériels officiels :
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                iPhone 18 Pro Max (1320 × 2868)
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                iPad Pro M5 (2064 × 2752)
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                MacBook Air 15" (2880 × 1864)
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                Apple Watch Ultra 3 (422 × 514)
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                Apple TV 4K (3840 × 2160)
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                iPhone Duo plié & ouvert
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                Créatifs universels (5244 × 2950)
              </span>
            </div>
          </div>

          {/* Google Play Store Card */}
          <div className="bg-[#ffffff] rounded-[10px] p-6 sm:p-8 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">🤖</span>
                <h3 className="font-charter text-xl font-semibold text-[#1f1f1f]">
                  Google Play Store
                </h3>
              </div>
              <span className="bg-[#fff7ca] text-[#1f1f1f] text-xs font-semibold px-2.5 py-1 rounded-[6px]">
                Android & Bannières
              </span>
            </div>
            <p className="text-sm text-[#2d2f33] mb-5">
              Toutes les résolutions Google Play requises, encodées en 24-bit RGB sans transparence :
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0] font-semibold text-[#478cd0]">
                Feature Graphic (1024 × 500)
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                Téléphones Android (1080 × 1920)
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                Tablettes 7 pouces (1200 × 1920)
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                Tablettes 10 pouces (1600 × 2560)
              </span>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#f1f5f8] border border-[#e2e8f0]">
                Orientations Portrait & Paysage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STRUCTURE : CATALOGUE DES 6 DÉMOS CLÉS EN MAIN */}
      <section id="demos" className="px-4 sm:px-6 py-16 max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-[#fb9100] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-[10px] inline-block mb-3">
            CATALOGUE PRÊT À L'EMPLOI
          </span>
          <h2 className="font-charter text-2xl sm:text-3xl md:text-4xl text-[#1f1f1f] font-normal mb-3">
            6 modèles prêts à charger en 1 clic.
          </h2>
          <p className="text-sm sm:text-base text-[#2d2f33]">
            Chaque modèle est livré avec sa palette de couleurs, ses polices, ses textes accrocheurs
            et ses mises en page de mockups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMO_PACKS.map((demo: DemoPreset) => (
            <div
              key={demo.id}
              className="bg-[#ffffff] rounded-[10px] p-6 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)] hover:border-[#478cd0]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{categoryIcons[demo.category] || "📱"}</span>
                  <span className="text-[11px] font-semibold text-[#2d2f33] bg-[#f1f5f8] px-2 py-0.5 rounded">
                    {demo.category}
                  </span>
                </div>
                <h3 className="font-charter text-xl font-semibold text-[#1f1f1f] mb-1">
                  {demo.name}
                </h3>
                <p className="text-xs text-[#2d2f33] leading-relaxed mb-4">
                  {demo.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f8]">
                  <span className="text-xs font-medium text-[#478cd0]">
                    Thème : {demo.themeId}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenStudio(demo.id)}
                    className="bg-[#478cd0] hover:bg-[#3b7bbd] text-white text-xs font-semibold px-3 py-1.5 rounded-[6px] transition-colors"
                  >
                    Lancer ce modèle →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. STRUCTURE : PHILOSOPHIE & ZÉRO-HÉBERGEMENT */}
      <section id="why" className="px-4 sm:px-6 py-16 max-w-[1200px] mx-auto">
        <div className="bg-[#ffffff] rounded-[16px] p-8 sm:p-12 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)]">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="font-charter text-2xl sm:text-3xl md:text-4xl text-[#1f1f1f] font-normal mb-3">
              Pourquoi mookoop est différent d'un SaaS classique.
            </h2>
            <p className="text-sm sm:text-base text-[#2d2f33]">
              Une approche locale, libre et respectueuse de vos données de projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-full bg-[#f1f5f8] text-[#478cd0] flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-charter text-lg font-semibold text-[#1f1f1f]">
                Confidentialité Totale
              </h4>
              <p className="text-xs sm:text-sm text-[#2d2f33] leading-relaxed">
                Aucune image ni capture ne transite sur un serveur distant. Tout est persisté
                localement dans <span className="highlight-wash font-medium">app-store-screenshots.json</span>.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-full bg-[#f1f5f8] text-[#fb9100] flex items-center justify-center font-bold mb-3">
                <GitBranch className="w-5 h-5" />
              </div>
              <h4 className="font-charter text-lg font-semibold text-[#1f1f1f]">
                Prêt pour Git & Votre Équipe
              </h4>
              <p className="text-xs sm:text-sm text-[#2d2f33] leading-relaxed">
                Committez vos configurations de mockups directement dans votre repository Git. N'importe
                quel membre de votre équipe peut reprendre là où vous vous êtes arrêté.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-full bg-[#f1f5f8] text-emerald-600 flex items-center justify-center font-bold mb-3">
                <Laptop className="w-5 h-5" />
              </div>
              <h4 className="font-charter text-lg font-semibold text-[#1f1f1f]">
                Sans Abonnement Récurrent
              </h4>
              <p className="text-xs sm:text-sm text-[#2d2f33] leading-relaxed">
                Pas d'abonnement à 30$/mois, pas de filigrane imposé. Vous êtes propriétaire de votre
                outil sous licence <span className="highlight-wash font-medium">CC BY-NC 4.0</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STRUCTURE : TÉMOIGNAGES (FORMAT READWISE TWEET CARDS) */}
      <section className="px-4 sm:px-6 py-16 max-w-[1200px] mx-auto">
        <h2 className="font-charter text-2xl sm:text-3xl md:text-4xl text-[#1f1f1f] font-normal text-center mb-12">
          Ce que disent les créateurs d'applications :
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-[#ffffff] rounded-[10px] p-6 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                  TD
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1f1f1f]">Thomas D.</div>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#478cd0] underline"
                  >
                    @thomas_dev
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#1f1f1f] leading-relaxed">
                "Passer 4 heures dans Figma pour redimensionner des screenshots à chaque mise à jour,
                c'est terminé. Avec <span className="highlight-wash">mookoop</span>, j'ai généré les 24
                déclinaisons pour l'App Store en 3 minutes. Le rendu des vrais bezels Apple est bluffant."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f1f5f8] text-[11px] text-[#2d2f33]">
              Indie Hacker iOS
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#ffffff] rounded-[10px] p-6 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                  CR
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1f1f1f]">Camille R.</div>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#478cd0] underline"
                  >
                    @camille_design
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#1f1f1f] leading-relaxed">
                "L'outil de <span className="highlight-wash">Feature Graphic Google Play</span> avec
                rotation 3D et redimensionnement libre m'a fait gagner un temps fou. C'est exactement
                l'outil open-source qu'il manquait à l'écosystème mobile."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f1f5f8] text-[11px] text-[#2d2f33]">
              Product Designer
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#ffffff] rounded-[10px] p-6 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                  MV
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1f1f1f]">Maxime V.</div>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#478cd0] underline"
                  >
                    @maxime_apps
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#1f1f1f] leading-relaxed">
                "Le fait que tout soit <span className="highlight-wash">sauvegardé en local dans un fichier JSON</span>{" "}
                que je peux committer dans Git change la donne pour notre équipe. Zéro abonnement, zéro
                dépendance SaaS."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f1f5f8] text-[11px] text-[#2d2f33]">
              Fondateur d'application mobile
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="px-4 sm:px-6 py-16 max-w-[1200px] mx-auto text-center">
        <div className="bg-[#ffffff] rounded-[16px] p-8 sm:p-14 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(31,31,31,0.06)]">
          <h2 className="font-charter text-3xl sm:text-4xl text-[#1f1f1f] font-normal mb-4">
            Prêt à sublimer la vitrine de votre application ?
          </h2>
          <p className="text-base text-[#2d2f33] max-w-xl mx-auto mb-8">
            Rejoignez les créateurs qui conçoivent leurs mockups avec{" "}
            <span className="highlight-wash font-medium">précision, indépendance et liberté</span>.
          </p>
          <button
            type="button"
            onClick={() => onOpenStudio()}
            className="bg-[#478cd0] hover:bg-[#3b7bbd] text-white text-base font-semibold px-8 py-3.5 rounded-[10px] shadow-sm transition-all inline-flex items-center gap-2 active:scale-[0.98]"
          >
            <span>Lancer le Studio mookoop</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="border-t border-[#e2e8f0] bg-[#ffffff] py-8 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2d2f33]">
          <div className="flex items-center gap-2">
            <MookoopLogo size={24} />
            <span className="font-bold text-[#1f1f1f]">mookoop</span>
            <span>— Studio Open-Source de Mockups App Store & Google Play</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Monde123/mookoop"
              target="_blank"
              rel="noreferrer"
              className="text-[#478cd0] hover:underline flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/Monde123/mookoop/blob/main/LICENSE.md"
              target="_blank"
              rel="noreferrer"
              className="text-[#478cd0] hover:underline"
            >
              Licence CC BY-NC 4.0
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
