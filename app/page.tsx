import { Rocket, Target, Trophy, Link as LinkIcon, Menu, Code2, Users, Star, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TESTIMONIALS = [
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

const COMPANIES = ["Google", "Meta", "Amazon", "Netflix", "Microsoft", "OpenAI"];


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-zinc-900 font-sans selection:bg-zinc-200 flex flex-col relative overflow-hidden">
      
      {/* GLOBAL Background Grid Lines (extends to all sections) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1300px] h-full relative">
          {/* Outer Boundaries */}
          <div className="absolute top-0 bottom-0 left-4 md:left-12 lg:left-0 w-px bg-[#EAEAEA]" />
          <div className="absolute top-0 bottom-0 right-4 md:right-12 lg:right-0 w-px bg-[#EAEAEA]" />
        </div>
        {/* Navbar Bottom Divider */}
        <div className="absolute top-[80px] left-0 right-0 h-px bg-[#EAEAEA]" />
      </div>

      {/* Container for Nav & Hero to restrict hero-specific lines */}
      <div className="relative w-full flex flex-col">
        {/* HERO-ONLY Background Grid Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
          <div className="w-full max-w-[1300px] h-full relative">
            {/* Middle Container Line - Only for Hero Section */}
            <div className="hidden lg:block absolute top-[80px] bottom-0 left-1/2 w-px bg-[#EAEAEA] -ml-px" />
          </div>
          {/* Hero Bottom Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#EAEAEA]" />
        </div>

        {/* Navbar */}
        <header className="h-[80px] relative z-10 w-full max-w-[1300px] mx-auto px-4 md:px-12 lg:px-0 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:pl-8">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-sm">
              <Rocket className="w-4 h-4" />
            </div>
            <span className="font-semibold text-lg tracking-tight">NeetCode</span>
          </div>
          
          <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
            <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Courses</Link>
            <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Practice</Link>
            <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Roadmap</Link>
          </nav>

          <div className="hidden md:flex items-center gap-5 lg:pr-8">
            <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Sign in</Link>
            <Link href="#" className="text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-full px-6 py-2.5 shadow-sm">
              Get Pro
            </Link>
          </div>

          <button className="md:hidden text-zinc-600">
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Hero Section */}
        <main className="flex-1 relative z-10 w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 pb-16 lg:pb-0">
          
          {/* Left Column (Text Content) */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:pl-12 lg:pr-16 py-16 lg:py-24">
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-zinc-900 mb-6 leading-[1.05]">
              <span className="block mb-2 text-zinc-900">NeetCode</span>
              <span className="text-zinc-400 font-medium tracking-tight text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] block">
                A Better Way to Prepare
              </span>
            </h1>
            
            <p className="text-lg text-zinc-500 mb-10 max-w-md leading-relaxed">
              Tech interview roadmaps trusted by engineers at Google, Meta, OpenAI, and other top tech companies.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link href="#" className="flex px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full font-medium transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] text-sm">
                Get Started Now
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-[#EAEAEA] pt-8 mt-auto lg:mb-12">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold tracking-tight text-zinc-900">1M+</span>
                </div>
                <p className="text-sm text-zinc-500 font-medium leading-tight">Engineers prepared</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold tracking-tight text-zinc-900">1000+</span>
                </div>
                <p className="text-sm text-zinc-500 font-medium leading-tight pr-4">Practice problems & Video Explanations</p>
              </div>
            </div>
          </div>

          {/* Right Column (Product Preview Card) */}
          <div className="flex items-center justify-center p-6 md:p-12 lg:py-24 lg:px-12">
            {/* Elegant SaaS-style Light Card */}
            <div className="w-full max-w-[600px] rounded-2xl md:rounded-[24px] border border-zinc-200/80 bg-white overflow-hidden flex flex-col shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.03]">
              
              {/* Top Preview Area (Roadmap Tree) - Light Theme */}
              <div className="h-[360px] md:h-[440px] bg-zinc-50/50 p-2 md:p-6 flex flex-col items-center justify-center relative border-b border-zinc-100 overflow-hidden">
                 {/* Abstract nodes background */}
                 <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
                    {/* Soft glow in middle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
                 </div>

                 {/* Full Roadmap Tree SVG Component */}
                 <svg viewBox="0 0 680 540" className="relative z-10 w-full h-full drop-shadow-sm">
                    <defs>
                       <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                          <polygon points="0 0, 6 3, 0 6" fill="#cbd5e1" />
                       </marker>
                    </defs>
                    
                    {/* Lines */}
                    {/* Root -> Two Pointers, Stack */}
                    <path d="M 540 74 C 540 105, 340 105, 340 130" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                    <path d="M 540 74 C 540 105, 540 105, 540 130" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>

                    {/* Two Pointers -> Linked List, Sliding Window, Binary Search */}
                    <path d="M 340 184 C 340 215, 140 215, 140 240" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                    <path d="M 340 184 L 340 240" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                    <path d="M 340 184 C 340 215, 540 215, 540 240" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>

                    {/* Nodes to Trees */}
                    <path d="M 140 294 C 140 325, 340 325, 340 350" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                    <path d="M 340 294 L 340 350" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                    <path d="M 540 294 C 540 325, 340 325, 340 350" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>

                    {/* Trees -> Tries, Heap, Backtracking */}
                    <path d="M 340 404 C 340 435, 140 435, 140 460" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                    <path d="M 340 404 L 340 460" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                    <path d="M 340 404 C 340 435, 540 435, 540 460" fill="none" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>

                    {/* Nodes (using foreignObject for HTML rendering) */}
                    <foreignObject x="450" y="26" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[13px] whitespace-nowrap">Arrays & Hashing</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[100%]"></div></div>
                       </div>
                    </foreignObject>
                    
                    <foreignObject x="250" y="136" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[13px] whitespace-nowrap">Two Pointers</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[80%]"></div></div>
                       </div>
                    </foreignObject>
                    <foreignObject x="450" y="136" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[13px] whitespace-nowrap">Stack</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[90%]"></div></div>
                       </div>
                    </foreignObject>

                    {/* Row 3 */}
                    <foreignObject x="50" y="246" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[13px] whitespace-nowrap">Linked List</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[95%]"></div></div>
                       </div>
                    </foreignObject>
                    <foreignObject x="250" y="246" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[13px] whitespace-nowrap">Sliding Window</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[60%]"></div></div>
                       </div>
                    </foreignObject>
                    <foreignObject x="450" y="246" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[13px] whitespace-nowrap">Binary Search</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[85%]"></div></div>
                       </div>
                    </foreignObject>

                    {/* Row 4 */}
                    <foreignObject x="250" y="356" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[13px] whitespace-nowrap">Trees</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[30%]"></div></div>
                       </div>
                    </foreignObject>

                    {/* Row 5 */}
                    <foreignObject x="50" y="466" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[13px] whitespace-nowrap">Tries</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[10%]"></div></div>
                       </div>
                    </foreignObject>
                    <foreignObject x="250" y="466" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[12px] whitespace-nowrap">Heap / Priority Queue</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[45%]"></div></div>
                       </div>
                    </foreignObject>
                    <foreignObject x="450" y="466" width="180" height="48">
                       <div className="w-full h-full bg-white rounded-[10px] border border-zinc-200/80 flex flex-col items-center justify-center shadow-sm transition-transform cursor-pointer">
                          <span className="text-zinc-700 font-semibold text-[13px] whitespace-nowrap">Backtracking</span>
                          <div className="w-3/5 h-[4px] bg-zinc-100 rounded-full mt-1.5"><div className="h-full bg-[#4F46E5] rounded-full w-[70%]"></div></div>
                       </div>
                    </foreignObject>
                 </svg>
              </div>

              {/* Bottom Stats Area */}
              <div className="flex flex-col sm:flex-row bg-white h-auto sm:h-[220px]">
                {/* Left inner cell */}
                <div className="flex-1 p-6 border-b sm:border-b-0 sm:border-r border-zinc-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-zinc-500">Total Solved</span>
                      <button className="text-zinc-400 hover:text-zinc-600 transition-colors">
                        <Code2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-bold tracking-tight text-zinc-900">450</span>
                      <span className="text-xs font-semibold text-emerald-600 px-2 py-0.5 bg-emerald-50 rounded-full">+12% speed</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 w-12">Easy</span>
                      <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 w-[66%] rounded-full"></div>
                      </div>
                      <span className="text-[11px] font-semibold text-zinc-600 w-14 text-right">200/300</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 w-12">Med</span>
                      <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 w-[25%] rounded-full"></div>
                      </div>
                      <span className="text-[11px] font-semibold text-zinc-600 w-14 text-right">200/800</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 w-12">Hard</span>
                      <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 w-[20%] rounded-full"></div>
                      </div>
                      <span className="text-[11px] font-semibold text-zinc-600 w-14 text-right">50/250</span>
                    </div>
                  </div>
                </div>

                {/* Right inner cell - Clean Light Theme */}
                <div className="w-full sm:w-[40%] bg-zinc-50 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-zinc-500">Current Streak</span>
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shadow-sm">
                        <Target className="w-3.5 h-3.5 text-orange-600" />
                      </div>
                    </div>
                    <span className="text-4xl font-bold tracking-tight block text-zinc-900 mt-2">14</span>
                    <span className="text-xs text-zinc-500 font-medium">Consecutive days</span>
                  </div>
                  
                  <div className="relative z-10 mt-8 sm:mt-0">
                    <span className="text-xs font-semibold text-zinc-500 mb-2 block">Top 5% Users</span>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="Avatar"/></div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="Avatar"/></div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="Avatar"/></div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[10px] font-semibold text-zinc-500 shadow-sm">+more</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* Social Proof & Testimonials Section */}
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
            <div key={company} className="px-6 py-3.5 bg-[#F1F3F5] rounded-2xl flex items-center justify-center transition-transform hover:-translate-y-0.5">
              <span className="text-zinc-600 font-bold text-lg md:text-xl tracking-tight opacity-75">{company}</span>
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

    </div>
  );
}
