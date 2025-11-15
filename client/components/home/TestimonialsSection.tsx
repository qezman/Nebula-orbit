"use client";

import { useInView } from "../../hooks/useInView";

export default function TestimonialsSection() {
  const testimonialsRef = useInView({ threshold: 0.2 });

  return (
    <div
      className="w-full bg-gradient-to-br from-indigo-50/80 via-purple-50/40 to-indigo-50/80 py-12 sm:py-16 lg:py-20"
      ref={testimonialsRef.ref}
    >
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-16 transition-all duration-1000 ${testimonialsRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="flex flex-col items-center justify-center gap-8 max-w-5xl mx-auto">
          {/* Quote with decorative icon */}
          <div className="relative">
            <svg
              width="94"
              height="94"
              viewBox="0 0 94 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -left-12 -top-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-60"
            >
              <path
                d="M43.8353 61.7146C43.8353 58.2679 42.9344 55.3735 41.1328 53.0313C39.8559 51.4177 38.1235 50.3576 35.9354 49.851C33.7812 49.3497 31.7445 49.3144 29.9037 49.7413C29.277 46.0205 30.2954 42.0803 32.8804 37.9052C35.4706 33.7326 38.8102 30.5954 42.8992 28.4934L36.7069 19.583C33.5736 21.134 30.5969 23.1002 27.8553 25.4776C25.0744 27.855 22.6069 30.5888 20.4136 33.6791C18.2203 36.7693 16.5753 40.2591 15.5178 44.2149C14.4603 48.1708 14.1665 52.2049 14.6718 56.3566C15.3298 61.8399 17.1001 66.2266 19.9828 69.4774C22.8628 72.77 26.4505 74.4163 30.7458 74.4163C34.5254 74.4163 37.6626 73.2805 40.1458 70.9775C42.6028 68.7215 43.8301 65.6299 43.8274 61.7028L43.8353 61.7146ZM79.5709 61.7146C79.5709 58.2679 78.6701 55.3735 76.8684 53.0313C75.589 51.3863 73.8565 50.3197 71.671 49.8314C69.4777 49.3484 67.4671 49.3196 65.6394 49.7453C65.0127 46.0636 65.9919 42.1078 68.5847 37.9169C71.1697 33.7653 74.5067 30.6319 78.5957 28.5169L72.4191 19.583C69.2832 21.134 66.3326 23.0989 63.5674 25.4776C60.7616 27.8905 58.2694 30.6459 56.1493 33.6791C53.9716 36.7733 52.3501 40.2591 51.2926 44.2149C50.2184 48.1677 49.9297 52.2927 50.4427 56.3566C51.0929 61.8399 52.8554 66.2266 55.7302 69.4774C58.6024 72.7465 62.1836 74.3811 66.4736 74.3811C70.2597 74.3863 73.3957 73.2413 75.8814 70.9462C78.3385 68.6902 79.5683 65.5986 79.5709 61.6715V61.7146Z"
                fill="#A5B4FC"
              />
            </svg>

            <blockquote className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight sm:leading-snug tracking-tight text-zinc-900 px-4 sm:px-8">
              "<span className="font-semibold text-indigo-500">Nebula</span> AI
              builder transformed our design-to-development workflow. We now
              ship landing pages{" "}
              <span className="font-medium text-indigo-500">10x faster</span>{" "}
              while maintaining our design system standards perfectly."
            </blockquote>
          </div>

          {/* Author info */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f70a537f22b126db21c5e9cad231691d4ad07156?width=160"
              alt="Linda Gates"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div className="flex flex-col gap-1">
              <p className="text-base sm:text-lg font-medium text-zinc-900">
                Linda Gates
              </p>
              <p className="text-sm sm:text-base font-medium text-zinc-600">
                Head of Design, Nebula
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
