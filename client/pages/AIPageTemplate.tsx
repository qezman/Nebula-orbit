import React from "react";
import AINavbar from "@/components/AINavbar";
import AIHeroSection from "@/components/AIHeroSection";
import AISection2 from "@/components/AISection2";
import AISection3 from "@/components/AISection3";
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
        <AISection2 />
        <AISection3 />

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
