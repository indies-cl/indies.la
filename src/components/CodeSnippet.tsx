import { useState } from "react";

const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

type CodeSnippetProps = {
  code: string;
  language?: string;
};

export const CodeSnippet = ({ code, language = "css" }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const success = await copyToClipboard(code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-left relative"
      type="button"
    >
      <pre className="font-mono text-xl bg-bg-2 border border-ui p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
      {copied && (
        <div className="absolute top-4 right-4 flex items-center justify-center bg-bg/80 p-2">
          <svg
            className="w-6 h-6 text-og"
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
    </button>
  );
};
