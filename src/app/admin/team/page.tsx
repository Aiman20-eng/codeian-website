import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SafeImage from "@/components/ui/SafeImage";

import { deleteMember } from "./actions";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminTeamPage() {
  const members = await prisma.teamMember.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div dir="rtl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-white">إدارة الفريق</h1>
          <p className="text-zinc-400 mt-1">عرض وتعديل وحذف أعضاء الفريق</p>
        </div>
        <Link
          href="/admin/team/new"
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        >
          <Plus size={20} />
          إضافة عضو جديد
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl relative group overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/20">
                <SafeImage
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
              </div>
            </div>
            
            <p className="text-zinc-400 text-sm line-clamp-2 mb-6">{member.bio}</p>
            
            <div className="flex items-center gap-3 mb-6 text-zinc-500">
              {member.linkedin && <FaLinkedin size={18} />}
              {member.github && <FaGithub size={18} />}
              {member.twitter && <FaTwitter size={18} />}
            </div>

            <div className="flex gap-2">
              <Link
                href={`/admin/team/${member.id}/edit`}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Edit size={16} />
                تعديل
              </Link>
              <DeleteButton id={member.id} action={deleteMember} />
            </div>
          </div>
        ))}
        {members.length === 0 && (
          <div className="col-span-full py-12 text-center text-zinc-500 bg-zinc-900/30 border border-zinc-800 border-dashed rounded-2xl">
            لا يوجد أعضاء مضافون بعد.
          </div>
        )}
      </div>
    </div>
  );
}
