"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

/**
 * Client-only Studio. Metadata lives in `app/studio/layout.tsx` so the Studio bundle
 * is not server-rendered (avoids React context issues in production builds).
 */
export default function StudioPage() {
  return <NextStudio config={config} />;
}
