/** Resolved Sanity image (asset URL + alt) for the storefront. */
// export type ProductImage = {
//   url: string | null;
//   alt: string;
//   width: number | null;
//   height: number | null;
// };

// export type CategoryRef = {
//   _id: string;
//   title: string;
//   slug: string;
// };

// export type ProductListItem = {
//   _id: string;
//   title: string;
//   slug: string;
//   shortDescription: string | null;
//   priceLabel: string | null;
//   category: CategoryRef | null;
//   mainImage: ProductImage;
//   gallery: ProductImage[] | null;
// };

/** Rich text blocks from Sanity portable text. */
// type PortableTextBlock = {
//   _type: string;
//   _key: string;
//   [key: string]: unknown;
// };

// export type ProductDetail = ProductListItem & {
//   body: PortableTextBlock[] | null;
// };

// types/product.ts

export type Product ={
  id: number;
  name: string;
  slug:string;
  category: string;
  material: string;
  space: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  dimensions: string;
  features:string[];
  thumbnail:string;
  images:string[];
  inStock: boolean;
  featured: boolean;
}
