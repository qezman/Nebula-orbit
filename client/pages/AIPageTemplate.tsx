import React from "react";
import AINavbar from "@/components/AINavbar";
import AIHeroSection from "@/components/AIHeroSection";
import AISection2 from "@/components/AISection2";
import AISection3 from "@/components/AISection3";
import AISection4 from "@/components/AISection4";
import AISection5 from "@/components/AISection5";
import AIFooter from "@/components/AIFooter";

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
        <AISection4 />
        <AISection5 />

        {sections.map((section, index) => (
          <div key={index} className="w-full">
            {section}
          </div>
        ))}
      </main>

      <AIFooter />
    </div>
  );
}
