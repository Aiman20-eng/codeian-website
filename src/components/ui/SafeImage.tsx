"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

export default function SafeImage({ 
  src, 
  alt, 
  fallbackSrc = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  className,
  ...props 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const allowedHostnames = [
    "images.unsplash.com",
    "plus.unsplash.com",
    "res.cloudinary.com",
    "googleusercontent.com"
  ];

  const getSafeSrc = (s: any): string => {
    if (!s || typeof s !== 'string') return fallbackSrc;
    const trimmed = s.trim();
    if (trimmed === "" || trimmed === "#" || trimmed.startsWith("#")) return fallbackSrc;
    
    if (trimmed.startsWith("http")) {
      try {
        const url = new URL(trimmed);
        const isAllowed = allowedHostnames.some(h => url.hostname.includes(h));
        if (!isAllowed) return fallbackSrc;
      } catch {
        return fallbackSrc;
      }
    }
    return trimmed;
  };

  const finalSrc = hasError ? fallbackSrc : getSafeSrc(imgSrc);

  return (
    <Image
      {...props}
      src={finalSrc}
      alt={alt || "Image"}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
