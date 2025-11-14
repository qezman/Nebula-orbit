import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-indigo-50/50 pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
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
                to="/generator"
                className="px-6 py-5 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-lg text-zinc-50 text-lg sm:text-xl font-semibold leading-tight cursor-pointer text-center"
              >
                Start Creating
              </Link>
              <Link
                to="/generator"
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

      {/* Features Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              <span className="text-indigo-500">Powerful</span>
              <span className="text-zinc-900"> Features for Modern Teams</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
              Build faster with AI-powered precision and design system
              consistency
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* Card 1: Figma-to-React Precision */}
            <div className="flex flex-col gap-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 leading-tight tracking-tight">
                  Figma-to-React Precision
                </h3>
                <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                  Convert your Figma designs into pixel-perfect React components
                  with complete design token fidelity.
                </p>
              </div>
            </div>

            {/* Card 2: AI-Powered Layout Intelligence */}
            <div className="flex flex-col gap-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 leading-tight tracking-tight">
                  AI-Powered Layout Intelligence
                </h3>
                <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                  Smart algorithms understand your design patterns and generate
                  contextually appropriate layouts automatically.
                </p>
              </div>
            </div>

            {/* Card 3: Design System Consistency */}
            <div className="flex flex-col gap-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 leading-tight tracking-tight">
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

      {/* How It Works Section */}
      <div className="w-full bg-gradient-to-br from-indigo-50/40 via-purple-50/20 to-indigo-50/40 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center gap-8 sm:gap-12">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-zinc-900">
                How It Works
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                Three simple steps to transform your designs into production
                code
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

      {/* Premium Templates Section */}
      <div className="w-full bg-gradient-to-br from-indigo-50/40 via-purple-50/20 to-indigo-50/40 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center gap-8 sm:gap-12">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                <span className="text-indigo-500">Premium</span>
                <span className="text-zinc-900"> Templates</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 font-medium leading-relaxed">
                Start with professionally designed templates and customize to
                your brand
              </p>
            </div>

            {/* Template Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
              {/* Template 1: SaaS Pro */}
              <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                <div className="w-full overflow-hidden rounded-t-lg">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f16ef7f0c90d8b1a4c767de14128943544dbb70d?width=680"
                    alt="SaaS Pro Template Preview"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-4 px-4 pb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight tracking-tight">
                    SaaS Pro
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Perfect for B2B SaaS products with conversion-focused
                    sections
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors group"
                  >
                    <span>View Template</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M4 12H20M20 12L14 18M20 12L14 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Template 2: Minimal Agency */}
              <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                <div className="w-full overflow-hidden rounded-t-lg">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/036abc6f6b263337a4e295d8dfc1147d488bfd39?width=680"
                    alt="Minimal Agency Template Preview"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-4 px-4 pb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight tracking-tight">
                    Minimal Agency
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Elegant design for creative agencies and design studios
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors group"
                  >
                    <span>View Template</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M4 12H20M20 12L14 18M20 12L14 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Template 3: Startup Hero */}
              <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                <div className="w-full overflow-hidden rounded-t-lg">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/881a7e8cde5534b053a58a9a962ad84a72a0f1c9?width=680"
                    alt="Startup Hero Template Preview"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-4 px-4 pb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight tracking-tight">
                    Startup Hero
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Bold and energetic design for tech startups and innovations
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors group"
                  >
                    <span>View Template</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M4 12H20M20 12L14 18M20 12L14 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full bg-gradient-to-br from-indigo-50/80 via-purple-50/40 to-indigo-50/80 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
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
                "<span className="font-semibold text-indigo-500">Nebula</span>{" "}
                AI builder transformed our design-to-development workflow. We
                now ship landing pages{" "}
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

      {/* CTA Section */}
      <div className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto text-center">
            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-gray-900">
                Start Building{" "}
                <span className="text-indigo-500">Beautiful</span> Pages Today
              </h2>
              <p className="text-base sm:text-lg font-medium text-zinc-900 leading-relaxed">
                Start with professionally designed templates and customize to
                your brand
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/generator"
              className="inline-block px-6 sm:px-8 py-5 sm:py-6 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-lg text-zinc-50 text-lg sm:text-xl font-semibold leading-tight shadow-md hover:shadow-lg"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
