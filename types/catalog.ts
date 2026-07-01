/** Resolved Sanity image (asset URL + alt) for the storefront. */
export type ProductImage = {
  url: string | null;
  alt: string;
  width: number | null;
  height: number | null;
};

export type CategoryRef = {
  _id: string;
  title: string;
  slug: string;
  image:ProductImage,
  subtitle:string
};


export type ProductListItem = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string | null;
  priceLabel: string | null;
  category: CategoryRef | null;
  mainImage: ProductImage | null;
  gallery: ProductImage[] | null;
  material: string | null;
  space: string | null;
};

/** Rich text blocks from Sanity portable text. */
type PortableTextBlock = {
  _type: string;
  _key: string;
  [key: string]: unknown;
};

export type ProductDetail = ProductListItem & {
  body: PortableTextBlock[] | null;
};
