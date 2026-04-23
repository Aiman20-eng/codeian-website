"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "الأساسية",
    price: "499",
    currency: "$",
    description: "مناسبة للشركات الناشئة والمواقع التعريفية الصغيرة.",
    features: [
      "موقع تعريفي متجاوب",
      "لوحة تحكم بسيطة",
      "دعم فني لمدة شهر",
      "استضافة مجانية لأول سنة",
      "SEO أساسي"
    ],
    popular: false,
    cta: "اطلب الباقة"
  },
  {
    name: "الاحترافية",
    price: "999",
    currency: "$",
    description: "الخيار الأفضل للشركات التي تبحث عن أداء عالٍ ومبيعات أونلاين.",
    features: [
      "موقع تجارة إلكترونية أو منصة",
      "لوحة تحكم متطورة",
      "دعم فني لمدة 6 أشهر",
      "بوابات دفع متعددة",
      "SEO متقدم + تقارير تحليلية",
      "تطوير واجهات مخصصة"
    ],
    popular: true,
    cta: "البدء بالمشروع"
  },
  {
    name: "المخصصة",
    price: "مخصص",
    currency: "",
    description: "للأنظمة الكبيرة والتطبيقات المعقدة التي تحتاج هندسة خاصة.",
    features: [
      "تطبيقات هواتف ذكية (iOS/Android)",
      "أنظمة SaaS / ERP",
      "بنية تحتية قابلة للتوسع",
      "دعم فني على مدار الساعة",
      "إدارة الخوادم والسيرفرات",
      "تحليل بيانات متقدم"
    ],
    popular: false,
    cta: "تواصل معنا"
  }
];

export default function PricingPage() {
  return (
    <div className="py-20">
      <section className="container mx-auto px-4 lg:px-8 mb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          باقات <span className="text-cyan-400">الأسعار</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto"
        >
          أسعار شفافة وباقات مدروسة بعناية لتناسب حجم وطبيعة عملك، دون تكاليف خفية.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card relative flex flex-col p-8 ${
                plan.popular ? "border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.15)] transform md:-translate-y-4" : "border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold px-4 py-1 rounded-full text-sm">
                  الأكثر طلباً
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                {plan.currency && <span className="text-xl text-zinc-400 ml-1">{plan.currency}</span>}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="text-cyan-400 shrink-0" size={20} />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`w-full py-4 rounded-full font-bold text-center transition-all duration-300 ${
                  plan.popular 
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-black hover:scale-105" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
