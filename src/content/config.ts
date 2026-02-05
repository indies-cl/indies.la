import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const eventsCollection = defineCollection({
  loader: glob({
    base: "./src/content/events",
    pattern: "**/description.json",
    generateId: (file) => file.entry.split("/")[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1, "Event title is required"),
      date: z.coerce.date(),
      description: z.object({
        es: z.string().min(1, "Event description (es) is required"),
        en: z.string().min(1, "Event description (en) is required"),
      }),
      tag: z.object({
        es: z.string().min(1, "Event tag (es) is required"),
        en: z.string().min(1, "Event tag (en) is required"),
      }),
      image: image(),
      url: z.string().url().optional(),
    }),
});

export const collections = {
  events: eventsCollection,
};
