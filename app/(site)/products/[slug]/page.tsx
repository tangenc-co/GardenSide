
import { getAllProductSlugs, getProductBySlug, getRelatedProducts } from "@/lib/sanity/fetch";
import { getSanityProjectId } from "@/sanity/env";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SetupCallout } from "@/components/SetupCallout";
import { ProductDetailPage } from "@/components/ProductDetailPage";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  if (!getSanityProjectId()) {
    return { 
      title: "Product | Garden Side",
      openGraph: {
        type: 'website',
      },
    };
  }
  const product = await getProductBySlug(slug);
  if (!product) {
    return { 
      title: "Not found | Garden Side",
      openGraph: {
        type: 'website',
      },
    };
  }
  
  const imageUrl = (product.mainImage?.url as string) || '/og-image.jpg';
  
  return {
    title: `${product.title} | Garden Side`,
    description: product.shortDescription || undefined,
    openGraph: {
      type: 'website',
      title: product.title,
      description: product.shortDescription || undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.shortDescription || undefined,
      images: [imageUrl],
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
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



const relatedProducts = await getRelatedProducts(
  product.category?._id,
  product.slug
);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.shortDescription || undefined,
    image: product.mainImage?.url || undefined,
    category: product.category?.title || undefined,
    offers: {
      '@type': 'Offer',
      price: product.priceLabel || undefined,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <main className="flex-1 w-full">
      <JsonLd data={productJsonLd} />
      <ProductDetailPage product={product}  relatedProducts = {relatedProducts}/>
    </main>
  );
}
