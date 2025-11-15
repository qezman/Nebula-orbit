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

      {/* Footer */}
      <Footer />
    </div>
  );
}
