export default function AISection4() {
  return (
    <section className="w-full px-8 md:px-16 py-16 md:py-32 bg-slate-100">
      <div className="w-full max-w-[1056px] mx-auto flex flex-col justify-center items-center gap-16">
        {/* Header Container */}
        <div className="w-full flex flex-col items-center gap-4">
          <div className="w-full max-w-[288px] h-10 rounded-lg bg-gray-200" />
          <div className="w-full max-w-[416px] flex flex-col items-center gap-2">
            <div className="h-4 w-full rounded bg-gray-100" />
            <div className="h-4 w-full max-w-[256px] rounded bg-gray-100" />
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-7">
          {/* Card 1 */}
          <div className="flex-1 w-full max-w-[499px] flex flex-col items-start gap-6 p-8 pb-12 rounded-2xl bg-white shadow-sm">
            {/* Avatar and Name */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
              <div className="flex flex-col justify-center items-start gap-2">
                <div className="w-32 h-5 rounded bg-gray-200" />
                <div className="w-24 h-4 rounded bg-gray-100" />
              </div>
            </div>

            {/* Review Text */}
            <div className="w-full flex flex-col justify-center items-start gap-3">
              <div className="w-full h-4 rounded bg-gray-100" />
              <div className="w-full max-w-[387px] h-4 rounded bg-gray-100" />
              <div className="w-full h-4 rounded bg-gray-100" />
              <div className="w-full max-w-[396px] h-4 rounded bg-gray-100" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 w-full max-w-[499px] flex flex-col items-start gap-6 p-8 pb-12 rounded-2xl bg-white shadow-sm">
            {/* Avatar and Name */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
              <div className="flex flex-col justify-center items-start gap-2">
                <div className="w-36 h-5 rounded bg-gray-200" />
                <div className="w-28 h-4 rounded bg-gray-100" />
              </div>
            </div>

            {/* Review Text */}
            <div className="w-full flex flex-col items-start gap-3">
              <div className="w-full h-4 rounded bg-gray-100" />
              <div className="w-full h-4 rounded bg-gray-100" />
              <div className="w-full h-4 rounded bg-gray-100" />
              <div className="w-full max-w-[352px] h-4 rounded bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
