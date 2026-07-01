import { getSanityProjectId } from "@/sanity/env";
import { HeroSection } from "@/components/HeroSection";
import { Purpose } from "@/components/Purpose";
import { getCategoryList } from "@/lib/sanity/fetch";
import { ShopByCategory } from "@/components/ShopByCategory";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Home | Garden Side",
  description: "Discover premium furniture and interior pieces. 25+ years of expertise, sustainably sourced materials, and exceptional craftsmanship.",
  openGraph: {
    type: 'website',
    title: 'Home | Garden Side',
    description: 'Discover premium furniture and interior pieces. 25+ years of expertise, sustainably sourced materials, and exceptional craftsmanship.',
  },
  alternates: {
    canonical: '/',
  },
};

const statsData = [
  { id: 1, title: "25+", caption: "Years of Expertise" },
  { id: 2, title: "8000+", caption: "Happy Customers" },
  { id: 3, title: "60+", caption: "Products in Range" },
  { id: 4, title: "100%", caption: "Sustainably Sourced" },
];

export default async function HomePage() {
  const hasSanity = Boolean(getSanityProjectId());
  
  const categories = hasSanity ? (await getCategoryList()) ?? [] : [];

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Garden Side',
    description: 'Furniture and interiors — product catalog with 25+ years of expertise',
    url: 'https://gardenside.com',
    logo: 'https://gardenside.com/logo.png',
    sameAs: [
      // Add social media URLs when available
      // 'https://facebook.com/gardenside',
      // 'https://instagram.com/gardenside',
      // 'https://twitter.com/gardenside',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Garden Side',
    url: 'https://gardenside.com',
    description: 'Furniture and interiors — product catalog',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://gardenside.com/products?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <section>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      
      <HeroSection />
      
      {/* Metadata Section */}
      <div className="mx-auto w-full bg-[#213526]">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((item) => (
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