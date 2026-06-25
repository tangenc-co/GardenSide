"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductSortProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function ProductSort({ value, onValueChange }: ProductSortProps) {
  const labels: Record<string, string> = {
    featured: "Featured",
    "price-low-high": "Price: Low to High",
    "price-high-low": "Price: High to Low",
    "name-asc": "Name: A-Z",
    "name-desc": "Name: Z-A",
  };

  const activeLabel = labels[value] || "Featured";

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full sm:w-56 h-10 border-[#72BF96]/60 focus:ring-[#056839] focus:border-[#056839] bg-white transition-all text-left">
        <SelectValue placeholder="Sort By">
          <span className="text-sm text-zinc-500">
            Sort By:
            <span className="font-semibold text-zinc-900 tracking-tight">
              {activeLabel}
            </span>
          </span>
        </SelectValue>
      </SelectTrigger>

      <SelectContent className="border-[#72BF96]/40 shadow-xl bg-white rounded-lg">
        <SelectItem value="featured" className="focus:bg-[#EDF7F1] focus:text-[#056839] cursor-pointer">
          Featured
        </SelectItem>

        <SelectItem value="price-low-high" className="focus:bg-[#EDF7F1] focus:text-[#056839] cursor-pointer">
          Price: Low to High
        </SelectItem>

        <SelectItem value="price-high-low" className="focus:bg-[#EDF7F1] focus:text-[#056839] cursor-pointer">
          Price: High to Low
        </SelectItem>

        <SelectItem value="name-asc" className="focus:bg-[#EDF7F1] focus:text-[#056839] cursor-pointer">
          Name: A-Z
        </SelectItem>

        <SelectItem value="name-desc" className="focus:bg-[#EDF7F1] focus:text-[#056839] cursor-pointer">
          Name: Z-A
        </SelectItem>
      </SelectContent>
    </Select>
  );
}