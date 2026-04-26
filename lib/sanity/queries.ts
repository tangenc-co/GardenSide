import { defineQuery } from "next-sanity";

const cloudinaryImage = `{ publicId, alt }`;

export const productsListQuery = defineQuery(`*[_type == "product" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  priceLabel,
  category->{
    _id,
    title,
    "slug": slug.current
  },
  mainImage${cloudinaryImage},
  "gallery": gallery[]${cloudinaryImage}
}`);

export const productBySlugQuery = defineQuery(`*[_type == "product" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  body,
  priceLabel,
  category->{
    _id,
    title,
    "slug": slug.current
  },
  mainImage${cloudinaryImage},
  "gallery": gallery[]${cloudinaryImage}
}`);

