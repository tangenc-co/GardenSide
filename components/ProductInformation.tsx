import {
  Check,
  Truck,
  Ruler,
} from "lucide-react";
import {Product} from "@/types/catalog"
interface ProductInformationProps {
    product: Product;
}

export function ProductInformation({
product,
}: ProductInformationProps) {
  return (
    <div>
      <p className="text-sm font-medium uppercase text-[#056839]">
        {product.category}
      </p>

      <h1 className="mt-2 text-5xl font-semibold text-[#213526]">
        {product.name}
      </h1>

      <p className="mt-4 text-4xl font-bold">
        £{product.price}
      </p>

      <p className="mt-6 text-lg text-[#667085]">
        {product.description}
      </p>

      <div className="mt-8 rounded-xl border border-[#97CCB3] bg-[#EDF7F1] p-6">
        <div className="grid grid-cols-2 gap-4">
          {product.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2"
            >
              <Check
                size={18}
                className="text-[#056839]"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-[#056839]">
          Dimensions
        </h2>

        <div className="mt-4 flex w-fit items-center gap-3 rounded-xl bg-[#EDF7F1] px-5 py-4">
          <Ruler size={20} />
          <span>{product.dimensions}</span>
        </div>
      </div>

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