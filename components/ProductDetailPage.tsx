import { ProductDetail, ProductListItem } from "@/types/catalog";
import { ProductBreadcrumb } from "@/components/ProductBreadCrumb";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductInformation } from "@/components/ProductInformation";
import { RelatedProducts } from "./RelatedProduct";

type ProductDetailPageProps = {
  product: ProductDetail;
  relatedProducts: ProductListItem[];
};


export function ProductDetailPage({ product, relatedProducts }: ProductDetailPageProps) {
  const images = product.mainImage?.url 
    ? [product.mainImage.url, ...(product.gallery?.map(g => g.url).filter((url): url is string => Boolean(url)) || [])] 
    : [];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <ProductBreadcrumb
        category={product.category?.title || ""}
        productName={product.title}
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery 
          images={images} 
          name={product.title} 
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
