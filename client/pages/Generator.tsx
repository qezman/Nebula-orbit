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
                Describe your vision in natural language and watch as our AI crafts a stunning, fully-responsive landing page tailored to your needs.
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
              <h2 className="text-2xl font-semibold text-black">Live Preview</h2>
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
                <span className="text-2xl font-bold text-amber-500">&lt;3s</span>
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
                <h3 className="text-base font-semibold text-zinc-900">Pro Tip</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Be specific about layout, colors, and sections. The more detail you provide, the better your result!
                </p>
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
