"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

type FilterGroup = {
  title: string;
  options: { label: string; count: number }[];
};

export function ProductFilters({
  filterOptions,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: {
  filterOptions: FilterGroup[] | null;
  onFilterChange: (filters: { category: string[]; material: string[]; space: string[] }) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}) {
  const [selectedFilters, setSelectedFilters] = useState<{
    category: string[];
    material: string[];
    space: string[];
  }>({ category: [], material: [], space: [] });

  const handleFilterToggle = (group: keyof typeof selectedFilters, label: string) => {
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

  return (
    <aside className="rounded-lg border border-[#72BF96] bg-white p-8">
      <div className="space-y-3">
        <p className="text-3xl font-medium text-[#056839]">
          Shop All
        </p>

        <p className="text-md text-[#667085]">
          Sustainable outdoor living.
        </p>

        <Input
          placeholder="Search products..."
          className="mt-6 h-12"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <Accordion
        type="multiple"
        defaultValue={["Category", "Materials", "Room/Space"]}
        className="mt-10"
      >
        {filterOptions?.map((group) => (
          <AccordionItem
            key={group.title}
            value={group.title}
            className="border-b border-[#72BF96]"
          >
            <AccordionTrigger className="text-2xl font-semibold text-[#213526]">
              {group.title}
            </AccordionTrigger>

            <AccordionContent>
              <div className="space-y-4 py-2">
                {group.options.map((option) => {
                  const groupKeyMap: Record<string, keyof typeof selectedFilters> = {
                    "Category": "category",
                    "Materials": "material",
                    "Room/Space": "space",
                  };
                  const groupKey = groupKeyMap[group.title];
                  if (!groupKey) return null;
                  return (
                    <div
                      key={option.label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id={option.label}
                          checked={selectedFilters[groupKey].includes(option.label)}
                          onCheckedChange={() => handleFilterToggle(groupKey, option.label)}
                        />

                        <label
                          htmlFor={option.label}
                          className="cursor-pointer text-base text-[#667085]"
                        >
                          {option.label}
                        </label>
                      </div>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EDF7F1] text-sm text-[#056839]">
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
    </aside>
  );
}