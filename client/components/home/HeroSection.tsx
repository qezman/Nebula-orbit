"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start gap-8 flex-1 max-w-2xl">
          {/* Headline and Description */}
          <div className="flex flex-col items-start gap-3 w-full">
            {/* Main Headline */}
            <h1 className="w-full text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-zinc-900">Generate </span>
              <span className="text-indigo-500">Stunning Landing Pages</span>
              <span className="text-zinc-900"> with AI</span>
            </h1>

            {/* Subheadline */}
            <p className="w-full text-zinc-600 text-base sm:text-lg font-medium leading-relaxed">
              Use your own design system and components to instantly build
              production-ready pages.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 w-full sm:w-auto">
            <Link
              href="/generator"
              className="px-6 py-5 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-lg text-zinc-50 text-lg sm:text-xl font-semibold leading-tight cursor-pointer text-center"
            >
              Start Creating
            </Link>
            <Link
              href="/generator"
              className="px-6 py-5 border-2 border-indigo-500 hover:bg-indigo-50 transition-colors rounded-lg bg-transparent text-indigo-500 text-lg sm:text-xl font-semibold leading-tight cursor-pointer text-center"
            >
              Explore Templates
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full lg:w-auto max-w-md lg:max-w-lg xl:max-w-xl">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/253344f356df28d3949e5beffcf4c03a2838b1dd?width=1092"
            alt="Landing page preview on laptop"
            loading="lazy"
            className="w-full h-auto rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
