import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Courses } from "@/components/Courses";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

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

        <Navbar />
        <Hero />
      </div>

      <Testimonials />
      <div className="w-full h-px bg-[#EAEAEA]" />
      
      <Courses />
      <div className="w-full h-px bg-[#EAEAEA]" />
      
      <CTA />
      <div className="w-full h-px bg-[#EAEAEA]" />

      <About />
      <Footer />

    </div>
  );
}
