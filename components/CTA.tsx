import { CheckCircle2, MessageSquare, Play } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 md:py-32">
      {/* Centered CTA Card Container (max 1100px for tight focus) */}
      <div className="relative max-w-[1150px] mx-auto rounded-[32px] bg-white border border-zinc-200/60 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden">

        {/* Abstract background gradient inside the card */}
        <div className="absolute inset-0 pointer-events-none">
          {/* <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div> */}
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 p-8 md:p-12 lg:p-16 xl:p-20 items-center">

          {/* Left Column (Content) */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-[2.75rem] font-bold tracking-tight text-zinc-900 mb-4 leading-[1.1]">
              Start Practicing <br className="hidden sm:block" />for Free
            </h2>
            <p className="text-lg text-zinc-500 mb-8 max-w-[400px] leading-relaxed">
              The best resources for coding interviews. Period.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-10">
              {[
                "Organized study plans (Blind 75, NeetCode 150)",
                "Video explanations for every problem",
                "Progress tracking and analytics",
                "Active Discord community"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-600 font-medium text-[15px]">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
              <Link href="#" className="w-full sm:w-auto flex justify-center items-center gap-2 px-7 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full font-semibold transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 text-sm">
                <Play className="w-4 h-4 fill-current" />
                Start Practicing
              </Link>
              <Link href="#" className="w-full sm:w-auto flex justify-center items-center gap-2 px-7 py-3.5 bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-700 rounded-full font-semibold transition-all hover:-translate-y-0.5 text-sm shadow-sm">
                View Roadmap
              </Link>
              <Link href="#" className="w-full sm:w-auto flex justify-center items-center gap-2 px-7 py-3.5 bg-indigo-50/50 border border-indigo-100/80 hover:bg-indigo-50 hover:border-indigo-200 text-indigo-600 rounded-full font-semibold transition-all hover:-translate-y-0.5 text-sm">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                Join Discord
              </Link>
            </div>
          </div>

          {/* Right Column (Product Preview Card) */}
          <div className="relative mx-auto w-full max-w-[440px] lg:max-w-[480px]">
            {/* The Dashboard Card */}
            <div className="bg-white rounded-[24px] border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] overflow-hidden hover:-translate-y-1.5 transition-transform duration-500">

              {/* Card Header */}
              <div className="p-6 md:p-8 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <div>
                  <h3 className="text-[22px] font-bold text-zinc-900 tracking-tight">NeetCode 150</h3>
                  <p className="text-sm text-zinc-500 mt-1 font-medium">Structured curriculum</p>
                </div>
                <div className="px-3 py-1.5 bg-emerald-100/70 text-emerald-700 text-[11px] font-bold uppercase tracking-wider rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-400/20 blur-sm pointer-events-none"></div>
                  <span className="relative z-10">Free</span>
                </div>
              </div>

              {/* Progress Section */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Progress</span>
                  <span className="text-2xl font-bold text-zinc-900 tracking-tight">67 <span className="text-lg text-zinc-400 font-medium">/ 150</span></span>
                </div>
                <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-[#4F46E5] rounded-full w-[44.6%] shadow-[0_0_12px_rgba(79,70,229,0.4)] relative">
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>

                {/* Topics Tags */}
                <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Up Next</h4>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3.5 py-1.5 bg-white shadow-sm text-zinc-600 text-xs font-semibold rounded-lg border border-zinc-200">Arrays & Hashing</span>
                  <span className="px-3.5 py-1.5 bg-white shadow-sm text-zinc-600 text-xs font-semibold rounded-lg border border-zinc-200">Two Pointers</span>
                  <span className="px-3.5 py-1.5 bg-white shadow-sm text-zinc-600 text-xs font-semibold rounded-lg border border-zinc-200">Sliding Window</span>
                  <span className="px-3.5 py-1.5 bg-zinc-50 text-zinc-400 text-xs font-semibold rounded-lg border border-zinc-200/50 border-dashed">+ 12 more</span>
                </div>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/5 rounded-full blur-[60px] pointer-events-none -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
