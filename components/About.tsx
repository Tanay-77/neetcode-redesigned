import { Users2 } from "lucide-react";

export function About() {
  return (
    <section className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 md:py-32">
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Column (Founder Image) */}
        <div className="relative mx-auto w-full max-w-[440px] lg:max-w-[500px]">
          {/* Soft Background Blob/Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-400/10 rounded-full blur-[60px] pointer-events-none -z-10"></div>

          {/* Primary Image Container */}
          <div className="relative rounded-[24px] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] overflow-hidden p-3 aspect-[4/5] group hover:-translate-y-1.5 transition-transform duration-500">
            <div className="w-full h-full rounded-[16px] bg-zinc-100 overflow-hidden relative">
              <img src="https://neetcode.io/assets/navi.png" alt="Navi" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out" />

              {/* Elegant Glassmorphism Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between pointer-events-none">
                <div className="flex flex-col">
                  <span className="font-bold text-zinc-900 leading-none mb-1.5 tracking-tight text-lg">Navi</span>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Founder, NeetCode</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100/80 flex items-center justify-center">
                  <Users2 className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Content) */}
        <div className="flex flex-col">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 w-fit mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest">1M+ developers helped</span>
          </div>

          <h2 className="text-4xl md:text-[3rem] font-bold tracking-tight text-zinc-900 mb-8 leading-tight">
            Hi, I'm Navi.
          </h2>

          <div className="space-y-6 text-[17px] text-zinc-500 leading-relaxed mb-10 max-w-xl">
            <p>
              I created NeetCode to be the resource I wished I had when I was preparing for coding interviews. Like many, I struggled with algorithms and system design, finding myself stuck in tutorial hell for months.
            </p>
            <p>
              After finally cracking the code and landing offers at top tech companies, I realized the interview process doesn't have to be a miserable grind.
            </p>

            {/* Highlighted Quote */}
            <div className="my-8">
              <p className="font-semibold text-zinc-700 p-5 rounded-[16px] border border-zinc-200/50 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-900"></span>
                "My goal is to structure your learning path so you don't have to wander aimlessly. Just follow the roadmap and put in the work."
              </p>
            </div>
          </div>

          {/* Companies row */}
          <div className="pt-8 border-t border-[#EAEAEA]">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-5 block">Previously at</span>
            <div className="flex flex-wrap items-center gap-8 md:gap-10 opacity-50 hover:opacity-100 grayscale transition-all duration-300">
              <img src="https://simpleicons.org/icons/google.svg" alt="Google" className="h-[22px] object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-[22px] object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/500px-Capital_One_logo.svg.png" alt="Capital One" className="h-[22px] object-contain" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
