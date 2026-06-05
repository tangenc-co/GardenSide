import Image from "next/image";

const metadata = [
  {
    id: 1,
    icon: "/icon/black-leaf.svg",
    title: "Sustainably Sourced",
    caption:
      "All our teak is certified by the FSC — ensuring every purchase supports responsible forest management.",
  },
  {
    id: 2,
    icon: "/icon/award.svg",
    title: "Master Craftsmen",
    caption:
      "Our skilled artisans have honed their craft over generations, using time-honoured techniques.",
  },
  {
    id: 3,
    icon: "/icon/shield.svg",
    title: "25-Year Guarantee",
    caption:
      "We stand behind our quality. Every structural component carries our exclusive 25-year warranty.",
  },
  {
    id: 4,
    icon: "/icon/truck.svg",
    title: "White Glove Delivery",
    caption:
      "Free, fully insured delivery and assembly service to anywhere in mainland UK.",
  },
  {
    id: 5,
    icon: "/icon/sun.svg",
    title: "All-Weather Design",
    caption:
      "Engineered for British weather — our finishes resist rain, UV, and temperature changes.",
  },
  {
    id: 6,
    icon: "/icon/wrench.svg",
    title: "Teak Care Service",
    caption:
      "Annual restoration and teak oiling service to keep your furniture looking its best.",
  },
];
export function Purpose() {
  return (
    <div className="bg-[#FAFAF8] py-20">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="text-center">
          <p className="uppercase text-[#056839] font-medium text-lg">
            — why gardenside
          </p>
          <p className="text-[#213526] text-[40px] font-semibold">
            Crafted with Purpose
          </p>
          <p className="text-[#7A7A7A] text-[16px]">
            Every piece we create is built to age beautifully, withstand the
            British climate, and bring lasting joy to your outdoor spaces.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-20">
            {metadata.map((item) => (
              <div key={item.id} className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-[#EDFAF5] px-4 w-16 h-16 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={34}
                    height={34}
                  />
                </div>
                <p className="text-lg font-semibold text-[#213526]">
                  {item.title}
                </p>
                <p className="text-[#7A7A7A] text-sm mt-2">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-20 mt-20 py-12">
          <div className= "max-width-[50%]">
            <Image
              src="/img/about-teak.png"
              alt="About Teak"
              width={600}
              height={460}
              loading='eager'
            />
          </div>
          <div className="text-left max-w-[50%] ">
            <p className="text-[#056839] font-medium text-lg">— Quality Craftsmanship</p>
            <p className="text-[#213526] text-[40px] font-semibold">About Our Teak Furniture</p>
            <p className= "text-[#3D3D3D] text-[16px] mt-4 pr-14">
              Gardenside is one of the teak furniture companies leading in the
              world. Our company was established 30 years since 1993. Our
              services include the whole process, starting from design,
              manufacturing, and distributing our own furniture, enabling us to
              provide value, best service, and premium quality to our customers.
              To ensure the finest product possible, we focus exclusively on
              teak furniture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
