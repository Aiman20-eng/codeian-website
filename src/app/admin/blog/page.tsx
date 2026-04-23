import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, FileText } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

import { deletePost } from "./actions";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminBlogPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div dir="rtl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-white">إدارة المدونة</h1>
          <p className="text-zinc-400 mt-1">عرض وتعديل وحذف مقالات المدونة</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        >
          <Plus size={20} />
          إضافة مقال جديد
        </Link>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-zinc-800/50 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4 text-zinc-300 font-bold">المقال</th>
              <th className="px-6 py-4 text-zinc-300 font-bold">التصنيف</th>
              <th className="px-6 py-4 text-zinc-300 font-bold">تاريخ النشر</th>
              <th className="px-6 py-4 text-zinc-300 font-bold text-left">العمليات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-zinc-700">
                      <SafeImage
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-bold">{post.title}</div>
                      <div className="text-zinc-500 text-xs">{post.slug}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full border border-zinc-700">
                    {post.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-400 text-sm">
                  {new Date(post.createdAt).toLocaleDateString("ar-EG")}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <Edit size={18} />
                    </Link>
                    <DeleteButton id={post.id} action={deletePost} />
                    <Link
                      href={`/blog/${post.slug}`}
                      className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                    >
                      <FileText size={18} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-zinc-500">
                  لا توجد مقالات منشورة حالياً.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
