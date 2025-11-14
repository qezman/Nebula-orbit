export default function AISection3() {
  return (
    <section className="w-full px-8 md:px-16 py-9 bg-gradient-to-br from-indigo-500/[0.04] via-indigo-500/[0.04] to-violet-500/[0.04]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-start gap-8">
        {/* Intro Header Container */}
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <div className="w-full max-w-[360px] h-[88px] rounded-lg bg-zinc-200" />
          <div className="w-full max-w-[554px] flex flex-col items-start gap-8">
            <div className="h-[33px] w-full rounded-lg bg-zinc-100" />
            <div className="h-[33px] w-full rounded-lg bg-zinc-100" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row items-start gap-7 w-full">
          {/* Card 1 */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6 p-6 rounded-lg border border-gray-200 bg-white/10 backdrop-blur-sm shadow-md w-full">
            <div className="w-[102px] h-[62px] rounded-lg bg-zinc-200" />
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="h-[30px] w-full rounded-lg bg-zinc-100" />
                <div className="h-[30px] w-full rounded-lg bg-zinc-100" />
              </div>
              <div className="h-[54px] w-full rounded-lg bg-zinc-200" />
            </div>
          </div>

          {/* Card 2 - Featured */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6 p-6 rounded-lg border-2 border-indigo-500 bg-white/10 backdrop-blur-sm shadow-md w-full">
            <div className="w-[102px] h-[62px] rounded-lg bg-indigo-300" />
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="h-[30px] w-full rounded-lg bg-indigo-300/20" />
                <div className="h-[30px] w-full rounded-lg bg-indigo-300/20" />
              </div>
              <div className="h-[54px] w-full rounded-lg bg-indigo-500" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6 p-6 rounded-lg border border-gray-200 bg-white/10 backdrop-blur-sm shadow-md w-full">
            <div className="w-[102px] h-[62px] rounded-lg bg-zinc-200" />
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="h-[30px] w-full rounded-lg bg-zinc-100" />
                <div className="h-[30px] w-full rounded-lg bg-zinc-100" />
              </div>
              <div className="h-[54px] w-full rounded-lg bg-zinc-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
