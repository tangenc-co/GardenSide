import Link from "next/link";
import { CatalogImage } from "@/components/CatalogImage";
import { ProductListItem } from "@/types/catalog";

type ProductCardProps = {
  product: ProductListItem;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      href={`/products/${product.slug}`}
      className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#056839] focus-visible:ring-offset-2 rounded-xl"
    >
      <div className="flex flex-col h-full overflow-hidden rounded-xl border-[1.5px] border-[#72BF96]/60 bg-white transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-[#056839] group-hover:shadow-md">
        
        <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100">
          <CatalogImage
            image={product.mainImage}
            width={312}
            height={240}
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>


        <div className="flex flex-col flex-1 p-4 lg:p-5">
          {product.category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-[#72BF96]">
              {product.category.title}
            </span>
          )}

          <h3 className="mt-1 text-base sm:text-lg font-semibold text-[#213526] tracking-tight group-hover:text-[#056839] transition-colors line-clamp-2">
            {product.title}
          </h3>


          <div className="mt-auto pt-4 flex items-center justify-between">
            {product.priceLabel && (
              <span className="text-base font-bold text-[#213526]">
                {product.priceLabel}
              </span>
            )}
            <span className="text-xs font-medium text-[#056839] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 inline-flex items-center gap-1">
              View Details 
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
}