"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { validateProjectData } from "@/lib/validation";

export async function createProject(formData: FormData) {
  const rawData = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    category: formData.get("category"),
    image: formData.get("image"),
    description: formData.get("description"),
    link: formData.get("link"),
  };

  const validatedData = validateProjectData(rawData);

  await prisma.project.create({
    data: validatedData,
  });

  revalidatePath("/admin/projects");
  revalidatePath("/portfolio");
  revalidatePath("/");
  redirect("/admin/projects");
}

export async function updateProject(id: string, formData: FormData) {
  const rawData = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    category: formData.get("category"),
    image: formData.get("image"),
    description: formData.get("description"),
    link: formData.get("link"),
  };

  const validatedData = validateProjectData(rawData);

  await prisma.project.update({
    where: { id },
    data: validatedData,
  });

  revalidatePath("/admin/projects");
  revalidatePath("/portfolio");
  revalidatePath("/");
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  await prisma.project.delete({
    where: { id },
  });
  revalidatePath("/admin/projects");
  revalidatePath("/portfolio");
  revalidatePath("/");
}
