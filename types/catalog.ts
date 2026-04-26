export type CloudinaryImage = {
  publicId: string;
  alt: string;
};

export type CategoryRef = {
  _id: string;
  title: string;
  slug: string;
};

export type ProductListItem = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string | null;
  priceLabel: string | null;
  category: CategoryRef | null;
  mainImage: CloudinaryImage;
  gallery: CloudinaryImage[] | null;
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
