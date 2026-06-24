import { getSanityClient } from "@/lib/sanity/client";
import { filterOptionsQuery, productBySlugQuery, productsListQuery } from "@/lib/sanity/queries";
import type { ProductDetail, ProductListItem } from "@/types/catalog";

async function safeFetch<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch {
    return fallback;
  }
}

export async function getProductsList(): Promise<ProductListItem[] | null> {
  const client = getSanityClient();
  if (!client) return null;
  return safeFetch(
    async () => {
      const data = await client.fetch<ProductListItem[]>(productsListQuery);
      return data ?? [];
    },
    [],
  );
}

export async function getProductBySlug(slug: string): Promise<ProductDetail | null> {
  const client = getSanityClient();
  if (!client) return null;
  return safeFetch(
    () => client.fetch<ProductDetail | null>(productBySlugQuery, { slug }),
    null,
  );
}

export async function getAllProductSlugs(): Promise<string[]> {
  const client = getSanityClient();
  if (!client) return [];
  return safeFetch(
    async () => {
      const data = await client.fetch<{ slug: string }[] | null>(
        `*[_type == "product" && defined(slug.current)]{ "slug": slug.current }`,
      );
      if (!data) return [];
      return data.map((d) => d.slug).filter(Boolean);
    },
    [],
  );
}

export type FilterOptions = {
  categories: string[];
  materials: string[];
  spaces: string[];
};

export async function getFilterOptions(): Promise<FilterOptions | null> {
  const client = getSanityClient();
  if (!client) return null;
  return safeFetch(
    () => client.fetch<FilterOptions>(filterOptionsQuery),
    { categories: [], materials: [], spaces: [] },
  );
}

