export default function AIHeroSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-8 md:px-16 py-9">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start gap-8 w-full">
          {/* Headline Placeholder */}
          <div className="w-full h-14 rounded-lg bg-zinc-200" />

          {/* Description Placeholders */}
          <div className="flex flex-col justify-center items-start gap-1.5 w-full">
            <div className="w-full h-8 rounded-lg bg-zinc-100" />
            <div className="w-full max-w-[288px] h-8 rounded-lg bg-zinc-100" />
            <div className="w-full max-w-[168px] h-8 rounded-lg bg-zinc-100" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-2.5 w-full">
            <button className="w-full sm:w-auto min-w-[177px] h-[70px] px-5 py-6 flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors">
              <span className="text-white text-lg font-semibold">Get Started</span>
            </button>
            <button className="w-full sm:w-auto min-w-[219px] h-[72px] px-5 py-6 flex items-center justify-center rounded-lg bg-zinc-100 hover:bg-zinc-200 transition-colors">
              <span className="text-zinc-700 text-lg font-medium">Learn More</span>
            </button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex-shrink-0 w-full lg:w-[546px] h-[364px] rounded-2xl bg-zinc-200" />
      </div>
    </section>
  );
}
