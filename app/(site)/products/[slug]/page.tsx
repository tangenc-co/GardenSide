// import { CatalogImage } from "@/components/CatalogImage";
// import { PortableBody } from "@/components/PortableBody";
import { getAllProductSlugs, getProductBySlug } from "@/lib/sanity/fetch";
import { getSanityProjectId } from "@/sanity/env";

import { notFound } from "next/navigation";
import { SetupCallout } from "@/components/SetupCallout";
import { ProductDetailPage } from "@/components/ProductDetailPage";
// import { ProductCard } from "@/components/ProductCard";
import products from "@/data/products.json";
// type Props = { params: Promise<{ slug: string }> };

// export const revalidate = 60;

// export async function generateMetadata(props: Props): Promise<Metadata> {
//   const { slug } = await props.params;
//   if (!getSanityProjectId()) {
//     return { title: "Product | Garden Side" };
//   }
//   const product = await getProductBySlug(slug);
//   if (!product) {
//     return { title: "Not found | Garden Side" };
//   }
//   return {
//     title: `${product.title} | Garden Side`,
//     description: product.shortDescription || undefined,
//   };
// }

// export async function generateStaticParams() {
//   if (!getSanityProjectId()) {
//     return [];
//   }
//   const slugs = await getAllProductSlugs();
//   return slugs.map((slug) => ({ slug }));
// }

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }
  // if (!getSanityProjectId()) {
  //   return (
  //     <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
  //       <SetupCallout />
  //     </div>
  //   );
  // }

  // const product = await getProductBySlug(slug);
  // if (!product) {
  //   notFound();
  // }

  // const gallery = product.gallery ?? [];
  // const extra = gallery.filter((g) => g.url && g.url !== product.mainImage.url);
  // const images = [product.mainImage, ...extra];

  return (
    <main className="flex-1 w-full">
      <ProductDetailPage product={product} />
    </main>
  );
}
