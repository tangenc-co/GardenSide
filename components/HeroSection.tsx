import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative">
      <Image
        src="/img/Section.png"
        alt="Garden Furniture"
        width={1920}
        height={900}
        priority
        className="h-auto w-full object-cover"
      />

      <div className="absolute inset-0 justify-center flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 ">
          <div className="max-w-205">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#97CCB3] bg-[#97CCB34D] px-5 py-2 backdrop-blur-sm">
              <Image src="/icon/leaf.svg" alt="leaf" width={14} height={14} />
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#97CCB3]">
                Sustainably Crafted Since 1998
              </span>
            </div>

            <h1 className="mb-6 text-6xl font-bold leading-tight text-white ">
              Design your perfect outdoor sanctuary.
            </h1>
            <p className="mb-8 max-w-full text-2xl leading-8 text-[#FFFFFFCC]">
              Discover our collection of premium teak and natural wood outdoor
              furniture — designed to transform your garden into a sanctuary of
              beauty and comfort.
            </p>
            <button className="rounded-lg bg-[#1D3A2A] px-8 py-4 font-semibold text-white transition hover:bg-[#274D38]">
              Products Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
