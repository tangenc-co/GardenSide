import { getSanityClient } from "@/lib/sanity/client";
import {
  filterOptionsQuery,
  productBySlugQuery,
  productsListQuery,
  relatedProductsQuery,

} from "@/lib/sanity/queries";
import type { ProductDetail, ProductListItem, CategoryRef } from "@/types/catalog";

async function safeFetch<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch {
    return fallback;
  }
}
const client = getSanityClient();
export async function getProductsList(): Promise<ProductListItem[] | null> {
  if (!client) return null;
  return safeFetch(async () => {
    const data = await client.fetch<ProductListItem[]>(productsListQuery);
    return data ?? [];
  }, []);
}

export async function getProductBySlug(
  slug: string,
): Promise<ProductDetail | null> {
  if (!client) return null;
  return safeFetch(
    () => client.fetch<ProductDetail | null>(productBySlugQuery, { slug }),
    null,
  );
}

export async function getAllProductSlugs(): Promise<string[]> {
  if (!client) return [];
  return safeFetch(async () => {
    const data = await client.fetch<{ slug: string }[] | null>(
      `*[_type == "product" && defined(slug.current)]{ "slug": slug.current }`,
    );
    if (!data) return [];
    return data.map((d) => d.slug).filter(Boolean);
  }, []);
}

export type FilterOptions = {
  categories: string[];
  materials: string[];
  spaces: string[];
};

export async function getRelatedProducts(
  categoryId: string | undefined,
  slug: string,
): Promise<ProductListItem[]> {
  if (!client) return [];

  return safeFetch(
    async () =>
      await client.fetch<ProductListItem[]>(relatedProductsQuery, {
        categoryId,
        slug,
      }),
    [],
  );
}
export async function getFilterOptions(): Promise<FilterOptions | null> {
  if (!client) return null;
  return safeFetch(() => client.fetch<FilterOptions>(filterOptionsQuery), {
    categories: [],
    materials: [],
    spaces: [],
  });
}

export async function getCategoryList():Promise <CategoryRef[] | null> {
  if(!client) return null;
  
  return client.fetch(`
    *[_type == "category"] {
      _id,
      title,
      "slug": slug.current
    }
  `);
}
