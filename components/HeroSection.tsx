import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative w-full min-h-[80vh] sm:min-h-[85vh] lg:h-[calc(100vh-4rem)] flex items-center bg-[#1D3A2A] overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/Section.png"
          alt="Premium Garden Furniture Scene"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent sm:from-black/70 sm:via-black/50" />
      </div>


      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          

          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#97CCB3]/40 bg-[#97CCB3]/20 backdrop-blur-md px-4 py-2 transition-transform duration-300 hover:scale-[1.02]">
            <Image 
              src="/icon/leaf.svg" 
              alt="Sustainability leaf icon indicator" 
              width={14} 
              height={14} 
              className="w-3.5 h-3.5"
            />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[2.5px] text-[#97CCB3]">
              Sustainably Crafted Since 1998
            </span>
          </div>


          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Design your perfect outdoor sanctuary.
          </h1>
          
          <p className="mb-8 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#FFFFFFCC]">
            Discover our collection of premium teak and natural wood outdoor
            furniture — designed to transform your garden into a sanctuary of
            beauty and comfort.
          </p>
          
    
          <button 
            type="button" 
            className="w-full sm:w-auto rounded-lg bg-[#1D3A2A] px-8 py-4 text-center font-semibold text-white transition-all duration-200 hover:bg-[#274D38] active:scale-[0.98] shadow-lg shadow-black/20 focus-visible:ring-2 focus-visible:ring-[#97CCB3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D3A2A] outline-none"
          >
            Products Collection
          </button>

        </div>
      </div>
    </div>
  );
}