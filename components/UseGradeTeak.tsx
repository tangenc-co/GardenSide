import Image from "next/image";


const metadata = [
    {
        id:1,
        percentage:"95%",
        description:"Natural Oil Resistance"
    },
        {
        id:2,
        percentage:"Grade A",
        description:"Structural Hardness"
    },
        {
        id:3,
        percentage:"50+ yrs",
        description:"Experted Lifespan"
    },
        {
        id:4,
        percentage:"100%",
        description:"FSC Certification"
    },
]
export function UseGradeTeak() {
  return (
    <div className="bg-[#F5F5F5] py-32">
      <div className="mx-auto w-full max-w-7xl gap-14 grid grid-cols-2 ">
        <div className="space-y-6 ">
          <p className="uppercase text-[#056839] font-medium text-lg">
            — Quality Craftsmanship
          </p>
          <p className="text-[#213526] text-[40px] font-semibold">
            Why We Only <br /> Use Grade A Teak
          </p>
          <div className="text-[#3D3D3D] space-y-6 pr-10">
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
          <div className="grid grid-cols-2 gap-4">
            {metadata.map((item)=>{
                return(
                    <div className="border border-[#97CCB3] bg-[#EDFAF5] text-center rounded-lg py-4" key={item.id}>
                        <p className="text-[#056839] font-bold text-xl">{item.percentage}</p>
                        <p className="text-sm text-[#667085]">{item.description}</p>
                    </div>
                )
})}
          </div>
        </div>

        <Image
          src="/img/cat-funiture.png"
          alt="Teak Outdoor Furniture"
          width={650}
          height={630}
          loading="eager"
        />
      </div>
    </div>
  );
}
