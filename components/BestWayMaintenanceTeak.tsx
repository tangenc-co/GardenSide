import Image from "next/image";

const metadata = [
  {
    id: 1,
    icon: "/icon/water.svg",
    title: "Standard Cleaning",
    description:
      "A mild solution of soapy water or a diluted mixture of Marine SimpleGreen® and water will remove accumulated dirt. Follow with a clean water rinse.",
  },
  {
    id: 2,
    icon: "/icon/recycle.svg",
    title: "Grease Spots",
    description:
      "For grease spots, a light scrub with a degreasing agent is recommended, followed by a rinse with clean water.",
  },
  {
    id: 3,
    icon: "/icon/protection.svg",
    title: "Sealing Benefits",
    description:
      "Teak sealants keep natural oils from depleting, deploying the weathering process and protecting against UV, molding, and water damage.",
  },
];

export function BestWayMaintenanceTeak() {
  return (
    <section className="bg-[#EDFAF5] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Responsive grid configuration changing states between mobile stacking and side-by-side viewports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Showcase Image Wrapper Node */}
          <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-[650/420] order-2 lg:order-1 overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/img/teak-maintenance.png"
              alt="Premium teak furniture undergoing protective seal treatment process"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Copy Deck content container */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-[#213526] text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
                The Best Way to Maintain Teak
              </h2>
              <p className="text-[#3D3D3D] text-sm sm:text-base mt-2 sm:mt-4 leading-relaxed">
                It’s generally a good idea to give your teak outdoor furniture a
                good occasional scrub at the end of every season or whenever it
                becomes visibly dirty.
              </p>
            </div>

            {/* List Item Collection Node */}
            <div className="space-y-4 pt-2">
              {metadata.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 border border-[#72BF96] rounded-xl p-4 bg-white transition-all duration-300 hover:shadow-sm hover:border-[#056839]"
                >
                  <div className="bg-[#EDF7F1] p-2.5 rounded-lg shrink-0">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon element indicator`}
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[#213526] font-semibold text-base sm:text-lg tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#212529BF] leading-relaxed xl:pr-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}