import Image from "next/image";

export function ProductHeroSection() {
  return (
    <div className="relative w-full min-h-[40vh] sm:min-h-[50vh] lg:h-112.5 flex items-center bg-[#1D3A2A] overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/product-hero-section.png"
          alt="Premium Garden Furniture Collection Banner"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent sm:from-black/70 sm:via-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our All Products
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#FFFFFFCC]">
            Browse our complete collection of premium outdoor furniture.
          </p>
        </div>
      </div>

    </div>
  );
}