import Image from "next/image";
import { cloudinaryImageUrl, isCloudinaryConfigured } from "@/lib/cloudinary";
import type { CloudinaryImage as CloudinaryImageType } from "@/types/catalog";

type CloudImageProps = {
  image: CloudinaryImageType;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function CloudImage({ image, width, height, className, priority, sizes }: CloudImageProps) {
  if (!isCloudinaryConfigured() || !image.publicId) {
    return (
      <div
        className={`bg-zinc-200 text-zinc-500 flex items-center justify-center text-sm p-4 text-center ${className ?? ""}`}
        style={{ width, height, maxWidth: "100%" }}
      >
        Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local to show images.
      </div>
    );
  }
  const src = cloudinaryImageUrl(image.publicId, { width, height, crop: "fill" });
  if (!src) {
    return null;
  }
  return (
    <Image
      src={src}
      alt={image.alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
