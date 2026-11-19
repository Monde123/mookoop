"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import type { DemoPreset } from "@/lib/demos";
import { useI18n } from "@/lib/i18n";

interface DemoMockupCardProps {
  demo: DemoPreset;
  onOpenStudio: (presetId: string) => void;
  index: number;
}

export function DemoMockupCard({ demo, onOpenStudio, index }: DemoMockupCardProps) {
  const { t, locale } = useI18n();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Localized texts
  const loc = t.demos.presets[demo.id] || {
    name: demo.name,
    category: demo.category,
    badge: demo.badge,
    description: demo.description,
  };

  const slides = demo.state.slidesByDevice.iphone || demo.state.slidesByDevice.android || [];
  const primarySlide = slides[0];
  const secondarySlide = slides[1];
  const tertiarySlide = slides[2];

  const getSlideText = (textObj?: Record<string, string> | Partial<Record<string, string>> | string) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[locale] || textObj.en || textObj.fr || Object.values(textObj)[0] || "";
  };

  const primaryLabel = getSlideText(primarySlide?.label);
  const primaryHeadline = getSlideText(primarySlide?.headline);
  const secondaryHeadline = getSlideText(secondarySlide?.headline);

  // Curated theme styles for the complete App Store slide background
  const themeStyles: Record<
    string,
    {
      bgGradient: string;
      glowColor: string;
      labelColor: string;
      labelBg: string;
      textColor: string;
      phoneBorder: string;
      isLight: boolean;
    }
  > = {
    novapay: {
      bgGradient: "linear-gradient(145deg, #070B14 0%, #0E172B 55%, #050810 100%)",
      glowColor: "rgba(59, 130, 246, 0.35)",
      labelColor: "#60A5FA",
      labelBg: "rgba(59, 130, 246, 0.15)",
      textColor: "#FFFFFF",
      phoneBorder: "#1E293B",
      isLight: false,
    },
    pulseai: {
      bgGradient: "linear-gradient(145deg, #090D1C 0%, #151336 55%, #080A15 100%)",
      glowColor: "rgba(139, 92, 246, 0.35)",
      labelColor: "#A78BFA",
      labelBg: "rgba(139, 92, 246, 0.18)",
      textColor: "#FFFFFF",
      phoneBorder: "#2E1065",
      isLight: false,
    },
    luxeshop: {
      bgGradient: "linear-gradient(145deg, #FAF8F5 0%, #F3ECE2 55%, #E8E0D5 100%)",
      glowColor: "rgba(217, 119, 6, 0.15)",
      labelColor: "#92400E",
      labelBg: "rgba(217, 119, 6, 0.1)",
      textColor: "#1C1917",
      phoneBorder: "#D6D3D1",
      isLight: true,
    },
    nomnom: {
      bgGradient: "linear-gradient(145deg, #FFF8F5 0%, #FFE9DC 55%, #FCD5BE 100%)",
      glowColor: "rgba(249, 115, 22, 0.22)",
      labelColor: "#C2410C",
      labelBg: "rgba(249, 115, 22, 0.12)",
      textColor: "#27170E",
      phoneBorder: "#FDBA74",
      isLight: true,
    },
    aurafit: {
      bgGradient: "linear-gradient(145deg, #0D1217 0%, #131E18 55%, #080D0B 100%)",
      glowColor: "rgba(163, 230, 53, 0.3)",
      labelColor: "#A3E635",
      labelBg: "rgba(163, 230, 53, 0.15)",
      textColor: "#FFFFFF",
      phoneBorder: "#1F2937",
      isLight: false,
    },
    sphere: {
      bgGradient: "linear-gradient(145deg, #091427 0%, #0F2D52 55%, #061120 100%)",
      glowColor: "rgba(14, 165, 233, 0.35)",
      labelColor: "#38BDF8",
      labelBg: "rgba(14, 165, 233, 0.15)",
      textColor: "#FFFFFF",
      phoneBorder: "#1E3A8A",
      isLight: false,
    },
  };

  const currentTheme = themeStyles[demo.id] || themeStyles.novapay;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    setRotateX(-normY * 9);
    setRotateY(normX * 9);
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col rounded-[24px] bg-white border border-[#e5e5ea] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#0088ff]/30"
      style={{
        boxShadow: isHovered
          ? "rgba(0, 136, 255, 0.12) 0px 20px 40px -10px, rgba(16, 16, 16, 0.08) 0px 10px 25px 0px"
          : "rgba(16, 16, 16, 0.05) 0px 8px 24px 0px",
      }}
    >
      {/* 1. TOP HERO AREA: TRUE COMPOSITE APP STORE MOCKUP WITH 3D PERSPECTIVE */}
      <div
        className="relative w-full h-[340px] sm:h-[370px] overflow-hidden p-6 flex flex-col justify-between transition-transform duration-300 ease-out select-none"
        style={{
          background: currentTheme.bgGradient,
          transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${
            isHovered ? 1.02 : 1
          }, ${isHovered ? 1.02 : 1}, 1)`,
        }}
      >
        {/* Dynamic radial glow responding to mouse */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 220px at ${mousePos.x}% ${mousePos.y}%, ${currentTheme.glowColor}, transparent 75%)`,
          }}
        />

        {/* Ambient Top Slide Header (Official App Store Typography) */}
        <div className="relative z-20 text-center max-w-[280px] mx-auto transition-transform duration-300 group-hover:translate-y-[-2px]">
          {primaryLabel && (
            <span
              className="inline-block text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded-full mb-1.5 uppercase transition-all"
              style={{
                color: currentTheme.labelColor,
                backgroundColor: currentTheme.labelBg,
              }}
            >
              {primaryLabel}
            </span>
          )}
          <h4
            className="text-[15px] sm:text-[17px] font-bold leading-snug line-clamp-2 transition-colors"
            style={{ color: currentTheme.textColor }}
          >
            {primaryHeadline || loc.name}
          </h4>
        </div>

        {/* Device Stage: Multi-Slide Staggered Fan-Out Deck */}
        <div className="relative z-10 w-full flex-1 flex items-end justify-center pt-2">
          {/* Tertiary Slide (Background Left/Far) */}
          {secondarySlide && (
            <div
              className="absolute bottom-[-45px] w-[130px] sm:w-[145px] rounded-[24px] bg-[#0c0d12] p-1.5 shadow-xl border border-white/10 transition-all duration-500 ease-out pointer-events-none"
              style={{
                transform: isHovered
                  ? "translateX(-75px) translateY(-14px) rotate(-11deg) scale(0.85)"
                  : "translateX(-28px) translateY(8px) rotate(-5deg) scale(0.88)",
                opacity: isHovered ? 0.75 : 0.4,
              }}
            >
              <div className="rounded-[18px] overflow-hidden aspect-[9/19.5] bg-black">
                <img
                  src={secondarySlide.screenshot || demo.screenshot}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Secondary Slide (Background Right) */}
          {secondarySlide && (
            <div
              className="absolute bottom-[-35px] w-[135px] sm:w-[150px] rounded-[26px] bg-[#0c0d12] p-1.5 shadow-xl border border-white/15 transition-all duration-500 ease-out pointer-events-none"
              style={{
                transform: isHovered
                  ? "translateX(75px) translateY(-12px) rotate(11deg) scale(0.9)"
                  : "translateX(28px) translateY(4px) rotate(5deg) scale(0.9)",
                opacity: isHovered ? 0.85 : 0.55,
              }}
            >
              <div className="rounded-[20px] overflow-hidden aspect-[9/19.5] bg-black">
                <img
                  src={secondarySlide.screenshot || demo.screenshot}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Primary Slide (Foreground Center: Real iPhone 16 Pro Max Mockup) */}
          <div
            className="relative z-30 w-[155px] sm:w-[170px] rounded-[30px] bg-[#0A0A0C] p-2 shadow-2xl transition-all duration-300 ease-out group-hover:translate-y-[-6px]"
            style={{
              borderColor: currentTheme.phoneBorder,
              borderWidth: "3px",
              boxShadow: "0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Dynamic Island Pill */}
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-40 flex items-center justify-between px-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
            </div>

            {/* Glossy screen glass reflection */}
            <div className="absolute inset-0 z-30 pointer-events-none rounded-[28px] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12]" />
            </div>

            {/* App Screen Capture */}
            <div className="rounded-[22px] overflow-hidden aspect-[9/19.5] bg-black relative">
              <img
                src={demo.screenshot || "/screenshots/demos/novapay.png"}
                alt={loc.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM CARD DETAILS & ACTIONS */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Badges & Meta */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-semibold text-[#6e6e73] bg-[#f5f5f7] px-2.5 py-0.5 rounded-full tracking-wide">
              {loc.category}
            </span>
            <span className="text-[11px] font-bold text-[#f06413] bg-[#f06413]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#f06413]" />
              <span>{loc.badge}</span>
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="font-bold text-xl text-[#101010] mb-2 group-hover:text-[#0088ff] transition-colors">
            {loc.name}
          </h3>
          <p className="text-xs text-[#6e6e73] leading-relaxed line-clamp-2 mb-4">
            {loc.description}
          </p>
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#6e6e73]">
            <Layers className="w-3.5 h-3.5 text-[#0088ff]" />
            <span className="font-medium">
              {slides.length} {t.studio?.demosDialog?.screensCount || "écrans"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onOpenStudio(demo.id)}
            className="bg-[#101010] group-hover:bg-[#0088ff] text-white text-[13px] font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
          >
            <span>{t.demos?.openButton || "Ouvrir"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
