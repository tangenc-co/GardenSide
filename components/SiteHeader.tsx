"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getSanityProjectId } from "@/sanity/env";

const navItem = [
  {id:1, label: 'Home', herf: '/'},
  {id:2, label: 'Product', herf: '/products'},
  {id:3, label: 'Teak Care', herf: '/teak-care'},
  {id:4, label: 'About Us', herf: '/about-us'},
  {id:5, label: 'Contact Us', herf: '/contact-us'}
]

export function SiteHeader() {
  const pathname = usePathname();
  const [showStudioLink, setShowStudioLink] = useState(false);

  useEffect(() => {
    // Show Studio link if Sanity is configured AND user has logged in before
    // Sanity Studio handles its own auth - if user isn't logged in,
    // they'll be prompted to authenticate when visiting /studio
    const hasSanity = Boolean(getSanityProjectId());
    const lastProvider = localStorage.getItem('sanity:last_used_provider');
    
    setShowStudioLink(hasSanity && Boolean(lastProvider));
  }, []);

  return (
    <header className="border-b border-[#E5E7EB] bg-[#FAFAF8] backdrop-blur ">
      <div className="mx-auto flex h-16 max-w-330 items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-serif-ui text-xl text-black">
          <Image src="/icon/logo.svg" alt="Garden Side Logo" width={120} height={40} className="w-full h-auto" loading="lazy"/>
        </Link>
        <nav>
            <ul className="flex gap-12 items-center font-medium text-lg">
                {navItem.map((item)=>{
                  const  isActive = pathname === item.herf;
                  return(
                    <li key={item.id}>
                      <Link href={item.herf}  className={isActive ? 'text-[#213526] font-semibold':'text-[#667085]'}>
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
            </ul>
        </nav>
        <div className="flex gap-4 items-center">
          {showStudioLink && (
            <Link 
              href="/studio" 
              className="text-[#056839] border border-[#056839] rounded-md px-4 py-2 font-medium text-lg hover:bg-[#056839] hover:text-white transition-colors"
            >
              Studio
            </Link>
          )}
          <button className="bg-[#213526] text-white border rounded-md gap-2.5 px-4 py-2 font-medium text-lg ">Get a Quote</button>
        </div>
      </div>
    </header>
  );
}
