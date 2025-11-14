export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-3.5"
              >
                <g clipPath="url(#clip0_11_789)">
                  <path
                    d="M6.41758 1.16758L5.38672 1.55313C5.30469 1.5832 5.25 1.6625 5.25 1.75C5.25 1.8375 5.30469 1.9168 5.38672 1.94687L6.41758 2.33242L6.80312 3.36328C6.8332 3.44531 6.9125 3.5 7 3.5C7.0875 3.5 7.1668 3.44531 7.19688 3.36328L7.58242 2.33242L8.61328 1.94687C8.69531 1.9168 8.75 1.8375 8.75 1.75C8.75 1.6625 8.69531 1.5832 8.61328 1.55313L7.58242 1.16758L7.19688 0.136719C7.1668 0.0546875 7.0875 0 7 0C6.9125 0 6.8332 0.0546875 6.80312 0.136719L6.41758 1.16758ZM1.26055 10.8117C0.749219 11.323 0.749219 12.1543 1.26055 12.6684L2.20664 13.6145C2.71797 14.1258 3.54922 14.1258 4.06328 13.6145L14.4895 3.18555C15.0008 2.67422 15.0008 1.84297 14.4895 1.32891L13.5434 0.385547C13.032 -0.125781 12.2008 -0.125781 11.6867 0.385547L1.26055 10.8117ZM13.2508 2.25859L10.3797 5.12969L9.74258 4.49258L12.6137 1.62148L13.2508 2.25859ZM0.205078 3.20469C0.0820312 3.25117 0 3.36875 0 3.5C0 3.63125 0.0820312 3.74883 0.205078 3.79531L1.75 4.375L2.32969 5.91992C2.37617 6.04297 2.49375 6.125 2.625 6.125C2.75625 6.125 2.87383 6.04297 2.92031 5.91992L3.5 4.375L5.04492 3.79531C5.16797 3.74883 5.25 3.63125 5.25 3.5C5.25 3.36875 5.16797 3.25117 5.04492 3.20469L3.5 2.625L2.92031 1.08008C2.87383 0.957031 2.75625 0.875 2.625 0.875C2.49375 0.875 2.37617 0.957031 2.32969 1.08008L1.75 2.625L0.205078 3.20469ZM9.83008 10.2047C9.70703 10.2512 9.625 10.3687 9.625 10.5C9.625 10.6313 9.70703 10.7488 9.83008 10.7953L11.375 11.375L11.9547 12.9199C12.0012 13.043 12.1187 13.125 12.25 13.125C12.3813 13.125 12.4988 13.043 12.5453 12.9199L13.125 11.375L14.6699 10.7953C14.793 10.7488 14.875 10.6313 14.875 10.5C14.875 10.3687 14.793 10.2512 14.6699 10.2047L13.125 9.625L12.5453 8.08008C12.4988 7.95703 12.3813 7.875 12.25 7.875C12.1187 7.875 12.0012 7.95703 11.9547 8.08008L11.375 9.625L9.83008 10.2047Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11_789">
                    <path d="M0 0H15.75V14H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-indigo-500 text-2xl sm:text-3xl font-semibold tracking-tight">
              Nebula
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#features"
              className="text-zinc-700 text-lg font-medium hover:text-indigo-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#templates"
              className="text-zinc-700 text-lg font-medium hover:text-indigo-500 transition-colors"
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="text-zinc-700 text-lg font-medium hover:text-indigo-500 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="text-zinc-700 text-lg font-medium hover:text-indigo-500 transition-colors"
            >
              Docs
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3 ml-auto">
            <button className="px-5 py-3 text-indigo-500 text-lg font-semibold hover:text-indigo-600 transition-colors">
              Get Started
            </button>
            <button className="px-5 py-3 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-lg text-zinc-50 text-lg font-semibold">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden ml-auto p-2 text-zinc-700 hover:text-indigo-500">
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
