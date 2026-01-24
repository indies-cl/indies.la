type Language = "es" | "en";

const getLanguageFromPath = (pathname: string): Language => {
  if (pathname.startsWith("/en")) {
    return "en";
  }
  return "es";
};

const getLocalizedPath = (path: string, lang: Language): string => {
  if (lang === "en") {
    return `/en${path}`;
  }
  return path;
};

const getOppositeLanguage = (lang: Language): Language => {
  return lang === "es" ? "en" : "es";
};

const getOppositeLanguagePath = (currentPath: string, currentLang: Language): string => {
  const oppositeLang = getOppositeLanguage(currentLang);
  
  if (currentLang === "es") {
    return `/en${currentPath}`;
  } else {
    return currentPath.replace("/en", "");
  }
};

export { getLanguageFromPath, getLocalizedPath, getOppositeLanguage, getOppositeLanguagePath };
export type { Language };
