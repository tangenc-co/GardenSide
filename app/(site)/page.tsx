// import { ProductCard } from "@/components/ProductCard";
// import { SetupCallout } from "@/components/SetupCallout";
// import { getProductsList } from "@/lib/sanity/fetch";
// import { getSanityProjectId } from "@/sanity/env";
import { HeroSection } from "@/components/HeroSection";
import { Purpose } from "@/components/Purpose";

export const revalidate = 60;
const metadata = [
  {
    id: 1,
    title: "25+",
    caption: "Years of Expertise",
  },
  {
    id: 2,
    title: "8000+",
    caption: "Happy Customers",
  },
  {
    id: 3,
    title: "60+",
    caption: "Products in Range",
  },
  {
    id: 4,
    title: "100% ",
    caption: "Sustainably Sourced",
  },
];
export default async function HomePage() {
  // const hasSanity = Boolean(getSanityProjectId());
  // const products = hasSanity ? await getProductsList() : null;
  return (
    <section>
      <HeroSection />
      <div className="mx-auto w-full bg-[#213526]">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metadata.map((item) => (
              <div key={item.id} className="text-center">
                <p className="text-4xl font-medium text-white">{item.title}</p>
                <p className="mt-2 text-lg text-[#FFFFFFA6]">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Purpose />
      {/* <AboutTeak /> */}
      {/* <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
        {!hasSanity && (
          <div className="mb-10">
            <SetupCallout />
          </div>
        )}

        {hasSanity && (!products || products.length === 0) && (
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            No products yet. Add categories and products in{" "}
            <Link className="font-medium text-amber-800 underline dark:text-amber-200" href="/studio">
              Sanity Studio
            </Link>
            .
          </p>
        )}

        {products && products.length > 0 && (
          <div>
            <h2 className="mb-6 font-serif-ui text-2xl text-zinc-900 dark:text-zinc-50">Featured</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 6).map((p) => (
                <li key={p._id}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section> */}
    </section>
  );
}
