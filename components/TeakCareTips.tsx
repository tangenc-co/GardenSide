import Image from "next/image";

const metadata = [
  {
    id: 1,
    icon: "/icon/warning.svg",
    title: "When to Apply",
    description: (
      <div className="text-[#667085] text-sm space-y-2 leading-relaxed">
        <p>
          Allow furniture to weather for a couple of weeks first. It is ok for
          the wood to get wet outdoors or be washed with a detergent (OxyClean
          is great) prior to sealing.
        </p>
        <p>
          <strong>The &quot;Mill Glaze&quot;: </strong>Removing the waxy feeling
          of new furniture (mill glaze) is essential. FAILURE to remove this
          results in a blotchy appearance and early sealer failure.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    icon: "/icon/layer.svg",
    title: "How to Apply",
    description: (
      <div className="text-[#667085] text-sm space-y-2 leading-relaxed">
        <p>
          Apply SEMCO teak sealer using a plastic spray bottle or rag. Apply
          liberally and wipe off the excess.
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>First coat dries in less than 1 hour.</li>
          <li>Apply second coat on the same day.</li>
          <li>Dry to the touch in a few hours.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    icon: "/icon/warning.svg",
    title: "Special care for Tables",
    description: (
      <p className="text-[#667085] text-sm leading-relaxed">
        Oils from foods, some condiments as well as wine and coffee will
        penetrate the sealer and leave a stain. If you discover that this is a
        problem you may wish to add SEMCO Clear Coat to the table top to improve
        stain resistance.
      </p>
    ),
  },
  {
    id: 4,
    icon: "/icon/layer.svg",
    title: "Restoring Teak",
    description: (
      <div>
        <ul className="list-decimal pl-5 space-y-2 text-[#667085] text-sm leading-relaxed">
          <li>
            If your furniture has been allowed to weather or is stained by food
            and you wish to remove any sealers use SEMCO teak cleaner or
            OxyClean (has no chlorine) to help restore the wood to the like new
            condition. Wet the wood with a hose and keep the piece wet during
            the entire process.
          </li>
          <li>
            Follow the mixing directions on whatever cleaner you are using.
          </li>
          <li>Use a Scotch Brite pad to scrub the area.</li>
          <li>
            Rinse with clean water to remove dirt. Work on small areas until the
            entire piece is done.
          </li>
          <li>
            Allow the furniture to dry thoroughly (1 day) before applying any
            new sealers or oils. If you are re-sealing a piece a single coat of
            sealer should be sufficient.
          </li>
        </ul>
      </div>
    ),
  },
];

export function TeakCareTips() {
  return (
    <section className="bg-[#FAFAF8] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {metadata.map((item) => (
            <div
              key={item.id}
              className="border border-[#72BF96]/60 rounded-xl p-5 sm:p-6 bg-[#EDFAF5] space-y-4 flex flex-col justify-start h-full transition-shadow duration-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-3 pb-2 border-b border-[#72BF96]/30">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon indicator`}
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                />
                <h3 className="text-[#3D3D3D] text-lg sm:text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="flex-1">
                {item.description}
              </div>
            </div>
          ))}
        </div>


        <div className="bg-[#DC2626]/5 border border-[#DC2626]/20 rounded-xl p-5 sm:p-8 mt-8 sm:mt-12 flex flex-col gap-4 sm:gap-6 items-start lg:items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/icon/red-warning.svg"
              alt="Critical risk notification icon"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
            />
            <h3 className="text-[#D92D20] text-lg sm:text-xl font-semibold tracking-tight">
              What to Avoid
            </h3>
          </div>
          
          <div className="w-full max-w-4xl lg:px-6">
            <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base text-[#667085] leading-relaxed">
              <li>
                <strong>Never use a pressure washer:</strong> The high pressure
                can erode the soft wood fibers, creating a rough, splintery
                surface.
              </li>
              <li>
                <strong>Avoid steel wool:</strong> Small particles can embed in the wood and cause rust stains. Use brass or nylon brushes instead.
              </li>
              <li>
                <strong>Say no to teak oil:</strong> Traditional &quot;teak oil&quot; often contains linseed oil, which can encourage mildew growth and darken the wood unevenly over time. Stick to modern, water-based teak protectors if you wish to seal the wood.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}