"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Trophy, Code } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

const stats = [
  { value: "+50", label: "مشروع مكتمل", icon: <CheckCircle2 className="text-cyan-400" size={24} /> },
  { value: "+30", label: "عميل سعيد", icon: <Users className="text-blue-500" size={24} /> },
  { value: "5", label: "سنوات خبرة", icon: <Trophy className="text-indigo-400" size={24} /> },
  { value: "+100K", label: "سطر برمجي", icon: <Code className="text-purple-400" size={24} /> },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="container mx-auto px-4 lg:px-8 mb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          من <span className="text-cyan-400">نحن</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto"
        >
          كوديان هو فريق من المهندسين والمصممين الشغوفين بصناعة تقنيات استثنائية. نؤمن بأن البرمجيات الجيدة لا تحل المشاكل فحسب، بل تصنع فرصاً جديدة.
        </motion.p>
      </section>

      {/* Story & Vision */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-cyan-400 rounded-full inline-block"></span>
                قصتنا
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                بدأنا في اليمن كفريق صغير يجمعه الشغف بالتقنية، وسرعان ما تحولنا إلى وجهة للشركات الناشئة والمؤسسات التي تبحث عن الجودة والموثوقية. نحن لا نبني مجرد تطبيقات، بل نبني أسساً رقمية متينة لأعمال عملائنا.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
                رؤيتنا
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                أن نكون الخيار الأول لتطوير البرمجيات في العالم العربي، وأن نساهم في رفع معايير جودة المنتجات التقنية العربية لتنافس عالمياً.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full" />
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 glass-card">
              <SafeImage 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="فريق كوديان" 
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-zinc-900/30 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center glass-card p-6 border-white/5"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-zinc-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
