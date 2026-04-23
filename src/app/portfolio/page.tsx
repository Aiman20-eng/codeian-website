import { prisma } from "@/lib/prisma";
import PortfolioClient from "./PortfolioClient";

export const revalidate = 60; // Revalidate every minute

export default async function PortfolioPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  // Extract unique categories
  const categoriesSet = new Set(projects.map(p => p.category));
  const categories = ["الكل", ...Array.from(categoriesSet)];

  return <PortfolioClient projects={projects} categories={categories} />;
}
