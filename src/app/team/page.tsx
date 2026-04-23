"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const team = [
  {
    name: "أحمد محمد",
    role: "المدير التنفيذي والمؤسس",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "خبير في هندسة البرمجيات مع أكثر من 10 سنوات من الخبرة في بناء فرق تقنية ناجحة.",
  },
  {
    name: "سارة علي",
    role: "مديرة التصميم UI/UX",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "تصنع تجارب مستخدم استثنائية تجمع بين الجمال والوظيفة.",
  },
  {
    name: "خالد عبدالله",
    role: "مطور واجهات أمامية",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    bio: "متخصص في React و Next.js، يحب تحويل التصاميم المعقدة إلى كود تفاعلي.",
  },
  {
    name: "يوسف إبراهيم",
    role: "مهندس نظم خلفية",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    bio: "خبير في بناء قواعد البيانات وأنظمة الـ API عالية الأداء.",
  }
];

export default function TeamPage() {
  return (
    <div className="py-20">
      <section className="container mx-auto px-4 lg:px-8 mb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          فريق <span className="text-cyan-400">العمل</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto"
        >
          وراء كل مشروع ناجح فريق استثنائي. تعرف على المبدعين الذين يصنعون الفارق في كوديان.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group overflow-hidden"
            >
              <div className="aspect-square overflow-hidden relative">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors"><FaGithub size={20} /></a>
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
