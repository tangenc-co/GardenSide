import Image from "next/image";
import type { ProductImage } from "@/types/catalog";

type CatalogImageProps = {
  image: ProductImage;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders a Sanity `image` field (uploaded in Studio) via `asset->url` (Sanity CDN).
 */
export function CatalogImage({ image, width, height, className, priority, sizes }: CatalogImageProps) {
  if (!image.url) {
    return (
      <div
        className={`bg-zinc-200 text-zinc-500 flex items-center justify-center text-sm p-4 text-center ${className ?? ""}`}
        style={{ width, height, maxWidth: "100%" }}
      >
        Add a main image in Sanity Studio, then publish.
      </div>
    );
  }

  const w = image.width && image.width > 0 ? image.width : width;
  const h = image.height && image.height > 0 ? image.height : height;
  // Avoid `/_next/image` (can 400 in dev or when Sanity URLs include query params). cdn.sanity.io is already optimized.
  const src = image.url.split("?")[0] ?? image.url;

  return (
    <Image
      src={src}
      alt={image.alt || ""}
      width={w}
      height={h}
      className={className}
      priority={priority}
      sizes={sizes}
      unoptimized
    />
  );
}
