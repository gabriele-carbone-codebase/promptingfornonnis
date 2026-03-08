import { Card, CardContent } from "@/components/ui/card";
import personaCurious from "@/assets/persona-curious.jpg";
import personaPuzzled from "@/assets/persona-puzzled.jpg";
import personaBrowsing from "@/assets/persona-browsing.jpg";
import { useTranslation } from "@/i18n";

const images = [personaCurious, personaPuzzled, personaBrowsing];
const alts = [
  "Elderly woman curiously looking at a smartphone",
  "Elderly man puzzled while looking at a tablet",
  "Elderly woman casually browsing on her phone",
];

export function WhoIsThisFor() {
  const t = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-muted/40">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.whoIsThisFor.title}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t.whoIsThisFor.subtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.whoIsThisFor.personas.map((p, i) => (
              <Card key={i} className="shadow-card border-0 bg-card">
                <CardContent className="pt-6 space-y-3 text-center">
                  <img src={images[i]} alt={alts[i]} className="w-20 h-20 mx-auto rounded-full object-cover" loading="lazy" />
                  <h3 className="font-semibold text-foreground leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
