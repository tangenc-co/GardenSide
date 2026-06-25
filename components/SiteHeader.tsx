
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getSanityProjectId } from "@/sanity/env";

const navItems = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Product", href: "/products" },
  { id: 3, label: "Teak Care", href: "/teak-care" },
  { id: 4, label: "About Us", href: "/about-us" },
  { id: 5, label: "Contact Us", href: "/contact-us" },
];


const hasSanityConfig = Boolean(getSanityProjectId());

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-[#FAFAF8]/95 backdrop-blur-md transition-shadow duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/" 
          className="relative flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#213526] rounded-sm"
          aria-label="Garden Side Home"
        >
          <Image 
            src="/icon/logo.svg" 
            alt="Garden Side Logo" 
            width={120} 
            height={40} 
            className="w-auto h-8 sm:h-10 object-contain" 
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center">
          <ul className="flex gap-8 xl:gap-12 items-center font-medium text-base xl:text-lg">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.id}>
                  <Link 
                    href={item.href}  
                    className={`relative py-1 transition-colors duration-200 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#213526] rounded-sm group
                      ${isActive ? 'text-[#213526] font-semibold' : 'text-[#667085] hover:text-[#213526]'}`}
                  >
                    {item.label}
                    {/* Animated Underline Effect */}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#213526] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${isActive ? 'scale-x-100' : ''}`} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          {hasSanityConfig && (
            <Link 
              href="/studio" 
              className="hidden sm:inline-flex items-center justify-center text-[#056839] border border-[#056839] rounded-md px-4 py-2 font-medium text-base xl:text-lg hover:bg-[#056839] hover:text-white transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-[#056839] focus-visible:ring-offset-2 outline-none"
            >
              Studio
            </Link>
          )}
          <button 
            type="button"
            className="hidden sm:inline-flex items-center justify-center bg-[#213526] text-white rounded-md px-5 py-2 font-medium text-base xl:text-lg hover:bg-[#16241a] transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-[#213526] focus-visible:ring-offset-2 outline-none"
          >
            Get a Quote
          </button>

     
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex lg:hidden items-center justify-center p-2 rounded-md text-[#213526] hover:bg-[#E5E7EB]/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#213526]"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

   
      <div 
        id="mobile-menu"
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#FAFAF8] px-6 py-6 shadow-2xl transition-transform duration-300 ease-in-out border-l border-[#E5E7EB] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/" onClick={closeMobileMenu} className="focus:outline-none">
            <Image src="/icon/logo.svg" alt="Garden Side Logo" width={110} height={36} className="w-auto h-8" />
          </Link>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="rounded-md p-2 text-[#213526] hover:bg-[#E5E7EB]/50 focus:outline-none focus:ring-2 focus:ring-[#213526]"
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-6 flow-root">
          <ul className="-my-6 divide-y divide-[#E5E7EB]/50">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.id} className="py-4">
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block text-lg font-medium transition-colors ${isActive ? 'text-[#213526] font-semibold' : 'text-[#667085]'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

   
        <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-col gap-4">
          {hasSanityConfig && (
            <Link
              href="/studio"
              onClick={closeMobileMenu}
              className="w-full text-center text-[#056839] border border-[#056839] rounded-md py-3 font-medium text-lg hover:bg-[#056839] hover:text-white transition-colors"
            >
              Studio
            </Link>
          )}
          <button 
            type="button"
            className="w-full bg-[#213526] text-white rounded-md py-3 font-medium text-lg hover:bg-[#16241a] transition-colors shadow-sm"
          >
            Get a Quote
          </button>
        </div>
      </div>


      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

