import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import { prisma } from "@/lib/prisma";

const ServicesPreview = dynamic(() => import("@/components/home/ServicesPreview"), {
  loading: () => <div className="h-96" />, // Placeholder
});
const FeaturedProjects = dynamic(() => import("@/components/home/FeaturedProjects"), {
  loading: () => <div className="h-96" />, // Placeholder
});

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  const projects = await prisma.project.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects initialProjects={projects} />
    </>
  );
}
