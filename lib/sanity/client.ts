import { createClient } from "next-sanity";
import { apiVersion, getSanityDataset, getSanityProjectId } from "@/sanity/env";

const base = {
  dataset: getSanityDataset(),
  apiVersion,
  useCdn: true,
} as const;

export function getSanityClient() {
  const projectId = getSanityProjectId();
  if (!projectId) return null;
  return createClient({ ...base, projectId });
}
