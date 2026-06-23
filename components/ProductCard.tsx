import Link from "next/link";
import { CatalogImage } from "@/components/CatalogImage";
import Image from "next/image";
import { Product } from "@/types/catalog";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    // <Link
    //   href={`/products/${product.slug}`}
    //   className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200/80 bg-white shadow-sm transition hover:border-amber-900/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
    // >
    //   <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
    //     <CatalogImage
    //       image={product.mainImage}
    //       width={800}
    //       height={600}
    //       className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
    //       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //     />
    //   </div>
    //   <div className="flex flex-1 flex-col p-4">
    //     {product.category && (
    //       <p className="text-xs font-medium uppercase tracking-wider text-amber-800/80 dark:text-amber-200/80">
    //         {product.category.title}
    //       </p>
    //     )}
    //     <h2 className="mt-1 font-serif-ui text-lg text-zinc-900 dark:text-zinc-50">{product.title}</h2>
    //     {product.shortDescription && (
    //       <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
    //         {product.shortDescription}
    //       </p>
    //     )}
    //     {product.priceLabel && (
    //       <p className="mt-auto pt-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
    //         {product.priceLabel}
    //       </p>
    //     )}
    //   </div>
    // </Link>
    <Link href={`/products/${product.slug}`}>
      <div className="overflow-hidden rounded-xl border-[1.5px] border-[#72BF96] bg-white">
        <div className="relative">
          <Image
            src={product.thumbnail}
            alt={product.name}
            className="object-cover"
            width={312}
            height={240}
            loading="eager"
          />
        </div>

        <div className="p-4">
          <p className="text-sm text-[#72BF96]">{product.category}</p>

          <h3 className="mt-1 text-lg font-semibold text-[#213526]">
            {product.name}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            <span className="font-semibold">£{product.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
