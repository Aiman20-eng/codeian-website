import { prisma } from "@/lib/prisma";
import { updateMember } from "../../actions";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function EditMemberPage({ params }: { params: { id: string } }) {
  const member = await prisma.teamMember.findUnique({
    where: { id: params.id },
  });

  if (!member) notFound();

  // We need to bind the ID to the action
  const updateMemberWithId = updateMember.bind(null, member.id);

  return (
    <div className="max-w-2xl" dir="rtl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white">تعديل بيانات العضو</h1>
        <p className="text-zinc-400 mt-1">تعديل بيانات: {member.name}</p>
      </div>

      <form action={updateMemberWithId} className="space-y-6 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">الاسم الكامل</label>
            <input
              name="name"
              defaultValue={member.name}
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">المسمى الوظيفي</label>
            <input
              name="role"
              defaultValue={member.role}
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">رابط الصورة الشخصية</label>
          <input
            name="image"
            defaultValue={member.image}
            required
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">النبذة الشخصية (Bio)</label>
          <textarea
            name="bio"
            defaultValue={member.bio}
            required
            rows={3}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">LinkedIn</label>
            <input
              name="linkedin"
              defaultValue={member.linkedin || ""}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">GitHub</label>
            <input
              name="github"
              defaultValue={member.github || ""}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">Twitter</label>
            <input
              name="twitter"
              defaultValue={member.twitter || ""}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-colors"
          >
            حفظ التعديلات
          </button>
          <Link
            href="/admin/team"
            className="px-8 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center"
          >
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}
