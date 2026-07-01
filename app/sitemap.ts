import { MetadataRoute } from 'next';
import { getAllProductSlugs, getCategoryList } from '@/lib/sanity/fetch';
import { getSanityProjectId } from '@/sanity/env';

const SITE_URL = 'https://gardenside.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hasSanity = Boolean(getSanityProjectId());
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/teak-care`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Dynamic product pages
  let productPages: MetadataRoute.Sitemap = [];
  if (hasSanity) {
    const slugs = await getAllProductSlugs();
    productPages = slugs.map((slug) => ({
      url: `${SITE_URL}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  }

  // Category pages (if categories have their own pages)
  let categoryPages: MetadataRoute.Sitemap = [];
  if (hasSanity) {
    const categories = await getCategoryList();
    if (categories && categories.length > 0) {
      categoryPages = categories.map((category) => ({
        url: `${SITE_URL}/products?category=${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
    }
  }

  return [...staticPages, ...productPages, ...categoryPages];
}
