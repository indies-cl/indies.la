type Language = "es" | "en";

const getLocalizedPath = (path: string, lang: Language): string =>
  lang === "en" ? `/en${path}` : path;

const getOppositeLanguage = (lang: Language): Language =>
  lang === "es" ? "en" : "es";

const getOppositeLanguagePath = (currentPath: string, currentLang: Language): string => {
  const pathWithoutLang = currentPath.replace(/^\/en/, "") || "/";
  return currentLang === "es" ? `/en${currentPath}` : pathWithoutLang;
};

export { getLocalizedPath, getOppositeLanguage, getOppositeLanguagePath };
export type { Language };
