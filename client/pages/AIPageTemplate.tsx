import React from "react";
import AINavbar from "@/components/AINavbar";
import AIHeroSection from "@/components/AIHeroSection";
import Footer from "@/components/Footer";

interface AIPageTemplateProps {
  sections?: React.ReactNode[];
}

export default function AIPageTemplate({ sections = [] }: AIPageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AINavbar />

      <main className="flex-1 w-full pt-[88px]">
        <AIHeroSection />

        {sections.map((section, index) => (
          <div key={index} className="w-full">
            {section}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
