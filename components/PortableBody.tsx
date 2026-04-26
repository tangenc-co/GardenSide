import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { ProductDetail } from "@/types/catalog";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-3 text-zinc-700 last:mb-0 dark:text-zinc-300">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{children}</strong>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-3 list-inside list-disc text-zinc-700 dark:text-zinc-300">{children}</ul>,
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
