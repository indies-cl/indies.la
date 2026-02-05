import { memo } from "react";
import { useTranslation } from "react-i18next";
import { format, type Locale } from "date-fns";
import { enUS, es } from "date-fns/locale";
import type { Language } from "../../utils/language";
import { ImageDithering } from "@paper-design/shaders-react";
import type { EventEntry } from "../../lib/events";

type EventCardProps = {
  readonly event: EventEntry;
  readonly lang: Language;
};

const localeMap: Record<Language, Locale> = {
  en: enUS,
  es,
};

export const EventCard = memo(function EventCard({ event, lang }: EventCardProps) {
  const { t } = useTranslation();
  const parsedDate = event.data.date;
  const formattedDate = format(parsedDate, lang === "es" ? "d MMM yyyy" : "MMM d, yyyy", {
    locale: localeMap[lang] ?? enUS
  });

  const description =
    lang === "es" ? event.data.description.es : event.data.description.en;

  const hasLink = Boolean(event.data.url);

  return (
    <article className="flex h-min flex-col overflow-hidden rounded border border-ui bg-bg-2">
      <div className="aspect-5/3 max-h-51 overflow-hidden relative bg-ui flex items-center justify-center">
        <ImageDithering
          width={340}
          height={204}
          image={event.data.image.src}
          colorBack="#100f0f"
          colorFront="#e86417"
          colorHighlight="#cfcec4"
          originalColors={false}
          inverted={false}
          type="8x8"
          size={1}
          colorSteps={2}
          fit="cover"
          className="block h-full w-full"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 pt-3">
        <div className="flex flex-col items-center gap-2">
          <span className="inline-flex w-fit items-center rounded-full border border-og px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-og mx-auto">
            {lang === "es" ? event.data.tag.es : event.data.tag.en}
          </span>
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-tx-2">
            {formattedDate}
          </p>
        </div>
        <h3 className="text-2xl/tight font-sans font-bold lowercase text-tx">
          {event.data.title}
        </h3>
        <p className="text-base text-tx-2 lowercase flex-1">{description}</p>
        {hasLink ? (
          <div className="flex flex-col items-center">

            <a
              href={event.data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.3em] text-og hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-og"
            >
              {t("events.readMore")}
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
});
