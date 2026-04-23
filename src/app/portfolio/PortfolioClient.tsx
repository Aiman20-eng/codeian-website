"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
}

export default function PortfolioClient({ projects, categories }: { projects: Project[], categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects = activeCategory === "الكل" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-20">
      {/* Header */}
      <section className="container mx-auto px-4 lg:px-8 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          معرض <span className="text-cyan-400">الأعمال</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto"
        >
          تصفح مجموعة من أحدث مشاريعنا التي تم تنفيذها بنجاح لعملائنا في مختلف القطاعات.
        </motion.p>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 lg:px-8 mb-12 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]" 
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <SafeImage
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-cyan-400 font-medium mb-2 text-sm uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <Link
                  href={`/portfolio/${project.slug}`} 
                  className="inline-block text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 underline decoration-cyan-400 underline-offset-4"
                >
                  تفاصيل المشروع
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
