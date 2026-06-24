import { config } from "dotenv";
import { createClient } from "@sanity/client";

// Load environment variables from .env.local
config({ path: ".env.local" });

const writeToken = process.env.SANITY_API_WRITE_TOKEN;

if (!writeToken) {
  console.error("Error: SANITY_API_WRITE_TOKEN environment variable is not set.");
  console.error("Please add it to your .env.local file.");
  process.exit(1);
}

console.log("Write token found, proceeding...");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "rza9ihko",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: writeToken,
  useCdn: false,
});

const categories = [
  { title: "Dining Sets", slug: "dining-sets" },
  { title: "Garden Benches", slug: "garden-benches" },
  { title: "Outdoor Sofas", slug: "outdoor-sofas" },
  { title: "Planters & Decor", slug: "planters-decor" },
  { title: "Lounge Chairs", slug: "lounge-chairs" },
];

const materials = ["Teak Wood", "Aluminum", "Terracotta", "Metal", "Concrete"];
const spaces = ["Garden", "Terrace", "Poolside", "Balcony"];

const sampleProducts = [
  {
    title: "Classic Teak Dining Set",
    slug: "classic-teak-dining-set",
    category: "Dining Sets",
    material: "Teak Wood",
    space: "Garden",
    shortDescription: "Premium teak dining set designed for outdoor entertaining.",
    priceLabel: "£2,499",
  },
  {
    title: "Modern Aluminum Bench",
    slug: "modern-aluminum-bench",
    category: "Garden Benches",
    material: "Aluminum",
    space: "Terrace",
    shortDescription: "Sleek aluminum bench with weather-resistant finish.",
    priceLabel: "£899",
  },
  {
    title: "Terracotta Planter Set",
    slug: "terracotta-planter-set",
    category: "Planters & Decor",
    material: "Terracotta",
    space: "Balcony",
    shortDescription: "Handcrafted terracotta planters for your outdoor space.",
    priceLabel: "£249",
  },
  {
    title: "Outdoor Lounge Chair",
    slug: "outdoor-lounge-chair",
    category: "Lounge Chairs",
    material: "Metal",
    space: "Poolside",
    shortDescription: "Comfortable lounge chair with durable metal frame.",
    priceLabel: "£599",
  },
  {
    title: "Concrete Side Table",
    slug: "concrete-side-table",
    category: "Planters & Decor",
    material: "Concrete",
    space: "Garden",
    shortDescription: "Minimalist concrete side table for modern outdoor spaces.",
    priceLabel: "£199",
  },
  {
    title: "Teak Garden Sofa",
    slug: "teak-garden-sofa",
    category: "Outdoor Sofas",
    material: "Teak Wood",
    space: "Terrace",
    shortDescription: "Elegant teak sofa with plush cushions.",
    priceLabel: "£1,899",
  },
];

async function createCategories() {
  console.log("Creating categories...");
  for (const category of categories) {
    try {
      const existing = await client.fetch(
        `*[_type == "category" && title == $title][0]`,
        { title: category.title }
      );
      
      if (!existing) {
        await client.create({
          _type: "category",
          title: category.title,
          slug: {
            _type: "slug",
            current: category.slug,
          },
        });
        console.log(`Created category: ${category.title}`);
      } else {
        console.log(`Category already exists: ${category.title}`);
      }
    } catch (error) {
      console.error(`Error creating category ${category.title}:`, error);
    }
  }
}

async function createSampleProducts() {
  console.log("Creating sample products...");
  
  for (const product of sampleProducts) {
    try {
      const existing = await client.fetch(
        `*[_type == "product" && slug.current == $slug][0]`,
        { slug: product.slug }
      );
      
      if (!existing) {
        const category = await client.fetch(
          `*[_type == "category" && title == $title][0]`,
          { title: product.category }
        );
        
        if (category) {
          await client.create({
            _type: "product",
            title: product.title,
            slug: {
              _type: "slug",
              current: product.slug,
            },
            category: {
              _type: "reference",
              _ref: category._id,
            },
            material: product.material,
            space: product.space,
            shortDescription: product.shortDescription,
            priceLabel: product.priceLabel,
            body: [
              {
                _type: "block",
                children: [{ _type: "span", text: product.shortDescription }],
              },
            ],
          });
          console.log(`Created product: ${product.title}`);
        } else {
          console.error(`Category not found for product: ${product.title}`);
        }
      } else {
        console.log(`Product already exists: ${product.title}`);
      }
    } catch (error) {
      console.error(`Error creating product ${product.title}:`, error);
    }
  }
}

async function main() {
  console.log("Starting Sanity seed...");
  console.log("This will create categories and sample products with material and space data.");
  
  await createCategories();
  await createSampleProducts();
  
  console.log("Sanity seed complete!");
  console.log("\nYou can now:");
  console.log("1. Add images to products in Sanity Studio");
  console.log("2. Add more products with different materials and spaces");
  console.log("3. The filters will automatically populate from your data");
}

main().catch(console.error);
