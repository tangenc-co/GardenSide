"use client";

import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProductBreadcrumbProps {
  category: string;
  productName: string;
}

export function ProductBreadcrumb({
  category,
  productName,
}: ProductBreadcrumbProps) {
  const router = useRouter();

  return (
    <div className="mb-8">
      <nav className="flex items-center text-sm">
        <Link href="/" className="text-[#667085]">
          Home
        </Link>

        <ChevronRight className="mx-2 h-4 w-4 text-[#98A2B3]" />

        <Link href="/products" className="text-[#667085]">
          Products
        </Link>

        <ChevronRight className="mx-2 h-4 w-4 text-[#98A2B3]" />

        <span className="text-[#667085]">{category}</span>

        <ChevronRight className="mx-2 h-4 w-4 text-[#98A2B3]" />

        <span className="font-medium text-[#D4A017]">
          {productName}
        </span>
      </nav>

      <button
        onClick={() => router.back()}
        className="mt-4 flex items-center gap-2 text-[#056839]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </button>
    </div>
  );
}