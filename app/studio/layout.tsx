import type { ReactNode } from "react";

export { metadata, viewport } from "next-sanity/studio";

/** Full-viewport so Sanity Studio’s footer actions (e.g. Publish) are not clipped by site header/footer. */
export default function StudioLayout({ children }: { children: ReactNode }) {
  return <div className="garden-studio-shell h-svh min-h-0 overflow-hidden">{children}</div>;
}
