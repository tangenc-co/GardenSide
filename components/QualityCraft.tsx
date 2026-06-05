import Image from "next/image";

const metadata = [
  {
    id: 1,
    description: "FSC-Certified Teak Only",
  },
  {
    id: 2,
    description: "25-Year Structural Guarantee",
  },
  {
    id: 3,
    description: "Family-Owned Business",
  },
  {
    id: 4,
    description: "Handcrafted in Indonesia",
  },
  {
    id: 5,
    description: "Carbon-Neutral Shipping",
  },
  {
    id: 6,
    description: "8,000+ Happy Customers",
  },
];
export function QualityCraft() {
  return (
    <div className="bg-[#FAFAF8] py-10">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex items-center gap-20 mt-20 py-12">
          <div className="max-width-[50%]">
            <Image
              src="/img/about-teak-1998.png"
              alt="About Teak"
              width={650}
              height={630}
              loading="eager"
            />
          </div>
          <div className="text-left max-w-[50%] ">
            <p className="text-[#056839] font-medium text-lg">
              — Quality Craftsmanship
            </p>
            <p className="text-[#213526] text-[40px] font-semibold pr-74">
              Born from a Love of the Outdoors
            </p>
            <p className="text-[#3D3D3D] text-[16px] mt-4 pr-18">
              Gardenside is one of the teak furniture companies leading in the
              world. Our company was established 30 years since 1993. Our
              services include the whole process, starting from design,
              manufacturing, and distributing our own furniture, enabling us to
              provide value, best service, and premium quality to our customers.
              To ensure the finest product possible, we focus exclusively on
              teak furniture.
            </p>
            <p className="text-[#3D3D3D] text-[16px] mt-4 pr-14">
              Today, our dedicated team of craftsmen — many of whom trained
              under the founders — continue to hand-finish every piece, applying
              the same exacting standards that have won us the loyalty of
              thousands of customers across Britain and Europe.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {metadata.map((item) => {
                return (
                  <div key={item.id} className="flex gap-2 ">
                    <Image
                      src="/icon/mark.svg"
                      alt="mark"
                      width={15}
                      height={15}
                    />
                    <span className="text-[#3D3D3D] text-sm">
                      {item.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
