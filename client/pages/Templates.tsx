import { useState } from "react";
import { useInView } from "../hooks/useInView";
import Footer from "../components/Footer";

export default function Templates() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const heroRef = useInView({ threshold: 0.2 });
  const gridRef = useInView({ threshold: 0.2 });

  const templates = [
    {
      id: 1,
      title: "Horizon Analytics",
      description:
        "A timeless SaaS template with hero, features, pricing, and testimonials sections.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/320d0456e2a772bd11bcefa820d14dacce16c4aa?width=936",
      category: "saas",
    },
    {
      id: 2,
      title: "Lynqson Minimal",
      description:
        "Ultra-clean minimalist design focusing on clarity and user experience.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8b406baed77d318c68f96b7e5bb37e76f196668b?width=924",
      category: "saas",
    },
    {
      id: 3,
      title: "Currency Exchange",
      description:
        "Perfect for creative agencies showcasing their work with style and elegance.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0805bfb64fc2b934b7d0a64cf5859c84cb043b3d?width=892",
      category: "agency",
    },
    {
      id: 4,
      title: "Analytics",
      description:
        "A timeless SaaS template with hero, features, pricing, and testimonials sections.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/194b966bf2fa7ed3447fae8769e08e80908aa5bd?width=936",
      category: "saas",
    },
    {
      id: 5,
      title: "Saaasta",
      description:
        "A timeless SaaS template with hero, features, pricing, and testimonials sections.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/efc5f4d06a62fa0b9fc83ba79ed8d18124860c6b?width=924",
      category: "saas",
    },
    {
      id: 6,
      title: "Fizens",
      description:
        "A timeless SaaS template with hero, features, pricing, and testimonials sections.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7e8eb76f3ba47e3a7528bd0615aadfe62acb05b6?width=936",
      category: "startup",
    },
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesFilter =
      activeFilter === "all" || template.category === activeFilter;
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full bg-white pt-20">
      {/* Header Section */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-12"
        ref={heroRef.ref}
      >
        <div
          className={`flex flex-col items-center gap-2 text-center max-w-3xl mx-auto transition-all duration-1000 ${heroRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            <span className="text-gray-900">Template </span>
            <span className="text-indigo-500">Marketplace</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Choose from professionally designed templates built on your
            components.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full border-t border-b border-gray-300 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 flex-1">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-5 py-3 rounded-lg text-lg font-semibold transition-colors ${
                  activeFilter === "all"
                    ? "bg-indigo-500 text-zinc-50"
                    : "text-zinc-700 hover:bg-gray-100"
                }`}
              >
                All Templates
              </button>
              <button
                onClick={() => setActiveFilter("saas")}
                className={`px-5 py-3 rounded-lg text-lg font-medium transition-colors ${
                  activeFilter === "saas"
                    ? "bg-indigo-500 text-zinc-50"
                    : "text-zinc-700 hover:bg-gray-100"
                }`}
              >
                SaaS
              </button>
              <button
                onClick={() => setActiveFilter("agency")}
                className={`px-5 py-3 rounded-lg text-lg font-medium transition-colors ${
                  activeFilter === "agency"
                    ? "bg-indigo-500 text-zinc-50"
                    : "text-zinc-700 hover:bg-gray-100"
                }`}
              >
                Agency
              </button>
              <button
                onClick={() => setActiveFilter("startup")}
                className={`px-5 py-3 rounded-lg text-lg font-medium transition-colors ${
                  activeFilter === "startup"
                    ? "bg-indigo-500 text-zinc-50"
                    : "text-zinc-700 hover:bg-gray-100"
                }`}
              >
                Startup
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-auto">
              <div className="flex items-center gap-3 px-5 py-3 border border-gray-500 rounded-lg min-w-[280px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400 flex-shrink-0"
                >
                  <path
                    d="M21 21.0002L16.657 16.6572M16.657 16.6572C17.3998 15.9143 17.9891 15.0324 18.3912 14.0618C18.7932 13.0911 19.0002 12.0508 19.0002 11.0002C19.0002 9.9496 18.7932 8.90929 18.3912 7.93866C17.9891 6.96803 17.3998 6.08609 16.657 5.34321C15.9141 4.60032 15.0321 4.01103 14.0615 3.60898C13.0909 3.20693 12.0506 3 11 3C9.94936 3 8.90905 3.20693 7.93842 3.60898C6.96779 4.01103 6.08585 4.60032 5.34296 5.34321C3.84263 6.84354 2.99976 8.87842 2.99976 11.0002C2.99976 13.122 3.84263 15.1569 5.34296 16.6572C6.84329 18.1575 8.87818 19.0004 11 19.0004C13.1217 19.0004 15.1566 18.1575 16.657 16.6572Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg text-gray-400 placeholder-gray-400 bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 lg:py-16"
        ref={gridRef.ref}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 ${gridRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="flex flex-col gap-4 bg-white/10 rounded-sm border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Template Image */}
              <div className="w-full h-56 overflow-hidden rounded-t-sm">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Template Info */}
              <div className="flex flex-col gap-4 px-4 pb-4 flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight tracking-tight">
                    {template.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mt-2">
                    {template.description}
                  </p>
                </div>

                {/* Action Button */}
                <button
                  className="w-full px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-md text-white text-base font-medium leading-[22px] tracking-[-0.18px] cursor-pointer"
                  onClick={() =>
                    console.log(`View template: ${template.title}`)
                  }
                >
                  View Template
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-16">
          <button
            className="px-8 py-3 border border-gray-400 hover:bg-gray-50 transition-colors rounded-lg text-zinc-700 text-lg font-medium cursor-pointer"
            onClick={() => console.log("Loading more templates...")}
          >
            Load More Templates
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
