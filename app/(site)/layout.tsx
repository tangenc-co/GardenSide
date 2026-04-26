import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh min-h-0 flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-zinc-900 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div className="border-b border-amber-900/10 bg-amber-50/60 px-4 py-2 text-center text-xs text-amber-950 dark:border-amber-900/20 dark:bg-amber-950/25 dark:text-amber-100/90">
        Catalog display only — cart and checkout are not available yet.
      </div>
      <main id="main-content" className="flex min-h-0 flex-1 flex-col">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
