import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [projectCount, postCount, teamCount] = await Promise.all([
    prisma.project.count(),
    prisma.post.count(),
    prisma.teamMember.count(),
  ]);

  return (
    <div>
      <h1 className="text-3xl font-black text-white mb-8">نظرة عامة</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="المشاريع" count={projectCount} color="text-cyan-400" />
        <StatCard title="المدونات" count={postCount} color="text-blue-400" />
        <StatCard title="أعضاء الفريق" count={teamCount} color="text-purple-400" />
      </div>
    </div>
  );
}

function StatCard({ title, count, color }: { title: string; count: number; color: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-zinc-400 text-lg mb-2">{title}</h3>
      <p className={`text-4xl font-black ${color}`}>{count}</p>
    </div>
  );
}
