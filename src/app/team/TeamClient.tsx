"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import SafeImage from "@/components/ui/SafeImage";

interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string | null;
  github?: string | null;
  twitter?: string | null;
}

export default function TeamClient({ members }: { members: Member[] }) {
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
          {members.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden relative">
                <SafeImage 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-4">
                  {member.linkedin && <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" className="text-zinc-500 hover:text-white transition-colors"><FaLinkedin size={20} /></a>}
                  {member.github && <a href={`https://github.com/${member.github}`} target="_blank" className="text-zinc-500 hover:text-white transition-colors"><FaGithub size={20} /></a>}
                  {member.twitter && <a href={`https://twitter.com/${member.twitter}`} target="_blank" className="text-zinc-500 hover:text-white transition-colors"><FaTwitter size={20} /></a>}
                </div>
              </div>
            </motion.div>
          ))}
          {members.length === 0 && (
             <div className="col-span-full text-center py-20 text-zinc-500">
               جاري إضافة أعضاء الفريق قريباً...
             </div>
          )}
        </div>
      </section>
    </div>
  );
}
