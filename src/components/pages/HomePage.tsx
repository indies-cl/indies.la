import { useTranslation } from "react-i18next";
import { memo } from "react";
import i18n from "../../i18n/config";
import { getLocalizedPath, type Language } from "../../utils/language";

type Props = {
  readonly lang: Language;
};

export const HomePage = memo(function HomePage({ lang }: Props) {
  i18n.changeLanguage(lang);
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="indies.la" className="h-32 w-auto" />
        <div>
          <p className="lowercase">
            <span className="text-2xl font-sans normal-case block">{t("heading")}</span>
            {t("intro")}
          </p>
        </div>
      </div>
      <p className="lowercase">
        {t("discordBefore")}{" "}
        <a
          href="https://discord.gg/PWTYwhQSKV"
          target="_blank"
          rel="noopener noreferrer"
          className="text-og underline"
        >
          {t("discordLink")}
        </a>
        <br />
        {t("discordAfter")}
      </p>
      <p className="lowercase">
        {t("conductBefore")}{" "}
        <a href={getLocalizedPath("/conducta", lang)} className="text-og underline">
          {t("conductLink")}
        </a>
        {t("conductAfter")}
      </p>
      <p className="lowercase">{t("welcome")}</p>
      <p className="lowercase">
        {t("nonprofitBefore")}
        <span className="text-2xl font-sans normal-case">{t("heading")}</span>
        {t("nonprofitAfter")}
      </p>
      <p className="lowercase">{t("friendship")}</p>
    </div>
  );
});
