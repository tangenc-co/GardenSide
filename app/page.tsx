import { ProductCard } from "@/components/ProductCard";
import { SetupCallout } from "@/components/SetupCallout";
import { getProductsList } from "@/lib/sanity/fetch";
import { isCloudinaryConfigured } from "@/lib/cloudinary";
import { getSanityProjectId } from "@/sanity/env";
import Link from "next/link";

export const revalidate = 60;

export default async function HomePage() {
  const hasSanity = Boolean(getSanityProjectId());
  const products = hasSanity ? await getProductsList() : null;
  const hasCloud = isCloudinaryConfigured();

  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-zinc-200/80 bg-gradient-to-b from-amber-50/40 to-zinc-50/30 px-4 py-16 dark:border-zinc-800 dark:from-amber-950/20 dark:to-zinc-950/40 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-900/80 dark:text-amber-200/80">
            Furniture & interiors
          </p>
          <h1 className="mt-4 font-serif-ui text-4xl text-zinc-900 sm:text-5xl dark:text-zinc-50">
            Lumen Home
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Explore the collection. Prices are shown for reference; online purchasing is not enabled yet.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              View full collection
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
        {!hasSanity && (
          <div className="mb-10">
            <SetupCallout kind="sanity" />
          </div>
        )}

        {hasSanity && (!products || products.length === 0) && (
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            No products yet. Add categories and products in{" "}
            <Link className="font-medium text-amber-800 underline dark:text-amber-200" href="/studio">
              Sanity Studio
            </Link>
            .
          </p>
        )}

        {products && products.length > 0 && !hasCloud && (
          <div className="mb-10">
            <SetupCallout kind="cloudinary" />
          </div>
        )}

        {products && products.length > 0 && (
          <div>
            <h2 className="mb-6 font-serif-ui text-2xl text-zinc-900 dark:text-zinc-50">Featured</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 6).map((p) => (
                <li key={p._id}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
