import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex  min-h-0 flex-col">

      <SiteHeader />
      <main id="main-content" className="flex min-h-0 flex-1 flex-col">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
