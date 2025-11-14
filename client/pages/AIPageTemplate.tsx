import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface AIPageTemplateProps {
  sections: React.ReactNode[];
}

export default function AIPageTemplate({ sections }: AIPageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 w-full">
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
