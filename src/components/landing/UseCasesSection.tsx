import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useCasePrompts } from "@/data/useCasePrompts";
import { useTranslation } from "@/i18n";
import { LocalizedLink } from "@/components/LocalizedLink";

const featured = useCasePrompts.slice(0, 4);

const categoryColors: Record<string, string> = {
  Business: "bg-primary/10 text-primary border-primary/20",
  Education: "bg-accent text-accent-foreground border-accent",
  Creative: "bg-secondary text-secondary-foreground border-secondary",
  Marketing: "bg-warning/10 text-warning-foreground border-warning/20",
  Personal: "bg-muted text-muted-foreground border-muted",
};

export function UseCasesSection() {
  const t = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-muted/40">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.useCasesSection.title}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t.useCasesSection.subtitle}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((p) => (
              <Card key={p.id} className="shadow-card">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{p.title}</CardTitle>
                    <Badge variant="outline" className={categoryColors[p.category]}>
                      {(t.categories as Record<string, string>)[p.category] || p.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{p.prompt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="gap-2">
              <LocalizedLink to="/use-cases">
                {t.useCasesSection.seeAll}
                <ArrowRight className="w-5 h-5" />
              </LocalizedLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
