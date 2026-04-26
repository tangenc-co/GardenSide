import { ProductCard } from "@/components/ProductCard";
import { SetupCallout } from "@/components/SetupCallout";
import { getProductsList } from "@/lib/sanity/fetch";
import { getSanityProjectId } from "@/sanity/env";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Collection | Garden Side",
  description: "Browse our furniture and interior pieces.",
};

export default async function ProductsPage() {
  const hasSanity = Boolean(getSanityProjectId());
  const products = hasSanity ? await getProductsList() : null;
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="font-serif-ui text-3xl text-zinc-900 dark:text-zinc-50">Collection</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          All pieces are for browsing only; purchasing will be available in a later release.
        </p>
      </div>

      {!hasSanity && <SetupCallout />}

      {hasSanity && (!products || products.length === 0) && (
        <p className="text-zinc-600 dark:text-zinc-400">
          No products published yet. Open Sanity Studio to add your first product.
        </p>
      )}

      {products && products.length > 0 && (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p._id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
