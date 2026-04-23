"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  Users, 
  LogOut, 
  Menu, 
  X,
  ChevronLeft
} from "lucide-react";
import { signOut } from "next-auth/react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Skip layout for login page
  if (pathname === "/admin/login") return <>{children}</>;

  const navLinks = [
    { href: "/admin", label: "الرئيسية", icon: <LayoutDashboard size={20} /> },
    { href: "/admin/projects", label: "المشاريع", icon: <FolderKanban size={20} /> },
    { href: "/admin/blog", label: "المدونة", icon: <FileText size={20} /> },
    { href: "/admin/team", label: "الفريق", icon: <Users size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col md:flex-row text-right" dir="rtl">
      {/* Mobile Header */}
      <div className="md:hidden bg-zinc-900 border-b border-zinc-800 p-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/admin" className="text-xl font-black text-white">
          كوديان<span className="text-cyan-500">.</span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar (Desktop) */}
      <aside className={`
        fixed inset-y-0 right-0 z-40 w-64 bg-zinc-900 border-l border-zinc-800 transition-transform duration-300 transform
        md:translate-x-0 md:static md:inset-0
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <div className="h-full flex flex-col p-6">
          <div className="hidden md:block mb-10">
            <Link href="/" className="text-2xl font-black text-white tracking-tighter">
              كوديان<span className="text-cyan-500">.</span>
            </Link>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Management Portal</p>
          </div>
          
          <nav className="flex-1 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive 
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                      : "text-zinc-400 hover:text-white hover:bg-white/5"}
                  `}
                >
                  <span className={`${isActive ? "text-cyan-400" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.label}</span>
                  {isActive && <ChevronLeft size={14} className="mr-auto" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-zinc-800">
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
            >
              <LogOut size={20} />
              <span className="font-medium">تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 lg:p-12 overflow-y-auto relative">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
