import Image from "next/image";

const metadata = [
  {
    id: 1,
    percentage: "95%",
    description: "Natural Oil Resistance",
  },
  {
    id: 2,
    percentage: "Grade A",
    description: "Structural Hardness",
  },
  {
    id: 3,
    percentage: "50+ yrs",
    description: "Expected Lifespan",
  },
  {
    id: 4,
    percentage: "100%",
    description: "FSC Certification",
  },
];

export function UseGradeTeak() {
  return (
    <section className="bg-[#F5F5F5] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Responsive grid engine adapting column layouts based on display media splits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Content Stack Block */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div>
              <span className="uppercase text-[#056839] font-medium text-base sm:text-lg tracking-wide block">
                — Quality Craftsmanship
              </span>
              <h2 className="text-[#213526] text-2xl sm:text-4xl font-bold tracking-tight leading-tight mt-1 max-w-md">
                Why We Only Use Grade A Teak
              </h2>
            </div>
            
            <div className="text-[#3D3D3D] text-sm sm:text-base space-y-4 leading-relaxed lg:pr-6">
              <p>
                Tectona grandis — commonly known as teak — is one of the world&apos;s
                most remarkable hardwoods. Its natural oil content makes it
                uniquely resistant to rain, frost, and UV rays, requiring minimal
                maintenance while becoming more characterful with age.
              </p>
              <p>
                Grade A teak is harvested only from the heart of the tree,
                ensuring the highest density of natural oils and the finest, most
                consistent grain pattern. The result is furniture that will last a
                lifetime — and beyond.
              </p>
            </div>

            {/* Premium Dynamic Performance Metrics Metric Blocks */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
              {metadata.map((item) => (
                <div 
                  className="border border-[#97CCB3]/60 bg-[#EDFAF5] text-center rounded-xl py-4 px-2 transition-all duration-300 hover:border-[#056839] hover:shadow-xs" 
                  key={item.id}
                >
                  <p className="text-[#056839] font-bold text-xl sm:text-2xl tracking-tight">
                    {item.percentage}
                  </p>
                  <p className="text-xs sm:text-sm text-[#667085] font-medium mt-0.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Optimized Aspect-Ratio Background Media Area */}
          <div className="relative w-full aspect-square sm:aspect-4/3 lg:aspect-650/630 order-1 lg:order-2 overflow-hidden rounded-xl shadow-xs">
            <Image
              src="/img/cat-funiture.png"
              alt="Close up view detailing premium quality tight grain of Grade A timber wood"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}