export function SetupCallout() {
  return (
    <div className="mx-auto max-w-2xl rounded-lg border border-amber-200 bg-amber-50/90 p-6 text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100">
      <h2 className="font-serif-ui text-lg text-amber-950 dark:text-amber-50">Configuration needed</h2>
      <p className="mt-2 text-sm leading-relaxed text-amber-900/90 dark:text-amber-200/90">
        Copy <code className="rounded bg-amber-100/80 px-1.5 py-0.5 text-xs dark:bg-amber-900/50">.env.local.example</code>{" "}
        to <code className="rounded bg-amber-100/80 px-1.5 py-0.5 text-xs dark:bg-amber-900/50">.env.local</code> and set:
      </p>
      <ul className="mt-3 list-inside list-disc text-sm text-amber-900/90 dark:text-amber-200/90">
        <li>
          <code className="text-xs">NEXT_PUBLIC_SANITY_PROJECT_ID</code> and dataset (from{" "}
          <a
            className="font-medium underline hover:no-underline"
            href="https://www.sanity.io/manage"
            rel="noreferrer"
            target="_blank"
          >
            sanity.io/manage
          </a>{" "}
          or <code className="text-xs">npx sanity@latest init</code>).
        </li>
      </ul>
    </div>
  );
}
