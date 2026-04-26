import { type SchemaTypeDefinition } from "sanity";
import { category } from "./category";
import { cloudinaryImage } from "./cloudinaryImage";
import { product } from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cloudinaryImage, category, product],
};
