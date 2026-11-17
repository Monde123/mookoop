"use client";

import * as React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  showWordmark?: boolean;
}

/**
 * mookoop brand logo factorizing the two "oo" occurrences in "mookoop":
 * m + [oo] + k + [oo] + p
 * Visualized as two interlocked pairs of harmonic optical rings (camera lenses & screen viewfinders)
 */
export function MookoopMark({ className, size = 32, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="mookoop logo"
      {...props}
    >
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#0B0F19" stroke="#1E293B" strokeWidth="1.5" />

      {/* Viewfinder frame corners */}
      <path d="M 10 18 L 10 12 L 16 12" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 54 18 L 54 12 L 48 12" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 10 46 L 10 52 L 16 52" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 54 46 L 54 52 L 48 52" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />

      {/* Factorized Pair 1: (o o) */}
      <circle cx="23" cy="32" r="8.5" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" />
      <circle cx="30" cy="32" r="8.5" stroke="#818CF8" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.85" />

      {/* Factorized Pair 2: (o o) */}
      <circle cx="34" cy="32" r="8.5" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.9" />
      <circle cx="41" cy="32" r="8.5" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />

      {/* Center factorization nexus */}
      <circle cx="32" cy="32" r="2" fill="#38BDF8" />
    </svg>
  );
}

export function MookoopLogo({ size = 32, showWordmark = true, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 select-none ${className || ""}`}>
      <MookoopMark size={size} />
      {showWordmark && (
        <span className="font-bold tracking-tight text-foreground flex items-center text-sm md:text-base">
          <span>m</span>
          <span className="text-indigo-500 font-extrabold">oo</span>
          <span>k</span>
          <span className="text-cyan-500 font-extrabold">oo</span>
          <span>p</span>
        </span>
      )}
    </div>
  );
}
