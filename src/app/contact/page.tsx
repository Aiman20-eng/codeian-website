"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="py-20">
      <section className="container mx-auto px-4 lg:px-8 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          تواصل <span className="text-cyan-400">معنا</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto"
        >
          نحن هنا للاستماع إلى أفكارك وتحويلها إلى واقع. لا تتردد في مراسلتنا أو الاتصال بنا.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="glass-card p-8 border-white/5">
              <h3 className="text-2xl font-bold text-white mb-8">معلومات الاتصال</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">العنوان</h4>
                    <p className="text-zinc-400">الجمهورية اليمنية، صنعاء</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">الهاتف المحمول / واتساب</h4>
                    <p className="text-zinc-400" dir="ltr">+967 77X XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">البريد الإلكتروني</h4>
                    <p className="text-zinc-400">hello@codeian.dev</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 border-white/5">
              <h3 className="text-2xl font-bold text-white mb-8">أرسل لنا رسالة</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">الاسم الكامل</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="رقم هاتفك للتواصل"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">تفاصيل المشروع / الرسالة</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  placeholder="حدثنا عن مشروعك..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                إرسال الرسالة
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
