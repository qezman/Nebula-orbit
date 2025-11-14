import Footer from "../components/Footer";

export default function Generator() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Input Section */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900">Generate a </span>
                <span className="text-indigo-500">Landing Page</span>
                <span className="text-gray-900"> with AI</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Describe your vision in natural language and watch as our AI
                crafts a stunning, fully-responsive landing page tailored to
                your needs.
              </p>
            </div>

            {/* Prompt Section */}
            <div className="flex flex-col gap-12 p-6 rounded-2xl bg-gray-100">
              {/* Prompt Input */}
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-medium text-black">Your Prompt</h2>
                <div className="relative">
                  <textarea
                    placeholder="E.g., Create a modern SaaS landing page for a project management tool with a hero section, features grid, pricing table, and testimonials. Use a professional blue color scheme with clean typography..."
                    className="w-full h-44 p-6 rounded-2xl bg-white shadow-md resize-none text-base text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    maxLength={2000}
                  />
                  <div className="absolute bottom-4 right-6 text-sm text-gray-400">
                    0/2000
                  </div>
                </div>
              </div>

              {/* Examples */}
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-medium text-black">Examples</h2>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap gap-3">
                    <button className="px-8 py-4 rounded-full border-2 border-indigo-500 bg-gray-100 text-indigo-500 text-base font-semibold hover:bg-indigo-50 transition-colors">
                      SaaS Product Launch
                    </button>
                    <button className="px-8 py-4 rounded-full border-2 border-indigo-500 bg-gray-100 text-indigo-500 text-base font-semibold hover:bg-indigo-50 transition-colors">
                      E-commerce Store
                    </button>
                    <button className="px-8 py-4 rounded-full border-2 border-indigo-500 bg-gray-100 text-indigo-500 text-base font-semibold hover:bg-indigo-50 transition-colors">
                      Portfolio Store
                    </button>
                  </div>
                  <button className="w-fit px-8 py-4 rounded-full border-2 border-indigo-500 bg-gray-100 text-indigo-500 text-base font-semibold hover:bg-indigo-50 transition-colors">
                    Online Course Platform
                  </button>
                </div>
              </div>

              {/* Generate Button */}
              <div className="flex justify-end">
                <button className="px-8 py-5 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-lg text-zinc-50 text-xl font-semibold">
                  Generate Page
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Live Preview */}
          <div className="w-full lg:w-[400px] flex flex-col gap-7 p-6 rounded-xl bg-gradient-to-br from-indigo-50/80 via-purple-50/40 to-indigo-50/80">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-black">
                Live Preview
              </h2>
              <p className="text-base text-slate-600">
                Watch your page come to life in real-time
              </p>
            </div>

            {/* Preview Screen */}
            <div className="flex flex-col rounded-2xl bg-white shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center gap-3 px-2 py-3 bg-gray-200">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-1 px-4 py-2 bg-white rounded flex-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-zinc-600"
                  >
                    <path
                      d="M4.00008 14.6665C3.63341 14.6665 3.31964 14.5361 3.05875 14.2752C2.79786 14.0143 2.66719 13.7003 2.66675 13.3332V6.6665C2.66675 6.29984 2.79741 5.98606 3.05875 5.72517C3.32008 5.46428 3.63386 5.33362 4.00008 5.33317H4.66675V3.99984C4.66675 3.07762 4.99186 2.29162 5.64208 1.64184C6.2923 0.99206 7.0783 0.666949 8.00008 0.666504C8.92186 0.66606 9.70808 0.991171 10.3587 1.64184C11.0094 2.2925 11.3343 3.0785 11.3334 3.99984V5.33317H12.0001C12.3667 5.33317 12.6807 5.46384 12.9421 5.72517C13.2034 5.9865 13.3339 6.30028 13.3334 6.6665V13.3332C13.3334 13.6998 13.203 14.0138 12.9421 14.2752C12.6812 14.5365 12.3672 14.6669 12.0001 14.6665H4.00008ZM8.00008 11.3332C8.36675 11.3332 8.68075 11.2027 8.94208 10.9418C9.20341 10.6809 9.33386 10.3669 9.33341 9.99984C9.33297 9.63273 9.20253 9.31895 8.94208 9.0585C8.68164 8.79806 8.36764 8.66739 8.00008 8.6665C7.63253 8.66562 7.31875 8.79628 7.05875 9.0585C6.79875 9.32073 6.66808 9.6345 6.66675 9.99984C6.66541 10.3652 6.79608 10.6792 7.05875 10.9418C7.32142 11.2045 7.63519 11.3349 8.00008 11.3332ZM6.00008 5.33317H10.0001V3.99984C10.0001 3.44428 9.80564 2.97206 9.41675 2.58317C9.02786 2.19428 8.55564 1.99984 8.00008 1.99984C7.44453 1.99984 6.9723 2.19428 6.58341 2.58317C6.19453 2.97206 6.00008 3.44428 6.00008 3.99984V5.33317Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-xs text-gray-500">
                    preview.nebula-ai.com
                  </span>
                </div>
              </div>

              {/* Preview Content */}
              <div className="flex flex-col items-center justify-center gap-6 py-24 px-6">
                <div className="w-40 h-36 rounded-xl bg-gradient-to-r from-indigo-200 to-purple-200 flex items-center justify-center">
                  <div className="w-12 h-11 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.19949 1.34668L16.7264 5.69232V12.2647L18.0534 13.1494L17.5895 13.8452L14.8018 18.0268L14.2359 18.8756L13.5145 18.1543L10.693 15.3327L11.8757 14.15L13.9757 16.2499L16.1978 12.9174L16.6617 12.2216L16.7264 12.2647V10.8724L15.0537 10.8723V7.52715L10.0358 10.4242V18.2464L9.19949 18.7293L1.67261 14.3836V5.69232L9.19949 1.34668ZM3.34522 7.52711V13.4179L8.36314 16.315V10.4242L3.34522 7.52711ZM9.19949 3.27807L4.26519 6.12692L9.19949 8.97572L14.1338 6.12688L9.19949 3.27807Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-medium text-zinc-600 text-center">
                    Preview will update automatically
                  </p>
                  <p className="text-sm text-zinc-600 text-center">
                    as you generate your page
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-1 p-4 bg-white rounded-xl">
                <span className="text-2xl font-bold text-indigo-500">98%</span>
                <span className="text-xs text-zinc-600">Accuracy</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-4 bg-white rounded-xl">
                <span className="text-2xl font-bold text-amber-500">
                  &lt;3s
                </span>
                <span className="text-xs text-zinc-600">Generation</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-4 bg-white rounded-xl">
                <span className="text-2xl font-bold text-red-500">100%</span>
                <span className="text-xs text-zinc-600">Responsive</span>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
              <div className="w-8 h-8 rounded flex items-center justify-center bg-indigo-500/30 flex-shrink-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M7.29562 1.21582C6.1669 1.21582 5.08442 1.6642 4.2863 2.46232C3.48818 3.26044 3.03979 4.34293 3.03979 5.47164C3.03979 6.91862 3.76329 8.18929 4.86372 8.96142V10.3354C4.86372 10.4967 4.92777 10.6513 5.04179 10.7653C5.15581 10.8794 5.31045 10.9434 5.47169 10.9434H9.11954C9.28079 10.9434 9.43543 10.8794 9.54945 10.7653C9.66346 10.6513 9.72752 10.4967 9.72752 10.3354V8.96142C10.828 8.18929 11.5514 6.91862 11.5514 5.47164C11.5514 4.34293 11.1031 3.26044 10.3049 2.46232C9.50682 1.6642 8.42433 1.21582 7.29562 1.21582ZM5.47169 12.7673C5.47169 12.9286 5.53575 13.0832 5.64977 13.1972C5.76378 13.3113 5.91842 13.3753 6.07967 13.3753H8.51157C8.67281 13.3753 8.82745 13.3113 8.94147 13.1972C9.05549 13.0832 9.11954 12.9286 9.11954 12.7673V12.1594H5.47169V12.7673Z"
                    fill="#6366F1"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-semibold text-zinc-900">
                  Pro Tip
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Be specific about layout, colors, and sections. The more
                  detail you provide, the better your result!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State Section */}
      <div className="w-full bg-gradient-to-br from-indigo-50/80 via-purple-50/40 to-indigo-50/80 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-indigo-200/30 flex items-center justify-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
              >
                <path
                  d="M4.25 29.75V26.9167H29.75V29.75H4.25ZM4.25 24.0833V4.25H29.75V24.0833H4.25Z"
                  fill="#3F3F46"
                />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              <span className="text-gray-900">Your </span>
              <span className="text-indigo-500">Generated Page</span>
              <span className="text-gray-900"> Will Appear Here</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-lg">
              Enter a prompt above and click "Generate Page" to see your
              AI-created landing page. You can then preview, edit, and export
              the code.
            </p>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-4">
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M12.3306 7.13914L6.57323 13.0591C6.41323 13.2231 6.1479 13.0331 6.2519 12.8291L8.30123 8.78514C8.31675 8.75462 8.32418 8.72062 8.3228 8.68641C8.32142 8.65219 8.31128 8.61891 8.29335 8.58974C8.27542 8.56057 8.2503 8.53649 8.2204 8.51981C8.19049 8.50312 8.15681 8.4944 8.12257 8.49447H3.8119C3.77253 8.49444 3.73404 8.48279 3.70126 8.46097C3.66848 8.43916 3.64287 8.40816 3.62764 8.37185C3.6124 8.33555 3.60822 8.29555 3.61562 8.25688C3.62302 8.21821 3.64167 8.18259 3.66923 8.15447L9.00923 2.74447C9.1639 2.5878 9.42123 2.7598 9.33523 2.96314L7.8039 6.57314C7.79093 6.60374 7.7858 6.6371 7.78896 6.67018C7.79213 6.70327 7.80349 6.73505 7.82201 6.76264C7.84054 6.79024 7.86566 6.81278 7.89509 6.82823C7.92451 6.84368 7.95733 6.85155 7.99057 6.85114L12.1846 6.79914C12.2241 6.7985 12.263 6.80962 12.2963 6.8311C12.3295 6.85257 12.3557 6.88343 12.3714 6.91976C12.3871 6.9561 12.3916 6.99627 12.3845 7.03521C12.3774 7.07414 12.3588 7.11008 12.3312 7.13847"
                    fill="#18181B"
                  />
                </svg>
                <span className="text-sm text-gray-900 font-medium">
                  Fast Generation
                </span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M8.59322 2L9.89989 2.26667L7.40656 14L6.09989 13.7333L8.59322 2ZM13.0599 8L10.6666 5.60667V3.72L14.9466 8L10.6666 12.2733V10.3867L13.0599 8ZM1.05322 8L5.33322 3.72V5.60667L2.93989 8L5.33322 10.3867V12.2733L1.05322 8Z"
                    fill="#18181B"
                  />
                </svg>
                <span className="text-sm text-gray-900 font-medium">
                  Clean Code
                </span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <g clipPath="url(#clip0_51_71)">
                    <path
                      d="M2.66667 3.99984V10.6665H6V7.99984C6 7.64622 6.14048 7.30708 6.39052 7.05703C6.64057 6.80698 6.97971 6.6665 7.33333 6.6665H10.6667C11.0203 6.6665 11.3594 6.80698 11.6095 7.05703C11.8595 7.30708 12 7.64622 12 7.99984V10.6665H13.3333V3.99984H2.66667ZM0 13.3332V11.9998H2.66667C2.31304 11.9998 1.97391 11.8594 1.72386 11.6093C1.47381 11.3593 1.33333 11.0201 1.33333 10.6665V3.99984C1.33333 3.64622 1.47381 3.30708 1.72386 3.05703C1.97391 2.80698 2.31304 2.6665 2.66667 2.6665H13.3333C13.687 2.6665 14.0261 2.80698 14.2761 3.05703C14.5262 3.30708 14.6667 3.64622 14.6667 3.99984V10.6665C14.6667 11.0201 14.5262 11.3593 14.2761 11.6093C14.0261 11.8594 13.687 11.9998 13.3333 11.9998H16V13.3332H12C12 13.6868 11.8595 14.0259 11.6095 14.276C11.3594 14.526 11.0203 14.6665 10.6667 14.6665H7.33333C6.97971 14.6665 6.64057 14.526 6.39052 14.276C6.14048 14.0259 6 13.6868 6 13.3332H0ZM7.66667 13.3332C7.57826 13.3332 7.49348 13.3683 7.43096 13.4308C7.36845 13.4933 7.33333 13.5781 7.33333 13.6665C7.33333 13.7549 7.36845 13.8397 7.43096 13.9022C7.49348 13.9647 7.57826 13.9998 7.66667 13.9998C7.75507 13.9998 7.83986 13.9647 7.90237 13.9022C7.96488 13.8397 8 13.7549 8 13.6665C8 13.5781 7.96488 13.4933 7.90237 13.4308C7.83986 13.3683 7.75507 13.3332 7.66667 13.3332ZM10.3333 13.3332C10.2449 13.3332 10.1601 13.3683 10.0976 13.4308C10.0351 13.4933 10 13.5781 10 13.6665C10 13.7549 10.0351 13.8397 10.0976 13.9022C10.1601 13.9647 10.2449 13.9998 10.3333 13.9998C10.4217 13.9998 10.5065 13.9647 10.569 13.9022C10.6315 13.8397 10.6667 13.7549 10.6667 13.6665C10.6667 13.5781 10.6315 13.4933 10.569 13.4308C10.5065 13.3683 10.4217 13.3332 10.3333 13.3332ZM8.66667 13.3332V13.9998H9.33333V13.3332H8.66667ZM7.33333 7.99984V12.6665H10.6667V7.99984H7.33333Z"
                      fill="#18181B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_51_71">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-sm text-gray-900 font-medium">
                  Responsive
                </span>
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
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                Generate professional landing pages in seconds
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
              {/* Card 1: Describe Your Page */}
              <div className="relative flex flex-col items-center gap-6 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                {/* Number Badge */}
                <div className="absolute top-6 left-6 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-700">1</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                  >
                    <path
                      d="M27.8414 1.89113L28.5953 2.64502C29.6342 3.68513 29.477 5.52896 28.2414 6.7633L12.6947 22.31L7.65767 24.1526C7.02517 24.3851 6.40928 24.0836 6.28406 23.4817C6.24188 23.2634 6.2618 23.0376 6.34156 22.8301L8.21989 17.7496L23.7232 2.24507C24.9588 1.01074 26.8026 0.851019 27.8414 1.89113ZM12.0162 3.43724C12.184 3.43724 12.3501 3.47029 12.5052 3.53451C12.6602 3.59872 12.801 3.69284 12.9197 3.81149C13.0383 3.93015 13.1325 4.07101 13.1967 4.22603C13.2609 4.38106 13.2939 4.54722 13.2939 4.71502C13.2939 4.88282 13.2609 5.04898 13.1967 5.204C13.1325 5.35903 13.0383 5.49989 12.9197 5.61854C12.801 5.7372 12.6602 5.83132 12.5052 5.89553C12.3501 5.95975 12.184 5.9928 12.0162 5.9928H6.90506C6.22728 5.9928 5.57727 6.26204 5.09801 6.7413C4.61875 7.22056 4.3495 7.87058 4.3495 8.54835V23.8817C4.3495 24.5595 4.61875 25.2095 5.09801 25.6887C5.57727 26.168 6.22728 26.4372 6.90506 26.4372H22.2384C22.9162 26.4372 23.5662 26.168 24.0454 25.6887C24.5247 25.2095 24.7939 24.5595 24.7939 23.8817V18.7706C24.7939 18.4317 24.9286 18.1067 25.1682 17.8671C25.4078 17.6274 25.7328 17.4928 26.0717 17.4928C26.4106 17.4928 26.7356 17.6274 26.9753 17.8671C27.2149 18.1067 27.3495 18.4317 27.3495 18.7706V23.8817C27.3495 25.2372 26.811 26.5373 25.8525 27.4958C24.894 28.4543 23.5939 28.9928 22.2384 28.9928H6.90506C5.54951 28.9928 4.24947 28.4543 3.29096 27.4958C2.33244 26.5373 1.79395 25.2372 1.79395 23.8817V8.54835C1.79395 7.1928 2.33244 5.89277 3.29096 4.93425C4.24947 3.97573 5.54951 3.43724 6.90506 3.43724H12.0162Z"
                      fill="#6366F1"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Describe Your Page
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Tell us what kind of landing page you need in plain English
                  </p>
                </div>
              </div>

              {/* Card 2: AI Generates Code */}
              <div className="relative flex flex-col items-center gap-6 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                {/* Number Badge */}
                <div className="absolute top-6 left-6 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-700">2</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                  >
                    <path
                      d="M24.2778 20.7638C24.4913 20.764 24.6987 20.8355 24.867 20.967C25.0353 21.0985 25.1549 21.2824 25.2067 21.4896L25.5785 22.9757L27.0659 23.3475C27.2731 23.3994 27.457 23.5191 27.5884 23.6875C27.7198 23.8559 27.7912 24.0634 27.7912 24.2771C27.7912 24.4907 27.7198 24.6982 27.5884 24.8666C27.457 25.035 27.2731 25.1547 27.0659 25.2067L25.5785 25.5785L25.208 27.0658C25.1565 27.2736 25.0369 27.4582 24.8683 27.5901C24.6997 27.7221 24.4918 27.7937 24.2778 27.7937C24.0637 27.7937 23.8558 27.7221 23.6872 27.5901C23.5186 27.4582 23.399 27.2736 23.3475 27.0658L22.977 25.5785L21.4896 25.2079C21.2818 25.1565 21.0973 25.0369 20.9653 24.8683C20.8334 24.6997 20.7617 24.4918 20.7617 24.2777C20.7617 24.0636 20.8334 23.8557 20.9653 23.6871C21.0973 23.5185 21.2818 23.399 21.4896 23.3475L22.9757 22.9769L23.3475 21.4896C23.3994 21.2822 23.5192 21.0981 23.6877 20.9666C23.8563 20.8351 24.064 20.7637 24.2778 20.7638ZM5.24398 3.20332C5.62475 2.09038 7.26925 2.12743 7.56698 3.31449L7.9452 4.83249L9.4632 5.21199C10.6899 5.51865 10.6899 7.26026 9.4632 7.56565L7.9452 7.94515L7.56698 9.46315C7.26031 10.6898 5.5187 10.6898 5.21203 9.46315L4.83253 7.94515L3.31453 7.56565C2.08786 7.25899 2.08786 5.51865 3.31453 5.21199L4.83253 4.83249L5.21203 3.31449L5.24398 3.20332ZM6.38886 6.12943C6.31533 6.22792 6.22796 6.31528 6.12948 6.38882C6.22796 6.46236 6.31533 6.54972 6.38886 6.64821C6.4624 6.54972 6.54976 6.46236 6.64825 6.38882C6.54967 6.31489 6.46231 6.22837 6.38886 6.12943ZM21.3874 4.76221C21.6989 4.45088 22.1213 4.27599 22.5617 4.27599C23.0021 4.27599 23.4245 4.45088 23.736 4.76221L25.9044 6.9306C26.2157 7.24209 26.3906 7.66447 26.3906 8.10488C26.3906 8.54528 26.2157 8.96766 25.9044 9.27915L23.4651 11.7197L18.9469 7.20149L21.3874 4.76221ZM11.2674 23.9174C11.1783 24.0061 11.0649 24.0666 10.9416 24.0912L6.42336 24.9945C6.3203 25.0151 6.21377 25.0098 6.11321 24.9793C6.01265 24.9488 5.92117 24.894 5.84686 24.8197C5.77256 24.7454 5.71773 24.6539 5.68723 24.5534C5.65673 24.4528 5.65151 24.3463 5.67203 24.2432L6.57542 19.7263C6.60013 19.6023 6.66105 19.4885 6.75048 19.3992L18.0435 8.10488L22.5617 12.6231L11.2674 23.9174Z"
                      fill="#F59E0B"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="text-xl font-semibold text-slate-900">
                    AI Generates Code
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Our AI creates a complete page using your design system
                  </p>
                </div>
              </div>

              {/* Card 3: Export & Use */}
              <div className="relative flex flex-col items-center gap-6 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                {/* Number Badge */}
                <div className="absolute top-6 left-6 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-700">3</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                  >
                    <path
                      d="M11.1296 9.85175L14.0557 6.91286V19.1668C14.0557 19.5056 14.1903 19.8306 14.4299 20.0703C14.6695 20.3099 14.9946 20.4445 15.3334 20.4445C15.6723 20.4445 15.9973 20.3099 16.237 20.0703C16.4766 19.8306 16.6112 19.5056 16.6112 19.1668V6.91286L19.5373 9.85175C19.6561 9.97152 19.7974 10.0666 19.9531 10.1314C20.1089 10.1963 20.2759 10.2297 20.4446 10.2297C20.6132 10.2297 20.7802 10.1963 20.936 10.1314C21.0917 10.0666 21.233 9.97152 21.3518 9.85175C21.4715 9.73297 21.5666 9.59164 21.6315 9.43593C21.6963 9.28022 21.7297 9.11321 21.7297 8.94453C21.7297 8.77585 21.6963 8.60883 21.6315 8.45313C21.5666 8.29742 21.4715 8.15609 21.3518 8.03731L16.2407 2.9262C16.1191 2.80987 15.9758 2.71868 15.819 2.65786C15.5079 2.53006 15.159 2.53006 14.8479 2.65786C14.691 2.71868 14.5477 2.80987 14.4262 2.9262L9.31511 8.03731C9.19597 8.15645 9.10147 8.29788 9.03699 8.45354C8.97251 8.60921 8.93932 8.77604 8.93932 8.94453C8.93932 9.11302 8.97251 9.27985 9.03699 9.43551C9.10147 9.59118 9.19597 9.73261 9.31511 9.85175C9.43425 9.97089 9.57568 10.0654 9.73135 10.1299C9.88701 10.1943 10.0538 10.2275 10.2223 10.2275C10.3908 10.2275 10.5577 10.1943 10.7133 10.1299C10.869 10.0654 11.0104 9.97089 11.1296 9.85175ZM26.8334 17.889C26.4946 17.889 26.1695 18.0236 25.9299 18.2632C25.6903 18.5029 25.5557 18.8279 25.5557 19.1668V24.2779C25.5557 24.6168 25.421 24.9418 25.1814 25.1814C24.9418 25.421 24.6168 25.5556 24.2779 25.5556H6.389C6.05011 25.5556 5.7251 25.421 5.48547 25.1814C5.24584 24.9418 5.11122 24.6168 5.11122 24.2779V19.1668C5.11122 18.8279 4.9766 18.5029 4.73697 18.2632C4.49734 18.0236 4.17233 17.889 3.83344 17.889C3.49455 17.889 3.16955 18.0236 2.92992 18.2632C2.69029 18.5029 2.55566 18.8279 2.55566 19.1668V24.2779C2.55566 25.2945 2.95953 26.2696 3.67842 26.9884C4.39731 27.7073 5.37233 28.1112 6.389 28.1112H24.2779C25.2945 28.1112 26.2696 27.7073 26.9885 26.9884C27.7074 26.2696 28.1112 25.2945 28.1112 24.2779V19.1668C28.1112 18.8279 27.9766 18.5029 27.737 18.2632C27.4973 18.0236 27.1723 17.889 26.8334 17.889Z"
                      fill="#22C55E"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Export & Use
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Preview, customize, and export production-ready code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
