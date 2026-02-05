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
      <div className="grid md:grid-cols-2 gap-6">
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
    <article className="bg-bg-2 border border-ui rounded-lg p-6 hover:border-ui-2 hover:shadow-lg transition-all duration-200">
      <div className="space-y-4">
        <div>
          <p className="text-tx-2 text-sm uppercase tracking-wider mb-1">{funding.proveedor}</p>
          <h3 className="text-2xl font-sans text-tx">{funding.nombre}</h3>
        </div>

        <div className="bg-bg border border-ui rounded p-4">
          <p className="text-xl font-mono text-og">{funding.monto}</p>
        </div>

        <p className="text-xl text-tx-2 lowercase line-clamp-2">{funding.descripcion}</p>

        <div className="flex flex-wrap gap-2">
          <span className="bg-bg border border-ui text-tx-2 px-3 py-1 text-sm rounded-full">
            {t(`plata.badges.${funding.tipo}`)}
          </span>
          <span className="bg-bg border border-ui text-tx-2 px-3 py-1 text-sm rounded-full">
            {t(`plata.badges.${funding.lugar}`)}
          </span>
        </div>

        <a
          href={funding.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ui hover:bg-ui-2 text-tx px-4 py-2 rounded transition-colors"
          aria-label={t("plata.visitSite", { name: funding.nombre })}
        >
          {t("plata.visitSite")}
        </a>
      </div>
    </article>
  );
});
