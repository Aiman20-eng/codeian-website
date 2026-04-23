/**
 * Global Data Validation & Sanitization Layer
 */

export const sanitizeString = (value: any, fallback: string | null = ""): string | null => {
  if (value === null || value === undefined) return fallback;
  return String(value).trim();
};

export const sanitizeURL = (value: any, fallback: string | null = "#"): string | null => {
  const str = sanitizeString(value, null);
  if (!str) return fallback;
  
  // Basic validation: must start with http or relative path (NOT anchors like #)
  const isSafe = /^(https?:\/\/|\/)/i.test(str);
  if (!isSafe) return fallback;

  // Extension check (more strict)
  const isImage = /\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/i.test(str) || 
                  str.includes("images.unsplash.com") || 
                  str.includes("plus.unsplash.com") ||
                  str.includes("res.cloudinary.com");
  
  if (!isImage) {
    // If it's a known non-image link pattern, reject it
    if (str.includes(".html") || str.includes(".php") || str.endsWith("/")) {
      return fallback;
    }
    // Otherwise return as is, SafeImage will handle runtime failure
  }

  return str;
};

/**
 * Validates and sanitizes a complete Project object
 */
export const validateProjectData = (data: any) => {
  return {
    title: sanitizeString(data.title, "مشروع جديد") as string,
    slug: sanitizeString(data.slug, `project-${Date.now()}`) as string,
    category: sanitizeString(data.category, "عام") as string,
    image: sanitizeURL(data.image, "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop") as string,
    description: sanitizeString(data.description, "لا يوجد وصف متوفر حالياً.") as string,
    link: sanitizeURL(data.link, null),
  };
};

/**
 * Validates and sanitizes a complete Blog Post object
 */
export const validateBlogPostData = (data: any) => {
  return {
    title: sanitizeString(data.title, "عنوان مقال جديد") as string,
    slug: sanitizeString(data.slug, `post-${Date.now()}`) as string,
    excerpt: sanitizeString(data.excerpt, "لا يوجد ملخص للمقال.") as string,
    content: sanitizeString(data.content, "محتوى المقال قيد التجهيز...") as string,
    image: sanitizeURL(data.image, "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop") as string,
    category: sanitizeString(data.category, "تقنية") as string,
  };
};

/**
 * Validates and sanitizes a complete Team Member object
 */
export const validateTeamMemberData = (data: any) => {
  return {
    name: sanitizeString(data.name, "عضو فريق") as string,
    role: sanitizeString(data.role, "مطور") as string,
    image: sanitizeURL(data.image, "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop") as string,
    bio: sanitizeString(data.bio, "لا توجد نبذة متوفرة.") as string,
    linkedin: sanitizeURL(data.linkedin, null),
    github: sanitizeURL(data.github, null),
    twitter: sanitizeURL(data.twitter, null),
  };
};
