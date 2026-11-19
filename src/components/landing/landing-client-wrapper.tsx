"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LandingPage } from "./landing-page";
import type { DemoPresetId } from "@/lib/demos";

export function LandingClientWrapper() {
  const router = useRouter();

  const handleOpenStudio = (presetId?: DemoPresetId) => {
    if (presetId) {
      router.push(`/studio?demo=${presetId}`);
    } else {
      router.push("/studio");
    }
  };

  return <LandingPage onOpenStudio={handleOpenStudio} />;
}
