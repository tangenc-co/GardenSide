import { Product } from "@/types/catalog";
import { ProductBreadcrumb } from "@/components/ProductBreadCrumb";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductInformation } from "@/components/ProductInformation";
import { RelatedProducts } from "./RelatedProduct";
import products from "@/data/products.json";
type ProductDetailPageProps = {
  product: Product;
};

export function ProductDetailPage({
  product,
}: ProductDetailPageProps) {

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <ProductBreadcrumb
        category={product.category}
        productName={product.name}
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery
          images={product.images}
          name={product.name}
        />

        <ProductInformation
          product={product}
        />
      </div>

      <div className="mt-20">
        <RelatedProducts
          products={relatedProducts}
        />
      </div>
    </section>
  );
}
