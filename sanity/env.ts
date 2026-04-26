/**
 * Public Sanity config for the **Next app** and Studio.
 * `NEXT_PUBLIC_*` vars are available in the browser. Put real values in `.env.local` (not committed).
 */
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export function getSanityProjectId(): string | undefined {
  return process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
}

export function getSanityDataset(): string {
  return process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
}
