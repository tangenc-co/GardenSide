"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const navItem = [
  {id:1, label: 'Home', herf: '/'},
  {id:2, label: 'Product', herf: '/product'},
  {id:3, label: 'Teak Care', herf: 'teakcare'},
  {id:4, label: 'About Us', herf: 'about-us'},
  {id:5, label: 'Contact Us', herf: 'contact-us'}
]
export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="border-b border-[#E5E7EB] bg-[#FAFAF8] backdrop-blur ">
      <div className="mx-auto flex h-16 max-w-330 items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-serif-ui text-xl text-black">
          Logo
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
        <div className="flex gap-4">
          
          <button className="bg-[#213526] text-white border rounded-md gap-2.5 px-4 py-2 font-medium text-lg ">Get a Quote</button>
        </div>
      </div>
    </header>
  );
}
