import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Branding Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 h-2"
                >
                  <g clipPath="url(#clip0_38_481)">
                    <path
                      d="M4.01099 0.729736L3.3667 0.970703C3.31543 0.989502 3.28125 1.03906 3.28125 1.09375C3.28125 1.14844 3.31543 1.198 3.3667 1.2168L4.01099 1.45776L4.25195 2.10205C4.27075 2.15332 4.32031 2.1875 4.375 2.1875C4.42969 2.1875 4.47925 2.15332 4.49805 2.10205L4.73901 1.45776L5.3833 1.2168C5.43457 1.198 5.46875 1.14844 5.46875 1.09375C5.46875 1.03906 5.43457 0.989502 5.3833 0.970703L4.73901 0.729736L4.49805 0.0854492C4.47925 0.0341797 4.42969 0 4.375 0C4.32031 0 4.27075 0.0341797 4.25195 0.0854492L4.01099 0.729736ZM0.787842 6.75732C0.468262 7.0769 0.468262 7.59644 0.787842 7.91772L1.37915 8.50903C1.69873 8.82861 2.21826 8.82861 2.53955 8.50903L9.05591 1.99097C9.37549 1.67139 9.37549 1.15186 9.05591 0.830566L8.4646 0.240967C8.14502 -0.0786133 7.62549 -0.0786133 7.3042 0.240967L0.787842 6.75732ZM8.28174 1.41162L6.4873 3.20605L6.08911 2.80786L7.88354 1.01343L8.28174 1.41162ZM0.128174 2.00293C0.0512695 2.03198 0 2.10547 0 2.1875C0 2.26953 0.0512695 2.34302 0.128174 2.37207L1.09375 2.73438L1.45605 3.69995C1.48511 3.77686 1.55859 3.82812 1.64062 3.82812C1.72266 3.82812 1.79614 3.77686 1.8252 3.69995L2.1875 2.73438L3.15308 2.37207C3.22998 2.34302 3.28125 2.26953 3.28125 2.1875C3.28125 2.10547 3.22998 2.03198 3.15308 2.00293L2.1875 1.64062L1.8252 0.675049C1.79614 0.598145 1.72266 0.546875 1.64062 0.546875C1.55859 0.546875 1.48511 0.598145 1.45605 0.675049L1.09375 1.64062L0.128174 2.00293ZM6.1438 6.37793C6.06689 6.40698 6.01562 6.48047 6.01562 6.5625C6.01562 6.64453 6.06689 6.71802 6.1438 6.74707L7.10938 7.10938L7.47168 8.07495C7.50073 8.15186 7.57422 8.20312 7.65625 8.20312C7.73828 8.20312 7.81177 8.15186 7.84082 8.07495L8.20312 7.10938L9.1687 6.74707C9.24561 6.71802 9.29688 6.64453 9.29688 6.5625C9.29688 6.48047 9.24561 6.40698 9.1687 6.37793L8.20312 6.01562L7.84082 5.05005C7.81177 4.97314 7.73828 4.92188 7.65625 4.92188C7.57422 4.92188 7.50073 4.97314 7.47168 5.05005L7.10938 6.01562L6.1438 6.37793Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_38_481">
                      <path d="M0 0H9.84375V8.75H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-xl font-semibold text-indigo-500">
                Nebula
              </span>
            </div>
            <p className="text-base text-zinc-700 leading-relaxed">
              Transform your designs into production-ready code with AI
              precision.
            </p>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-zinc-900">Product</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/"
                  className={`text-base transition-colors ${isActive("/") ? "text-indigo-500 font-semibold" : "text-zinc-700 hover:text-indigo-500"}`}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/templates"
                  className={`text-base transition-colors ${isActive("/templates") ? "text-indigo-500 font-semibold" : "text-zinc-700 hover:text-indigo-500"}`}
                >
                  Templates
                </Link>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-base text-zinc-700 hover:text-indigo-500 transition-colors opacity-50 cursor-not-allowed"
                  title="Coming Soon"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#changelog"
                  className="text-base text-zinc-700 hover:text-indigo-500 transition-colors opacity-50 cursor-not-allowed"
                  title="Coming Soon"
                >
                  Change log
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-zinc-900">Resources</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#docs"
                  className="text-base text-zinc-700 hover:text-indigo-500 transition-colors opacity-50 cursor-not-allowed"
                  title="Coming Soon"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#tutorials"
                  className="text-base text-zinc-700 hover:text-indigo-500 transition-colors opacity-50 cursor-not-allowed"
                  title="Coming Soon"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-base text-zinc-700 hover:text-indigo-500 transition-colors opacity-50 cursor-not-allowed"
                  title="Coming Soon"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-base text-zinc-700 hover:text-indigo-500 transition-colors opacity-50 cursor-not-allowed"
                  title="Coming Soon"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-zinc-900">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/about"
                  className={`text-base transition-colors ${isActive("/about") ? "text-indigo-500 font-semibold" : "text-zinc-700 hover:text-indigo-500"}`}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-base text-zinc-700 hover:text-indigo-500 transition-colors cursor-not-allowed opacity-50"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-base text-zinc-700 hover:text-indigo-500 transition-colors cursor-not-allowed opacity-50"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-base text-zinc-700 hover:text-indigo-500 transition-colors cursor-not-allowed opacity-50"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-700">
            © {new Date().getFullYear()} Nebula. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-zinc-900 hover:text-indigo-500 transition-colors"
              aria-label="Facebook"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M17 14H14V22H10V14H7V10H10V7C10 5.67392 10.5268 4.40215 11.4645 3.46447C12.4021 2.52678 13.6739 2 15 2H18V6H15C14.3333 6 14 6.33333 14 7V10H18L17 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-900 hover:text-indigo-500 transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-900 hover:text-indigo-500 transition-colors"
              aria-label="Twitter"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <g clipPath="url(#clip0_38_515)">
                  <mask
                    id="mask0_38_515"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="14"
                    height="14"
                  >
                    <path d="M0 0H14V14H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_38_515)">
                    <path
                      d="M11.025 0.65625H13.172L8.482 6.03025L14 13.3442H9.68L6.294 8.90925L2.424 13.3442H0.275L5.291 7.59425L0 0.65725H4.43L7.486 4.71025L11.025 0.65625ZM10.27 12.0562H11.46L3.78 1.87725H2.504L10.27 12.0562Z"
                      fill="currentColor"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_38_515">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-900 hover:text-indigo-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M18 3C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18ZM18 5H6C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5ZM8 10C8.24493 10 8.48134 10.09 8.66437 10.2527C8.84741 10.4155 8.96434 10.6397 8.993 10.883L9 11V16C8.99972 16.2549 8.90212 16.5 8.72715 16.6854C8.55218 16.8707 8.31305 16.9822 8.05861 16.9972C7.80416 17.0121 7.55362 16.9293 7.35817 16.7657C7.16271 16.6021 7.0371 16.3701 7.007 16.117L7 16V11C7 10.7348 7.10536 10.4804 7.29289 10.2929C7.48043 10.1054 7.73478 10 8 10ZM11 9C11.2342 8.99996 11.461 9.08213 11.6408 9.23216C11.8206 9.3822 11.9421 9.59059 11.984 9.821C12.1854 9.70468 12.3934 9.60017 12.607 9.508C13.274 9.223 14.273 9.066 15.175 9.349C15.648 9.499 16.123 9.779 16.475 10.256C16.79 10.681 16.96 11.198 16.994 11.779L17 12V16C16.9997 16.2549 16.9021 16.5 16.7272 16.6854C16.5522 16.8707 16.313 16.9822 16.0586 16.9972C15.8042 17.0121 15.5536 16.9293 15.3582 16.7657C15.1627 16.6021 15.0371 16.3701 15.007 16.117L15 16V12C15 11.67 14.92 11.516 14.868 11.445C14.7933 11.3523 14.6904 11.2863 14.575 11.257C14.227 11.147 13.726 11.205 13.393 11.347C12.893 11.561 12.435 11.897 12.123 12.208L12 12.34V16C11.9997 16.2549 11.9021 16.5 11.7272 16.6854C11.5522 16.8707 11.313 16.9822 11.0586 16.9972C10.8042 17.0121 10.5536 16.9293 10.3582 16.7657C10.1627 16.6021 10.0371 16.3701 10.007 16.117L10 16V10C10 9.73478 10.1054 9.48043 10.2929 9.29289C10.4804 9.10536 10.7348 9 11 9ZM8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8C9 8.26522 8.89464 8.51957 8.70711 8.70711C8.51957 8.89464 8.26522 9 8 9C7.73478 9 7.48043 8.89464 7.29289 8.70711C7.10536 8.51957 7 8.26522 7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-900 hover:text-indigo-500 transition-colors"
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
