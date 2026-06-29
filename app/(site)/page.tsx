import { getSanityProjectId } from "@/sanity/env";
import { HeroSection } from "@/components/HeroSection";
import { Purpose } from "@/components/Purpose";
import { getCategoryList } from "@/lib/sanity/fetch";
import { ShopByCategory } from "@/components/ShopByCategory";

export const revalidate = 60;

const metadata = [
  { id: 1, title: "25+", caption: "Years of Expertise" },
  { id: 2, title: "8000+", caption: "Happy Customers" },
  { id: 3, title: "60+", caption: "Products in Range" },
  { id: 4, title: "100%", caption: "Sustainably Sourced" },
];

export default async function HomePage() {
  const hasSanity = Boolean(getSanityProjectId());
  
  const categories = hasSanity ? (await getCategoryList()) ?? [] : [];

  return (
    <section>
      <HeroSection />
      
      {/* Metadata Section */}
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

      {/* Conditionally render the category section only if data exists */}
      {categories.length > 0 && (
        <ShopByCategory categories={categories} />
      )}
    </section>
  );
}