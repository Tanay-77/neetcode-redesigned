import { CheckCircle2, MessageSquare, Play } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 md:py-32">
      {/* Centered CTA Card Container (max 1100px for tight focus) */}
      <div className="relative max-w-[1150px] mx-auto rounded-[32px] bg-white border border-zinc-200/60 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden">
        
        {/* Abstract background gradient inside the card */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
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
                <MessageSquare className="w-4 h-4" />
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
