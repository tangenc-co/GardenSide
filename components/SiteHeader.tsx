import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-serif-ui text-xl text-zinc-900 dark:text-zinc-50">
          Lumen Home
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link className="hover:text-zinc-900 dark:hover:text-zinc-200" href="/products">
            Collection
          </Link>
          <Link
            className="text-amber-800 hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100"
            href="/studio"
          >
            Studio
          </Link>
        </nav>
      </div>
    </header>
  );
}
