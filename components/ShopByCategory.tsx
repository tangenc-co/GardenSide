import Link from "next/link";
import { CategoryRef } from "@/types/catalog";
import { CategoryCard } from "@/components/CategoryCard";

interface ShopByCategoryProps {
  categories: CategoryRef[];
}

export function ShopByCategory({
  categories,
}: ShopByCategoryProps) {

const [left, middle, topRight, bottomRight] = categories;

  return (
    <section className="bg-[#EDFAF5] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
 
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-lg font-medium uppercase text-[#056839]">
              — Collections
            </p>

            <h2 className="mt-2 text-4xl font-semibold text-[#213526]">
              Shop By Category
            </h2>
          </div>

          <Link
            href="/categories"
            className="inline-flex w-fit items-center rounded-md border-2 border-[#1E3D2F] px-5 py-3 font-medium text-[#1E3D2F] transition-colors hover:bg-[#1E3D2F] hover:text-white"
          >
            View All Categories
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {left && (
            <CategoryCard
              category={left}
              size="large"
            />
          )}

          {middle && (
            <CategoryCard
              category={middle}
              size="large"
            />
          )}
          <div className="grid gap-6">
            {topRight && (
              <CategoryCard
                category={topRight}
                size="small"
              />
            )}

            {bottomRight && (
              <CategoryCard
                category={bottomRight}
                size="small"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}