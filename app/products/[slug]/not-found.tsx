import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="font-serif-ui text-2xl text-zinc-900 dark:text-zinc-50">Product not found</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        The piece you are looking for is not in the catalog, or the URL may be out of date.
      </p>
      <Link
        href="/products"
        className="mt-6 inline-flex h-10 items-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        Back to collection
      </Link>
    </div>
  );
}
