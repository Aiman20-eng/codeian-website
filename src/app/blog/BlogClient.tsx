"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  createdAt: string | Date;
}

export default function BlogClient({ posts }: { posts: Post[] }) {
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
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <SafeImage 
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
                <span className="text-zinc-500 text-sm mb-3">
                  {new Date(post.createdAt).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors mt-auto"
                >
                  اقرأ المزيد
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
          {posts.length === 0 && (
             <div className="col-span-full text-center py-20 text-zinc-500">
               المقالات قادمة قريباً...
             </div>
          )}
        </div>
      </section>
    </div>
  );
}
