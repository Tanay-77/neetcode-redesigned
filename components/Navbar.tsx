import { Rocket, Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
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
  );
}
