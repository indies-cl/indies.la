import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import i18n from "../../i18n/config";
import { getLocalizedPath, type Language } from "../../utils/language";
import { Marquee } from "../Marquee";

const PATRON_LOGOS = [
  { src: "/assets/patreons/casaw-logo.png", alt: "casaw" },
  { src: "/assets/patreons/softserve-logo.png", alt: "softserve" },
  { src: "/assets/patreons/skyward-ai-logo.png", alt: "skyward ai" },
  { src: "/assets/patreons/startup-biobio-logo.png", alt: "startup biobio" },
  { src: "/assets/patreons/carlos-logo.png", alt: "carlos henriquez" },
  { src: "/assets/patreons/platanus-logo.png", alt: "platanus" },
  { src: "/assets/patreons/puenteos-logo.png", alt: "platanus" },
  { src: "/assets/patreons/ventaplay-logo.png", alt: "ventaplay" },
  { src: "/assets/patreons/woku-logo.png", alt: "woku" },
  { src: "/assets/patreons/communityos-logo.png", alt: "community os" },
] as const;

const DISCORD_INVITE = "https://discord.gg/PWTYwhQSKV";

const PatronMarquee = memo(function PatronMarquee() {
  const { t } = useTranslation();

  return (
    <div className="absolute bottom-0 left-0 w-full py-4">
      <p className="text-center text-[#fff] font-bold lg:font-normal  lg:text-tx-2 lowercase mb-4">
        {t("patronsThanks")}
      </p>
      <Marquee pauseOnHover className="[--duration:60s] [--gap:1rem]">
        {PATRON_LOGOS.map((logo) => (
          <div
            key={logo.alt}
            className="flex h-30 w-64 shrink-0 items-center justify-center rounded bg-bg-2 p-4"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
});

type Props = {
  readonly lang: Language;
};

export const HomePage = memo(function HomePage({ lang }: Props) {
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <div className="space-y-4 p-4 max-w-2xl mx-auto">
        <p className="lowercase">
          {t("discordBefore")}{" "}
          <a
            href={DISCORD_INVITE}
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
          <a
            href={getLocalizedPath("/conducta", lang)}
            className="text-og underline"
          >
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
      <DiscordServer />
    </>
  );
});

const DISCORD_CHANNELS = [
  { name: "#presentaciones", key: "presentaciones" },
  { name: "#ofertas-laborales", key: "ofertasLaborales" },
  { name: "#lanzamientos", key: "lanzamientos" },
  { name: "#anuncios", key: "anuncios" },
] as const;

export const DiscordServer = memo(function DiscordServer() {
  const { t } = useTranslation();

  return (
    <div className="">
      <p className="normal-case mx-auto max-w-2xl px-4 pb-4">
        <span className="text-og">{t("discord.intro")}</span>
        <br />
        {t("discord.channelsIntro")}
      </p>
      <div className="grid md:grid-cols-4 gap-4">
        {DISCORD_CHANNELS.map((channel) => (
          <article className="bg-bg-2 p-4 rounded-lg" key={channel.name}>
            <p className="font-mono">{channel.name}</p>
            <p className="text-tx-2 mt-2">
              {t(`discord.channels.${channel.key}`)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
});

export const Hero = memo(function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-[91dvh] overflow-hidden">
      <div className="absolute inset-0 z-[-2] bg-[url('/assets/bitmap-base-svgo.svg')] bg-[length:100%_auto] bg-top bg-repeat-x lg:hidden" />
      <div className="absolute inset-0 z-[-2] hidden bg-[url('/assets/bitmap-xl-svgo.svg')] bg-[length:100%_auto] bg-top bg-repeat-x lg:block" />
      <div className="absolute inset-x-0 top-0 z-[-1] md:-top-[30dvw] xl:-top-[40dvw]">
        <img
          src="/assets/background-elements.svg"
          alt=""
          className="w-screen scale-135 origin-top -translate-y-80"
        />
      </div>
      <section className="mx-auto flex h-full max-w-[1280px] flex-col justify-between px-6 py-16">
        <div className="flex flex-col">
          <div className="hidden items-center justify-center self-stretch lg:inline-flex">
            <div className="text-center flex flex-col items-center">
              <img
                src="/assets/bienvenido-pixelart.webp"
                alt={t("hero.welcomeAlt")}
                className="scale-400 pixel-art mb-16"
              />
              <p className="font-sans font-bold mb-6">{t("hero.tagline")}</p>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2  bg-bg text-[#fff] px-4 py-4 mt-4 hover:opacity-80 transition-opacity pixel-corners"
              >
                <img
                  src="/assets/discord-sharp.svg"
                  alt="discord logo"
                  className="h-8 w-8 brightness-0 invert"
                />
                <span className="text-xl font-black font-sans">
                  {t("hero.joinButton")}
                </span>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:hidden gap-8">
            <img
              src="/assets/bienvenido-pixelart.webp"
              alt={t("hero.welcomeAlt")}
              className="scale-300 pixel-art"
            />
            <p className="font-sans text-center">{t("hero.tagline")}</p>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-og text-bg px-4 py-4 hover:opacity-80 transition-opacity pixel-corners"
            >
              <img
                src="/assets/discord-sharp.svg"
                alt="discord logo"
                className="h-6 w-6 brightness-0"
              />
              <span className="font-black font-sans">
                {t("hero.joinButton")}
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-center h-full items-center">
          <img
            src="/assets/cat-jumpup-right.svg"
            width={105}
            height={118}
            alt={t("hero.catAlt")}
          />
        </div>
      </section>
      <PatronMarquee />
    </div>
  );
});
