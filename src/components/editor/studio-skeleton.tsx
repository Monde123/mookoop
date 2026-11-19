"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export function StudioSkeleton() {
  const { t } = useI18n();
  const label = t?.studio?.loading?.ariaLabel || "Chargement du studio mookoop...";

  return (
    <div
      aria-label={label}
      role="status"
      className="fixed inset-0 flex h-screen w-screen flex-col overflow-hidden bg-background select-none animate-in fade-in duration-200"
    >
      {/* 1. TOP TOOLBAR SKELETON */}
      <div className="flex h-[53px] items-center justify-between border-b border-[#f0f0f0] bg-white px-4 shadow-[0_1px_3px_rgba(16,16,16,0.03)] z-30 shrink-0">
        <div className="flex items-center gap-2">
          {/* Brand Logo placeholder */}
          <div className="h-6 w-24 rounded-md shimmer-wave" />
          {/* Models button */}
          <div className="h-8 w-22 rounded-full shimmer-wave" />
          <span className="mx-1 h-5 w-px bg-[#f0f0f0]" />
          {/* App name input */}
          <div className="hidden sm:block h-8 w-32 rounded-full shimmer-wave" />
          <span className="hidden sm:inline-block mx-1 h-5 w-px bg-[#f0f0f0]" />
          {/* Connected / Isolated */}
          <div className="hidden md:block h-8 w-22 rounded-md shimmer-wave" />
          {/* Theme select */}
          <div className="hidden lg:block h-8 w-32 rounded-md shimmer-wave" />
          {/* Font select */}
          <div className="hidden xl:block h-8 w-28 rounded-md shimmer-wave" />
        </div>

        <div className="flex items-center gap-2">
          {/* Device pill tabs */}
          <div className="hidden md:flex h-8 w-44 rounded-full shimmer-wave" />
          {/* Undo/Redo/Reset pill */}
          <div className="h-8 w-24 rounded-full shimmer-wave" />
          {/* Download Single PNG */}
          <div className="hidden sm:block h-8 w-32 rounded-full shimmer-wave" />
          {/* Export Bundle */}
          <div className="h-8 w-28 rounded-full bg-[#0088ff]/20 shimmer-wave" />
        </div>
      </div>

      {/* 2. THREE-COLUMN STUDIO LAYOUT */}
      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        {/* LEFT SIDEBAR (Écrans) */}
        <aside className="hidden lg:flex w-72 flex-col shrink-0 border-r border-[#f0f0f0] bg-white overflow-hidden">
          {/* Sidebar Header */}
          <div className="border-b border-[#f0f0f0] p-3.5 space-y-1.5">
            <div className="h-4 w-28 rounded shimmer-wave" />
            <div className="h-3 w-40 rounded shimmer-wave opacity-75" />
          </div>

          {/* Slide thumbnails list */}
          <div className="flex-1 space-y-3 p-3 overflow-hidden">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#e5e5ea] p-2.5 space-y-2 bg-white shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="h-3.5 w-16 rounded shimmer-wave" />
                  <div className="h-3 w-10 rounded-full shimmer-wave" />
                </div>
                {/* Miniature slide mockup card */}
                <div className="h-28 w-full rounded-lg bg-[#f5f5f7] p-2 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="h-2 w-20 rounded shimmer-wave mb-2" />
                  <div className="h-16 w-11 rounded-md border border-[#d0d0d3] bg-white shimmer-wave shadow-sm" />
                </div>
              </div>
            ))}
          </div>

          {/* Add screen bottom button */}
          <div className="border-t border-[#f0f0f0] p-3">
            <div className="h-9 w-full rounded-full bg-[#0088ff]/20 shimmer-wave" />
          </div>
        </aside>

        {/* CENTER PREVIEW STAGE */}
        <main className="flex-1 flex flex-col items-center justify-center bg-[#f5f5f7] relative overflow-hidden p-6 md:p-8">
          {/* Top-left floating device badge */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-sm border border-[#e5e5ea]">
            <div className="h-3 w-28 rounded shimmer-wave" />
            <span className="text-[#d0d0d3]">·</span>
            <div className="h-3 w-16 rounded shimmer-wave" />
          </div>

          {/* Central Mockup Device Frame Silhouette */}
          <div className="relative flex flex-col items-center justify-between w-[290px] h-[590px] rounded-[48px] bg-white p-3.5 border-4 border-[#e5e5ea] shadow-[0_24px_60px_rgba(16,16,16,0.08)]">
            {/* Dynamic Island / Bezel Top pill */}
            <div className="h-4 w-24 rounded-full bg-[#101010]/10 shimmer-wave mt-1" />

            {/* Simulated headline placeholder */}
            <div className="space-y-1.5 my-auto w-full px-4 text-center flex flex-col items-center">
              <div className="h-2.5 w-20 rounded-full bg-[#6e6e73]/20 shimmer-wave mb-1" />
              <div className="h-4 w-44 rounded-md bg-[#101010]/15 shimmer-wave" />
              <div className="h-4 w-36 rounded-md bg-[#101010]/15 shimmer-wave" />
            </div>

            {/* Inner screen screenshot placeholder */}
            <div className="w-full h-[360px] rounded-[32px] bg-[#f5f5f7] border border-[#e5e5ea] shimmer-wave flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-white/60 shimmer-wave" />
            </div>
          </div>

          {/* Bottom-right zoom & spec controls */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-sm border border-[#e5e5ea]">
            <div className="h-3 w-24 rounded shimmer-wave" />
            <span className="text-[#d0d0d3]">|</span>
            <div className="h-5 w-5 rounded-full shimmer-wave" />
            <div className="h-5 w-5 rounded-full shimmer-wave" />
          </div>
        </main>

        {/* RIGHT INSPECTOR */}
        <aside className="hidden lg:flex w-80 flex-col shrink-0 border-l border-[#f0f0f0] bg-white overflow-hidden">
          {/* Header */}
          <div className="border-b border-[#f0f0f0] px-4 py-3 flex items-center justify-between">
            <div className="h-4 w-32 rounded shimmer-wave" />
            <div className="h-3 w-16 rounded shimmer-wave" />
          </div>

          {/* Inspector Form Sections */}
          <div className="flex-1 space-y-5 p-4 overflow-hidden">
            {/* Layout field */}
            <div className="space-y-2">
              <div className="h-3 w-16 rounded shimmer-wave" />
              <div className="h-8 w-full rounded-md shimmer-wave" />
            </div>

            {/* Background field */}
            <div className="space-y-2">
              <div className="h-3 w-20 rounded shimmer-wave" />
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((c) => (
                  <div key={c} className="h-6 w-6 rounded-full shimmer-wave" />
                ))}
              </div>
            </div>

            {/* Label field */}
            <div className="space-y-2">
              <div className="h-3 w-14 rounded shimmer-wave" />
              <div className="h-8 w-full rounded-md shimmer-wave" />
            </div>

            {/* Headline textarea */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="h-3 w-18 rounded shimmer-wave" />
                <div className="h-3 w-12 rounded shimmer-wave" />
              </div>
              <div className="h-20 w-full rounded-md shimmer-wave" />
            </div>

            {/* Typography alignment */}
            <div className="space-y-2 pt-2 border-t border-[#f0f0f0]">
              <div className="h-3 w-22 rounded shimmer-wave" />
              <div className="flex gap-2">
                <div className="h-8 flex-1 rounded-md shimmer-wave" />
                <div className="h-8 flex-1 rounded-md shimmer-wave" />
                <div className="h-8 flex-1 rounded-md shimmer-wave" />
              </div>
            </div>

            {/* Screenshot upload zone */}
            <div className="space-y-2 pt-2 border-t border-[#f0f0f0]">
              <div className="h-3 w-28 rounded shimmer-wave" />
              <div className="h-24 w-full rounded-xl border border-dashed border-[#e5e5ea] bg-[#fbfbfd] shimmer-wave" />
            </div>
          </div>
        </aside>
      </div>

      {/* 3. MOBILE NAVIGATION BOTTOM BAR SKELETON */}
      <nav
        aria-hidden
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#f0f0f0] px-6 py-2 flex items-center justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.04)]"
      >
        <div className="h-7 w-20 rounded-xl shimmer-wave" />
        <div className="h-7 w-20 rounded-xl shimmer-wave" />
        <div className="h-7 w-20 rounded-xl shimmer-wave" />
      </nav>
    </div>
  );
}
