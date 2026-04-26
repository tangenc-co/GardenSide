import { CloudImage } from "@/components/CloudImage";
import { PortableBody } from "@/components/PortableBody";
import { getAllProductSlugs, getProductBySlug } from "@/lib/sanity/fetch";
import { isCloudinaryConfigured } from "@/lib/cloudinary";
import { getSanityProjectId } from "@/sanity/env";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SetupCallout } from "@/components/SetupCallout";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  if (!getSanityProjectId()) {
    return { title: "Product | Lumen Home" };
  }
  const product = await getProductBySlug(slug);
  if (!product) {
    return { title: "Not found | Lumen Home" };
  }
  return {
    title: `${product.title} | Lumen Home`,
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
        <SetupCallout kind="both" />
      </div>
    );
  }

  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const hasCloud = isCloudinaryConfigured();
  const gallery = product.gallery ?? [];
  const extra = gallery.filter((g) => g.publicId !== product.mainImage.publicId);
  const images = [product.mainImage, ...extra];

  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <nav className="text-sm text-zinc-500">
        <Link className="hover:text-zinc-800 dark:hover:text-zinc-200" href="/products">
          Collection
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-zinc-800 dark:text-zinc-200">{product.title}</span>
      </nav>

      {!hasCloud && (
        <div className="mt-6">
          <SetupCallout kind="cloudinary" />
        </div>
      )}

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-3">
          {images.map((img, index) => (
            <div
              key={`${img.publicId}-${index}`}
              className="overflow-hidden rounded-lg border border-zinc-200/80 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <CloudImage
                image={img}
                width={1000}
                height={750}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div>
          {product.category && (
            <p className="text-xs font-medium uppercase tracking-wider text-amber-800/90 dark:text-amber-200/90">
              {product.category.title}
            </p>
          )}
          <h1 className="mt-1 font-serif-ui text-3xl text-zinc-900 dark:text-zinc-50">{product.title}</h1>
          {product.priceLabel && (
            <p className="mt-3 text-lg text-zinc-800 dark:text-zinc-200">{product.priceLabel}</p>
          )}
          {product.shortDescription && (
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">{product.shortDescription}</p>
          )}
          <p className="mt-2 text-sm text-zinc-500">Shown for reference only. Not for sale online at this time.</p>
          <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <PortableBody value={product.body} />
          </div>
        </div>
      </div>
    </div>
  );
}
