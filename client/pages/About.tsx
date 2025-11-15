import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      {/* Hero Section */}
      <section className="w-full bg-surface-2 py-16 md:py-24 lg:py-32">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
