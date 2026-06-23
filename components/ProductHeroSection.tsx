import Image from "next/image";

export function ProductHeroSection() {
  return (
    <div className="relative">
      <Image
        src="/img/product-hero-section.png"
        alt="Garden Furniture"
        width={1920}
        height={900}
        priority
        className="h-auto w-full object-cover"
      />

      <div className="absolute inset-0 justify-center flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 ">
          <div className="max-w-205">
            <p className="mb-6 text-6xl font-bold leading-tight text-white ">
              Our All Products
            </p>
            <p className="mb-8 max-w-full text-2xl leading-8 text-[#FFFFFFCC]">
              Browse our complete collection of premium outdoor furniture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
