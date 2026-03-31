import { Quote } from "lucide-react";

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    company: "Google",
    image: "https://i.pravatar.cc/150?u=1",
    text: (
      <>
        NeetCode 150 was the exact roadmap I needed. <span className="font-medium text-zinc-700">Instead of blindly doing 500 problems, focusing on these patterns helped me clear my Google onsite with confidence.</span> The video explanations are the best out there.
      </>
    )
  },
  {
    name: "Michael Rodriguez",
    company: "Meta",
    image: "https://i.pravatar.cc/150?u=2",
    text: (
      <>
        The video explanations are simply unmatched. Navin breaks down complex dynamic programming concepts into intuitive steps. <span className="font-medium text-zinc-700">Landed E5 at Meta thanks to this platform.</span>
      </>
    )
  },
  {
    name: "Emily Wang",
    company: "Amazon",
    image: "https://i.pravatar.cc/150?u=3",
    text: (
      <>
        I was stuck in tutorial hell for months. <span className="font-medium text-zinc-700">The structured roadmap helped me track my progress and identify exactly which topics I was weak in.</span> Highly recommended for anyone starting their prep journey.
      </>
    )
  },
  {
    name: "David Kim",
    company: "Netflix",
    image: "https://i.pravatar.cc/150?u=4",
    text: (
      <>
        The absolute best resource for software engineers preparing for interviews. <span className="font-medium text-zinc-700">The way the platform links related problems together gives you a huge advantage</span> when seeing unseen problems.
      </>
    )
  },
  {
    name: "Jessica Taylor",
    company: "OpenAI",
    image: "https://i.pravatar.cc/150?u=5",
    text: (
      <>
        I used NeetCode exclusively for 2 months. <span className="font-medium text-zinc-700">The clean UI and incredibly clear explanations cut my prep time in half.</span> I can't recommend it enough to my peers trying to break into AI and big tech.
      </>
    )
  },
  {
    name: "James Wilson",
    company: "Microsoft",
    image: "https://i.pravatar.cc/150?u=6",
    text: (
      <>
        As a self-taught developer, coding interviews were terrifying. <span className="font-medium text-zinc-700">NeetCode's structured approach demystified algorithms for me.</span> I finally broke into my dream job after years of trying!
      </>
    )
  }
];

export const COMPANIES = [
  { name: "Google", url: "https://simpleicons.org/icons/google.svg" },
  { name: "Meta", url: "https://simpleicons.org/icons/meta.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" },
  { name: "Netflix", url: "https://simpleicons.org/icons/netflix.svg" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
];

export function Testimonials() {
  return (
    <section className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-20 md:py-32">

      {/* Trust Heading */}
      <div className="text-center mb-10">
        <h2 className="text-zinc-500 font-medium text-lg md:text-xl tracking-tight">
          Trusted by engineers who landed offers at top tech companies
        </h2>
      </div>

      {/* Company Logos Row */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-20">
        {COMPANIES.map((company) => (
          <div key={company.name} className="px-6 py-3 bg-[#F1F3F5] rounded-2xl flex items-center justify-center gap-2.5 transition-transform hover:-translate-y-0.5">
            <img src={company.url} alt={`${company.name} logo`} className="w-5 h-5 opacity-60 grayscale" />
            <span className="text-zinc-600 font-bold text-lg md:text-xl tracking-tight opacity-80">{company.name}</span>
          </div>
        ))}
      </div>

      {/* Testimonials Grid (Masonry Layout) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <div key={i} className="break-inside-avoid bg-white p-6 md:p-8 rounded-[16px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-[#EAEAEA] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 relative group">

            {/* Subtle Quote Icon */}
            <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-100 group-hover:text-zinc-200 transition-colors" />

            {/* Card Header */}
            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm shrink-0">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 leading-tight">{testimonial.name}</h4>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 text-[11px] font-semibold mt-1">
                  {testimonial.company}
                </div>
              </div>
            </div>

            {/* Card Body */}
            <p className="text-zinc-500 leading-relaxed relative z-10 text-[15px]">
              {testimonial.text}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}
