import { useTranslation } from "react-i18next";
import { memo } from "react";
import i18n from "../../i18n/config";
import { type Language } from "../../utils/language";
import { ColorSwatch } from "../ColorSwatch";
import { CodeSnippet } from "../CodeSnippet";

const TAILWIND_CONFIG_CODE = `@theme {
  --color-*: initial;
  --color-bg: rgb(16, 15, 15);
  --color-bg-2: rgb(28, 27, 26);
  --color-ui: rgb(40, 39, 38);
  --color-ui-2: rgb(52, 51, 49);
  --color-ui-3: rgb(64, 62, 60);
  --color-tx-3: rgb(87, 86, 83);
  --color-tx-2: rgb(135, 133, 128);
  --color-tx: rgb(206, 205, 195);
  --color-og: oklch(0.66 0.18 45);

  --font-sans: 'DINdong', sans-serif;
  --font-serif: 'BIZUDPMincho', serif;
  --font-mono: 'VictorMono', monospace;
}`;

const CODE_AGENTS_CODE = `## DESIGN SYSTEM

indies.cl appeals to people tired of the monotonous and asymmetric nature of corporations, our communication is simple, everything in lowercase, being as casual as possible. for spanish text, avoid inverted punctuation marks (¡ ¿)

### SPACING

- USE spacing, we use \`-4\` (p-4).
- USE either use \`text-xl\` or \`text-2xl\`, no other values allowed.

### FONTS

- USE font-serif (BIZ UDPMincho) as default with \`text-xl\`. Both properities inheritet from \`text-xl\`. body text is lowercase (\`lowercase\` class) unlike headings.
- USE font-sans (DINdong) for titles and headings with \`text-2xl\`
- USE font-mono (Victor Mono) for anything engineering or AI related, snippets and terminals.

CONSIDER: these fonts have no weights other than 400. therefore \`font-bold\` is usable; differenctiate text via colors.

### colors

USE ONLY the following colors:

- \`bg\`: main background
- \`bg-2\`: secondary background
- \`ui\`: borders
- \`ui-2\`: hovered borders
- \`ui-3\`: active borders
- \`tx-2\`: faint text
- \`tx-2\`: muted text
- \`tx\`: primary text
- \`og\`: primary color, signals brand, is bright and attention grabbing`;

type FontLinkProps = {
  readonly href: string;
  readonly children: React.ReactNode;
};

const FontLink = memo(function FontLink({ href, children }: FontLinkProps) {
  return (
    <a
      href={href}
      className="text-og underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
});

type Props = {
  readonly lang: Language;
};

export const MarcaPage = memo(function MarcaPage({ lang }: Props) {
  i18n.changeLanguage(lang);
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-sans text-og normal-case">
        {t("branding.heading")}
      </h1>

      <p className="font-serif">{t("branding.communicationStyle")}</p>

      <h2 className="text-2xl font-sans text-og normal-case">
        {t("branding.fontsHeading")}
      </h2>

      <p className="font-serif">
        {t("branding.fonts.serif.before")}
        <FontLink href="https://uncut.wtf/serif/biz-udpmincho/">
          {t("branding.fonts.serif.name")}
        </FontLink>
      </p>
      <p className="font-sans text-2xl">
        {t("branding.fonts.sans.before")}
        <FontLink href="https://typotheque.genderfluid.space/fr/fontes/dindong">
          {t("branding.fonts.sans.name")}
        </FontLink>
        {t("branding.fonts.sans.after")}
      </p>
      <p className="font-mono">
        {t("branding.fonts.mono.before")}
        <FontLink href="https://rubjo.github.io/victor-mono/">
          {t("branding.fonts.mono.name")}
        </FontLink>
      </p>

      <h2 className="text-2xl font-sans text-og normal-case">
        {t("branding.colorsHeading")}
      </h2>

      <ColorSwatch />

      <h3 className="text-2xl font-sans text-og normal-case">
        {t("branding.tailwindConfigHeading")}
      </h3>

      <CodeSnippet code={TAILWIND_CONFIG_CODE} language="css" />

      <h3 className="text-2xl font-sans text-og normal-case">
        {t("branding.codeAgentsHeading")}
      </h3>

      <CodeSnippet code={CODE_AGENTS_CODE} language="markdown" />
    </div>
  );
});
