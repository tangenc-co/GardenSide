import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8] antialiased selection:bg-[#97CCB3]/30 selection:text-[#213526]">

      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col w-full outline-none focus:outline-none"
      >
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
