"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Smartphone, Code2, Database, Palette, Shield } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <MonitorSmartphone size={40} className="text-blue-400 mb-6" />,
    title: "تطوير مواقع الويب",
    description: "نبني منصات الويب السريعة والموثوقة والمتجاوبة مع كافة الشاشات باستخدام أحدث التقنيات مثل React و Next.js، لتقديم تجربة مستخدم استثنائية وزيادة تفاعل العملاء.",
  },
  {
    icon: <Smartphone size={40} className="text-cyan-400 mb-6" />,
    title: "تطبيقات الهواتف الذكية",
    description: "تصميم وتطوير تطبيقات أصلية وهجينة لنظامي iOS و Android، تركز على الأداء العالي والتصميم الجذاب لضمان نجاح تطبيقك في المتاجر.",
  },
  {
    icon: <Code2 size={40} className="text-indigo-400 mb-6" />,
    title: "أنظمة مخصصة (SaaS & ERP)",
    description: "بناء أنظمة برمجية متكاملة مصممة خصيصاً لتلبي احتياجات شركتك، سواء كانت أنظمة إدارة موارد (ERP) أو منصات خدمة (SaaS).",
  },
  {
    icon: <Palette size={40} className="text-pink-400 mb-6" />,
    title: "تصميم واجهات المستخدم UI/UX",
    description: "نحن نؤمن بأن التصميم الجيد هو أساس النجاح. نقدم تصاميم واجهات مستخدم عصرية وسهلة الاستخدام تركز على رحلة المستخدم.",
  },
  {
    icon: <Database size={40} className="text-emerald-400 mb-6" />,
    title: "تطوير قواعد البيانات و API",
    description: "هندسة وبناء قواعد بيانات قابلة للتوسع وأنظمة واجهة برمجة تطبيقات (API) آمنة وسريعة لربط كافة منصاتك بكفاءة.",
  },
  {
    icon: <Shield size={40} className="text-amber-400 mb-6" />,
    title: "الأمن السيبراني والاستضافة",
    description: "تأمين تطبيقاتك وبنيتك التحتية بأحدث معايير الأمان، مع توفير حلول استضافة سحابية مستقرة وسريعة.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="container mx-auto px-4 lg:px-8 mb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          خدماتنا <span className="text-blue-500">التقنية</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto"
        >
          نقدم حلولاً متكاملة تغطي كافة جوانب دورة حياة تطوير البرمجيات، من التخطيط والتصميم وحتى البرمجة والإطلاق.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="transform group-hover:scale-110 transition-transform duration-300 origin-right">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/20 p-12 text-center"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">هل لديك فكرة مشروع مبتكرة؟</h2>
            <p className="text-zinc-300 mb-8 text-lg">
              دعنا نتحدث عن مشروعك وكيف يمكننا تحويل فكرتك إلى منتج رقمي استثنائي يخدم أهدافك.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-cyan-50 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              ابدأ مشروعك الآن
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
