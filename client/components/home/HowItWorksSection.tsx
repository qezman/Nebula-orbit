"use client";

import { useInView } from "../../hooks/useInView";

export default function HowItWorksSection() {
  const howItWorksRef = useInView({ threshold: 0.2 });

  return (
    <div
      className="w-full bg-gradient-to-br from-indigo-50/40 via-purple-50/20 to-indigo-50/40 py-12 lg:py-20"
      ref={howItWorksRef.ref}
    >
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-16 transition-all duration-1000 ${howItWorksRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="flex flex-col items-center gap-10">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-zinc-900">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
              Three simple steps to transform your designs into production code
            </p>
          </div>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* Step 1: Design in Figma */}
            <div className="relative flex flex-col items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-sm font-bold text-indigo-700">1</span>
              </div>
              <div className="w-16 h-16 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <g clipPath="url(#clip0_36_62)">
                    <mask
                      id="mask0_36_62"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="31"
                      height="31"
                    >
                      <path d="M0 0H30.6667V30.6667H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_36_62)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.7524 0C7.62572 0 5.11105 2.62328 5.11105 5.83689C5.11105 7.79061 6.04128 9.52583 7.47111 10.5851C6.73396 11.137 6.13648 11.854 5.72661 12.6787C5.31675 13.5033 5.10592 14.4125 5.11105 15.3333C5.11105 17.2883 6.04128 19.0223 7.47111 20.0816C6.73396 20.6335 6.13648 21.3505 5.72661 22.1751C5.31675 22.9997 5.10592 23.9089 5.11105 24.8298C5.11105 28.0434 7.62572 30.6667 10.7524 30.6667C13.8792 30.6667 16.3938 28.0434 16.3938 24.8298V19.895C17.3816 20.7196 18.6274 21.1713 19.9141 21.1715C23.0408 21.1702 25.5555 18.5469 25.5555 15.3333C25.5606 14.4125 25.3498 13.5033 24.9399 12.6787C24.5301 11.854 23.9326 11.137 23.1954 10.5851C23.9326 10.0332 24.5301 9.31618 24.9399 8.49156C25.3498 7.66695 25.5606 6.75773 25.5555 5.83689C25.5555 2.62328 23.0408 0 19.9141 0H10.7524ZM7.23089 5.83689C7.23089 3.80394 8.81789 2.17606 10.7524 2.17606H14.2727V9.49772H10.7524C8.81789 9.49772 7.23089 7.86856 7.23089 5.83689ZM19.9141 9.49644H16.3938V2.17478H19.9141C21.8499 2.17478 23.4357 3.80394 23.4357 5.83689C23.4357 7.86856 21.8499 9.49644 19.9141 9.49644ZM7.23216 15.3333C7.23216 13.3017 8.81916 11.6725 10.7537 11.6725H14.274V18.9942H10.7524C8.81661 18.9942 7.23216 17.365 7.23216 15.3333ZM16.3926 15.3333C16.3926 13.3017 17.9796 11.6725 19.9141 11.6725C21.8499 11.6725 23.4357 13.3004 23.4357 15.3333C23.4357 17.365 21.8499 18.9942 19.9141 18.9942C17.9783 18.9942 16.3926 17.365 16.3926 15.3333ZM7.23216 24.8298C7.23216 22.7981 8.81916 21.1702 10.7537 21.1702H14.274V24.8298C14.274 26.8627 12.6896 28.4906 10.7537 28.4906C8.81789 28.4906 7.23216 26.8627 7.23216 24.8298Z"
                        fill="#FAFAFA"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_36_62">
                      <rect width="30.6667" height="30.6667" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight tracking-tight">
                  Design in Figma
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Create your landing page design using your existing design
                  system and components in Figma.
                </p>
              </div>
            </div>

            {/* Step 2: Import into Fusion */}
            <div className="relative flex flex-col items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 md:delay-100">
              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-sm font-bold text-indigo-700">2</span>
              </div>
              <div className="w-16 h-16 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.6111 16.8348L20.7549 12.6923L22.5617 14.4991L15.3333 21.7274L8.10492 14.4991L9.9117 12.6923L14.0555 16.8348V2.55566H16.6111V16.8348ZM5.11108 20.4446H7.66664V25.5557H23V20.4446H25.5555V25.5557C25.5555 26.9612 24.4055 28.1112 23 28.1112H7.66664C6.26108 28.1112 5.11108 26.8807 5.11108 25.5557V20.4446Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight tracking-tight">
                  Import into Fusion
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Upload your Figma file and let our AI analyze your design
                  patterns and component structure.
                </p>
              </div>
            </div>

            {/* Step 3: Generate Pages Instantly */}
            <div className="relative flex flex-col items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 md:delay-200">
              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-sm font-bold text-indigo-700">3</span>
              </div>
              <div className="w-16 h-16 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <path
                    d="M16.4705 3.83301L18.9749 4.34412L14.196 26.833L11.6916 26.3219L16.4705 3.83301ZM25.0316 15.333L20.4444 10.7458V7.12967L28.6477 15.333L20.4444 23.5236V19.9075L25.0316 15.333ZM2.0188 15.333L10.2221 7.12967V10.7458L5.63491 15.333L10.2221 19.9075V23.5236L2.0188 15.333Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight tracking-tight">
                  Generate Pages Instantly
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Get production-ready React code that matches your design
                  system perfectly, ready to deploy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
