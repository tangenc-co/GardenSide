import Image from "next/image"

export function AboutUsHeroSection (){
    return (
    <div className="relative">
      <Image
        src="/img/teak-care-section.png"
        alt="Teak Care Hero"
        width={1920}
        height={900}
        className="object-cover "
        loading="eager"
      />
      <div className="absolute flex items-center justify-center inset-0">
        <div className="mx-auto w-full  max-w-6xl px-11">
          <div className=" text-center flex flex-col gap-6">
            <p className="font-bold leading-tight text-white text-6xl">
              Our Story
            </p>
            <p className="max-w-full text-2xl leading-8 text-[#FFFFFFCC]">
             Over 25 years of crafting premium outdoor furniture with heart and purpose.
            </p>
            <div>
              <button className="rounded-lg bg-[#1D3A2A] px-8 py-4 font-semibold text-white transition hover:bg-[#274D38]">
                Products Collection
              </button>
              <button className="rounded-lg bg-[#EDFAF5] px-8 py-4 font-semibold text-[#213526] transition hover:bg-[#D1E8D9] ml-4">
                Get a Quote →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}