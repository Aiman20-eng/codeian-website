import { prisma } from "@/lib/prisma";
import { updatePost } from "../../actions";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
  });

  if (!post) notFound();

  const updatePostWithId = updatePost.bind(null, post.id);

  return (
    <div className="max-w-4xl" dir="rtl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white">تعديل المقال</h1>
        <p className="text-zinc-400 mt-1">تعديل: {post.title}</p>
      </div>

      <form action={updatePostWithId} className="space-y-6 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">عنوان المقال</label>
            <input
              name="title"
              defaultValue={post.title}
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">الرابط اللطيف (Slug)</label>
            <input
              name="slug"
              defaultValue={post.slug}
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
              defaultValue={post.category}
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">رابط الصورة</label>
            <input
              name="image"
              defaultValue={post.image}
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">ملخص قصير (Excerpt)</label>
          <textarea
            name="excerpt"
            defaultValue={post.excerpt}
            required
            rows={2}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">المحتوى</label>
          <textarea
            name="content"
            defaultValue={post.content}
            required
            rows={10}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-colors"
          >
            تحديث المقال
          </button>
          <Link
            href="/admin/blog"
            className="px-8 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center"
          >
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}
