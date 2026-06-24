"use client";

import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilter";
import { ProductListItem } from "@/types/catalog";
import { FilterOptions } from "@/lib/sanity/fetch";
import { useState } from "react";

type FilterGroup = {
  title: string;
  options: { label: string; count: number }[];
};

export function ProductFiltersClient({
  filterOptions,
  allProducts,
}: {
  filterOptions: FilterOptions | null;
  allProducts: ProductListItem[] | null;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<{
    category: string[];
    material: string[];
    space: string[];
  }>({ category: [], material: [], space: [] });

  const filteredProducts = allProducts?.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filters.category.length === 0 ||
      (product.category?.title && filters.category.includes(product.category.title));
    const matchesMaterial =
      filters.material.length === 0 ||
      (product.material && filters.material.includes(product.material));
    const matchesSpace =
      filters.space.length === 0 ||
      (product.space && filters.space.includes(product.space));

    return matchesSearch && matchesCategory && matchesMaterial && matchesSpace;
  });

  const filterGroups = filterOptions
    ? [
        {
          title: "Category",
          options: Array.from(new Set(filterOptions.categories || [])).map((c) => ({ label: c, count: allProducts?.filter(p => p.category?.title === c).length || 0 })),
        },
        {
          title: "Materials",
          options: Array.from(new Set(filterOptions.materials || [])).map((m) => ({ label: m, count: allProducts?.filter(p => p.material === m).length || 0 })),
        },
        {
          title: "Room/Space",
          options: Array.from(new Set(filterOptions.spaces || [])).map((s) => ({ label: s, count: allProducts?.filter(p => p.space === s).length || 0 })),
        },
      ]
    : null;

  return (
    <>
      <ProductFilters
        filterOptions={filterGroups}
        onFilterChange={setFilters}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <div className="flex-1">
        {filteredProducts && filteredProducts.length > 0 ? (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[#667085]">{filteredProducts.length} Products</p>
              <button className="rounded-lg border px-4 py-2">Sort By</button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">No products match your filters.</p>
        )}
      </div>
    </>
  );
}
