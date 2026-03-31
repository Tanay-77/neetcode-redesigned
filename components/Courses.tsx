import { Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const COURSES = [
  {
    title: "Algorithms & Data Structures",
    description: "Master the fundamentals of computer science and ace your coding interviews with our interactive curriculum.",
    duration: "25 hours",
    difficulty: "Medium",
    image: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a65736b6-151f-4572-8e10-87b2b75ab100/public",
    href: "#"
  },
  {
    title: "System Design Interview",
    description: "Learn how to design scalable and distributed systems. Essential mapping for mid-level and senior technical interviews.",
    duration: "25 hours",
    difficulty: "Hard",
    image: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0c64daac-e358-48b1-91f5-7d4953b40600/public",
    href: "#"
  },
  {
    title: "Object Oriented Design",
    description: "Learn real-world patterns for building robust, maintainable software architectures using OOP principles.",
    duration: "15 hours",
    difficulty: "Medium",
    image: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/f96cc9c7-0515-4283-883c-14d346094400/public",
    href: "#"
  },
  {
    title: "Full Stack Development",
    description: "From React basics to advanced scalable APIs. Build end-to-end, modern production-ready web applications.",
    duration: "20 hours",
    difficulty: "Easy",
    image: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/8efc4993-9666-4ceb-c1cb-f1686cbcc300/public",
    href: "#"
  }
];

export function Courses() {
  return (
    <section className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-20 md:py-32">

      {/* Section Header */}
      <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-4 md:mb-5">
            Structured Learning Paths
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed font-medium pb-1">
            Curated curriculums designed to take you from absolute beginner to interview-ready in the shortest time possible.
          </p>
        </div>
        <div className="shrink-0">
          <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 group">
            Explore all paths
            <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {COURSES.map((course, i) => (
          <Link
            key={i}
            href={course.href}
            className="group flex flex-col bg-white border border-[#EAEAEA] rounded-[24px] p-2 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] hover:border-zinc-300 transition-all duration-300 overflow-hidden"
          >
            {/* Top Visual Area */}
            <div className="w-full aspect-video rounded-[18px] flex items-center justify-center relative overflow-hidden bg-zinc-100 border border-zinc-200/50">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3 leading-tight group-hover:text-zinc-700 transition-colors">
                {course.title}
              </h3>

              <p className="text-[15px] text-zinc-500 leading-relaxed mb-8 flex-1">
                {course.description}
              </p>

              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 px-3 py-1.5 bg-zinc-100/80 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  {course.duration}
                </div>
                <div className={`inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full ${course.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-700' :
                  course.difficulty === 'Medium' ? 'bg-amber-50 text-amber-700' :
                    'bg-red-50 text-red-700'
                  }`}>
                  {course.difficulty}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
