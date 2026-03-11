import { Button } from "@/components/ui/button";
import { Smile, Heart, ArrowRight, HelpCircle } from "lucide-react";
import heroImage from "@/assets/hero-elderly.jpg";
import { useTranslation } from "@/i18n";
import { LocalizedLink } from "@/components/LocalizedLink";

interface HeroSectionProps {
  onStartBuilding: () => void;
}

export function HeroSection({ onStartBuilding }: HeroSectionProps) {
  const t = useTranslation();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 min-h-[500px]">
      <img src={heroImage} alt="Elderly woman smiling while using a smartphone" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium backdrop-blur-sm">
            <Smile className="w-4 h-4" />
            {t.hero.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            {t.hero.title}{" "}
            <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={onStartBuilding} className="text-lg px-8 gap-2">
              <Heart className="w-5 h-5" />
              {t.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base sm:text-lg px-4 sm:px-6 gap-2 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm leading-snug whitespace-nowrap"
            >
              <LocalizedLink to="/use-cases">
                <HelpCircle className="w-5 h-5 shrink-0" />
                <span>{t.hero.ctaSecondary}</span>
              </LocalizedLink>
            </Button>
          </div>
          <p className="text-sm text-white/60">{t.hero.features}</p>
        </div>
      </div>
    </section>
  );
}
