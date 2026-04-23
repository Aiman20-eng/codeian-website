import { createPost } from "../actions";

export default function NewPostPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white">كتابة مقال جديد</h1>
        <p className="text-zinc-400 mt-1">شارك أفكارك وتحديثات الفريق مع العالم</p>
      </div>

      <form action={createPost} className="space-y-6 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">عنوان المقال</label>
            <input
              name="title"
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="مثلاً: مستقبل الذكاء الاصطناعي"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">الرابط اللطيف (Slug)</label>
            <input
              name="slug"
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="ai-future-2026"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">التصنيف</label>
            <select
              name="category"
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            >
              <option value="تطوير">تطوير</option>
              <option value="تصميم">تصميم</option>
              <option value="ذكاء اصطناعي">ذكاء اصطناعي</option>
              <option value="أخبار الفريق">أخبار الفريق</option>
            </select>
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">رابط صورة المقال</label>
            <input
              name="image"
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="https://images.unsplash.com/..."
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">ملخص المقال (Excerpt)</label>
          <textarea
            name="excerpt"
            required
            rows={2}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            placeholder="اكتب ملخصاً قصيراً يظهر في قائمة المقالات..."
          />
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">المحتوى (Markdown مدعوم)</label>
          <textarea
            name="content"
            required
            rows={10}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none font-mono text-sm"
            placeholder="اكتب محتوى المقال هنا..."
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            نشر المقال
          </button>
          <button
            type="button"
            className="px-8 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-colors"
          >
            حفظ كمسودة
          </button>
        </div>
      </form>
    </div>
  );
}
