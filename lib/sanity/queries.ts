import { defineQuery } from "next-sanity";

const imageFields = `{
  "url": asset->url,
  "alt": coalesce(alt, ""),
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height
}`;

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
  material,
  space,
  "mainImage": mainImage${imageFields},
  "gallery": gallery[]${imageFields}
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
  material,
  space,
  "mainImage": mainImage${imageFields},
  "gallery": gallery[]${imageFields}
}`);

export const filterOptionsQuery = defineQuery(`{
  "categories": *[_type == "product" && defined(category->title)].category->title,
  "materials": *[_type == "product" && defined(material)].material,
  "spaces": *[_type == "product" && defined(space)].space
}`);

export const relatedProductsQuery = `
  *[
    _type == "product" &&
    category._ref == $categoryId &&
    slug.current != $slug
  ][0...4]{
    _id,
    title,
    "slug": slug.current,
    priceLabel,
    shortDescription,
    material,
    space,
    mainImage,
    category->{
      _id,
      title,
      "slug": slug.current
    }
  }
`;

export const categoryListQuery = defineQuery(`
  *[
  _type == "category" &&
   displaySection == "shopByCategory"
] | order(title asc){
    _id,
    title,
    "slug": slug.current,
    "image": image${imageFields},
    subtitle
  }
`);
export const popularProductsQuery = defineQuery(`
*[
  _type == "product" &&
   displaySection == "popularPieces"
]
| order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  priceLabel,
  material,
  space,

  category->{
    _id,
    title,
    "slug": slug.current
  },

  "mainImage": mainImage${imageFields}
}
`);