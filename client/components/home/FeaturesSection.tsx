"use client";

import { useInView } from "../../hooks/useInView";

export default function FeaturesSection() {
  const featuresRef = useInView({ threshold: 0.2 });

  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 lg:py-20"
      ref={featuresRef.ref}
    >
      <div
        className={`flex flex-col items-center gap-10 transition-all duration-1000 ${featuresRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            <span className="text-indigo-500">Powerful</span>
            <span className="text-zinc-900"> Features for Modern Teams</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Build faster with AI-powered precision and design system consistency
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* Card 1: Figma-to-React Precision */}
          <div
            className="flex flex-col gap-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0s" }}
          >
            <div className="w-16 h-16 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <g clipPath="url(#clip0_35_28)">
                  <path
                    d="M22.305 15.3333C22.305 19.1837 19.1837 22.305 15.3333 22.305C11.483 22.305 8.3617 19.1837 8.3617 15.3333C8.3617 11.483 11.483 8.3617 15.3333 8.3617C19.1837 8.3617 22.305 11.483 22.305 15.3333ZM17.1679 3.70306C22.1936 4.49285 26.1739 8.4731 26.9636 13.4987H30.6667C29.8281 6.44707 24.2196 0.838602 17.1679 0V3.70306ZM3.70306 13.4987C4.49279 8.4731 8.47304 4.49285 13.4987 3.70306V0C6.44701 0.838542 0.838602 6.44707 0 13.4987H3.70306ZM26.9636 17.1679C26.1739 22.1936 22.1936 26.1739 17.1679 26.9637V30.6667C24.2196 29.8281 29.8281 24.2196 30.6667 17.1679H26.9636ZM13.4987 26.9637C8.47304 26.1739 4.49279 22.1936 3.70306 17.1679H0C0.838542 24.2196 6.44701 29.8281 13.4987 30.6667V26.9637Z"
                    fill="#FAFAFA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_35_28">
                    <rect width="30.6667" height="30.6667" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] font-semibold text-zinc-900 leading-tight tracking-tight">
                Figma-to-React Precision
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                Convert your Figma designs into pixel-perfect React components
                with complete design token fidelity.
              </p>
            </div>
          </div>

          {/* Card 2: AI-Powered Layout Intelligence */}
          <div
            className="flex flex-col gap-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
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
                  d="M10.3181 25.5558C10.0838 25.5558 9.86575 25.4974 9.66386 25.3807C9.46197 25.264 9.30736 25.0988 9.20002 24.8849L6.70836 20.4447H8.56114L9.83891 23.0002H12.7778V21.7224H10.6056L9.3278 19.1669H6.00558L4.18475 15.9724C4.14215 15.866 4.1051 15.7595 4.07358 15.653C4.04206 15.5465 4.02588 15.44 4.02502 15.3336C4.02502 15.2484 4.07827 15.0354 4.18475 14.6947L6.00558 11.5002H9.3278L10.6056 8.94466H12.7778V7.66688H9.83891L8.56114 10.2224H6.70836L9.20002 5.78216C9.30651 5.5692 9.46069 5.40437 9.66258 5.28766C9.86447 5.17096 10.0834 5.11218 10.3194 5.11133H13.4167C13.7787 5.11133 14.0824 5.23399 14.3277 5.47933C14.5731 5.72466 14.6953 6.02792 14.6945 6.38911V11.5002H12.7778L11.5 12.778H14.6945V16.6113H11.8834L10.6056 14.0558H7.66669L6.38891 15.3336H9.83891L11.1167 17.8891H14.6945V24.278C14.6945 24.64 14.5718 24.9437 14.3265 25.189C14.0811 25.4344 13.7779 25.5566 13.4167 25.5558H10.3181ZM17.25 25.5558C16.888 25.5558 16.5847 25.4331 16.3402 25.1878C16.0958 24.9424 15.9731 24.6392 15.9722 24.278V17.8891H19.55L20.8278 15.3336H24.2778L23 14.0558H20.0611L18.7834 16.6113H15.9722V12.778H19.1667L17.8889 11.5002H15.9722V6.38911C15.9722 6.02707 16.0949 5.72381 16.3402 5.47933C16.5856 5.23485 16.8888 5.11218 17.25 5.11133H20.3486C20.5829 5.11133 20.8014 5.17011 21.0041 5.28766C21.2069 5.40522 21.3611 5.57005 21.4667 5.78216L23.9584 10.2224H22.1056L20.8278 7.66688H17.8889V8.94466H20.0611L21.3389 11.5002H24.6611L26.482 14.6947C26.5246 14.8011 26.562 14.9076 26.5944 15.0141C26.6268 15.1206 26.6425 15.2271 26.6417 15.3336C26.6417 15.4187 26.5885 15.6317 26.482 15.9724L24.6611 19.1669H21.3389L20.0611 21.7224H17.8889V23.0002H20.8278L22.1056 20.4447H23.9584L21.4667 24.8849C21.3602 25.0979 21.2056 25.2632 21.0029 25.3807C20.8001 25.4983 20.582 25.5566 20.3486 25.5558H17.25Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] font-semibold text-zinc-900 leading-tight tracking-tight">
                AI-Powered Layout Intelligence
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                Smart algorithms understand your design patterns and generate
                contextually appropriate layouts automatically.
              </p>
            </div>
          </div>

          {/* Card 3: Design System Consistency */}
          <div
            className="flex flex-col gap-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
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
                  d="M14.0557 2.05762L25.5557 8.69713V18.7388L27.5831 20.0905L26.8744 21.1536L22.6151 27.5425L21.7505 28.8394L20.6485 27.7373L16.3375 23.4263L18.1446 21.6192L21.3531 24.8276L24.748 19.7361L25.4568 18.6729L25.5557 18.7388V16.6115L23.0001 16.6115V11.5005L15.3334 15.9268V27.878L14.0557 28.6157L2.55566 21.9762V8.69713L14.0557 2.05762ZM5.11118 11.5004V20.5007L12.7778 24.927V15.9268L5.11118 11.5004ZM14.0557 5.00851L6.51676 9.36114L14.0557 13.7137L21.5946 9.36108L14.0557 5.00851Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] font-semibold text-zinc-900 leading-tight tracking-tight">
                Design System Consistency
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                Maintain brand consistency across all pages with automated
                design system enforcement and validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
