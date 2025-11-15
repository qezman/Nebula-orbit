"use client";

import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import TemplatesSection from "../components/home/TemplatesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaSection from "../components/home/CtaSection";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-indigo-50/50 pt-20">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TemplatesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
