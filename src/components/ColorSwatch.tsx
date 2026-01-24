import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/config";

type ColorDefinition = {
  key: string;
  value: string;
  tailwindClass: string;
};

const colors: ColorDefinition[] = [
  {
    key: "bg",
    value: "rgb(16, 15, 15)",
    tailwindClass: "bg-bg",
  },
  {
    key: "bg2",
    value: "rgb(28, 27, 26)",
    tailwindClass: "bg-bg-2",
  },
  {
    key: "ui",
    value: "rgb(40, 39, 38)",
    tailwindClass: "bg-ui",
  },
  {
    key: "ui2",
    value: "rgb(52, 51, 49)",
    tailwindClass: "bg-ui-2",
  },
  {
    key: "ui3",
    value: "rgb(64, 62, 60)",
    tailwindClass: "bg-ui-3",
  },
  {
    key: "tx3",
    value: "rgb(87, 86, 83)",
    tailwindClass: "bg-tx-3",
  },
  {
    key: "tx2",
    value: "rgb(135, 133, 128)",
    tailwindClass: "bg-tx-2",
  },
  {
    key: "tx",
    value: "rgb(206, 205, 195)",
    tailwindClass: "bg-tx",
  },
  {
    key: "og",
    value: "oklch(0.66 0.18 45)",
    tailwindClass: "bg-og",
  },
];

const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

const ColorSwatchItem = ({ color }: { color: ColorDefinition }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const success = await copyToClipboard(color.value);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const name = t(`branding.colors.${color.key}.name`);
  const description = t(`branding.colors.${color.key}.description`);

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center gap-4 lowercase text-left"
      type="button"
    >
      <div className="relative shrink-0">
        <div className={`w-16 h-16 ${color.tailwindClass} border border-ui`} />
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg/80">
            <svg
              className="w-8 h-8 text-og"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-sans text-og normal-case">{name}</div>
        <div className="text-lg text-tx-2 lowercase">{description}</div>
      </div>
    </button>
  );
};

export const ColorSwatch = () => {
  return (
    <div className="space-y-4">
      {colors.map((color) => (
        <ColorSwatchItem key={color.key} color={color} />
      ))}
    </div>
  );
};
