import { createProject } from "../actions";

export default function NewProjectPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white">إضافة مشروع جديد</h1>
        <p className="text-zinc-400 mt-1">أدخل تفاصيل المشروع الجديد ليظهر في المعرض</p>
      </div>

      <form action={createProject} className="space-y-6 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">اسم المشروع</label>
            <input
              name="title"
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="مثلاً: متجر إلكتروني"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">الرابط اللطيف (Slug)</label>
            <input
              name="slug"
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="ecommerce-project"
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">التصنيف</label>
          <select
            name="category"
            required
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
          >
            <option value="تطوير ويب">تطوير ويب</option>
            <option value="تطبيق هاتف">تطبيق هاتف</option>
            <option value="حلول مخصصة">حلول مخصصة</option>
            <option value="تصميم UI/UX">تصميم UI/UX</option>
          </select>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">رابط الصورة</label>
          <input
            name="image"
            required
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="https://images.unsplash.com/..."
          />
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">وصف المشروع</label>
          <textarea
            name="description"
            required
            rows={4}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            placeholder="اكتب وصفاً موجزاً للمشروع..."
          />
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">رابط المشروع (اختياري)</label>
          <input
            name="link"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="https://example.com"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            حفظ المشروع
          </button>
          <button
            type="button"
            className="px-8 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-colors"
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
}
