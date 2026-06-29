
import { getProductsList, getFilterOptions} from "@/lib/sanity/fetch";
import { getSanityProjectId } from "@/sanity/env";
import { ProductFiltersClient } from "@/components/ProductFiltersClient";
import { ProductHeroSection } from "@/components/ProductHeroSection";
import { SetupCallout } from "@/components/SetupCallout";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Collection | Garden Side",
  description: "Browse our furniture and interior pieces.",
};

export default async function ProductsPage() {
  const hasSanity = Boolean(getSanityProjectId());
  const products = hasSanity ? await getProductsList() : null;
  const filterOptions = hasSanity ? await getFilterOptions() : null;

  return (
    <section>
      <ProductHeroSection />
      <div className="mx-auto mt-10 mb-10 flex max-w-7xl gap-10 items-start">
        {!hasSanity && (
          <div className="flex-1">
            <SetupCallout />
          </div>
        )}
        
        {hasSanity && (
          <ProductFiltersClient filterOptions={filterOptions} allProducts={products} />
        )}
      </div>
    </section>
  );
}
