import { Link } from "react-router-dom";

export default function AINavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-2.5 py-2.5">
        <div className="flex items-center justify-center h-[70px] gap-[135px]">
          {/* Logo */}
          <div className="flex items-center justify-center p-2.5">
            <button className="flex items-center justify-center gap-2.5 px-1.5 py-1.5 rounded bg-zinc-200 transition-colors hover:bg-zinc-300">
              <div className="w-5 h-5 rounded bg-zinc-800" />
              <span className="text-center font-inter text-xl font-medium leading-6 text-zinc-700">
                Features
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center justify-center gap-5 p-2.5">
            <button className="flex items-center justify-center gap-2.5 rounded bg-zinc-200 transition-colors hover:bg-zinc-300">
              <span className="text-center font-inter text-xl font-medium leading-6 text-zinc-700 px-2.5 py-1.5">
                Features
              </span>
            </button>
            <button className="flex items-center justify-center gap-2.5 rounded bg-zinc-200 transition-colors hover:bg-zinc-300">
              <span className="text-center font-inter text-xl font-medium leading-6 text-zinc-700 px-2.5 py-1.5">
                Features
              </span>
            </button>
            <button className="flex items-center justify-center gap-2.5 rounded bg-zinc-200 transition-colors hover:bg-zinc-300">
              <span className="text-center font-inter text-xl font-medium leading-6 text-zinc-700 px-2.5 py-1.5">
                Features
              </span>
            </button>
            <button className="flex items-center justify-center gap-2.5 rounded bg-zinc-200 transition-colors hover:bg-zinc-300">
              <span className="text-center font-inter text-xl font-medium leading-6 text-zinc-700 px-2.5 py-1.5">
                Features
              </span>
            </button>
          </div>

          {/* CTAs */}
          <div className="hidden sm:flex items-center justify-center gap-5 p-2.5 flex-1">
            <button className="flex items-center justify-center gap-2.5 px-1.5 py-1.5 rounded bg-zinc-200 transition-colors hover:bg-zinc-300">
              <span className="text-center font-inter text-xl font-medium leading-6 text-zinc-700">
                Features
              </span>
            </button>
            <button className="flex items-center justify-center gap-2.5 px-1.5 py-1.5 rounded bg-zinc-200 transition-colors hover:bg-zinc-300">
              <span className="text-center font-inter text-xl font-medium leading-6 text-zinc-700">
                Features
              </span>
            </button>
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
