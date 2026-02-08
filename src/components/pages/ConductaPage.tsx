import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import i18n from "../../i18n/config";
import { type Language } from "../../utils/language";

const COMPORTAMIENTO_ITEMS = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
] as const;

type Props = {
  readonly lang: Language;
};

export const ConductaPage = memo(function ConductaPage({ lang }: Props) {
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  const { t } = useTranslation();

  return (
    <div className="space-y-4 max-w-2xl mx-auto p-4">
      <section className="space-y-4">
        <h1 className="text-2xl font-sans text-og normal-case">
          {t("conducta.aviso.heading")}
        </h1>
        <p className="lowercase">{t("conducta.aviso.paragraph1")}</p>
        <p className="lowercase">{t("conducta.aviso.paragraph2")}</p>
        <p className="lowercase">{t("conducta.aviso.paragraph3")}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-sans text-og normal-case">
          {t("conducta.versionCorta.heading")}
        </h2>
        <p className="lowercase">{t("conducta.versionCorta.paragraph1")}</p>
        <p className="lowercase">{t("conducta.versionCorta.paragraph2")}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-sans text-og normal-case">
          {t("conducta.versionNoTanCorta.heading")}
        </h2>
        <p className="lowercase">
          {t("conducta.versionNoTanCorta.paragraph1")}
        </p>
        <p className="lowercase">
          {t("conducta.versionNoTanCorta.paragraph2")}
        </p>
        <p className="lowercase">
          {t("conducta.versionNoTanCorta.paragraph3")}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-sans text-og normal-case">
          {t("conducta.versionLarga.heading")}
        </h2>

        <div className="space-y-4">
          <h3 className="text-2xl font-sans text-og normal-case">
            {t("conducta.versionLarga.acoso.heading")}
          </h3>
          <p className="lowercase">
            {t("conducta.versionLarga.acoso.paragraph")}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-sans text-og normal-case">
            {t("conducta.versionLarga.comportamientos.heading")}
          </h3>
          <ul className="lowercase space-y-2 list-disc list-inside">
            {COMPORTAMIENTO_ITEMS.map((item) => (
              <li key={item}>
                {t(`conducta.versionLarga.comportamientos.items.${item}`)}
              </li>
            ))}
          </ul>
          <p className="lowercase">
            {t("conducta.versionLarga.comportamientos.paragraph")}
          </p>
        </div>

        <div className="space-y-4">
          <p className="lowercase">
            {t("conducta.versionLarga.reporte.paragraph1")}
          </p>
          <p className="lowercase">
            {t("conducta.versionLarga.reporte.paragraph2")}
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-sans text-og normal-case">
          {t("conducta.final.heading")}
        </h2>
      </section>
    </div>
  );
});
