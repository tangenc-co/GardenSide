export function QAboutTeakCare() {
  return (
    <section className="bg-[#EDFAF5] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          <h2 className="text-[#143D30] text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Questions about Teak Care?
          </h2>
          
          <p className="text-[#212529BF] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our experts are available to provide advice on caring for specific
            pieces or choosing the right SEMCO maintenance products for your
            garden environment.
          </p>
          
          {/* Action button container cluster - fluid responsive stacking mechanics */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 font-medium text-sm text-[#FEFEFE] uppercase">
            <button 
              type="button"
              className="w-full sm:w-auto rounded-lg bg-[#1D3A2A] px-8 py-4 tracking-wider transition hover:bg-[#274D38] active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#1D3A2A] focus-visible:ring-offset-2"
            >
              Teak Care Support
            </button>
            <button 
              type="button"
              className="w-full sm:w-auto rounded-lg bg-[#C5A059] px-8 py-4 tracking-wider transition hover:bg-[#b08d4b] active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
            >
              Call Teak Care: 800-662-0223
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}