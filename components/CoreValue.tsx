import Image from "next/image";

const metadata = [
  {
    id: 1,
    icon: "/icon/green-leaf.svg",
    title: "Sustainability First",
    description: "Every piece of teak we use is sourced from FSC-certified, sustainably managed forests in Indonesia. We are committed to giving back more than we take from nature."
  },
  {
    id: 2,
    icon: "/icon/green-award.svg",
    title: "Uncompromising Quality",
    description: "We use only Grade A teak — the finest available — and subject every finished piece to our 47-point quality inspection before it leaves our workshop."
  },
  {
    id: 3,
    icon: "/icon/people.svg",
    title: "Community & Craft",
    description: "Our partnerships with artisan communities in Indonesia ensure fair wages, safe working conditions, and the preservation of traditional woodworking skills."
  },
  {
    id: 4,
    icon: "/icon/earth.svg",
    title: "Responsible Business",
    description: "We offset 100% of our shipping emissions and donate 1% of annual revenue to reforestation projects through our partnership with Trees for Life."
  },
  {
    id: 5,
    icon: "/icon/heart.svg",
    title: "Customer Obsession",
    description: "From your first enquiry to your annual teak care service, we're here for every step of your Gardenside journey — because great furniture builds lasting relationships."
  },
  {
    id: 6,
    icon: "/icon/green-award.svg",
    title: "Timeless Design",
    description: "We believe great design transcends trends. Our classic lines and natural finishes are crafted to look as beautiful in 25 years as they do on day one."
  },
];

export function CoreValue() {
  return (
    <section className="bg-[#EDFAF5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="uppercase text-[#056839] font-medium text-base sm:text-lg tracking-wide block">
            — What Drives Us
          </span>
          <h2 className="text-[#213526] text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
            Our Core Values
          </h2>
          <p className="text-[#7A7A7A] text-sm sm:text-base leading-relaxed">
            Every piece we create is built to age beautifully, withstand the
            British climate, and bring lasting joy to your outdoor spaces.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 sm:mt-16">
          {metadata.map((item) => (
            <div 
              key={item.id} 
              className="group border border-[#72BF96]/50 rounded-xl p-6 bg-[#FEFEFE] shadow-xs flex flex-col justify-start h-full transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#056839] hover:shadow-md"
            >
              <div className="flex flex-col space-y-4 h-full">
                {/* Icon Badge Housing */}
                <div className="bg-[#EDF7F1] w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#056839]/10">
                  <Image 
                    src={item.icon} 
                    alt="" 
                    width={22} 
                    height={22}
                    className="w-5.5 h-5.5 object-contain"
                  />
                </div>
                

                <div className="space-y-2 flex-1 flex flex-col">
                  <h3 className="text-[#143D30] font-semibold text-base sm:text-lg tracking-tight group-hover:text-[#056839] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}