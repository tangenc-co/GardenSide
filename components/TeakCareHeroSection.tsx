import Image from "next/image";

export function TeakCareHeroSection() {
  return (
    <div className="relative w-full min-h-[85vh] sm:min-h-[80vh] lg:h-[calc(100vh-4rem)] flex items-center justify-center bg-[#1D3A2A] overflow-hidden">
      

      <div className="absolute inset-0 z-0">
        <Image
          src="/img/teak-care-section.png"
          alt="Premium quality teak wood maintenance showcase banner"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          className="object-cover object-center"
        />
           <div className="absoute inset-0 bg-[#1C1917]"></div>
      </div>


      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col gap-4 sm:gap-6 items-center max-w-4xl mx-auto">
          
          <h1 className="font-bold tracking-tight text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.15]">
            Maintaining Your Teak Furniture
          </h1>
          
          <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#FFFFFFCC]">
            Teak is protected by its own natural oils that migrate to the
            surface of the wood. With proper care, you can maintain its
            attractive and durable qualities for a lifetime.
          </p>
          

          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button 
              type="button"
              className="w-full sm:w-auto rounded-lg bg-[#1D3A2A] px-8 py-4 text-center font-semibold text-white transition-all duration-200 hover:bg-[#274D38] shadow-md focus-visible:ring-2 focus-visible:ring-[#97CCB3] outline-none"
            >
              Products Collection
            </button>
            <button 
              type="button"
              className="w-full sm:w-auto rounded-lg bg-[#EDFAF5] px-8 py-4 text-center font-semibold text-[#213526] transition-all duration-200 hover:bg-[#D1E8D9] focus-visible:ring-2 focus-visible:ring-white outline-none"
            >
              Get a Quote →
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}