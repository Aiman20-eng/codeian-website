"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "أهمية واجهة المستخدم (UI) في نجاح تطبيقك الموبايل",
    excerpt: "تعرف على كيفية تأثير تصميم واجهة المستخدم على الاحتفاظ بالعملاء وزيادة معدل التحويل في التطبيقات.",
    date: "20 أكتوبر 2026",
    category: "تصميم UI/UX",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "لماذا نستخدم Next.js في بناء منصات عملائنا؟",
    excerpt: "مقارنة شاملة بين Next.js وغيرها من التقنيات، ولماذا يعتبر الخيار الأمثل للسرعة وتهيئة محركات البحث (SEO).",
    date: "15 أكتوبر 2026",
    category: "تطوير الويب",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "مستقبل الذكاء الاصطناعي في أنظمة إدارة الشركات ERP",
    excerpt: "كيف يمكن للذكاء الاصطناعي أتمتة المهام اليومية في شركتك وتقليل التكاليف التشغيلية بشكل ملحوظ.",
    date: "05 أكتوبر 2026",
    category: "تقنية",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="py-20">
      <section className="container mx-auto px-4 lg:px-8 mb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          مدونة <span className="text-cyan-400">كوديان</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto"
        >
          مقالات تقنية متخصصة، نصائح في ريادة الأعمال، وآخر التحديثات في عالم تطوير البرمجيات.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-cyan-400 text-sm font-medium px-3 py-1 rounded-full border border-white/10">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-zinc-500 text-sm mb-3">{post.date}</span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors mt-auto"
                >
                  اقرأ المزيد
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
