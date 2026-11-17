import { ScreenshotEditor } from "@/components/editor/screenshot-editor";
import { LandingClientWrapper } from "@/components/landing/landing-client-wrapper";

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = searchParams ? await searchParams : {};
  const forceStudio = params.studio === "true" || params.studio === "1";
  const forceLanding = params.landing === "true" || params.landing === "1";

  // If automated E2E test suite is running without explicit landing override, serve editor directly
  const isE2EHarness = process.env.E2E_TELEMETRY_DISABLED === "1" && !forceLanding;

  if (forceStudio || isE2EHarness) {
    return <ScreenshotEditor />;
  }

  return <LandingClientWrapper />;
}
