import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { getSanityDataset, getSanityProjectId } from "../env";

const projectId = getSanityProjectId();
if (!projectId) {
  throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local.");
}

// For Sanity CDN assets. Product images in this app use Cloudinary; keep this for future / mixed use.
const builder = createImageUrlBuilder({ projectId, dataset: getSanityDataset() });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
