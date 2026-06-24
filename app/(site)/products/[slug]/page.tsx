import { CatalogImage } from "@/components/CatalogImage";
import { PortableBody } from "@/components/PortableBody";
import { getAllProductSlugs, getProductBySlug } from "@/lib/sanity/fetch";
import { getSanityProjectId } from "@/sanity/env";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SetupCallout } from "@/components/SetupCallout";
import { ProductDetailPage } from "@/components/ProductDetailPage";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  if (!getSanityProjectId()) {
    return { title: "Product | Garden Side" };
  }
  const product = await getProductBySlug(slug);
  if (!product) {
    return { title: "Not found | Garden Side" };
  }
  return {
    title: `${product.title} | Garden Side`,
    description: product.shortDescription || undefined,
  };
}

export async function generateStaticParams() {
  if (!getSanityProjectId()) {
    return [];
  }
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProductPage(props: Props) {
  const { slug } = await props.params;

  if (!getSanityProjectId()) {
    return (
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
        <SetupCallout />
      </div>
    );
  }

  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return (
    <main className="flex-1 w-full">
      <ProductDetailPage product={product} />
    </main>
  );
}
