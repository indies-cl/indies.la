import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale/es";
import { enUS } from "date-fns/locale/en-US";
import type { Language } from "./language";

const LOCALES: Record<Language, Locale> = {
  es,
  en: enUS,
} as const;

const formatEventDate = (dateString: string, lang: Language): string =>
  format(parseISO(dateString), "d 'de' MMMM yyyy", { locale: LOCALES[lang] });

export { formatEventDate };
