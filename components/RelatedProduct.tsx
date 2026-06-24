import { Product } from "@/types/catalog";
import { ProductCard } from "./ProductCard";
import Link from "next/link";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({
  products,
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  console.log("Related Product",products)

  return (
    <section>
     <div>
        <h2 className="mb-8 text-4xl font-semibold text-[#056839]">
        You May Also Like
      </h2>
      {/* <Link href={}>View all Product </Link> */}
     </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}