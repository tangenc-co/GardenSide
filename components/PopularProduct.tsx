import { ProductListItem } from "@/types/catalog";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";

interface PopularProductProps {
  popularProducts: ProductListItem[];
}

export function PopularProduct({ popularProducts }: PopularProductProps) {
  if (popularProducts.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6  sm:px-12 text-[#143D30] bg-[#EDFAF5] py-16 lg:py-24">
     
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-[#056839]">
            — Featured
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#213526] tracking-tight">
            Popular Pieces
          </h2>
        </div>
        
          <Link
            href="/products"
            className="inline-flex w-fit items-center rounded-md border-2 border-[#1E3D2F] px-5 py-3 font-medium text-[#1E3D2F] transition-colors hover:bg-[#1E3D2F] hover:text-white"
          >
          Browse All Products →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {popularProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
