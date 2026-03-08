import { useLanguage } from "./LanguageContext";
import { en } from "./translations/en";
import { it } from "./translations/it";

const translations = { en, it } as const;

export function useTranslation() {
  const { lang } = useLanguage();
  return translations[lang];
}
