import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "material",
      type: "string",
      title: "Material",
      description: "e.g., Teak Wood, Aluminum, Terracotta",
    }),
    defineField({
      name: "space",
      type: "string",
      title: "Room/Space",
      description: "e.g., Garden, Terrace, Poolside, Balcony",
    }),
    defineField({
      name: "shortDescription",
      type: "text",
      title: "Short description",
      rows: 3,
      description: "Shown in listings and the top of the product page.",
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Details",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "priceLabel",
      type: "string",
      title: "Price (display only)",
      description:
        "E.g. “From $1,200” or “$899”. The storefront is view-only; no checkout yet.",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Main image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "For accessibility and SEO.",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage" },
    prepare({ title, media }) {
      return { title, media };
    },
  },
});
