"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FilterGroup = {
  title: string;
  options: { label: string; count: number }[];
};

type SelectedFiltersState = {
  category: string[];
  material: string[];
  space: string[];
};

interface ProductFiltersProps {
  filterOptions: FilterGroup[] | null;
  onFilterChange: (filters: SelectedFiltersState) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function ProductFilters({
  filterOptions,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: ProductFiltersProps) {


  
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersState>({
    category: [],
    material: [],
    space: [],
  });

  const handleFilterToggle = (group: keyof SelectedFiltersState, label: string) => {
    const newFilters = { ...selectedFilters };
    const index = newFilters[group].indexOf(label);
    if (index > -1) {
      newFilters[group].splice(index, 1);
    } else {
      newFilters[group].push(label);
    }
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClearAll = () => {
    const cleared = { category: [], material: [], space: [] };
    setSelectedFilters(cleared);
    onFilterChange(cleared);
    onSearchChange("");
  };

  const activeFiltersCount = 
    selectedFilters.category.length + 
    selectedFilters.material.length + 
    selectedFilters.space.length;


  const renderFilterContent = () => (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-[#056839]">
            Shop All
          </h2>
          {activeFiltersCount > 0 && (
            <button
              type="button"
              onClick={handleClearAll}
              className="text-xs font-semibold text-red-600 hover:underline outline-none"
            >
              Clear ({activeFiltersCount})
            </button>
          )}
        </div>

        <p className="text-sm text-[#667085]">
          Sustainable outdoor living.
        </p>

        <div className="relative pt-2">
          <Input
            placeholder="Search products..."
            className="w-full h-11 border-[#72BF96] focus-visible:ring-[#056839] rounded-md transition-all pl-4"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["Category", "Materials", "Room/Space"]}
        className="mt-8 space-y-1"
      >
        {filterOptions?.map((group) => (
          <AccordionItem
            key={group.title}
            value={group.title}
            className="border-b border-[#72BF96]/40 last:border-none"
          >
            <AccordionTrigger className="text-lg font-medium text-[#213526] hover:text-[#056839] py-3 transition-colors">
              {group.title}
            </AccordionTrigger>

            <AccordionContent>
              <div className="space-y-3 py-1 pr-1">
                {group.options.map((option) => {
                  const groupKeyMap: Record<string, keyof SelectedFiltersState> = {
                    Category: "category",
                    Materials: "material",
                    "Room/Space": "space",
                  };
                  const groupKey = groupKeyMap[group.title];
                  if (!groupKey) return null;

                  const uniqueInputId = `${group.title}-${option.label}`.replace(/\s+/g, "-").toLowerCase();
                  const isChecked = selectedFilters[groupKey].includes(option.label);

                  return (
                    <div key={option.label} className="flex items-center justify-between group py-0.5">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id={uniqueInputId}
                          checked={isChecked}
                          onCheckedChange={() => handleFilterToggle(groupKey, option.label)}
                          className="border-[#72BF96] data-[state=checked]:bg-[#056839] data-[state=checked]:border-[#056839]"
                        />
                        <label
                          htmlFor={uniqueInputId}
                          className={`cursor-pointer text-sm sm:text-base transition-colors select-none ${
                            isChecked ? "text-[#213526] font-medium" : "text-[#667085] group-hover:text-[#213526]"
                          }`}
                        >
                          {option.label}
                        </label>
                      </div>
                      <span className="flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-[#EDF7F1] text-xs font-medium text-[#056839]">
                        {option.count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );

  return (
    <>

      <div className="lg:hidden w-full flex items-center justify-between gap-4 mb-6 bg-[#FAFAF8] p-3 rounded-xl border border-[#E5E7EB]">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Search catalog..."
            className="w-full h-10 border-[#72BF96]/60 bg-white"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#056839] px-4 text-sm font-medium text-white transition-colors hover:bg-[#213526]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>
          Filters
          {activeFiltersCount > 0 && (
            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#056839]">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>


      <aside className="hidden lg:block w-full max-w-70 xl:max-w-[320px] shrink-0 sticky top-24 h-fit rounded-xl border border-[#72BF96] bg-white p-6 shadow-sm">

        {renderFilterContent()}
      </aside>


      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 flex w-full max-w-xs flex-col bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out border-r border-[#E5E7EB] ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] mb-4">
          <span className="font-semibold text-lg text-[#213526]">Filter Options</span>
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="rounded-md p-2 text-[#213526] hover:bg-[#E5E7EB]/60 focus:outline-none"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pb-20 scrollbar-none">
          {renderFilterContent()}
        </div>

        <div className="absolute bottom-0 inset-x-0 bg-white border-t border-[#E5E7EB] p-4">
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="w-full bg-[#056839] text-white py-2.5 rounded-md font-medium text-center hover:bg-[#213526] transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}