import { createMember } from "../actions";

export default function NewMemberPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white">إضافة عضو جديد</h1>
        <p className="text-zinc-400 mt-1">أدخل بيانات العضو الجديد ليظهر في صفحة الفريق</p>
      </div>

      <form action={createMember} className="space-y-6 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">الاسم الكامل</label>
            <input
              name="name"
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="مثلاً: محمد علي"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">المسمى الوظيفي</label>
            <input
              name="role"
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="مثلاً: مطور Full-stack"
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">رابط الصورة الشخصية</label>
          <input
            name="image"
            required
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="https://images.unsplash.com/..."
          />
        </div>

        <div>
          <label className="block text-zinc-300 text-sm mb-2">النبذة الشخصية (Bio)</label>
          <textarea
            name="bio"
            required
            rows={3}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            placeholder="اكتب نبذة مختصرة عن العضو وخبراته..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">LinkedIn (اختياري)</label>
            <input
              name="linkedin"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="username"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">GitHub (اختياري)</label>
            <input
              name="github"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="username"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">Twitter (اختياري)</label>
            <input
              name="twitter"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="username"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            إضافة العضو
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
