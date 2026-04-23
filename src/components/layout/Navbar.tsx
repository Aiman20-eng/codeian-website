"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "الخدمات", href: "/services" },
  { name: "المشاريع", href: "/portfolio" },
  { name: "فريق العمل", href: "/team" },
  { name: "الأسعار", href: "/pricing" },
  { name: "المدونة", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full bg-white/5 p-1 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <SafeImage 
                src="/logo.png" 
                alt="لوجو كوديان" 
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              كوديان<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-cyan-400 relative",
                      pathname === link.href ? "text-cyan-400" : "text-zinc-300"
                    )}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-cyan-50 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            >
              تواصل معنا
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        )}
      >
        <ul className="flex flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block text-lg font-medium transition-colors",
                  pathname === link.href ? "text-cyan-400" : "text-zinc-300 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block mt-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-full font-bold text-sm"
            >
              تواصل معنا
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
