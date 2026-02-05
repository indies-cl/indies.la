import { useTranslation } from "react-i18next";
import { memo, useEffect, useMemo } from "react";
import i18n from "../../i18n/config";
import { type Language } from "../../utils/language";
import { FINANCING_DATA, GRANTS_FUNDS_DATA, type FundingOpportunity } from "../../data/plata";
import { NuqsAdapter } from "nuqs/adapters/react";
import { useQueryState, parseAsInteger } from "nuqs";

const PAGE_SIZE = 8; 

type Props = {
  readonly lang: Language;
};

export const PlataPage = memo(function PlataPage({ lang }: Props) {
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const { t } = useTranslation();


  return (
    <NuqsAdapter>
      <div className="space-y-8 p-4 max-w-6xl mx-auto w-full">
        <Hero />
        <FundingSection
          title={t("plata.financing")}
          data={FINANCING_DATA}
          queryKey="financing"
        />
        <FundingSection
          title={t("plata.grantsAndFunds")}
          data={GRANTS_FUNDS_DATA}
          queryKey="grants"
        />
      </div>
    </NuqsAdapter>
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
  readonly queryKey: string;
};

const FundingSection = memo(function FundingSection({
  title,
  data,
  queryKey,
}: FundingSectionProps) {
  const { t } = useTranslation();
  const [page, setPage] = useQueryState(
    queryKey,
    parseAsInteger.withDefault(1),
  );

  const totalPages = Math.max(1, Math.ceil(data.length / PAGE_SIZE));
  const clampedPage = Math.max(1, Math.min(page, totalPages));
  const start = (clampedPage - 1) * PAGE_SIZE;
  const slice = useMemo(
    () => data.slice(start, start + PAGE_SIZE),
    [data, start],
  );

  return (
    <section className="space-y-4 w-full">
      <h2 className="text-2xl font-sans text-tx">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 funding-grid">
        {slice.map((funding) => (
          <FundingCard key={funding.nombre} funding={funding} />
        ))}
      </div>
      {totalPages > 1 && (
        <nav
          className="flex items-center justify-between gap-4 pt-2"
          aria-label={title}
        >
          <button
            type="button"
            disabled={clampedPage <= 1}
            onClick={() => setPage(clampedPage - 1)}
            className="text-xl text-og disabled:text-tx-3 disabled:cursor-not-allowed underline disabled:no-underline"
          >
            {t("plata.pagination.prev")}
          </button>
          <span className="text-xl text-tx-2 font-mono">
            {clampedPage} / {totalPages}
          </span>
          <button
            type="button"
            disabled={clampedPage >= totalPages}
            onClick={() => setPage(clampedPage + 1)}
            className="text-xl text-og disabled:text-tx-3 disabled:cursor-not-allowed underline disabled:no-underline"
          >
            {t("plata.pagination.next")}
          </button>
        </nav>
      )}
    </section>
  );
});

type FundingCardProps = {
  readonly funding: FundingOpportunity;
};

const FundingCard = memo(function FundingCard({ funding }: FundingCardProps) {
  const { t } = useTranslation();

  return (
    <article className="bg-bg-2 border border-ui rounded p-4 hover:border-ui-2 transition-colors w-full">
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-sans text-tx">{funding.nombre}</h3>
            <p className="text-xl text-og">{funding.proveedor}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-mono font-bold text-[#E86518]">{funding.monto}</p>
          </div>
        </div>

        <p className="text-xl text-tx-2 lowercase line-clamp-2 font-serif">
          {funding.descripcion}
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="bg-bg border border-ui text-tx-2 px-2 py-1 text-base">
              {t(`plata.badges.${funding.tipo}`)}
            </span>
            <span className="bg-bg border border-ui text-tx-2 px-2 py-1 text-base">
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
