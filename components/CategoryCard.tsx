import { CategoryRef } from "@/types/catalog"
import Link from "next/link";
import { CatalogImage } from "@/components/CatalogImage";

interface CategoryCardProps {
    category: CategoryRef;
    size?: "large" | "small";
}

export function CategoryCard({ category, size = "large" }: CategoryCardProps) {


  return (
    <Link
      href={`/products?category=${category.slug}`}
      className={`group relative overflow-hidden rounded-2xl block ${
        size === "large" ? "h-112.5" : "h-53.25"
      }`}
    >
       <CatalogImage
        image={category.image}
        width={size === "large" ? 500 : 250} 
        height={size === "large" ? 450 : 210}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        priority={size === "large"}
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#142A1FD9] via-[#142A1F1A] to-transparent" />
      <div className="absolute bottom-8 left-8 z-1">
        <p className="text-sm uppercase tracking-widest text-[#97CCB3] font-semibold ">
          {category.subtitle}
        </p>

        <h3 className="mt-2 text-3xl font-medium text-[#FEFEFE]">
          {category.title}
        </h3>
      </div>
    </Link>
  );
}
