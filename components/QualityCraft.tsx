import Image from "next/image";

const metadata = [
  { id: 1, description: "FSC-Certified Teak Only" },
  { id: 2, description: "25-Year Structural Guarantee" },
  { id: 3, description: "Family-Owned Business" },
  { id: 4, description: "Handcrafted in Indonesia" },
  { id: 5, description: "Carbon-Neutral Shipping" },
  { id: 6, description: "8,000+ Happy Customers" },
];

export function QualityCraft() {
  return (
    <section className="bg-[#FAFAF8] py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Responsive dual-column engine switching seamlessly on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          
          {/* Performance Optimized Media Wrapper Box */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[650/630] overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/img/about-teak-1998.png"
              alt="Artisans oiling and crafting premium teak wood furniture frames"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Copy Deck Content Grid */}
          <div className="flex flex-col text-left space-y-4 sm:space-y-5">
            <div>
              <span className="text-[#056839] font-medium text-base sm:text-lg tracking-wide block">
                — Quality Craftsmanship
              </span>
              <h2 className="mt-1 text-[#213526] text-2xl sm:text-4xl font-bold tracking-tight leading-tight max-w-xl">
                Born from a Love of the Outdoors
              </h2>
            </div>

            <div className="text-[#3D3D3D] text-sm sm:text-base space-y-4 leading-relaxed lg:max-w-[95%]">
              <p>
                Gardenside is one of the teak furniture companies leading in the
                world. Our company was established 30 years since 1993. Our
                services include the whole process, starting from design,
                manufacturing, and distributing our own furniture, enabling us to
                provide value, best service, and premium quality to our customers.
                To ensure the finest product possible, we focus exclusively on
                teak furniture.
              </p>
              <p>
                Today, our dedicated team of craftsmen — many of whom trained
                under the founders — continue to hand-finish every piece, applying
                the same exacting standards that have won us the loyalty of
                thousands of customers across Britain and Europe.
              </p>
            </div>

            {/* Optimized Scalable Feature Value Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-[#72BF96]/20">
              {metadata.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-2.5 group py-0.5"
                >
                  <div className="bg-[#EDF7F1] p-1 rounded-md shrink-0">
                    <Image
                      src="/icon/mark.svg"
                      alt="Verified feature indicator badge"
                      width={15}
                      height={15}
                      className="w-3.5 h-3.5"
                    />
                  </div>
                  <span className="text-[#3D3D3D] text-sm font-medium tracking-tight group-hover:text-[#056839] transition-colors">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}