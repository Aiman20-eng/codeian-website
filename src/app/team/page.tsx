import { prisma } from "@/lib/prisma";
import TeamClient from "./TeamClient";

export const revalidate = 60; // Revalidate every minute

export default async function TeamPage() {
  const members = await prisma.teamMember.findMany({
    orderBy: { createdAt: 'asc' }
  });

  return <TeamClient members={members} />;
}
