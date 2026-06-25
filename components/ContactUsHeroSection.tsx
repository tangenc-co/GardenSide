import Image from "next/image";

export function ContactUsHeroSection() {
  return (
    <div className="relative w-full min-h-[75vh] sm:min-h-[80vh] lg:h-[calc(100vh-4rem)] flex items-center justify-center bg-[#1D3A2A] overflow-hidden">
      

      <div className="absolute inset-0 z-0">
        <Image
          src="/img/contact-us-hero.png"
          alt="Premium outdoor showroom scene"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
      </div>


      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col gap-4 sm:gap-6 items-center max-w-3xl mx-auto">
          
          <h1 className="font-bold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.15]">
            Get in Touch
          </h1>
          
          <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#FFFFFFCC]">
            Have questions about our furniture or want to discuss a custom project? We&apos;re here to help you create your perfect outdoor space.
          </p>
          

          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto font-semibold">
            <button 
              type="button"
              className="w-full sm:w-auto rounded-lg bg-[#1D3A2A] px-8 py-4 text-center text-white transition-all duration-200 hover:bg-[#274D38] shadow-md outline-none focus-visible:ring-2 focus-visible:ring-[#97CCB3]"
            >
              Products Collection
            </button>
            <button 
              type="button"
              className="w-full sm:w-auto rounded-lg bg-[#EDFAF5] px-8 py-4 text-center text-[#213526] transition-all duration-200 hover:bg-[#D1E8D9] outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get a Quote →
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}