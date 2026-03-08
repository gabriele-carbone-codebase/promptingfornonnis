import logo from "@/assets/logo.png";
import { useTranslation } from "@/i18n";
import { LocalizedLink } from "@/components/LocalizedLink";

export function Footer() {
  const t = useTranslation();
  
  return (
    <footer className="border-t bg-muted/30">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 py-4 text-sm text-muted-foreground">
        <LocalizedLink to="/" className="shrink-0">
          <img src={logo} alt="Prompting for Nonnis" className="w-7 h-7" />
        </LocalizedLink>
        <LocalizedLink to="/privacy" className="hover:text-foreground transition-colors underline underline-offset-2">
          {t.footer.privacy}
        </LocalizedLink>
        <span>© 2026 Gabriele Carbone</span>
      </div>
    </footer>
  );
}
