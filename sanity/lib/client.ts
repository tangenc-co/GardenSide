import { createClient } from "next-sanity";
import { apiVersion, getSanityDataset, getSanityProjectId } from "../env";

const projectId = getSanityProjectId();
if (!projectId) {
  throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local for the Studio and API client.");
}

/** Used by `defineLive` / future live preview; storefront uses `lib/sanity/client.ts`. */
export const client = createClient({
  projectId,
  dataset: getSanityDataset(),
  apiVersion,
  useCdn: true,
});
