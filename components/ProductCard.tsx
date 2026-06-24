import Link from "next/link";
import { CatalogImage } from "@/components/CatalogImage";
import { ProductListItem } from "@/types/catalog";

type ProductCardProps = {
  product: ProductListItem;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="overflow-hidden rounded-xl border-[1.5px] border-[#72BF96] bg-white">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
          <CatalogImage
            image={product.mainImage}
            width={312}
            height={240}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4">
          {product.category && (
            <p className="text-sm text-[#72BF96]">{product.category.title}</p>
          )}

          <h3 className="mt-1 text-lg font-semibold text-[#213526]">
            {product.title}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            {product.priceLabel && (
              <span className="font-semibold">{product.priceLabel}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
