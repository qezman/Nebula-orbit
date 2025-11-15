import { useInView } from "../hooks/useInView";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const systemArchRef = useInView({ threshold: 0.2 });
  const coreFeaturesRef = useInView({ threshold: 0.2 });
  const builtWithRef = useInView({ threshold: 0.2 });

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
      <section className="w-full py-9 md:py-14" ref={systemArchRef.ref}>
        <div className={`container mx-auto px-4 md:px-16 transition-all duration-1000 ${systemArchRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex flex-col items-center justify-center gap-14">
            {/* Section Header */}
            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="text-[32px] font-semibold leading-[38px] tracking-[-0.2px] text-center w-full">
                <span className="text-text-primary">System </span>
                <span className="text-brand-primary">Architecture</span>
              </h2>
              <p className="text-lg text-text-tertiary leading-7 text-center w-full">
                A seamless pipeline from design to deployment
              </p>
            </div>

            {/* Cards with Arrows */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 w-full">
              {/* Card 1: Figma */}
              <div
                className="flex flex-col items-center gap-6 py-[22px] px-2 flex-1 rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                style={{
                  animationDelay: "0s",
                  boxShadow:
                    "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                }}
              >
                <div className="flex items-center justify-center py-2 px-[9px] rounded-[7.667px] bg-[rgba(147,51,234,0.15)]">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                  >
                    <path
                      d="M22.0495 11.334C22.7135 10.8992 23.2586 10.3059 23.6359 9.60764C24.0131 8.90939 24.2105 8.12819 24.2103 7.33455C24.2082 6.06774 23.7041 4.85338 22.8083 3.95761C21.9125 3.06183 20.6982 2.55769 19.4314 2.55566H11.2255C9.95865 2.55769 8.7443 3.06183 7.84852 3.95761C6.95275 4.85338 6.44861 6.06774 6.44658 7.33455C6.44658 9.00716 7.30908 10.4817 8.6073 11.334C7.94348 11.7689 7.39836 12.3623 7.02109 13.0605C6.64383 13.7587 6.44629 14.5398 6.44629 15.3334C6.44629 16.1271 6.64383 16.9082 7.02109 17.6064C7.39836 18.3046 7.94348 18.898 8.6073 19.3329C7.94337 19.7677 7.39818 20.361 7.02095 21.0592C6.64372 21.7575 6.44632 22.5387 6.44658 23.3323C6.44658 25.9709 8.6073 28.1112 11.2561 28.1112C13.9369 28.1112 16.1181 25.939 16.1181 23.2812V18.8652C16.9998 19.6656 18.1473 20.11 19.3381 20.1123H19.4429C20.7097 20.1103 21.924 19.6062 22.8198 18.7104C23.7156 17.8146 24.2197 16.6003 24.2217 15.3334C24.2173 14.5394 24.0167 13.7588 23.6377 13.061C23.2588 12.3632 22.7132 11.77 22.0495 11.334ZM14.549 23.2812C14.5439 24.151 14.1947 24.9833 13.5776 25.5963C12.9606 26.2093 12.1259 26.553 11.2561 26.5523C10.3996 26.5544 9.57733 26.2164 8.96977 25.6127C8.36222 25.009 8.01907 24.1888 8.01569 23.3323C8.01569 21.5562 9.45958 20.1226 11.2255 20.1123H14.549V23.2812ZM14.549 18.5534H11.2255C10.8033 18.5528 10.3854 18.469 9.99557 18.3068C9.60578 18.1446 9.25175 17.9072 8.9537 17.6082C8.65564 17.3092 8.4194 16.9544 8.25845 16.5641C8.09751 16.1738 8.01502 15.7556 8.01569 15.3334C8.01569 13.5573 9.45958 12.1134 11.2357 12.1134H14.5605V18.5534H14.549ZM14.549 10.5546H11.2255C9.44936 10.5546 8.00547 9.11066 8.00547 7.33455C8.00547 5.55844 9.44936 4.11455 11.2255 4.11455H14.549V10.5546ZM16.1079 4.11455H19.4314C21.2075 4.11455 22.6514 5.55844 22.6514 7.33455C22.6514 9.11066 21.2075 10.5546 19.4314 10.5546H16.1079V4.11455ZM19.4314 18.5534H19.3291C17.5517 18.5534 16.1079 17.1096 16.1079 15.3334C16.1079 13.5573 17.5517 12.1134 19.3279 12.1134H19.4326C21.2087 12.1134 22.6526 13.5573 22.6526 15.3334C22.6526 17.1096 21.2087 18.5534 19.4326 18.5534"
                      fill="#9333EA"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex justify-center items-center w-full">
                    <h3 className="flex-1 text-base font-medium text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                      Figma
                    </h3>
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <p className="flex-1 text-base text-text-tertiary text-center leading-6">
                      Design & Prototype
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow 1 */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block flex-shrink-0 self-center"
              >
                <path
                  d="M19.9034 5.50298C20.3535 5.05305 20.9638 4.80029 21.6002 4.80029C22.2366 4.80029 22.8469 5.05305 23.297 5.50298L34.097 16.303C34.5469 16.753 34.7997 17.3634 34.7997 17.9998C34.7997 18.6362 34.5469 19.2465 34.097 19.6966L23.297 30.4966C22.8444 30.9338 22.2381 31.1757 21.6088 31.1702C20.9796 31.1647 20.3776 30.9123 19.9326 30.4673C19.4877 30.0224 19.2352 29.4204 19.2298 28.7911C19.2243 28.1619 19.4662 27.5556 19.9034 27.103L26.4002 20.3998H3.6002C2.96368 20.3998 2.35323 20.1469 1.90314 19.6968C1.45305 19.2467 1.2002 18.6363 1.2002 17.9998C1.2002 17.3633 1.45305 16.7528 1.90314 16.3027C2.35323 15.8526 2.96368 15.5998 3.6002 15.5998L26.4002 15.5998L19.9034 8.89658C19.4535 8.44651 19.2007 7.83617 19.2007 7.19978C19.2007 6.56339 19.4535 5.95305 19.9034 5.50298Z"
                  fill="#A1A1AA"
                />
              </svg>

              {/* Card 2: Fusion */}
              <div
                className="flex flex-col items-center gap-6 py-[22px] px-2 flex-1 rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                style={{
                  animationDelay: "0.1s",
                  boxShadow:
                    "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                }}
              >
                <div className="flex items-center justify-center py-2 px-[9px] rounded-[7.667px] bg-[rgba(99,102,241,0.15)]">
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
                      d="M14.0557 2.05713L25.5557 8.69664V18.7383L27.5831 20.09L26.8744 21.1531L22.6151 27.542L21.7505 28.8389L20.6485 27.7368L16.3375 23.4258L18.1446 21.6187L21.3531 24.8271L24.748 19.7356L25.4568 18.6724L25.5557 18.7383V16.611L23.0001 16.611V11.5L15.3334 15.9263V27.8775L14.0557 28.6152L2.55566 21.9757V8.69664L14.0557 2.05713ZM5.11118 11.4999V20.5003L12.7778 24.9266V15.9263L5.11118 11.4999ZM14.0557 5.00802L6.51676 9.36065L14.0557 13.7132L21.5946 9.36059L14.0557 5.00802Z"
                      fill="#6366F1"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex justify-center items-center w-full">
                    <h3 className="flex-1 text-base font-medium text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                      Fusion
                    </h3>
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <p className="flex-1 text-base text-text-tertiary text-center leading-6">
                      Process & Transform
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow 2 */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block flex-shrink-0 self-center"
              >
                <path
                  d="M19.9034 5.50298C20.3535 5.05305 20.9638 4.80029 21.6002 4.80029C22.2366 4.80029 22.8469 5.05305 23.297 5.50298L34.097 16.303C34.5469 16.753 34.7997 17.3634 34.7997 17.9998C34.7997 18.6362 34.5469 19.2465 34.097 19.6966L23.297 30.4966C22.8444 30.9338 22.2381 31.1757 21.6088 31.1702C20.9796 31.1647 20.3776 30.9123 19.9326 30.4673C19.4877 30.0224 19.2352 29.4204 19.2298 28.7911C19.2243 28.1619 19.4662 27.5556 19.9034 27.103L26.4002 20.3998H3.6002C2.96368 20.3998 2.35323 20.1469 1.90314 19.6968C1.45305 19.2467 1.2002 18.6363 1.2002 17.9998C1.2002 17.3633 1.45305 16.7528 1.90314 16.3027C2.35323 15.8526 2.96368 15.5998 3.6002 15.5998L26.4002 15.5998L19.9034 8.89658C19.4535 8.44651 19.2007 7.83617 19.2007 7.19978C19.2007 6.56339 19.4535 5.95305 19.9034 5.50298Z"
                  fill="#A1A1AA"
                />
              </svg>

              {/* Card 3: Builder */}
              <div
                className="flex flex-col items-center gap-6 py-[22px] px-2 flex-1 rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                style={{
                  animationDelay: "0.2s",
                  boxShadow:
                    "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 p-[8.667px] rounded-[7.667px] bg-[rgba(34,197,94,0.15)]">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                  >
                    <path
                      d="M16.7806 14.5419L15.2167 12.9775C14.8585 12.6192 14.373 12.4173 13.8664 12.4159C13.3597 12.4146 12.8732 12.6139 12.513 12.9703L1.64015 23.0046C1.24424 23.3778 0.984295 23.8534 0.960337 24.3858C0.948773 24.6499 0.991793 24.9136 1.08671 25.1603C1.18162 25.407 1.32639 25.6315 1.51198 25.8197L3.84791 28.1814C3.84917 28.183 3.85057 28.1844 3.85211 28.1856C4.21312 28.5454 4.7015 28.7481 5.21114 28.7498H5.28182C5.81429 28.7301 6.29107 28.4803 6.66961 28.0808L16.774 17.2576C16.9532 17.08 17.0956 16.8687 17.1929 16.6359C17.2902 16.4032 17.3407 16.1535 17.3413 15.9012C17.3419 15.6488 17.2927 15.3989 17.1965 15.1657C17.1003 14.9324 16.9589 14.7205 16.7806 14.5419ZM29.3492 11.38L29.3306 11.3615L27.278 9.32981C27.1577 9.20998 27.015 9.11514 26.8579 9.05079C26.7008 8.98643 26.5325 8.95383 26.3628 8.95486C26.0877 8.95516 25.8197 9.04191 25.5967 9.20283C25.5967 9.17708 25.6003 9.15192 25.6021 9.12976C25.629 8.74044 25.671 8.15226 25.2906 7.61919C24.8384 7.00969 24.3419 6.43433 23.8052 5.89778C23.8038 5.89604 23.8022 5.89443 23.8004 5.89299C23.0026 5.10716 21.2662 3.62713 18.6062 2.54242C17.5974 2.12847 16.5174 1.91584 15.427 1.91651C13.5367 1.91651 12.0992 2.76942 11.5487 3.27494C11.2371 3.57266 10.9528 3.89781 10.6994 4.24645C10.5783 4.41354 10.5145 4.61524 10.5172 4.82156C10.52 5.02788 10.5893 5.22779 10.7148 5.39157C10.8403 5.55535 11.0153 5.67426 11.2138 5.73061C11.4122 5.78696 11.6236 5.77773 11.8165 5.70432C11.9845 5.6416 12.1561 5.589 12.3304 5.54679C12.6934 5.47005 13.0657 5.44684 13.4354 5.47791C14.2255 5.5432 15.1598 5.93552 15.5731 6.26195C16.2739 6.82557 16.6111 7.58505 16.6668 8.72307C16.6776 8.95187 16.2044 9.80958 15.4689 10.7883C15.3288 10.973 15.2604 11.2022 15.2764 11.4335C15.2923 11.6648 15.3916 11.8824 15.5558 12.0461L17.6168 14.1071C17.79 14.2807 18.0231 14.3813 18.2682 14.3882C18.5133 14.3951 18.7518 14.3078 18.9345 14.1442C19.5173 13.6237 20.4049 12.8391 20.7152 12.6468C21.1758 12.3635 21.5052 12.309 21.5956 12.2994C21.8303 12.2765 22.0664 12.3263 22.2719 12.442C22.2729 12.4523 22.2718 12.4626 22.2686 12.4724C22.2654 12.4822 22.2602 12.4912 22.2533 12.4989L22.1443 12.6025L22.1263 12.6193C22.0059 12.7393 21.9104 12.8819 21.8453 13.039C21.7802 13.1961 21.7468 13.3645 21.7471 13.5345C21.7474 13.7046 21.7813 13.8728 21.8469 14.0297C21.9125 14.1866 22.0085 14.3289 22.1293 14.4485L24.1814 16.4796C24.3016 16.5993 24.4444 16.6941 24.6015 16.7583C24.7586 16.8226 24.9268 16.8551 25.0966 16.8539C25.4374 16.8544 25.7647 16.7211 26.0082 16.4826L29.3324 13.1991C29.3438 13.1877 29.3552 13.1757 29.3659 13.1637C29.5889 12.9193 29.7112 12.5995 29.7081 12.2686C29.705 11.9377 29.5767 11.6203 29.3492 11.38Z"
                      fill="#22C55E"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex justify-center items-center w-full">
                    <h3 className="flex-1 text-base font-medium text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                      Builder
                    </h3>
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <p className="flex-1 text-base text-text-tertiary text-center leading-6">
                      Construct & Refine
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow 3 */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block flex-shrink-0 self-center"
              >
                <path
                  d="M19.9034 5.50298C20.3535 5.05305 20.9638 4.80029 21.6002 4.80029C22.2366 4.80029 22.8469 5.05305 23.297 5.50298L34.097 16.303C34.5469 16.753 34.7997 17.3634 34.7997 17.9998C34.7997 18.6362 34.5469 19.2465 34.097 19.6966L23.297 30.4966C22.8444 30.9338 22.2381 31.1757 21.6088 31.1702C20.9796 31.1647 20.3776 30.9123 19.9326 30.4673C19.4877 30.0224 19.2352 29.4204 19.2298 28.7911C19.2243 28.1619 19.4662 27.5556 19.9034 27.103L26.4002 20.3998H3.6002C2.96368 20.3998 2.35323 20.1469 1.90314 19.6968C1.45305 19.2467 1.2002 18.6363 1.2002 17.9998C1.2002 17.3633 1.45305 16.7528 1.90314 16.3027C2.35323 15.8526 2.96368 15.5998 3.6002 15.5998L26.4002 15.5998L19.9034 8.89658C19.4535 8.44651 19.2007 7.83617 19.2007 7.19978C19.2007 6.56339 19.4535 5.95305 19.9034 5.50298Z"
                  fill="#A1A1AA"
                />
              </svg>

              {/* Card 4: Next.js */}
              <div
                className="flex flex-col items-center gap-6 py-[22px] px-2 flex-1 rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                style={{
                  animationDelay: "0.3s",
                  boxShadow:
                    "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 p-[8.667px] rounded-[7.667px] bg-[#E4E4E7]">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                  >
                    <path
                      d="M8.94461 10.2224L3.8335 15.3336L8.94461 20.4447M21.7224 10.2224L26.8335 15.3336L21.7224 20.4447M17.8891 5.11133L12.7779 25.5558"
                      stroke="#3F3F46"
                      strokeWidth="2.55556"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex justify-center items-center w-full">
                    <h3 className="flex-1 text-base font-medium text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                      Next.js
                    </h3>
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <p className="flex-1 text-base text-text-tertiary text-center leading-6">
                      Deploy & Scale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="w-full py-9 md:py-14 bg-surface-2" ref={coreFeaturesRef.ref}>
        <div className={`container mx-auto px-4 md:px-16 transition-all duration-1000 ${coreFeaturesRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex flex-col items-center gap-12">
            {/* Section Header */}
            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="text-[32px] font-semibold leading-[38px] tracking-[-0.2px] text-center w-full">
                <span className="text-text-primary">Core </span>
                <span className="text-brand-primary">Features</span>
              </h2>
              <p className="text-lg text-text-tertiary leading-7 text-center w-full">
                A seamless pipeline from design to deployment
              </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col items-start gap-6 w-full">
              {/* First Row */}
              <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-[26px] w-full">
                {/* Card 1: Design First */}
                <div
                  className="flex flex-col items-start gap-6 py-[22px] px-4 flex-1 rounded-lg border border-[#E5E7EB] bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                  style={{
                    animationDelay: "0s",
                    boxShadow:
                      "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                  }}
                >
                  <div className="flex items-center justify-center w-[54px] h-[54px] p-[11.667px] rounded-sm bg-brand-primary">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.3613 15.333C21.8529 15.333 21.3654 15.1311 21.006 14.7716C20.6465 14.4122 20.4446 13.9247 20.4446 13.4163C20.4446 12.908 20.6465 12.4205 21.006 12.0611C21.3654 11.7016 21.8529 11.4997 22.3613 11.4997C22.8696 11.4997 23.3571 11.7016 23.7166 12.0611C24.076 12.4205 24.2779 12.908 24.2779 13.4163C24.2779 13.9247 24.076 14.4122 23.7166 14.7716C23.3571 15.1311 22.8696 15.333 22.3613 15.333ZM18.5279 10.2219C18.0196 10.2219 17.5321 10.02 17.1727 9.66052C16.8132 9.30107 16.6113 8.81356 16.6113 8.30523C16.6113 7.7969 16.8132 7.30939 17.1727 6.94994C17.5321 6.5905 18.0196 6.38856 18.5279 6.38856C19.0363 6.38856 19.5238 6.5905 19.8832 6.94994C20.2427 7.30939 20.4446 7.7969 20.4446 8.30523C20.4446 8.81356 20.2427 9.30107 19.8832 9.66052C19.5238 10.02 19.0363 10.2219 18.5279 10.2219ZM12.1391 10.2219C11.6307 10.2219 11.1432 10.02 10.7838 9.66052C10.4243 9.30107 10.2224 8.81356 10.2224 8.30523C10.2224 7.7969 10.4243 7.30939 10.7838 6.94994C11.1432 6.5905 11.6307 6.38856 12.1391 6.38856C12.6474 6.38856 13.1349 6.5905 13.4943 6.94994C13.8538 7.30939 14.0557 7.7969 14.0557 8.30523C14.0557 8.81356 13.8538 9.30107 13.4943 9.66052C13.1349 10.02 12.6474 10.2219 12.1391 10.2219ZM8.30572 15.333C7.79739 15.333 7.30987 15.1311 6.95043 14.7716C6.59099 14.4122 6.38905 13.9247 6.38905 13.4163C6.38905 12.908 6.59099 12.4205 6.95043 12.0611C7.30987 11.7016 7.79739 11.4997 8.30572 11.4997C8.81405 11.4997 9.30156 11.7016 9.66101 12.0611C10.0205 12.4205 10.2224 12.908 10.2224 13.4163C10.2224 13.9247 10.0205 14.4122 9.66101 14.7716C9.30156 15.1311 8.81405 15.333 8.30572 15.333ZM15.3335 3.83301C12.2835 3.83301 9.35844 5.04461 7.20177 7.20128C5.0451 9.35795 3.8335 12.283 3.8335 15.333C3.8335 18.383 5.0451 21.3081 7.20177 23.4647C9.35844 25.6214 12.2835 26.833 15.3335 26.833C15.8418 26.833 16.3293 26.6311 16.6888 26.2716C17.0482 25.9122 17.2502 25.4247 17.2502 24.9163C17.2502 24.418 17.0585 23.9708 16.7518 23.6386C16.4579 23.2936 16.2663 22.8463 16.2663 22.3608C16.2663 21.8525 16.4682 21.3649 16.8277 21.0055C17.1871 20.6461 17.6746 20.4441 18.1829 20.4441H20.4446C22.139 20.4441 23.7641 19.771 24.9622 18.5729C26.1604 17.3747 26.8335 15.7497 26.8335 14.0552C26.8335 8.40745 21.6841 3.83301 15.3335 3.83301Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h3 className="text-xl font-medium text-text-secondary leading-6">
                      Design First
                    </h3>
                    <p className="text-base text-text-tertiary leading-6">
                      Every component begins with careful consideration of
                      visual hierarchy, spacing, and user experience. We
                      prioritize aesthetics without sacrificing functionality.
                    </p>
                  </div>
                </div>

                {/* Card 2: Lightning Fast */}
                <div
                  className="flex flex-col items-start gap-6 py-[22px] px-4 flex-1 rounded-lg border border-[#E5E7EB] bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                  style={{
                    animationDelay: "0.1s",
                    boxShadow:
                      "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                  }}
                >
                  <div className="flex items-center justify-center w-[54px] h-[54px] p-[11.667px] rounded-sm bg-brand-primary">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.6338 13.6833L12.5989 25.03C12.2923 25.3443 11.7837 24.9802 11.983 24.5892L15.9109 16.8382C15.9407 16.7797 15.9549 16.7145 15.9523 16.6489C15.9496 16.5834 15.9302 16.5196 15.8958 16.4637C15.8614 16.4078 15.8133 16.3616 15.756 16.3296C15.6987 16.2977 15.6341 16.2809 15.5685 16.2811H7.30636C7.2309 16.281 7.15713 16.2587 7.09431 16.2169C7.03148 16.1751 6.9824 16.1156 6.9532 16.0461C6.924 15.9765 6.91599 15.8998 6.93017 15.8257C6.94435 15.7516 6.98009 15.6833 7.03292 15.6294L17.2679 5.26023C17.5644 4.95995 18.0576 5.28962 17.8928 5.67934L14.9577 12.5985C14.9328 12.6572 14.923 12.7211 14.9291 12.7845C14.9351 12.8479 14.9569 12.9088 14.9924 12.9617C15.0279 13.0146 15.0761 13.0578 15.1325 13.0874C15.1889 13.1171 15.2518 13.1321 15.3155 13.1313L23.354 13.0317C23.4298 13.0305 23.5043 13.0518 23.5681 13.0929C23.6318 13.1341 23.6819 13.1932 23.712 13.2629C23.7421 13.3325 23.7509 13.4095 23.7372 13.4841C23.7235 13.5588 23.6879 13.6276 23.6351 13.6821"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h3 className="text-xl font-medium text-text-secondary leading-6">
                      Lightning Fast
                    </h3>
                    <p className="text-base text-text-tertiary leading-6">
                      Optimized for performance with modern build tools and best
                      practices. Your users deserve instant feedback and
                      seamless interactions at every touchpoint.
                    </p>
                  </div>
                </div>

                {/* Card 3: Accessible */}
                <div
                  className="flex flex-col items-start gap-6 py-[22px] px-4 flex-1 rounded-lg border border-[#E5E7EB] bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                  style={{
                    animationDelay: "0.2s",
                    boxShadow:
                      "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                  }}
                >
                  <div className="flex items-center justify-center w-[54px] h-[54px] p-[11.667px] rounded-sm bg-brand-primary">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7223 4.26775C23.6496 5.38051 25.2528 6.97731 26.3732 8.90008C27.4937 10.8228 28.0925 13.0049 28.1105 15.2302C28.1285 17.4556 27.5649 19.647 26.4757 21.5876C25.3864 23.5283 23.8093 25.1507 21.9003 26.2945C19.9912 27.4382 17.8166 28.0636 15.5917 28.1086C13.3667 28.1536 11.1686 27.6168 9.21487 26.5512C7.26116 25.4857 5.61961 23.9283 4.45274 22.0334C3.28587 20.1384 2.63413 17.9715 2.56205 15.7473L2.55566 15.3333L2.56205 14.9193C2.63361 12.7126 3.27575 10.562 4.42587 8.67735C5.57599 6.79267 7.19483 5.23816 9.12458 4.16538C11.0543 3.09259 13.2291 2.53814 15.4369 2.55609C17.6448 2.57403 19.8103 3.16375 21.7223 4.26775ZM20.3794 13.0129C20.2804 12.7158 20.0758 12.4655 19.8045 12.3093C19.5332 12.1532 19.2139 12.1021 18.9074 12.1657L18.763 12.204L15.3334 13.3476L11.9039 12.204L11.7595 12.1657C11.4532 12.1027 11.1345 12.1541 10.8636 12.3103C10.5928 12.4665 10.3886 12.7165 10.2897 13.0132C10.1908 13.3098 10.2041 13.6324 10.3271 13.9198C10.4501 14.2073 10.6742 14.4397 10.9571 14.573L11.0963 14.6292L14.0557 15.6144V16.8615L11.7148 20.3754L11.6381 20.5032C11.5086 20.7577 11.468 21.0482 11.5229 21.3285C11.5778 21.6087 11.725 21.8625 11.9409 22.0493L12.0687 22.1464L12.1978 22.2231C12.4523 22.3526 12.7428 22.3932 13.0231 22.3383C13.3033 22.2834 13.5571 22.1362 13.7439 21.9202L13.841 21.7925L15.3334 19.5538L16.8259 21.7925L16.9153 21.9113C17.1181 22.1503 17.4015 22.3064 17.7119 22.35C18.0222 22.3936 18.3377 22.3217 18.5985 22.1478C18.8592 21.974 19.047 21.7104 19.1261 21.4072C19.2052 21.104 19.1701 20.7822 19.0275 20.5032L18.9521 20.3754L16.6112 16.8615V15.6131L19.5706 14.628L19.7098 14.5717C19.9931 14.4388 20.2178 14.2065 20.3412 13.9189C20.4646 13.6314 20.4782 13.3085 20.3794 13.0116V13.0129ZM15.3334 7.66664C14.8251 7.66664 14.3376 7.86857 13.9782 8.22802C13.6187 8.58746 13.4168 9.07497 13.4168 9.5833C13.4168 10.0916 13.6187 10.5791 13.9782 10.9386C14.3376 11.298 14.8251 11.5 15.3334 11.5C15.8418 11.5 16.3293 11.298 16.6887 10.9386C17.0482 10.5791 17.2501 10.0916 17.2501 9.5833C17.2501 9.07497 17.0482 8.58746 16.6887 8.22802C16.3293 7.86857 15.8418 7.66664 15.3334 7.66664Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h3 className="text-xl font-medium text-text-secondary leading-6">
                      Accessible
                    </h3>
                    <p className="text-base text-text-tertiary leading-6">
                      Every component begins with careful consideration of
                      visual hierarchy, spacing, and user experience. We
                      prioritize aesthetics without sacrificing functionality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-[26px] w-full">
                {/* Card 4: Responsive */}
                <div
                  className="flex flex-col items-start gap-6 py-[22px] px-4 flex-1 rounded-lg border border-[#E5E7EB] bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                  style={{
                    animationDelay: "0.3s",
                    boxShadow:
                      "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                  }}
                >
                  <div className="flex items-center justify-center w-[54px] h-[54px] p-[11.667px] rounded-sm bg-brand-primary">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_100_238)">
                        <path
                          d="M5.11111 7.66688V20.4447H11.5V15.3336C11.5 14.6558 11.7692 14.0058 12.2485 13.5265C12.7278 13.0472 13.3778 12.778 14.0556 12.778H20.4444C21.1222 12.778 21.7722 13.0472 22.2515 13.5265C22.7308 14.0058 23 14.6558 23 15.3336V20.4447H25.5556V7.66688H5.11111ZM0 25.5558V23.0002H5.11111C4.43334 23.0002 3.78332 22.731 3.30406 22.2517C2.8248 21.7725 2.55556 21.1224 2.55556 20.4447V7.66688C2.55556 6.98911 2.8248 6.33909 3.30406 5.85983C3.78332 5.38057 4.43334 5.11133 5.11111 5.11133H25.5556C26.2333 5.11133 26.8833 5.38057 27.3626 5.85983C27.8419 6.33909 28.1111 6.98911 28.1111 7.66688V20.4447C28.1111 21.1224 27.8419 21.7725 27.3626 22.2517C26.8833 22.731 26.2333 23.0002 25.5556 23.0002H30.6667V25.5558H23C23 26.2335 22.7308 26.8836 22.2515 27.3628C21.7722 27.8421 21.1222 28.1113 20.4444 28.1113H14.0556C13.3778 28.1113 12.7278 27.8421 12.2485 27.3628C11.7692 26.8836 11.5 26.2335 11.5 25.5558H0ZM14.6944 25.5558C14.525 25.5558 14.3625 25.6231 14.2427 25.7429C14.1229 25.8627 14.0556 26.0252 14.0556 26.1947C14.0556 26.3641 14.1229 26.5266 14.2427 26.6464C14.3625 26.7662 14.525 26.8336 14.6944 26.8336C14.8639 26.8336 15.0264 26.7662 15.1462 26.6464C15.266 26.5266 15.3333 26.3641 15.3333 26.1947C15.3333 26.0252 15.266 25.8627 15.1462 25.7429C15.0264 25.6231 14.8639 25.5558 14.6944 25.5558ZM19.8056 25.5558C19.6361 25.5558 19.4736 25.6231 19.3538 25.7429C19.234 25.8627 19.1667 26.0252 19.1667 26.1947C19.1667 26.3641 19.234 26.5266 19.3538 26.6464C19.4736 26.7662 19.6361 26.8336 19.8056 26.8336C19.975 26.8336 20.1375 26.7662 20.2573 26.6464C20.3771 26.5266 20.4444 26.3641 20.4444 26.1947C20.4444 26.0252 20.3771 25.8627 20.2573 25.7429C20.1375 25.6231 19.975 25.5558 19.8056 25.5558ZM16.6111 25.5558V26.8336H17.8889V25.5558H16.6111ZM14.0556 15.3336V24.278H20.4444V15.3336H14.0556Z"
                          fill="#FAFAFA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_238">
                          <rect width="30.6667" height="30.6667" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h3 className="text-xl font-medium text-text-secondary leading-6">
                      Responsive
                    </h3>
                    <p className="text-base text-text-tertiary leading-6">
                      Fluid layouts that adapt gracefully to any screen size.
                      From mobile phones to ultra- wide displays, your content
                      always looks intentional and polished.
                    </p>
                  </div>
                </div>

                {/* Card 5: Modular */}
                <div
                  className="flex flex-col items-start gap-6 py-[22px] px-4 flex-1 rounded-lg border border-[#E5E7EB] bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                  style={{
                    animationDelay: "0.4s",
                    boxShadow:
                      "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                  }}
                >
                  <div className="flex items-center justify-center w-[54px] h-[54px] p-[11.667px] rounded-sm bg-brand-primary">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_100_247)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.6895 0C10.1086 0 9.55142 0.230782 9.14062 0.641576C8.72983 1.05237 8.49905 1.60953 8.49905 2.19048V11.5C8.49905 12.081 8.72983 12.6381 9.14062 13.0489C9.55142 13.4597 10.1086 13.6905 10.6895 13.6905H19.999C20.58 13.6905 21.1372 13.4597 21.5479 13.0489C21.9587 12.6381 22.1895 12.081 22.1895 11.5V2.19048C22.1895 1.60953 21.9587 1.05237 21.5479 0.641576C21.1372 0.230782 20.58 0 19.999 0L10.6895 0ZM2.19048 16.9762C1.60953 16.9762 1.05237 17.207 0.641576 17.6178C0.230782 18.0286 0 18.5857 0 19.1667L0 28.4762C0 29.0571 0.230782 29.6143 0.641576 30.0251C1.05237 30.4359 1.60953 30.6667 2.19048 30.6667H11.5C12.081 30.6667 12.6381 30.4359 13.0489 30.0251C13.4597 29.6143 13.6905 29.0571 13.6905 28.4762V19.1667C13.6905 18.5857 13.4597 18.0286 13.0489 17.6178C12.6381 17.207 12.081 16.9762 11.5 16.9762H2.19048ZM16.9762 19.1667C16.9762 18.5857 17.207 18.0286 17.6178 17.6178C18.0286 17.207 18.5857 16.9762 19.1667 16.9762H28.4762C29.0571 16.9762 29.6143 17.207 30.0251 17.6178C30.4359 18.0286 30.6667 18.5857 30.6667 19.1667V28.4762C30.6667 29.0571 30.4359 29.6143 30.0251 30.0251C29.6143 30.4359 29.0571 30.6667 28.4762 30.6667H19.1667C18.5857 30.6667 18.0286 30.4359 17.6178 30.0251C17.207 29.6143 16.9762 29.0571 16.9762 28.4762V19.1667Z"
                          fill="#FAFAFA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_247">
                          <rect width="30.6667" height="30.6667" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h3 className="text-xl font-medium text-text-secondary leading-6">
                      Modular
                    </h3>
                    <p className="text-base text-text-tertiary leading-6">
                      Component-based architecture allows for easy customization
                      and extension. Build once, reuse everywhere, and maintain
                      consistency across your entire system.
                    </p>
                  </div>
                </div>

                {/* Card 6: Crafted */}
                <div
                  className="flex flex-col items-start gap-6 py-[22px] px-4 flex-1 rounded-lg border border-[#E5E7EB] bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up"
                  style={{
                    animationDelay: "0.5s",
                    boxShadow:
                      "0 2px 4px 0 rgba(140, 140, 140, 0.25), 0 4px 4px 0 rgba(138, 138, 138, 0.10)",
                  }}
                >
                  <div className="flex items-center justify-center w-[54px] h-[54px] p-[11.667px] rounded-sm bg-brand-primary">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_100_256)">
                        <path
                          d="M15.0382 0.0839844L0.0856111 29.6518L16.3901 15.7968L15.0382 0.0839844ZM29.6534 30.582L9.54628 22.4719L0 30.582H29.6534ZM30.6667 30.329L15.7141 0.591262L17.9106 25.1757L30.6667 30.329ZM16.4744 16.5584L10.0536 22.0503L17.2347 24.9227L16.4744 16.5584Z"
                          fill="#FAFAFA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_256">
                          <rect width="30.6667" height="30.6667" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h3 className="text-xl font-medium text-text-secondary leading-6">
                      Crafted
                    </h3>
                    <p className="text-base text-text-tertiary leading-6">
                      Hand-tuned details and thoughtful micro-interactions
                      create delightful experiences. We sweat the small stuff so
                      you don't have to worry about the details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built With Section */}
      <section className="w-full py-9 md:py-14 overflow-hidden" ref={builtWithRef.ref}>
        <div className={`container mx-auto px-4 md:px-16 transition-all duration-1000 ${builtWithRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex flex-col items-center justify-center gap-14">
            {/* Section Header */}
            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="text-[32px] font-semibold leading-[38px] tracking-[-0.2px] text-center w-full">
                <span className="text-brand-primary">Built </span>
                <span className="text-text-primary">With</span>
              </h2>
              <p
                className="text-lg leading-7 text-center w-full"
                style={{ color: "rgba(44, 44, 44, 0.6)" }}
              >
                Powered by industry-leading tools and technologies
              </p>
            </div>

            {/* Ticker Container */}
            <div className="relative w-full">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

              {/* Ticker Track */}
              <div className="flex">
                <div className="flex animate-ticker">
                  {/* First set of cards */}
                  <div className="flex gap-3 px-1.5">
                    {/* Figma */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_329)">
                          <path
                            d="M22.75 64.5C28.7 64.5 33.5 59.7 33.5 53.75V43H22.75C16.8 43 12 47.8 12 53.75C12 59.7 16.8 64.5 22.75 64.5Z"
                            fill="#0ACF83"
                          />
                          <path
                            d="M12 32.25C12 26.3 16.8 21.5 22.75 21.5H33.5V43H22.75C16.8 43 12 38.2 12 32.25Z"
                            fill="#A259FF"
                          />
                          <path
                            d="M12 10.75C12 4.8 16.8 0 22.75 0H33.5V21.5H22.75C16.8 21.5 12 16.7 12 10.75Z"
                            fill="#F24E1E"
                          />
                          <path
                            d="M33.5 0H44.25C50.2 0 55 4.8 55 10.75C55 16.7 50.2 21.5 44.25 21.5H33.5V0Z"
                            fill="#FF7262"
                          />
                          <path
                            d="M55 32.25C55 38.2 50.2 43 44.25 43C38.3 43 33.5 38.2 33.5 32.25C33.5 26.3 38.3 21.5 44.25 21.5C50.2 21.5 55 26.3 55 32.25Z"
                            fill="#1ABCFE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_100_329">
                            <rect width="64" height="64" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Figma
                      </h3>
                    </div>

                    {/* React */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32 24C46.888 24 56 29.18 56 32C56 34.82 46.888 40 32 40C17.112 40 8 34.82 8 32C8 29.18 17.112 24 32 24ZM32 20C16.536 20 4 25.372 4 32C4 38.628 16.536 44 32 44C47.464 44 60 38.628 60 32C60 25.372 47.464 20 32 20Z"
                          fill="#00BCD4"
                        />
                        <path
                          d="M32 28C31.2089 28 30.4355 28.2346 29.7777 28.6741C29.1199 29.1136 28.6072 29.7384 28.3045 30.4693C28.0017 31.2002 27.9225 32.0044 28.0769 32.7804C28.2312 33.5563 28.6122 34.269 29.1716 34.8284C29.731 35.3878 30.4437 35.7688 31.2196 35.9231C31.9956 36.0775 32.7998 35.9983 33.5307 35.6955C34.2616 35.3928 34.8864 34.8801 35.3259 34.2223C35.7654 33.5645 36 32.7911 36 32C36 30.9391 35.5786 29.9217 34.8284 29.1716C34.0783 28.4214 33.0609 28 32 28Z"
                          fill="#00BCD4"
                        />
                        <path
                          d="M20.9158 11.0137C24.9498 11.0137 32.7898 17.3677 38.9278 27.9997C46.3718 40.8937 46.4418 51.3737 43.9998 52.7837C43.7181 52.9297 43.4028 52.9987 43.0858 52.9837C39.0518 52.9837 31.2098 46.6317 25.0718 35.9997C17.6278 23.1057 17.5578 12.6257 19.9998 11.2157C20.2821 11.0693 20.5981 10.9983 20.9158 11.0137ZM20.9138 7.01567C19.8945 6.99723 18.8887 7.25058 17.9998 7.74967C12.2598 11.0637 13.8758 24.6077 21.6078 37.9997C28.1758 49.3797 37.0478 56.9857 43.0878 56.9857C44.1068 57.0025 45.1118 56.7478 45.9998 56.2477C51.7398 52.9357 50.1238 39.3917 42.3918 25.9997C35.8238 14.6197 26.9518 7.01367 20.9118 7.01367L20.9138 7.01567Z"
                          fill="#00BCD4"
                        />
                        <path
                          d="M43.0858 11.0135C43.4028 10.9984 43.7181 11.0674 43.9998 11.2135C46.4418 12.6255 46.3718 23.1055 38.9278 35.9995C32.7878 46.6315 24.9478 52.9855 20.9138 52.9855C20.5968 53.0006 20.2815 52.9316 19.9998 52.7855C17.5578 51.3715 17.6278 40.8915 25.0718 27.9995C31.2118 17.3675 39.0518 11.0135 43.0858 11.0135ZM43.0858 7.01351C37.0458 7.01351 28.1758 14.6215 21.6058 25.9995C13.8778 39.3915 12.2598 52.9355 17.9998 56.2475C18.8883 56.748 19.8942 57.0027 20.9138 56.9855C26.9538 56.9855 35.8238 49.3775 42.3938 37.9995C50.1218 24.6075 51.7398 11.0635 45.9998 7.75151C45.1113 7.25103 44.1055 6.99629 43.0858 7.01351Z"
                          fill="#00BCD4"
                        />
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        React
                      </h3>
                    </div>

                    {/* Tailwind */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 27.4002C19.8667 19.9335 24.5333 16.2002 32 16.2002C43.2 16.2002 44.6 24.6002 50.2 26.0002C53.9333 26.9335 57.2 25.5335 60 21.8002C58.1333 29.2669 53.4667 33.0002 46 33.0002C34.8 33.0002 33.4 24.6002 27.8 23.2002C24.0667 22.2669 20.8 23.6669 18 27.4002ZM4 44.2002C5.86667 36.7335 10.5333 33.0002 18 33.0002C29.2 33.0002 30.6 41.4002 36.2 42.8002C39.9333 43.7335 43.2 42.3335 46 38.6002C44.1333 46.0669 39.4667 49.8002 32 49.8002C20.8 49.8002 19.4 41.4002 13.8 40.0002C10.0667 39.0669 6.8 40.4669 4 44.2002Z"
                          fill="#44A8B3"
                        />
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Tailwind
                      </h3>
                    </div>

                    {/* Node */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_399)">
                          <path
                            d="M33.4788 0.412323C33.0195 0.149183 32.4994 0.0107422 31.97 0.0107422C31.4407 0.0107422 30.9206 0.149183 30.4613 0.412323L5.55129 14.8798C4.60379 15.4158 4.07129 16.4273 4.07129 17.4998V46.4938C4.07129 47.5653 4.66279 48.5773 5.55029 49.1138L30.4603 63.5808C30.9196 63.8441 31.4399 63.9825 31.9693 63.9825C32.4987 63.9825 33.0189 63.8441 33.4783 63.5808L58.3883 49.1133C59.3353 48.5773 59.8673 47.5653 59.8673 46.4933V17.4998C59.8673 16.4278 59.2758 15.4163 58.3883 14.8798L33.4788 0.412323Z"
                            fill="url(#paint0_linear_100_399)"
                          />
                          <path
                            d="M58.4485 14.8802L33.4205 0.412734C33.1749 0.28731 32.9171 0.187613 32.651 0.115234L4.60498 48.3992C4.83731 48.6841 5.11771 48.9261 5.43348 49.1142L30.462 63.5812C31.172 63.9977 32 64.1172 32.7695 63.8787L59.0995 15.4162C58.9266 15.1898 58.7039 15.0064 58.4485 14.8802Z"
                            fill="url(#paint1_linear_100_399)"
                          />
                          <path
                            d="M58.4488 49.1126C59.1588 48.6961 59.6913 47.9816 59.9278 47.2076L32.5328 0.0541294C31.8228 -0.0648706 31.0533 -0.00537062 30.4028 0.411629L5.55176 14.8196L32.3548 63.9971C32.7098 63.9371 33.1248 63.8181 33.4798 63.6396L58.4488 49.1126Z"
                            fill="url(#paint2_linear_100_399)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_100_399"
                            x1="42.1142"
                            y1="11.1861"
                            x2="19.3649"
                            y2="57.3063"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3F873F" />
                            <stop offset="0.33" stopColor="#3F8B3D" />
                            <stop offset="0.637" stopColor="#3E9638" />
                            <stop offset="0.934" stopColor="#3DA92E" />
                            <stop offset="1" stopColor="#3DAE2B" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_100_399"
                            x1="28.1853"
                            y1="35.3831"
                            x2="91.6581"
                            y2="-11.2257"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.138" stopColor="#3F873F" />
                            <stop offset="0.402" stopColor="#52A044" />
                            <stop offset="0.713" stopColor="#64B749" />
                            <stop offset="0.908" stopColor="#6ABF4B" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_100_399"
                            x1="3.1596"
                            y1="31.9873"
                            x2="60.7998"
                            y2="31.9873"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.092" stopColor="#6ABF4B" />
                            <stop offset="0.287" stopColor="#64B749" />
                            <stop offset="0.598" stopColor="#52A044" />
                            <stop offset="0.862" stopColor="#3F873F" />
                          </linearGradient>
                          <clipPath id="clip0_100_399">
                            <rect width="64" height="64" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Node
                      </h3>
                    </div>

                    {/* Github */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.0002 5.33301C28.4982 5.33301 25.0306 6.02276 21.7953 7.36289C18.5599 8.70301 15.6202 10.6673 13.144 13.1435C8.14301 18.1445 5.3335 24.9272 5.3335 31.9997C5.3335 43.7863 12.9868 53.7863 23.5735 57.333C24.9068 57.5463 25.3335 56.7197 25.3335 55.9997V51.493C17.9468 53.093 16.3735 47.9197 16.3735 47.9197C15.1468 44.8263 13.4135 43.9997 13.4135 43.9997C10.9868 42.3463 13.6002 42.3997 13.6002 42.3997C16.2668 42.5863 17.6802 45.1463 17.6802 45.1463C20.0002 49.1997 23.9202 47.9997 25.4402 47.3597C25.6802 45.6263 26.3735 44.453 27.1202 43.7863C21.2002 43.1197 14.9868 40.8263 14.9868 30.6663C14.9868 27.7063 16.0002 25.333 17.7335 23.4397C17.4668 22.773 16.5335 19.9997 18.0002 16.3997C18.0002 16.3997 20.2402 15.6797 25.3335 19.1197C27.4402 18.533 29.7335 18.2397 32.0002 18.2397C34.2668 18.2397 36.5602 18.533 38.6668 19.1197C43.7602 15.6797 46.0002 16.3997 46.0002 16.3997C47.4668 19.9997 46.5335 22.773 46.2668 23.4397C48.0002 25.333 49.0135 27.7063 49.0135 30.6663C49.0135 40.853 42.7735 43.093 36.8268 43.7597C37.7868 44.5863 38.6668 46.213 38.6668 48.693V55.9997C38.6668 56.7197 39.0935 57.573 40.4535 57.333C51.0402 53.7597 58.6668 43.7863 58.6668 31.9997C58.6668 28.4978 57.9771 25.0301 56.637 21.7948C55.2968 18.5594 53.3326 15.6197 50.8563 13.1435C48.3801 10.6673 45.4404 8.70301 42.2051 7.36289C38.9697 6.02276 35.5021 5.33301 32.0002 5.33301Z"
                          fill="black"
                        />
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Github
                      </h3>
                    </div>

                    {/* Typescript */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_419)">
                          <path
                            d="M5 0H59C61.7615 0 64 2.2385 64 5V59C64 61.7615 61.7615 64 59 64H5C2.2385 64 0 61.7615 0 59V5C0 2.2385 2.2385 0 5 0Z"
                            fill="#3178C6"
                          />
                          <path
                            d="M37.6295 50.1188V57.0238C38.7525 57.5993 40.0807 58.0308 41.614 58.3185C43.1473 58.6062 44.7634 58.75 46.4622 58.75C48.1179 58.75 49.6908 58.5917 51.1808 58.2752C52.6708 57.9587 53.9773 57.4373 55.1003 56.711C56.2233 55.9845 57.1123 55.035 57.7675 53.8625C58.4225 52.6903 58.75 51.2411 58.75 49.5148C58.75 48.2631 58.5628 47.1662 58.1885 46.224C57.818 45.2883 57.2677 44.4343 56.5687 43.7103C55.8634 42.9766 55.0177 42.3184 54.0315 41.7357C53.0453 41.1531 51.9331 40.6029 50.6948 40.0853C49.7878 39.7111 48.9743 39.3478 48.2545 38.9955C47.5347 38.6432 46.9228 38.2835 46.419 37.9165C45.915 37.5498 45.5263 37.1614 45.2528 36.7513C44.9793 36.3411 44.8425 35.8772 44.8425 35.3595C44.8425 34.8848 44.9648 34.4569 45.2095 34.0757C45.4543 33.6944 45.7999 33.3672 46.2463 33.094C46.6926 32.8208 47.2397 32.6086 47.8875 32.4572C48.5353 32.3062 49.2552 32.2308 50.047 32.2308C50.623 32.2308 51.2312 32.2739 51.8717 32.3602C52.5124 32.4464 53.1567 32.5795 53.8047 32.7595C54.4506 32.9389 55.0822 33.1661 55.6942 33.4393C56.2876 33.7022 56.8552 34.02 57.3895 34.3885V27.9368C56.3385 27.5339 55.1903 27.2354 53.945 27.0413C52.6997 26.8471 51.2707 26.75 49.6582 26.75C48.0171 26.75 46.4623 26.9262 44.9938 27.2787C43.5253 27.6311 42.2331 28.1813 41.1172 28.9293C40.0016 29.6776 39.1197 30.6307 38.4717 31.7885C37.8239 32.9465 37.5 34.3311 37.5 35.9422C37.5 37.9992 38.0939 39.7542 39.2817 41.2072C40.4696 42.6602 42.2727 43.8902 44.6912 44.897C45.5841 45.2607 46.4697 45.642 47.3475 46.0407C48.1682 46.4147 48.8773 46.8031 49.4748 47.2057C50.0723 47.6084 50.5438 48.0472 50.8893 48.522C51.2348 48.9968 51.4075 49.5363 51.4075 50.1405C51.4104 50.5754 51.2986 51.0033 51.0835 51.3812C50.8677 51.7624 50.5402 52.0932 50.101 52.3737C49.6618 52.6542 49.1148 52.8736 48.4598 53.0317C47.8048 53.1899 47.0381 53.2691 46.1598 53.2692C44.6626 53.2692 43.1798 53.0067 41.7113 52.4815C40.2428 51.9563 38.8822 51.1688 37.6295 50.1188ZM26.1205 32.9355H35V27.25H10.25V32.9355H19.0863V58.25H26.1205V32.9355Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_100_419">
                            <rect width="64" height="64" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Typescript
                      </h3>
                    </div>
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="flex gap-3 px-1.5" aria-hidden="true">
                    {/* Figma */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_329_2)">
                          <path
                            d="M22.75 64.5C28.7 64.5 33.5 59.7 33.5 53.75V43H22.75C16.8 43 12 47.8 12 53.75C12 59.7 16.8 64.5 22.75 64.5Z"
                            fill="#0ACF83"
                          />
                          <path
                            d="M12 32.25C12 26.3 16.8 21.5 22.75 21.5H33.5V43H22.75C16.8 43 12 38.2 12 32.25Z"
                            fill="#A259FF"
                          />
                          <path
                            d="M12 10.75C12 4.8 16.8 0 22.75 0H33.5V21.5H22.75C16.8 21.5 12 16.7 12 10.75Z"
                            fill="#F24E1E"
                          />
                          <path
                            d="M33.5 0H44.25C50.2 0 55 4.8 55 10.75C55 16.7 50.2 21.5 44.25 21.5H33.5V0Z"
                            fill="#FF7262"
                          />
                          <path
                            d="M55 32.25C55 38.2 50.2 43 44.25 43C38.3 43 33.5 38.2 33.5 32.25C33.5 26.3 38.3 21.5 44.25 21.5C50.2 21.5 55 26.3 55 32.25Z"
                            fill="#1ABCFE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_100_329_2">
                            <rect width="64" height="64" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Figma
                      </h3>
                    </div>

                    {/* React */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32 24C46.888 24 56 29.18 56 32C56 34.82 46.888 40 32 40C17.112 40 8 34.82 8 32C8 29.18 17.112 24 32 24ZM32 20C16.536 20 4 25.372 4 32C4 38.628 16.536 44 32 44C47.464 44 60 38.628 60 32C60 25.372 47.464 20 32 20Z"
                          fill="#00BCD4"
                        />
                        <path
                          d="M32 28C31.2089 28 30.4355 28.2346 29.7777 28.6741C29.1199 29.1136 28.6072 29.7384 28.3045 30.4693C28.0017 31.2002 27.9225 32.0044 28.0769 32.7804C28.2312 33.5563 28.6122 34.269 29.1716 34.8284C29.731 35.3878 30.4437 35.7688 31.2196 35.9231C31.9956 36.0775 32.7998 35.9983 33.5307 35.6955C34.2616 35.3928 34.8864 34.8801 35.3259 34.2223C35.7654 33.5645 36 32.7911 36 32C36 30.9391 35.5786 29.9217 34.8284 29.1716C34.0783 28.4214 33.0609 28 32 28Z"
                          fill="#00BCD4"
                        />
                        <path
                          d="M20.9158 11.0137C24.9498 11.0137 32.7898 17.3677 38.9278 27.9997C46.3718 40.8937 46.4418 51.3737 43.9998 52.7837C43.7181 52.9297 43.4028 52.9987 43.0858 52.9837C39.0518 52.9837 31.2098 46.6317 25.0718 35.9997C17.6278 23.1057 17.5578 12.6257 19.9998 11.2157C20.2821 11.0693 20.5981 10.9983 20.9158 11.0137ZM20.9138 7.01567C19.8945 6.99723 18.8887 7.25058 17.9998 7.74967C12.2598 11.0637 13.8758 24.6077 21.6078 37.9997C28.1758 49.3797 37.0478 56.9857 43.0878 56.9857C44.1068 57.0025 45.1118 56.7478 45.9998 56.2477C51.7398 52.9357 50.1238 39.3917 42.3918 25.9997C35.8238 14.6197 26.9518 7.01367 20.9118 7.01367L20.9138 7.01567Z"
                          fill="#00BCD4"
                        />
                        <path
                          d="M43.0858 11.0135C43.4028 10.9984 43.7181 11.0674 43.9998 11.2135C46.4418 12.6255 46.3718 23.1055 38.9278 35.9995C32.7878 46.6315 24.9478 52.9855 20.9138 52.9855C20.5968 53.0006 20.2815 52.9316 19.9998 52.7855C17.5578 51.3715 17.6278 40.8915 25.0718 27.9995C31.2118 17.3675 39.0518 11.0135 43.0858 11.0135ZM43.0858 7.01351C37.0458 7.01351 28.1758 14.6215 21.6058 25.9995C13.8778 39.3915 12.2598 52.9355 17.9998 56.2475C18.8883 56.748 19.8942 57.0027 20.9138 56.9855C26.9538 56.9855 35.8238 49.3775 42.3938 37.9995C50.1218 24.6075 51.7398 11.0635 45.9998 7.75151C45.1113 7.25103 44.1055 6.99629 43.0858 7.01351Z"
                          fill="#00BCD4"
                        />
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        React
                      </h3>
                    </div>

                    {/* Tailwind */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 27.4002C19.8667 19.9335 24.5333 16.2002 32 16.2002C43.2 16.2002 44.6 24.6002 50.2 26.0002C53.9333 26.9335 57.2 25.5335 60 21.8002C58.1333 29.2669 53.4667 33.0002 46 33.0002C34.8 33.0002 33.4 24.6002 27.8 23.2002C24.0667 22.2669 20.8 23.6669 18 27.4002ZM4 44.2002C5.86667 36.7335 10.5333 33.0002 18 33.0002C29.2 33.0002 30.6 41.4002 36.2 42.8002C39.9333 43.7335 43.2 42.3335 46 38.6002C44.1333 46.0669 39.4667 49.8002 32 49.8002C20.8 49.8002 19.4 41.4002 13.8 40.0002C10.0667 39.0669 6.8 40.4669 4 44.2002Z"
                          fill="#44A8B3"
                        />
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Tailwind
                      </h3>
                    </div>

                    {/* Node */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_399_2)">
                          <path
                            d="M33.4788 0.412323C33.0195 0.149183 32.4994 0.0107422 31.97 0.0107422C31.4407 0.0107422 30.9206 0.149183 30.4613 0.412323L5.55129 14.8798C4.60379 15.4158 4.07129 16.4273 4.07129 17.4998V46.4938C4.07129 47.5653 4.66279 48.5773 5.55029 49.1138L30.4603 63.5808C30.9196 63.8441 31.4399 63.9825 31.9693 63.9825C32.4987 63.9825 33.0189 63.8441 33.4783 63.5808L58.3883 49.1133C59.3353 48.5773 59.8673 47.5653 59.8673 46.4933V17.4998C59.8673 16.4278 59.2758 15.4163 58.3883 14.8798L33.4788 0.412323Z"
                            fill="url(#paint0_linear_100_399_2)"
                          />
                          <path
                            d="M58.4485 14.8802L33.4205 0.412734C33.1749 0.28731 32.9171 0.187613 32.651 0.115234L4.60498 48.3992C4.83731 48.6841 5.11771 48.9261 5.43348 49.1142L30.462 63.5812C31.172 63.9977 32 64.1172 32.7695 63.8787L59.0995 15.4162C58.9266 15.1898 58.7039 15.0064 58.4485 14.8802Z"
                            fill="url(#paint1_linear_100_399_2)"
                          />
                          <path
                            d="M58.4488 49.1126C59.1588 48.6961 59.6913 47.9816 59.9278 47.2076L32.5328 0.0541294C31.8228 -0.0648706 31.0533 -0.00537062 30.4028 0.411629L5.55176 14.8196L32.3548 63.9971C32.7098 63.9371 33.1248 63.8181 33.4798 63.6396L58.4488 49.1126Z"
                            fill="url(#paint2_linear_100_399_2)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_100_399_2"
                            x1="42.1142"
                            y1="11.1861"
                            x2="19.3649"
                            y2="57.3063"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3F873F" />
                            <stop offset="0.33" stopColor="#3F8B3D" />
                            <stop offset="0.637" stopColor="#3E9638" />
                            <stop offset="0.934" stopColor="#3DA92E" />
                            <stop offset="1" stopColor="#3DAE2B" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_100_399_2"
                            x1="28.1853"
                            y1="35.3831"
                            x2="91.6581"
                            y2="-11.2257"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.138" stopColor="#3F873F" />
                            <stop offset="0.402" stopColor="#52A044" />
                            <stop offset="0.713" stopColor="#64B749" />
                            <stop offset="0.908" stopColor="#6ABF4B" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_100_399_2"
                            x1="3.1596"
                            y1="31.9873"
                            x2="60.7998"
                            y2="31.9873"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.092" stopColor="#6ABF4B" />
                            <stop offset="0.287" stopColor="#64B749" />
                            <stop offset="0.598" stopColor="#52A044" />
                            <stop offset="0.862" stopColor="#3F873F" />
                          </linearGradient>
                          <clipPath id="clip0_100_399_2">
                            <rect width="64" height="64" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Node
                      </h3>
                    </div>

                    {/* Github */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.0002 5.33301C28.4982 5.33301 25.0306 6.02276 21.7953 7.36289C18.5599 8.70301 15.6202 10.6673 13.144 13.1435C8.14301 18.1445 5.3335 24.9272 5.3335 31.9997C5.3335 43.7863 12.9868 53.7863 23.5735 57.333C24.9068 57.5463 25.3335 56.7197 25.3335 55.9997V51.493C17.9468 53.093 16.3735 47.9197 16.3735 47.9197C15.1468 44.8263 13.4135 43.9997 13.4135 43.9997C10.9868 42.3463 13.6002 42.3997 13.6002 42.3997C16.2668 42.5863 17.6802 45.1463 17.6802 45.1463C20.0002 49.1997 23.9202 47.9997 25.4402 47.3597C25.6802 45.6263 26.3735 44.453 27.1202 43.7863C21.2002 43.1197 14.9868 40.8263 14.9868 30.6663C14.9868 27.7063 16.0002 25.333 17.7335 23.4397C17.4668 22.773 16.5335 19.9997 18.0002 16.3997C18.0002 16.3997 20.2402 15.6797 25.3335 19.1197C27.4402 18.533 29.7335 18.2397 32.0002 18.2397C34.2668 18.2397 36.5602 18.533 38.6668 19.1197C43.7602 15.6797 46.0002 16.3997 46.0002 16.3997C47.4668 19.9997 46.5335 22.773 46.2668 23.4397C48.0002 25.333 49.0135 27.7063 49.0135 30.6663C49.0135 40.853 42.7735 43.093 36.8268 43.7597C37.7868 44.5863 38.6668 46.213 38.6668 48.693V55.9997C38.6668 56.7197 39.0935 57.573 40.4535 57.333C51.0402 53.7597 58.6668 43.7863 58.6668 31.9997C58.6668 28.4978 57.9771 25.0301 56.637 21.7948C55.2968 18.5594 53.3326 15.6197 50.8563 13.1435C48.3801 10.6673 45.4404 8.70301 42.2051 7.36289C38.9697 6.02276 35.5021 5.33301 32.0002 5.33301Z"
                          fill="black"
                        />
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Github
                      </h3>
                    </div>

                    {/* Typescript */}
                    <div className="flex flex-col items-center justify-center gap-4 py-[22px] px-2 min-w-[140px] rounded-lg">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_419_2)">
                          <path
                            d="M5 0H59C61.7615 0 64 2.2385 64 5V59C64 61.7615 61.7615 64 59 64H5C2.2385 64 0 61.7615 0 59V5C0 2.2385 2.2385 0 5 0Z"
                            fill="#3178C6"
                          />
                          <path
                            d="M37.6295 50.1188V57.0238C38.7525 57.5993 40.0807 58.0308 41.614 58.3185C43.1473 58.6062 44.7634 58.75 46.4622 58.75C48.1179 58.75 49.6908 58.5917 51.1808 58.2752C52.6708 57.9587 53.9773 57.4373 55.1003 56.711C56.2233 55.9845 57.1123 55.035 57.7675 53.8625C58.4225 52.6903 58.75 51.2411 58.75 49.5148C58.75 48.2631 58.5628 47.1662 58.1885 46.224C57.818 45.2883 57.2677 44.4343 56.5687 43.7103C55.8634 42.9766 55.0177 42.3184 54.0315 41.7357C53.0453 41.1531 51.9331 40.6029 50.6948 40.0853C49.7878 39.7111 48.9743 39.3478 48.2545 38.9955C47.5347 38.6432 46.9228 38.2835 46.419 37.9165C45.915 37.5498 45.5263 37.1614 45.2528 36.7513C44.9793 36.3411 44.8425 35.8772 44.8425 35.3595C44.8425 34.8848 44.9648 34.4569 45.2095 34.0757C45.4543 33.6944 45.7999 33.3672 46.2463 33.094C46.6926 32.8208 47.2397 32.6086 47.8875 32.4572C48.5353 32.3062 49.2552 32.2308 50.047 32.2308C50.623 32.2308 51.2312 32.2739 51.8717 32.3602C52.5124 32.4464 53.1567 32.5795 53.8047 32.7595C54.4506 32.9389 55.0822 33.1661 55.6942 33.4393C56.2876 33.7022 56.8552 34.02 57.3895 34.3885V27.9368C56.3385 27.5339 55.1903 27.2354 53.945 27.0413C52.6997 26.8471 51.2707 26.75 49.6582 26.75C48.0171 26.75 46.4623 26.9262 44.9938 27.2787C43.5253 27.6311 42.2331 28.1813 41.1172 28.9293C40.0016 29.6776 39.1197 30.6307 38.4717 31.7885C37.8239 32.9465 37.5 34.3311 37.5 35.9422C37.5 37.9992 38.0939 39.7542 39.2817 41.2072C40.4696 42.6602 42.2727 43.8902 44.6912 44.897C45.5841 45.2607 46.4697 45.642 47.3475 46.0407C48.1682 46.4147 48.8773 46.8031 49.4748 47.2057C50.0723 47.6084 50.5438 48.0472 50.8893 48.522C51.2348 48.9968 51.4075 49.5363 51.4075 50.1405C51.4104 50.5754 51.2986 51.0033 51.0835 51.3812C50.8677 51.7624 50.5402 52.0932 50.101 52.3737C49.6618 52.6542 49.1148 52.8736 48.4598 53.0317C47.8048 53.1899 47.0381 53.2691 46.1598 53.2692C44.6626 53.2692 43.1798 53.0067 41.7113 52.4815C40.2428 51.9563 38.8822 51.1688 37.6295 50.1188ZM26.1205 32.9355H35V27.25H10.25V32.9355H19.0863V58.25H26.1205V32.9355Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_100_419_2">
                            <rect width="64" height="64" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h3 className="text-base font-semibold text-text-tertiary text-center leading-[22px] tracking-[-0.18px]">
                        Typescript
                      </h3>
                    </div>
                  </div>
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
