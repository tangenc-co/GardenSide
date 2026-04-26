import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { getSanityDataset, getSanityProjectId, apiVersion } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const projectId = getSanityProjectId();
if (!projectId) {
  throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local (e.g. from sanity.io/manage).");
}

export default defineConfig({
  name: "furniture-catalog",
  title: "Garden Side | Furniture",
  basePath: "/studio",
  projectId,
  dataset: getSanityDataset(),
  apiVersion,
  schema,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
