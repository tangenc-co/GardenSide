import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { getSanityDataset, getSanityProjectId } from "../env";

const projectId = getSanityProjectId();
if (!projectId) {
  throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local.");
}

// Sanity image URL builder (optional transforms) for any `image` field assets.
const builder = createImageUrlBuilder({ projectId, dataset: getSanityDataset() });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
