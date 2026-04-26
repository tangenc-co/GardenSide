import { defineField, defineType } from "sanity";

export const cloudinaryImage = defineType({
  name: "cloudinaryImage",
  title: "Cloudinary image",
  type: "object",
  fields: [
    defineField({
      name: "publicId",
      type: "string",
      title: "Public ID",
      description:
        "From the Cloudinary Media Library (e.g. furniture/sofa-hero). Folders are included in the path.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Short description for accessibility and SEO.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "alt", publicId: "publicId" },
    prepare({ title, publicId }) {
      return { title, subtitle: publicId };
    },
  },
});
