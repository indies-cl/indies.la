import { getCollection, type CollectionEntry } from "astro:content";

type EventEntry = CollectionEntry<"events">;

const isValidEventDate = (event: EventEntry) =>
  !Number.isNaN(event.data.date.getTime());

const getLatestEvents = async (limit = 6): Promise<EventEntry[]> => {
  const events = await getCollection("events");

  return events
    .filter(isValidEventDate)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, limit);
};

export type { EventEntry };
export { getLatestEvents };
