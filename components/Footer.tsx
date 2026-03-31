import Link from "next/link";
import { Rocket, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#EAEAEA] relative z-10 pt-16 md:pt-24 pb-0 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-6">

        {/* Top Section: Navigation & Socials */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20 md:mb-28">

          {/* Left: Brand, Newsletter, Social row */}
          <div className="flex flex-col max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit group">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="font-bold text-xl tracking-tight text-zinc-900">NeetCode</span>
            </Link>
            <p className="text-zinc-500 mb-8 text-[15px] leading-relaxed">
              The ultimate platform to prepare for software engineering interviews. Master algorithms, system design, and more.
            </p>

          </div>

          {/* Right: Link Columns (matches original NeetCode content mapped into Optech layout) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-8 xl:gap-16">

            {/* Column 1 (Links) */}
            <div className="flex flex-col">
              <h4 className="text-[14px] font-bold text-zinc-900 mb-6">Links</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide">Blind 75</Link></li>
                <li><Link href="#" className="text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide">NeetCode 150</Link></li>
                <li><Link href="#" className="text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide">NeetCode 250</Link></li>
                <li><Link href="#" className="text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide">How to use NeetCode Effectively</Link></li>
              </ul>
            </div>

            {/* Column 2 (Social) */}
            <div className="flex flex-col">
              <h4 className="text-[14px] font-bold text-zinc-900 mb-6">Social</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-3 text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide group">
                    <img src="https://cdn.simpleicons.org/youtube/71717A" className="w-4 h-4 group-hover:invert-[0.2] transition-colors" />
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide group">
                    <img src="https://cdn-icons-png.flaticon.com/128/13670/13670384.png" className="w-4 h-4 group-hover:invert-[0.2] transition-colors" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide group">
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" className="w-4 h-4 group-hover:invert-[0.2] transition-colors" />
                    X
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 (Contact) */}
            <div className="flex flex-col">
              <h4 className="text-[14px] font-bold text-zinc-900 mb-6">Contact</h4>
              <ul className="space-y-4">
                <li><a href="mailto:support@neetcode.io" className="text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide">support@neetcode.io</a></li>
              </ul>
            </div>

            {/* Column 4 (Legal) */}
            <div className="flex flex-col">
              <h4 className="text-[14px] font-bold text-zinc-900 mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide">Privacy Policy</Link></li>
                <li><Link href="#" className="text-[14px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide">Terms of Service</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Top/Bottom divider before text */}
        <div className="flex w-full justify-between items-center mb-6 text-[13px] text-zinc-400 font-medium px-2">
          <span>Copyright &copy; 2026 neetcode.io</span>
          <span>All rights reserved.</span>
        </div>
      </div>

      {/* Giant Typography Area text-[16vw] with bottom fade */}
      <div className="w-full flex justify-center -mb-2 overflow-hidden pointer-events-none select-none px-4">
        <span className="text-[16vw] leading-[0.75] font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-zinc-300 to-white/0 select-none">
          NEETCODE
        </span>
      </div>

    </footer>
  );
}
