import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { ProductDetail } from "@/types/catalog";

const components: PortableTextComponents = {
  // Use 'block' directly at the root level, NOT inside 'types'
  block: {
    normal: ({ children }) => (
      <p className="mb-3 text-zinc-700 last:mb-0 dark:text-zinc-300">{children}</p>
    ),
    // If you have heading styles, you can map them here safely
    h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold mb-3">{children}</h2>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-3 list-inside list-disc pl-4 text-zinc-700 dark:text-zinc-300">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

export function PortableBody({ value }: { value: ProductDetail["body"] }) {
  if (!value || value.length === 0) {
    return null;
  }
  return (
    <div className="max-w-none text-zinc-800 dark:text-zinc-200">
      <PortableText value={value} components={components} />
    </div>
  );
}
