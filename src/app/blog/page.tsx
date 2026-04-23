import { prisma } from "@/lib/prisma";
import BlogClient from "./BlogClient";

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <BlogClient posts={posts} />;
}
