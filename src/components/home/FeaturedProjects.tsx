"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "منصة تجارة إلكترونية متطورة",
    category: "تطوير ويب",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop",
    slug: "ecommerce-platform"
  },
  {
    id: 2,
    title: "تطبيق إدارة المهام الذكي",
    category: "تطبيق هاتف",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop",
    slug: "smart-task-manager"
  },
  {
    id: 3,
    title: "نظام حجوزات طبي",
    category: "حلول مخصصة",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    slug: "medical-booking"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 relative z-10 bg-zinc-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-4"
            >
              أحدث <span className="text-blue-500">مشاريعنا</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 max-w-xl"
            >
              نحول الأفكار المعقدة إلى منتجات رقمية أنيقة وفعالة. إليك بعضاً من أعمالنا الأخيرة التي نفخر بها.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              عرض كل المشاريع
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
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
        </div>
      </div>
    </section>
  );
}
