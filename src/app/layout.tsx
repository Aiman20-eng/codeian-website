import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebGLBackground from "@/components/ui/WebGLBackground";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Codeian | كوديان - النخبة في تطوير البرمجيات",
  description: "فريق كوديان لتطوير البرمجيات. نقدم حلولاً برمجية مبتكرة وعصرية للشركات والأفراد.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} dark`} // Forced dark mode as requested
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30 selection:text-blue-200">
        <WebGLBackground />
        <Navbar />
        <main className="flex-1 flex flex-col pt-24 relative z-10">{children}</main>
        <div className="relative z-10"><Footer /></div>
      </body>
    </html>
  );
}
