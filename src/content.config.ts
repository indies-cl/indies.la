import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const eventos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/eventos" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    pamphlet: z.string().optional(),
    photos: z.array(z.string()).default([]),
    sponsors: z.array(z.object({
      logo: z.string(),
      url: z.string(),
      name: z.string(),
    })).default([]),
  }),
});

export const collections = { eventos };
