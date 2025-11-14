export default function AISection2() {
  return (
    <section className="w-full bg-zinc-50 px-8 md:px-16 py-9">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-start gap-8">
        {/* Intro Header Container */}
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <div className="w-full max-w-[330px] h-[50px] rounded-lg bg-zinc-200" />
          <div className="w-full max-w-[426px] flex flex-col items-start gap-2">
            <div className="h-[22px] w-full rounded-lg bg-zinc-100" />
            <div className="h-[22px] w-full rounded-lg bg-zinc-100" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row items-start gap-7 w-full">
          {/* Card 1 */}
          <div className="flex-1 flex flex-col items-start gap-6 p-5 rounded-lg border border-gray-200 bg-white shadow-md w-full">
            <div className="w-[62px] h-[62px] rounded-lg bg-indigo-500/20" />
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="w-full max-w-[192px] h-[30px] rounded-lg bg-zinc-200" />
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="h-5 w-full rounded-lg bg-zinc-100" />
                <div className="h-5 w-full max-w-[192px] rounded-lg bg-zinc-100" />
                <div className="h-5 w-full max-w-[121px] rounded-lg bg-zinc-100" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 flex flex-col items-start gap-6 p-5 rounded-lg border border-gray-200 bg-white shadow-md w-full">
            <div className="w-[62px] h-[62px] rounded-lg bg-green-500/20" />
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="w-full max-w-[192px] h-[30px] rounded-lg bg-zinc-200" />
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="h-5 w-full rounded-lg bg-zinc-100" />
                <div className="h-5 w-full max-w-[192px] rounded-lg bg-zinc-100" />
                <div className="h-5 w-full max-w-[121px] rounded-lg bg-zinc-100" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 flex flex-col items-start gap-6 p-5 rounded-lg border border-gray-200 bg-white shadow-md w-full">
            <div className="w-[62px] h-[62px] rounded-lg bg-amber-500/20" />
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="w-full max-w-[192px] h-[30px] rounded-lg bg-zinc-200" />
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="h-5 w-full rounded-lg bg-zinc-100" />
                <div className="h-5 w-full max-w-[192px] rounded-lg bg-zinc-100" />
                <div className="h-5 w-full max-w-[121px] rounded-lg bg-zinc-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
