"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { validateTeamMemberData } from "@/lib/validation";

export async function createMember(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      role: formData.get("role"),
      image: formData.get("image"),
      bio: formData.get("bio"),
      linkedin: formData.get("linkedin"),
      github: formData.get("github"),
      twitter: formData.get("twitter"),
    };

    const validatedData = validateTeamMemberData(rawData);

    await prisma.teamMember.create({
      data: validatedData,
    });

    revalidatePath("/admin/team");
    revalidatePath("/team");
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating member:", error);
  }
  
  redirect("/admin/team");
}

export async function updateMember(id: string, formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    role: formData.get("role"),
    image: formData.get("image"),
    bio: formData.get("bio"),
    linkedin: formData.get("linkedin"),
    github: formData.get("github"),
    twitter: formData.get("twitter"),
  };

  const validatedData = validateTeamMemberData(rawData);

  await prisma.teamMember.update({
    where: { id },
    data: validatedData,
  });

  revalidatePath("/admin/team");
  revalidatePath("/team");
  revalidatePath("/");
  redirect("/admin/team");
}

export async function deleteMember(id: string) {
  await prisma.teamMember.delete({
    where: { id },
  });
  revalidatePath("/admin/team");
  revalidatePath("/team");
  revalidatePath("/");
}
