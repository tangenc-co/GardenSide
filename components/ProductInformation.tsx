import { Truck } from "lucide-react";
import { ProductDetail } from "@/types/catalog";
import { PortableBody } from "@/components/PortableBody";

interface ProductInformationProps {
    product: ProductDetail;
}

export function ProductInformation({
product,
}: ProductInformationProps) {
  return (
    <div>
      {product.category && (
        <p className="text-sm font-medium uppercase text-[#056839]">
          {product.category.title}
        </p>
      )}

      <h1 className="mt-2 text-5xl font-semibold text-[#213526]">
        {product.title}
      </h1>

      {product.priceLabel && (
        <p className="mt-4 text-4xl font-bold">
          {product.priceLabel}
        </p>
      )}

      {product.shortDescription && (
        <p className="mt-6 text-lg text-[#667085]">
          {product.shortDescription}
        </p>
      )}

      {product.body && (
        <div className="mt-8">
          <PortableBody value={product.body} />
        </div>
      )}

      <div className="mt-8 border-t pt-8">
        <h2 className="text-3xl font-semibold text-[#056839]">
          Shipping & Returns
        </h2>

        <div className="mt-4 flex gap-4">
          <Truck size={24} />

          <div>
            <h3 className="font-semibold">
              Free Shipping
            </h3>

            <p className="text-[#667085]">
              Complimentary white-glove delivery
              on all orders over £1,500.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}