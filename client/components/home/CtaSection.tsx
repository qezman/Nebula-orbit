"use client";

import Link from "next/link";
import { useInView } from "../../hooks/useInView";

export default function CtaSection() {
  const ctaRef = useInView({ threshold: 0.2 });

  return (
    <div className="w-full bg-white py-16 lg:py-20" ref={ctaRef.ref}>
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-16 transition-all duration-1000 ${ctaRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto text-center">
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-gray-900">
              Start Building <span className="text-indigo-500">Beautiful</span>{" "}
              Pages Today
            </h2>
            <p className="text-base sm:text-lg font-medium text-zinc-900 leading-relaxed">
              Start with professionally designed templates and customize to your
              brand
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/generator"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-lg text-zinc-50 text-lg font-semibold shadow-md hover:shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
