import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import i18n from "../../i18n/config";
import { type Language } from "../../utils/language";
import { FINANCING_DATA, GRANTS_FUNDS_DATA, type FundingOpportunity } from "../../data/plata";

type Props = {
  readonly lang: Language;
};

export const PlataPage = memo(function PlataPage({ lang }: Props) {
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const { t } = useTranslation();

  return (
    <div className="space-y-8 p-4 max-w-6xl mx-auto">
      <Hero />
      <FundingSection title={t("plata.financing")} data={FINANCING_DATA} />
      <FundingSection title={t("plata.grantsAndFunds")} data={GRANTS_FUNDS_DATA} />
    </div>
  );
});

const Hero = memo(function Hero() {
  const { t } = useTranslation();

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-sans text-tx">{t("plata.hero.heading")}</h1>
      <p className="text-xl text-tx-2 lowercase">{t("plata.hero.intro")}</p>
    </section>
  );
});

type FundingSectionProps = {
  readonly title: string;
  readonly data: readonly FundingOpportunity[];
};

const FundingSection = memo(function FundingSection({ title, data }: FundingSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-sans text-tx">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        {data.map((funding) => (
          <FundingCard key={funding.nombre} funding={funding} />
        ))}
      </div>
    </section>
  );
});

type FundingCardProps = {
  readonly funding: FundingOpportunity;
};

const FundingCard = memo(function FundingCard({ funding }: FundingCardProps) {
  const { t } = useTranslation();

  return (
    <article className="bg-bg-2 border border-ui rounded p-4 hover:border-ui-2 transition-colors">
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-sans text-tx">{funding.nombre}</h3>
            <p className="text-xl text-og">{funding.proveedor}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-mono text-tx">{funding.monto}</p>
          </div>
        </div>

        <p className="text-xl text-tx-2 lowercase line-clamp-2 font-serif">
          {funding.descripcion}
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="bg-bg border border-ui text-tx-2 px-2 py-1">
              {t(`plata.badges.${funding.tipo}`)}
            </span>
            <span className="bg-bg border border-ui text-tx-2 px-2 py-1">
              {t(`plata.badges.${funding.lugar}`)}
            </span>
          </div>

          <a
            href={funding.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-og underline text-xl"
            aria-label={t("plata.visitSite", { name: funding.nombre })}
          >
            {t("plata.visitSite")}
          </a>
        </div>
      </div>
    </article>
  );
});
