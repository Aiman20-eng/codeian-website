"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: "easeOut", // Cinematic ease out
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none opacity-20" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 lg:px-8 relative z-10 text-center"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-cyan-500/30 bg-cyan-500/5 text-cyan-300 text-sm font-medium shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            متاحون لمشاريع جديدة
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-tight"
        >
          نصنع المستقبل <br />
          <span className="text-gradient">أسطراً برمجية.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          فريق كوديان لتطوير البرمجيات. نقدم حلولاً برمجية مبتكرة وعصرية للشركات والأفراد في اليمن والوطن العربي بأعلى معايير الجودة العالمية.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-cyan-50 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              ابدأ مشروعك الآن
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity" />
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-xl"
          >
            استكشف أعمالنا
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
