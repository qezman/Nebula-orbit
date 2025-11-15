import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      {/* Hero Section - Full Height */}
      <section className="w-full bg-surface-2 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto">
            {/* Heading */}
            <h1 className="w-full text-center text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-tight lg:leading-[68px] tracking-tight lg:tracking-[-0.5px]">
              <span className="text-indigo-500">About</span>
              <span className="text-text-primary"> the Project</span>
            </h1>

            {/* Description */}
            <p className="w-full text-center text-base sm:text-lg text-text-tertiary font-normal leading-relaxed lg:leading-7">
              A thoughtful exploration of modern design systems, built with
              intention and care for the craft of digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Journey Section */}
      <section className="w-full bg-surface-2 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
            {/* Our Philosophy */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl font-medium leading-tight tracking-tight lg:tracking-[-0.2px]">
                  <span className="text-text-secondary">Our </span>
                  <span className="text-indigo-500">Philosophy</span>
                </h2>

                <p className="text-base text-text-secondary leading-6">
                  We believe in the power of simplicity and clarity. Every
                  design decision is made with the user's experience at the
                  forefront, ensuring that form always follows function while
                  maintaining an aesthetic that feels timeless.
                </p>

                <p className="text-base text-text-secondary leading-6">
                  This project emerged from a desire to bridge the gap between
                  design tools and production code. We wanted to create a
                  seamless workflow that respects both the creative process and
                  technical implementation.
                </p>

                <p className="text-base text-text-secondary leading-6">
                  Through careful consideration of typography, spacing, and
                  color, we've crafted an environment that encourages focus and
                  reduces cognitive load. The result is a system that feels
                  natural and intuitive.
                </p>
              </div>
            </div>

            {/* The Journey */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl font-medium leading-tight tracking-tight lg:tracking-[-0.2px]">
                  <span className="text-text-secondary">The </span>
                  <span className="text-indigo-500">Journey</span>
                </h2>

                <p className="text-base text-text-secondary leading-6">
                  We believe in the power of simplicity and clarity. Every
                  design decision is made with the user's experience at the
                  forefront, ensuring that form always follows function while
                  maintaining an aesthetic that feels timeless.
                </p>

                <p className="text-base text-text-secondary leading-6">
                  This project emerged from a desire to bridge the gap between
                  design tools and production code. We wanted to create a
                  seamless workflow that respects both the creative process and
                  technical implementation.
                </p>

                <p className="text-base text-text-secondary leading-6">
                  Through careful consideration of typography, spacing, and
                  color, we've crafted an environment that encourages focus and
                  reduces cognitive load. The result is a system that feels
                  natural and intuitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="w-full bg-surface-2 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center gap-12 lg:gap-14">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-3 text-center max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight lg:tracking-[-0.2px]">
                <span className="text-text-primary">System </span>
                <span className="text-indigo-500">Architecture</span>
              </h2>
              <p className="text-base sm:text-lg text-text-tertiary leading-relaxed lg:leading-7">
                A seamless pipeline from design to deployment
              </p>
            </div>

            {/* Cards with Arrows */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full max-w-5xl">
              {/* Card 1: Figma */}
              <div className="flex flex-col items-center gap-6 p-6 w-full md:w-44 border border-gray-200 rounded-lg bg-gray-50 shadow-md">
                <div className="flex items-center justify-center p-2 rounded-lg bg-purple-500/15">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M22.0495 11.334C22.7135 10.8992 23.2586 10.3059 23.6359 9.60764C24.0131 8.90939 24.2105 8.12819 24.2103 7.33455C24.2082 6.06774 23.7041 4.85338 22.8083 3.95761C21.9125 3.06183 20.6982 2.55769 19.4314 2.55566H11.2255C9.95865 2.55769 8.7443 3.06183 7.84852 3.95761C6.95275 4.85338 6.44861 6.06774 6.44658 7.33455C6.44658 9.00716 7.30908 10.4817 8.6073 11.334C7.94348 11.7689 7.39836 12.3623 7.02109 13.0605C6.64383 13.7587 6.44629 14.5398 6.44629 15.3334C6.44629 16.1271 6.64383 16.9082 7.02109 17.6064C7.39836 18.3046 7.94348 18.898 8.6073 19.3329C7.94337 19.7677 7.39818 20.361 7.02095 21.0592C6.64372 21.7575 6.44632 22.5387 6.44658 23.3323C6.44658 25.9709 8.6073 28.1112 11.2561 28.1112C13.9369 28.1112 16.1181 25.939 16.1181 23.2812V18.8652C16.9998 19.6656 18.1473 20.11 19.3381 20.1123H19.4429C20.7097 20.1103 21.924 19.6062 22.8198 18.7104C23.7156 17.8146 24.2197 16.6003 24.2217 15.3334C24.2173 14.5394 24.0167 13.7588 23.6377 13.061C23.2588 12.3632 22.7132 11.77 22.0495 11.334ZM14.549 23.2812C14.5439 24.151 14.1947 24.9833 13.5776 25.5963C12.9606 26.2093 12.1259 26.553 11.2561 26.5523C10.3996 26.5544 9.57733 26.2164 8.96977 25.6127C8.36222 25.009 8.01907 24.1888 8.01569 23.3323C8.01569 21.5562 9.45958 20.1226 11.2255 20.1123H14.549V23.2812ZM14.549 18.5534H11.2255C10.8033 18.5528 10.3854 18.469 9.99557 18.3068C9.60578 18.1446 9.25175 17.9072 8.9537 17.6082C8.65564 17.3092 8.4194 16.9544 8.25845 16.5641C8.09751 16.1738 8.01502 15.7556 8.01569 15.3334C8.01569 13.5573 9.45958 12.1134 11.2357 12.1134H14.5605V18.5534H14.549ZM14.549 10.5546H11.2255C9.44936 10.5546 8.00547 9.11066 8.00547 7.33455C8.00547 5.55844 9.44936 4.11455 11.2255 4.11455H14.549V10.5546ZM16.1079 4.11455H19.4314C21.2075 4.11455 22.6514 5.55844 22.6514 7.33455C22.6514 9.11066 21.2075 10.5546 19.4314 10.5546H16.1079V4.11455ZM19.4314 18.5534H19.3291C17.5517 18.5534 16.1079 17.1096 16.1079 15.3334C16.1079 13.5573 17.5517 12.1134 19.3279 12.1134H19.4326C21.2087 12.1134 22.6526 13.5573 22.6526 15.3334C22.6526 17.1096 21.2087 18.5534 19.4326 18.5534" fill="#9333EA"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-4 items-center w-full">
                  <h3 className="text-base font-medium text-text-tertiary text-center tracking-tight">
                    Figma
                  </h3>
                  <p className="text-base text-text-tertiary text-center leading-6">
                    Design & Prototype
                  </p>
                </div>
              </div>

              {/* Arrow 1 */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block w-9 h-9 flex-shrink-0">
                <path d="M19.9034 5.50298C20.3535 5.05305 20.9638 4.80029 21.6002 4.80029C22.2366 4.80029 22.8469 5.05305 23.297 5.50298L34.097 16.303C34.5469 16.753 34.7997 17.3634 34.7997 17.9998C34.7997 18.6362 34.5469 19.2465 34.097 19.6966L23.297 30.4966C22.8444 30.9338 22.2381 31.1757 21.6088 31.1702C20.9796 31.1647 20.3776 30.9123 19.9326 30.4673C19.4877 30.0224 19.2352 29.4204 19.2298 28.7911C19.2243 28.1619 19.4662 27.5556 19.9034 27.103L26.4002 20.3998H3.6002C2.96368 20.3998 2.35323 20.1469 1.90314 19.6968C1.45305 19.2467 1.2002 18.6363 1.2002 17.9998C1.2002 17.3633 1.45305 16.7528 1.90314 16.3027C2.35323 15.8526 2.96368 15.5998 3.6002 15.5998L26.4002 15.5998L19.9034 8.89658C19.4535 8.44651 19.2007 7.83617 19.2007 7.19978C19.2007 6.56339 19.4535 5.95305 19.9034 5.50298Z" fill="#A1A1AA"/>
              </svg>

              {/* Card 2: Fusion */}
              <div className="flex flex-col items-center gap-6 p-6 w-full md:w-44 border border-gray-200 rounded-lg bg-gray-50 shadow-md">
                <div className="flex items-center justify-center p-2 rounded-lg bg-indigo-500/15">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0557 2.05713L25.5557 8.69664V18.7383L27.5831 20.09L26.8744 21.1531L22.6151 27.542L21.7505 28.8389L20.6485 27.7368L16.3375 23.4258L18.1446 21.6187L21.3531 24.8271L24.748 19.7356L25.4568 18.6724L25.5557 18.7383V16.611L23.0001 16.611V11.5L15.3334 15.9263V27.8775L14.0557 28.6152L2.55566 21.9757V8.69664L14.0557 2.05713ZM5.11118 11.4999V20.5003L12.7778 24.9266V15.9263L5.11118 11.4999ZM14.0557 5.00802L6.51676 9.36065L14.0557 13.7132L21.5946 9.36059L14.0557 5.00802Z" fill="#6366F1"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-4 items-center w-full">
                  <h3 className="text-base font-medium text-text-tertiary text-center tracking-tight">
                    Fusion
                  </h3>
                  <p className="text-base text-text-tertiary text-center leading-6">
                    Process & Transform
                  </p>
                </div>
              </div>

              {/* Arrow 2 */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block w-9 h-9 flex-shrink-0">
                <path d="M19.9034 5.50298C20.3535 5.05305 20.9638 4.80029 21.6002 4.80029C22.2366 4.80029 22.8469 5.05305 23.297 5.50298L34.097 16.303C34.5469 16.753 34.7997 17.3634 34.7997 17.9998C34.7997 18.6362 34.5469 19.2465 34.097 19.6966L23.297 30.4966C22.8444 30.9338 22.2381 31.1757 21.6088 31.1702C20.9796 31.1647 20.3776 30.9123 19.9326 30.4673C19.4877 30.0224 19.2352 29.4204 19.2298 28.7911C19.2243 28.1619 19.4662 27.5556 19.9034 27.103L26.4002 20.3998H3.6002C2.96368 20.3998 2.35323 20.1469 1.90314 19.6968C1.45305 19.2467 1.2002 18.6363 1.2002 17.9998C1.2002 17.3633 1.45305 16.7528 1.90314 16.3027C2.35323 15.8526 2.96368 15.5998 3.6002 15.5998L26.4002 15.5998L19.9034 8.89658C19.4535 8.44651 19.2007 7.83617 19.2007 7.19978C19.2007 6.56339 19.4535 5.95305 19.9034 5.50298Z" fill="#A1A1AA"/>
              </svg>

              {/* Card 3: Builder */}
              <div className="flex flex-col items-center gap-6 p-6 w-full md:w-44 border border-gray-200 rounded-lg bg-gray-50 shadow-md">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/15">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M16.7806 14.5419L15.2167 12.9775C14.8585 12.6192 14.373 12.4173 13.8664 12.4159C13.3597 12.4146 12.8732 12.6139 12.513 12.9703L1.64015 23.0046C1.24424 23.3778 0.984295 23.8534 0.960337 24.3858C0.948773 24.6499 0.991793 24.9136 1.08671 25.1603C1.18162 25.407 1.32639 25.6315 1.51198 25.8197L3.84791 28.1814C3.84917 28.183 3.85057 28.1844 3.85211 28.1856C4.21312 28.5454 4.7015 28.7481 5.21114 28.7498H5.28182C5.81429 28.7301 6.29107 28.4803 6.66961 28.0808L16.774 17.2576C16.9532 17.08 17.0956 16.8687 17.1929 16.6359C17.2902 16.4032 17.3407 16.1535 17.3413 15.9012C17.3419 15.6488 17.2927 15.3989 17.1965 15.1657C17.1003 14.9324 16.9589 14.7205 16.7806 14.5419ZM29.3492 11.38L29.3306 11.3615L27.278 9.32981C27.1577 9.20998 27.015 9.11514 26.8579 9.05079C26.7008 8.98643 26.5325 8.95383 26.3628 8.95486C26.0877 8.95516 25.8197 9.04191 25.5967 9.20283C25.5967 9.17708 25.6003 9.15192 25.6021 9.12976C25.629 8.74044 25.671 8.15226 25.2906 7.61919C24.8384 7.00969 24.3419 6.43433 23.8052 5.89778C23.8038 5.89604 23.8022 5.89443 23.8004 5.89299C23.0026 5.10716 21.2662 3.62713 18.6062 2.54242C17.5974 2.12847 16.5174 1.91584 15.427 1.91651C13.5367 1.91651 12.0992 2.76942 11.5487 3.27494C11.2371 3.57266 10.9528 3.89781 10.6994 4.24645C10.5783 4.41354 10.5145 4.61524 10.5172 4.82156C10.52 5.02788 10.5893 5.22779 10.7148 5.39157C10.8403 5.55535 11.0153 5.67426 11.2138 5.73061C11.4122 5.78696 11.6236 5.77773 11.8165 5.70432C11.9845 5.6416 12.1561 5.589 12.3304 5.54679C12.6934 5.47005 13.0657 5.44684 13.4354 5.47791C14.2255 5.5432 15.1598 5.93552 15.5731 6.26195C16.2739 6.82557 16.6111 7.58505 16.6668 8.72307C16.6776 8.95187 16.2044 9.80958 15.4689 10.7883C15.3288 10.973 15.2604 11.2022 15.2764 11.4335C15.2923 11.6648 15.3916 11.8824 15.5558 12.0461L17.6168 14.1071C17.79 14.2807 18.0231 14.3813 18.2682 14.3882C18.5133 14.3951 18.7518 14.3078 18.9345 14.1442C19.5173 13.6237 20.4049 12.8391 20.7152 12.6468C21.1758 12.3635 21.5052 12.309 21.5956 12.2994C21.8303 12.2765 22.0664 12.3263 22.2719 12.442C22.2729 12.4523 22.2718 12.4626 22.2686 12.4724C22.2654 12.4822 22.2602 12.4912 22.2533 12.4989L22.1443 12.6025L22.1263 12.6193C22.0059 12.7393 21.9104 12.8819 21.8453 13.039C21.7802 13.1961 21.7468 13.3645 21.7471 13.5345C21.7474 13.7046 21.7813 13.8728 21.8469 14.0297C21.9125 14.1866 22.0085 14.3289 22.1293 14.4485L24.1814 16.4796C24.3016 16.5993 24.4444 16.6941 24.6015 16.7583C24.7586 16.8226 24.9268 16.8551 25.0966 16.8539C25.4374 16.8544 25.7647 16.7211 26.0082 16.4826L29.3324 13.1991C29.3438 13.1877 29.3552 13.1757 29.3659 13.1637C29.5889 12.9193 29.7112 12.5995 29.7081 12.2686C29.705 11.9377 29.5767 11.6203 29.3492 11.38Z" fill="#22C55E"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-4 items-center w-full">
                  <h3 className="text-base font-medium text-text-tertiary text-center tracking-tight">
                    Builder
                  </h3>
                  <p className="text-base text-text-tertiary text-center leading-6">
                    Construct & Refine
                  </p>
                </div>
              </div>

              {/* Arrow 3 */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block w-9 h-9 flex-shrink-0">
                <path d="M19.9034 5.50298C20.3535 5.05305 20.9638 4.80029 21.6002 4.80029C22.2366 4.80029 22.8469 5.05305 23.297 5.50298L34.097 16.303C34.5469 16.753 34.7997 17.3634 34.7997 17.9998C34.7997 18.6362 34.5469 19.2465 34.097 19.6966L23.297 30.4966C22.8444 30.9338 22.2381 31.1757 21.6088 31.1702C20.9796 31.1647 20.3776 30.9123 19.9326 30.4673C19.4877 30.0224 19.2352 29.4204 19.2298 28.7911C19.2243 28.1619 19.4662 27.5556 19.9034 27.103L26.4002 20.3998H3.6002C2.96368 20.3998 2.35323 20.1469 1.90314 19.6968C1.45305 19.2467 1.2002 18.6363 1.2002 17.9998C1.2002 17.3633 1.45305 16.7528 1.90314 16.3027C2.35323 15.8526 2.96368 15.5998 3.6002 15.5998L26.4002 15.5998L19.9034 8.89658C19.4535 8.44651 19.2007 7.83617 19.2007 7.19978C19.2007 6.56339 19.4535 5.95305 19.9034 5.50298Z" fill="#A1A1AA"/>
              </svg>

              {/* Card 4: Next.js */}
              <div className="flex flex-col items-center gap-6 p-6 w-full md:w-44 border border-gray-200 rounded-lg bg-gray-50 shadow-md">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M8.94461 10.2224L3.8335 15.3336L8.94461 20.4447M21.7224 10.2224L26.8335 15.3336L21.7224 20.4447M17.8891 5.11133L12.7779 25.5558" stroke="#3F3F46" strokeWidth="2.55556" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-4 items-center w-full">
                  <h3 className="text-base font-medium text-text-tertiary text-center tracking-tight">
                    Next.js
                  </h3>
                  <p className="text-base text-text-tertiary text-center leading-6">
                    Deploy & Scale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
