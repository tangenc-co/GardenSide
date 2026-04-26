import Link from "next/link";
import { CatalogImage } from "@/components/CatalogImage";
import type { ProductListItem } from "@/types/catalog";

export function ProductCard({ product }: { product: ProductListItem }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200/80 bg-white shadow-sm transition hover:border-amber-900/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <CatalogImage
          image={product.mainImage}
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        {product.category && (
          <p className="text-xs font-medium uppercase tracking-wider text-amber-800/80 dark:text-amber-200/80">
            {product.category.title}
          </p>
        )}
        <h2 className="mt-1 font-serif-ui text-lg text-zinc-900 dark:text-zinc-50">{product.title}</h2>
        {product.shortDescription && (
          <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {product.shortDescription}
          </p>
        )}
        {product.priceLabel && (
          <p className="mt-auto pt-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            {product.priceLabel}
          </p>
        )}
      </div>
    </Link>
  );
}
