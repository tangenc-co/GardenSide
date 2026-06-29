"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilter";
import { ProductSort } from "@/components/ProductSort";
import { ProductListItem } from "@/types/catalog";
import { FilterOptions } from "@/lib/sanity/fetch";

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

  const [sortValue, setSortValue] = useState("featured");

  const filteredProducts = useMemo(() => {
    return allProducts?.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        filters.category.length === 0 ||
        (product.category?.slug &&
          filters.category.includes(product.category.slug));
      const matchesMaterial =
        filters.material.length === 0 ||
        (product.material && filters.material.includes(product.material));
      const matchesSpace =
        filters.space.length === 0 ||
        (product.space && filters.space.includes(product.space));

      return matchesSearch && matchesCategory && matchesMaterial && matchesSpace;
    });
  }, [allProducts, searchQuery, filters]);

  const filterGroups = useMemo(() => {
    if (!filterOptions) return null;
    return [
      {
        title: "Category",
        options: Array.from(new Set(filterOptions.categories || [])).map((c) => ({
          label: c,
          count: allProducts?.filter((p) => p.category?.title === c).length || 0,
        })),
      },
      {
        title: "Materials",
        options: Array.from(new Set(filterOptions.materials || [])).map((m) => ({
          label: m,
          count: allProducts?.filter((p) => p.material === m).length || 0,
        })),
      },
      {
        title: "Room/Space",
        options: Array.from(new Set(filterOptions.spaces || [])).map((s) => ({
          label: s,
          count: allProducts?.filter((p) => p.space === s).length || 0,
        })),
      },
    ];
  }, [filterOptions, allProducts]);

  const sortedProducts = useMemo(() => {
    if (!filteredProducts) return [];
    const products = [...filteredProducts];

    const parsePrice = (label: string | number | undefined | null): number => {
      if (label === undefined || label === null) return 0;
      if (typeof label === "number") return label;
      const cleanString = label.replace(/[$,£€\s]/g, "");
      const parsed = parseFloat(cleanString);
      return isNaN(parsed) ? 0 : parsed;
    };

    switch (sortValue) {
      case "price-low-high":
        return products.sort((a, b) => parsePrice(a.priceLabel) - parsePrice(b.priceLabel));
      case "price-high-low":
        return products.sort((a, b) => parsePrice(b.priceLabel) - parsePrice(a.priceLabel));
      case "name-asc":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      case "featured":
      default:
        return products;
    }
  }, [filteredProducts, sortValue]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        
        <ProductFilters
          filterOptions={filterGroups}
          onFilterChange={setFilters}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="flex-1 w-full">
          {sortedProducts.length > 0 ? (
            <>
              <div className="mb-6 flex items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
                <p className="text-sm font-medium text-[#667085]">
                  Showing {sortedProducts.length}  products
                </p>
                <ProductSort value={sortValue} onValueChange={setSortValue} />
              </div>
              
      
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {sortedProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="py-24 text-center rounded-xl border border-dashed border-[#E5E7EB] bg-[#FAFAF8] px-4">
              <p className="text-lg font-medium text-[#213526]">No products match your filters.</p>
              <p className="text-sm text-[#667085] mt-1">Try clearing some filters or changing your search phrase.</p>
              <button 
                type="button"
                onClick={() => {
                  setFilters({ category: [], material: [], space: [] });
                  setSearchQuery("");
                }}
                className="mt-4 text-sm font-semibold text-[#056839] hover:text-[#213526] underline transition-colors"
              >
                Clear all active filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}