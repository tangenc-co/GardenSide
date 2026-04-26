const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

/**
 * Build a delivery URL for a Cloudinary `publicId` (with optional folder path).
 * Uses auto format and quality for responsive, efficient images.
 * Set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` in `.env.local`.
 */
export function cloudinaryImageUrl(
  publicId: string,
  options?: { width?: number; height?: number; crop?: "fill" | "limit" },
) {
  if (!CLOUD) {
    return "";
  }
  const w = options?.width ?? 1200;
  const h = options?.height;
  const crop = options?.crop ?? "limit";
  const size = h ? `c_${crop},w_${w},h_${h}` : `c_${crop},w_${w}`;
  const id = publicId.replace(/^\/+/, "");
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,${size}/${id}`;
}

export function isCloudinaryConfigured(): boolean {
  return Boolean(CLOUD);
}
