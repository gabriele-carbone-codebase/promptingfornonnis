import { useLanguage, type Language } from "@/i18n";
import { Button } from "@/components/ui/button";

const flags: Record<Language, { emoji: string; code: string; label: string }> = {
  en: { emoji: "🇬🇧", code: "EN", label: "English" },
  it: { emoji: "🇮🇹", code: "IT", label: "Italiano" },
};

export function LanguageSelector() {
  const { lang, setLanguage } = useLanguage();
  const otherLang: Language = lang === "en" ? "it" : "en";
  const other = flags[otherLang];

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(otherLang)}
      className="gap-1.5 text-sm px-2"
      aria-label={`Switch to ${other.label}`}
    >
      <span className="text-base leading-none">{other.emoji}</span>
      <span className="font-semibold">{other.code}</span>
    </Button>
  );
}
