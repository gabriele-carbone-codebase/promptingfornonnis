import { useLanguage, type Language } from "@/i18n";
import { Button } from "@/components/ui/button";

function FlagGB({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="gb"><rect width="60" height="30"/></clipPath>
      <g clipPath="url(#gb)">
        <rect width="60" height="30" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#gb)"/>
        <path d="M30,0V30M0,15H60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0V30M0,15H60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

function FlagIT({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="2" fill="#009246"/>
      <rect width="1" height="2" x="1" fill="#fff"/>
      <rect width="1" height="2" x="2" fill="#CE2B37"/>
    </svg>
  );
}

const flags: Record<Language, { Flag: React.FC<{ className?: string }>; code: string; label: string }> = {
  en: { Flag: FlagGB, code: "EN", label: "English" },
  it: { Flag: FlagIT, code: "IT", label: "Italiano" },
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
      <other.Flag className="w-5 h-auto rounded-sm hidden sm:block" />
      <span className="font-semibold">{other.code}</span>
    </Button>
  );
}
