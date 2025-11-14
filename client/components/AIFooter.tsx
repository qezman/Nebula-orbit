export default function AIFooter() {
  return (
    <footer className="w-full bg-white px-8 md:px-16 py-20">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 lg:gap-20 mb-12">
          {/* Nebula Column */}
          <div className="flex-1 flex flex-col items-start gap-6 w-full">
            <div className="w-full h-11 rounded bg-zinc-200" />
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="w-full h-11 rounded bg-zinc-100" />
              <div className="w-full h-6 rounded bg-zinc-100" />
            </div>
          </div>

          {/* Product Column */}
          <div className="flex-1 flex flex-col justify-center items-start gap-4 w-full">
            <div className="w-22 h-6 rounded bg-zinc-200" />
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="w-32 h-6 rounded bg-zinc-100" />
              <div className="w-22 h-6 rounded bg-zinc-100" />
              <div className="w-30 h-6 rounded bg-zinc-100" />
              <div className="w-26 h-6 rounded bg-zinc-100" />
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex-1 flex flex-col justify-center items-start gap-4 w-full">
            <div className="w-40 h-6 rounded bg-zinc-200" />
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="w-22 h-6 rounded bg-zinc-100" />
              <div className="w-32 h-6 rounded bg-zinc-100" />
              <div className="w-26 h-6 rounded bg-zinc-100" />
              <div className="w-26 h-6 rounded bg-zinc-100" />
            </div>
          </div>

          {/* Community Column */}
          <div className="flex-1 flex flex-col justify-center items-start gap-4 w-full">
            <div className="w-32 h-6 rounded bg-zinc-200" />
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="w-22 h-6 rounded bg-zinc-100" />
              <div className="w-28 h-6 rounded bg-zinc-100" />
              <div className="w-15 h-6 rounded bg-zinc-100" />
              <div className="w-44 h-6 rounded bg-zinc-100" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-7" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-2.5">
          <div className="w-47 h-5 bg-zinc-200" />
          <div className="flex-1" />
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-zinc-200 p-1.5" />
            <div className="w-6 h-6 rounded bg-zinc-200 p-1.5" />
            <div className="w-6 h-6 rounded bg-zinc-200 p-1.5" />
            <div className="w-6 h-6 rounded bg-zinc-200 p-1.5" />
            <div className="w-6 h-6 rounded bg-zinc-200 p-1.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
