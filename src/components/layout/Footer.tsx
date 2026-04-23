"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full bg-white/5 p-1 border border-white/10">
                <img 
                  src="/logo.png" 
                  alt="لوجو كوديان" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-3xl font-black tracking-tight text-white">
                كوديان<span className="text-cyan-400">.</span>
              </span>
            </Link>
            <p className="text-zinc-400 leading-relaxed text-sm">
              نحن فريق نخبة من المطورين والمصممين، نصنع تجارب رقمية استثنائية ونبني حلولاً برمجية ترتقي بأعمالك إلى المستوى التالي.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <SocialLink href="#" icon={<FaTwitter size={18} />} />
              <SocialLink href="#" icon={<FaLinkedin size={18} />} />
              <SocialLink href="#" icon={<FaInstagram size={18} />} />
              <SocialLink href="#" icon={<FaGithub size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">روابط سريعة</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">من نحن</FooterLink>
              <FooterLink href="/services">خدماتنا</FooterLink>
              <FooterLink href="/portfolio">معرض الأعمال</FooterLink>
              <FooterLink href="/blog">المدونة</FooterLink>
              <FooterLink href="/pricing">باقات الأسعار</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">خدماتنا</h3>
            <ul className="space-y-3">
              <li className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">تطوير مواقع الويب</li>
              <li className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">تطبيقات الهواتف الذكية</li>
              <li className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">تصميم واجهات المستخدم</li>
              <li className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">حلول برمجية مخصصة</li>
              <li className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">استشارات تقنية</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                <span>الجمهورية اليمنية، صنعاء</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Phone className="text-cyan-400 shrink-0" size={18} />
                <span dir="ltr">+967 77X XXX XXX</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Mail className="text-cyan-400 shrink-0" size={18} />
                <span>hello@codeian.dev</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-right">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} فريق كوديان.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-white transition-colors">شروط الاستخدام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">
        {children}
      </Link>
    </li>
  );
}
