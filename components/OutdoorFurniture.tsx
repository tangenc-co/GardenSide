import Image from "next/image";

export function OutdoorFurniture() {
  return (
    <section className="bg-[#F5F5F5] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Switched grid configuration from fixed cols-2 to mobile-first system */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Copy Deck Stack */}
          <div className="space-y-4 sm:space-y-6">
            <span className="uppercase text-[#056839] font-medium text-base sm:text-lg tracking-wide block">
              — teak care
            </span>
            
            <h2 className="text-[#213526] text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
              Teak Care for Outdoor Furniture
            </h2>
            
            <div className="text-[#3D3D3D] text-sm sm:text-base space-y-4 sm:space-y-6 lg:pr-6 leading-relaxed">
              <p>
                Teak outdoor furniture is beautiful, durable and practical. In
                addition, it can be left outside in the weather without becoming
                twisted or warped. You can rest assured that your premium teak
                furniture will not crack, splinter, or be a home to termites.
              </p>
              <p>
                It’s generally a good idea to give your teak outdoor furniture a
                good occasional scrub at the end of every season or whenever it
                becomes visibly dirty. A mild solution of soapy water or a diluted
                mixture of Marine SimpleGreen® and water will remove accumulated
                dirt. This should be followed by a rinse with clean water. To
                remove grease spots, a light scrub with a degreasing agent is
                recommended. This, too, should be followed by a rinse with clean
                water.
              </p>
              <p>
                If you choose to put your furniture away for the winter, do not
                store it in a heated room. The heat can dry out the wood and cause
                cracks. It is normal for teak wood to expand and contract with
                time and changes in weather. Some of the joints are not glued,
                like the slats in the back of chairs. From time to time you may
                need to tighten the fasteners.
              </p>
            </div>
          </div>

          {/* Performance Optimized Responsive Image Box */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[650/630] overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/img/cat-funiture.png"
              alt="Premium teak outdoor furniture care tutorial guide"
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