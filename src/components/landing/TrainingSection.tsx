import { Button } from "@/components/ui/button";
import { GraduationCap, MessageCircleQuestion, Award } from "lucide-react";
import { useTranslation } from "@/i18n";
import { LocalizedLink } from "@/components/LocalizedLink";

const icons = [GraduationCap, MessageCircleQuestion, Award];

export function TrainingSection() {
  const t = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.trainingSection.title}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t.trainingSection.subtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.trainingSection.stats.map((s, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="flex flex-col items-center gap-2 p-6 rounded-xl bg-accent/30">
                  <Icon className="w-8 h-8 text-primary" />
                  <span className="text-lg font-semibold text-foreground">{s.label}</span>
                  <span className="text-sm text-muted-foreground">{s.sub}</span>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Button size="lg" asChild className="gap-2">
              <LocalizedLink to="/training">
                <GraduationCap className="w-5 h-5" />
                {t.trainingSection.cta}
              </LocalizedLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
