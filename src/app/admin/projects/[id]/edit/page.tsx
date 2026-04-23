import { prisma } from "@/lib/prisma";
import { updateProject } from "../../actions";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
  });

  if (!project) notFound();

  const updateProjectWithId = updateProject.bind(null, project.id);

  return (
    <div className="max-w-3xl" dir="rtl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white">تعديل المشروع</h1>
        <p className="text-zinc-400 mt-1">تعديل: {project.title}</p>
      </div>

      <form action={updateProjectWithId} className="space-y-6 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">اسم المشروع</label>
            <input
              name="title"
              defaultValue={project.title}
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">الرابط اللطيف (Slug)</label>
            <input
              name="slug"
              defaultValue={project.slug}
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">التصنيف</label>
            <input
              name="category"
              defaultValue={project.category}
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="مثلاً: تطبيق ويب"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">رابط المشروع (اختياري)</label>
            <input
              name="link"
              defaultValue={project.link || ""}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="https://..."
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">رابط الصورة</label>
          <input
            name="image"
            defaultValue={project.image}
            required
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">الوصف</label>
          <textarea
            name="description"
            defaultValue={project.description}
            required
            rows={5}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-colors"
          >
            تحديث المشروع
          </button>
          <Link
            href="/admin/projects"
            className="px-8 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center"
          >
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}
