"use client";

import * as React from "react";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  showWordmark?: boolean;
}

/**
 * mookoop official vector logo with factorized 'oo' screen viewfinders
 * Native viewBox: -70 -172.0 614.08 278.0
 */
export function MookoopLogo({
  className = "h-7 w-auto",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-70 -172.0 614.08 278.0"
      className={className}
      fill="none"
      aria-label="mookoop"
      {...props}
    >
      {/* Letter 'm' */}
      <path
        transform="translate(0.00,0) scale(0.12000,-0.12000)"
        d="M114 -9Q78 -9 62.0 2.0Q46 13 43.0 30.0Q40 47 40 67V417Q40 437 43.5 453.5Q47 470 63.0 480.5Q79 491 116.0 491.0Q153 491 170 477Q185 464 187 436Q197 448 212 460Q228 473 249.5 482.5Q271 492 296 492Q329 492 355.5 482.5Q382 473 403.5 454.5Q425 436 441 408Q455 428 475.0 447.0Q495 466 522.5 479.0Q550 492 584 492Q642 492 682.5 462.5Q723 433 744.0 378.0Q765 323 765 245V66Q765 47 761.5 29.5Q758 12 742.0 1.5Q726 -9 689.0 -9.0Q652 -9 636.5 2.0Q621 13 617.5 30.5Q614 48 614 67V246Q614 277 607.0 298.0Q600 319 585.5 330.5Q571 342 549 342Q526 342 510.0 331.5Q494 321 486.0 299.5Q478 278 478 245V66Q478 46 473.0 28.5Q468 11 451.5 0.5Q435 -10 399.0 -9.0Q363 -8 348.0 3.0Q333 14 330.0 31.5Q327 49 327 67V246Q327 277 320.0 298.5Q313 320 299.0 331.0Q285 342 262 342Q237 342 221.0 329.0Q205 316 197.5 294.5Q190 273 190 246V66Q190 46 186.5 29.0Q183 12 167.0 1.5Q151 -9 114 -9Z"
        fill="#1F1B16"
      />
      {/* Pair 'oo' 1 (Teal Viewfinders) */}
      <g
        transform="translate(102.36,-60.00) scale(0.9375) rotate(-15 60 32)"
        fill="none"
        stroke="#1F8A8A"
        strokeWidth="12"
      >
        <rect x="8" y="6" width="50" height="52" rx="18" />
        <rect x="62" y="6" width="50" height="52" rx="18" />
      </g>
      {/* Letter 'k' */}
      <path
        transform="translate(222.86,0) scale(0.12000,-0.12000)"
        d="M454 127Q485 100 487.0 75.5Q489 51 460 19Q438 -4 421.5 -11.0Q405 -18 389.0 -11.5Q373 -5 352 14L194 152V66Q194 46 190.5 29.0Q187 12 171.5 1.5Q156 -9 119 -9Q83 -9 67.0 1.5Q51 12 47.5 29.5Q44 47 44 67V644Q44 664 48.0 681.0Q52 698 68.0 708.5Q84 719 120 719Q156 719 171.5 708.5Q187 698 190.5 680.5Q194 663 194 643V341L306 449Q326 468 343.5 475.0Q361 482 378.0 476.0Q395 470 414 449Q446 414 445.0 392.5Q444 371 414 341L306 243Z"
        fill="#1F1B16"
      />
      {/* Pair 'oo' 2 (Teal Viewfinders) */}
      <g
        transform="translate(289.34,-60.00) scale(0.9375) rotate(-15 60 32)"
        fill="none"
        stroke="#1F8A8A"
        strokeWidth="12"
      >
        <rect x="8" y="6" width="50" height="52" rx="18" />
        <rect x="62" y="6" width="50" height="52" rx="18" />
      </g>
      {/* Letter 'p' */}
      <path
        transform="translate(409.84,0) scale(0.12000,-0.12000)"
        d="M303 0Q254 0 217 20Q199 28 185 40V-142Q186 -161 182.0 -178.0Q178 -195 162.5 -205.5Q147 -216 110 -216Q74 -216 58.5 -205.5Q43 -195 39.5 -178.5Q36 -162 36 -143V416Q36 436 39.0 452.5Q42 469 57.5 480.0Q73 491 109 491Q140 491 158.5 482.0Q177 473 185 454V449Q200 462 218 472Q254 491 303 491Q347 491 388.5 471.0Q430 451 462.0 416.5Q494 382 512.5 337.0Q531 292 531.0 242.0Q531 192 512.5 147.5Q494 103 462.0 70.0Q430 37 389.0 18.5Q348 0 303 0ZM282 141Q310 141 332.0 154.5Q354 168 367.5 191.0Q381 214 381 242Q381 271 368.0 293.5Q355 316 333.0 329.0Q311 342 283 342Q256 342 233.5 328.5Q211 315 198.5 292.5Q186 270 186.0 242.0Q186 214 199.0 191.0Q212 168 234.0 154.5Q256 141 282 141Z"
        fill="#1F1B16"
      />
    </svg>
  );
}

/**
 * mookoop compact mark (signature tilted 'oo' pair) for small square contexts
 */
export function MookoopMark({
  size = 32,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="mookoop mark"
      {...props}
    >
      <rect x="4" y="4" width="120" height="120" rx="28" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
      <g transform="translate(14, 34) scale(0.96) rotate(-15 52 30)" fill="none" stroke="#1F8A8A" strokeWidth="10">
        <rect x="6" y="4" width="46" height="48" rx="16" />
        <rect x="54" y="4" width="46" height="48" rx="16" />
      </g>
    </svg>
  );
}
