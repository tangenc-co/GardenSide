"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const filterGroups = [
  {
    title: "Category",
    options: [
      { label: "Dining Sets", count: 13 },
      { label: "Garden Benches", count: 20 },
      { label: "Outdoor Sofas", count: 13 },
      { label: "Planters & Decor", count: 40 },
      { label: "Lounge Chairs", count: 9 },
    ],
  },
  {
    title: "Materials",
    options: [
      { label: "Teak Wood", count: 13 },
      { label: "Aluminum", count: 20 },
      { label: "Terracotta", count: 13 },
      { label: "Metal", count: 40 },
      { label: "Concrete", count: 9 },
    ],
  },
  {
    title: "Room/Space",
    options: [
      { label: "Garden", count: 13 },
      { label: "Terrace", count: 20 },
      { label: "Poolside", count: 13 },
      { label: "Balcony", count: 40 },
    ],
  },
];

export function ProductFilters() {
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
        />
      </div>

      <Accordion
        type="multiple"
        defaultValue={["Category", "Materials", "Room/Space"]}
        className="mt-10"
      >
        {filterGroups.map((group) => (
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
                {group.options.map((option) => (
                  <div
                    key={option.label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox id={option.label} />

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
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
}