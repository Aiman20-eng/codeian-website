"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Smartphone, Code2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <MonitorSmartphone size={40} className="text-blue-400 mb-6" />,
    title: "تطوير الويب",
    description: "نبني منصات ومواقع إلكترونية سريعة، تفاعلية، ومتوافقة مع جميع الأجهزة لتقديم أفضل تجربة مستخدم.",
  },
  {
    icon: <Smartphone size={40} className="text-cyan-400 mb-6" />,
    title: "تطبيقات الهواتف",
    description: "تصميم وبرمجة تطبيقات iOS و Android متطورة تلبي احتياجات سوقك المستهدف بكل كفاءة.",
  },
  {
    icon: <Code2 size={40} className="text-indigo-400 mb-6" />,
    title: "حلول برمجية مخصصة",
    description: "تطوير أنظمة متكاملة مخصصة لشركتك، من أنظمة الإدارة ERP إلى حلول الذكاء الاصطناعي.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            حلولنا <span className="text-cyan-400">التقنية</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            نقدم مجموعة متكاملة من الخدمات البرمجية المصممة بعناية لتنمية أعمالك الرقمية.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300 origin-right">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">{service.description}</p>
              <Link href="/services" className="text-cyan-400 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                اعرف المزيد <span className="text-xl">&larr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
