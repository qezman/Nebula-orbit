export default function AISection5() {
  return (
    <section className="w-full px-8 md:px-16 lg:px-36 py-20 bg-indigo-500">
      <div className="w-full max-w-[896px] mx-auto px-8 flex justify-center items-center">
        <div className="w-full max-w-[832px] flex flex-col justify-center items-center gap-6">
          {/* Heading */}
          <div className="w-full max-w-[384px] h-12 rounded-xl bg-indigo-300" />

          {/* Description Lines */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <div className="w-full max-w-[320px] h-5 rounded-lg bg-indigo-300" />
            <div className="w-full max-w-[256px] h-5 rounded-lg bg-indigo-300" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-start gap-4 pt-4 w-full">
            <button className="w-full sm:w-40 h-12 rounded-xl bg-zinc-50 hover:bg-white transition-colors" />
            <button className="w-full sm:w-36 h-12 rounded-xl bg-indigo-800 hover:bg-indigo-900 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}
