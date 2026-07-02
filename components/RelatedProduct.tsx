import { ProductListItem } from "@/types/catalog";
import { ProductCard } from "./ProductCard";
import Link from "next/link";

interface RelatedProductsProps {
  products: ProductListItem[];
}

export function RelatedProducts({
  products,
}: RelatedProductsProps) {
  if (products.length === 0) return null;



  return (
    <section>
     <div className="flex justify-between">
        <h2 className="mb-8 text-4xl font-semibold text-[#056839]">
        You May Also Like
      </h2>
      <Link href="/products" className="text-[#027A48] text-[16px] font-medium">View all Product →</Link>
     </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}