"use client";

import Link from "next/link";
import { useInView } from "../../hooks/useInView";

export default function TemplatesSection() {
  const templatesRef = useInView({ threshold: 0.2 });

  return (
    <div
      className="w-full bg-gradient-to-br from-indigo-50/40 via-purple-50/20 to-indigo-50/40 py-12 sm:py-16 lg:py-20"
      ref={templatesRef.ref}
    >
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-16 transition-all duration-1000 ${templatesRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              <span className="text-indigo-500">Premium</span>
              <span className="text-zinc-900"> Templates</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-700 font-medium leading-relaxed">
              Start with professionally designed templates and customize to your
              brand
            </p>
          </div>

          {/* Template Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* Template 1: SaaS Pro */}
            <div className="flex flex-col bg-white rounded-sm border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden h-full">
              <div className="w-full h-56 overflow-hidden rounded-t-sm">
                <img
                  src="/assets/Horizon.png"
                  alt="SaaS Pro Template Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 px-4 pb-4 flex-1 justify-between pt-4">
                <h3 className="text-[20px] font-semibold text-gray-900 leading-tight tracking-tight">
                  SaaS Pro
                </h3>
                <p className="text-base text-gray-600 leading-relaxed ">
                  Perfect for B2B SaaS products with conversion-focused sections
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://authentic-designers-123357.framer.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors leading-5 tracking-tight"
                  >
                    View Template
                  </Link>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M4 12H20M20 12L14 18M20 12L14 6"
                      stroke="#4338CA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Template 2: Minimal Agency */}
            <div className="flex flex-col bg-white rounded-sm border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden h-full">
              <div className="w-full h-56 overflow-hidden rounded-t-sm">
                <img
                  src="/assets/Lynqson.png"
                  alt="Minimal Agency Template Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col pt-4 gap-4 px-4 pb-4 flex-1 justify-between">
                <h3 className="text-[20px] font-semibold text-gray-900 leading-tight tracking-tight">
                  Minimal Agency
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Elegant design for creative agencies and design studios
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://internal-three-386561.framer.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors leading-5 tracking-tight"
                  >
                    View Template
                  </Link>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M4 12H20M20 12L14 18M20 12L14 6"
                      stroke="#4338CA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Template 3: Startup Hero */}
            <div className="flex flex-col bg-white rounded-sm border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden h-full">
              <div className="w-full h-56 overflow-hidden rounded-t-sm">
                <img
                  src="/assets/Fizens.png"
                  alt="Startup Hero Template Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 px-4 pb-4 flex-1 justify-between pt-4">
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 leading-tight tracking-tight">
                  Startup Hero
                </h3>
                <p className="text-[20px] text-gray-600 leading-relaxed">
                  Bold and energetic design for tech startups and innovations
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://contextual-use-196378.framer.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors leading-5 tracking-tight"
                  >
                    View Template
                  </Link>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M4 12H20M20 12L14 18M20 12L14 6"
                      stroke="#4338CA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
