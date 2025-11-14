export default function AINavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-2.5 py-2.5 flex flex-col justify-center items-center gap-2.5">
        <div className="h-[70px] w-full max-w-[1100px] flex justify-center items-center gap-8 lg:gap-[135px]">
          {/* Logo */}
          <div className="flex p-2.5 justify-center items-center gap-2.5">
            <div className="flex py-1.5 justify-center items-center gap-2.5 rounded bg-zinc-200 px-3">
              <div className="w-20 h-6" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex p-2.5 justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-2.5 rounded bg-zinc-200 px-3 py-1.5">
              <div className="w-20 h-6" />
            </div>
            <div className="flex justify-center items-center gap-2.5 rounded bg-zinc-200 px-3 py-1.5">
              <div className="w-20 h-6" />
            </div>
            <div className="flex justify-center items-center gap-2.5 rounded bg-zinc-200 px-3 py-1.5">
              <div className="w-20 h-6" />
            </div>
            <div className="flex justify-center items-center gap-2.5 rounded bg-zinc-200 px-3 py-1.5">
              <div className="w-20 h-6" />
            </div>
          </div>

          {/* CTAs */}
          <div className="hidden sm:flex p-2.5 justify-center items-center gap-5 flex-1 self-stretch">
            <div className="flex py-1.5 justify-center items-center gap-2.5 rounded bg-zinc-200 px-3">
              <div className="w-20 h-6" />
            </div>
            <div className="flex py-1.5 justify-center items-center gap-2.5 rounded bg-zinc-200 px-3">
              <div className="w-20 h-6" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden ml-auto p-2 text-zinc-700 hover:text-indigo-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
