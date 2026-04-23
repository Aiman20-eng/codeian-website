"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { validateBlogPostData } from "@/lib/validation";

export async function createPost(formData: FormData) {
  const rawData = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    image: formData.get("image"),
    category: formData.get("category"),
  };

  const validatedData = validateBlogPostData(rawData);

  await prisma.post.create({
    data: validatedData,
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin/blog");
}

export async function updatePost(id: string, formData: FormData) {
  const rawData = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    image: formData.get("image"),
    category: formData.get("category"),
  };

  const validatedData = validateBlogPostData(rawData);

  await prisma.post.update({
    where: { id },
    data: validatedData,
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin/blog");
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: { id },
  });
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath("/");
}
