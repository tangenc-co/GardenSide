import type { ReactNode } from "react";

export { metadata, viewport } from "next-sanity/studio";

/** Full-viewport so Sanity Studio’s footer actions (e.g. Publish) are not clipped by site header/footer. */
export default function StudioLayout({ children }: { children: ReactNode }) {
  return <div className="h-svh min-h-0 overflow-hidden bg-zinc-100 dark:bg-zinc-950">{children}</div>;
}
