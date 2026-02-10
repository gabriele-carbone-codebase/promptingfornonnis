import { HelpCircle, ThumbsDown, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const personas = [
  {
    icon: HelpCircle,
    title: "I've heard of ChatGPT but never tried it",
    description:
      "You know AI exists but it feels overwhelming. We'll show you exactly how to start — no tech skills needed.",
  },
  {
    icon: ThumbsDown,
    title: "I've tried AI but my results were disappointing",
    description:
      "The secret isn't the AI — it's how you ask. Our wizard turns vague ideas into powerful prompts automatically.",
  },
  {
    icon: Lightbulb,
    title: "I don't even know what to ask AI",
    description:
      "That's the most common starting point! Browse our 20 real-world examples and discover what AI can do for you.",
  },
];

export function WhoIsThisFor() {
  return (
    <section className="py-16 sm:py-20 bg-muted/40">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Is this for me?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              If any of these sound like you, you're in the right place.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {personas.map((p) => (
              <Card key={p.title} className="shadow-card border-0 bg-card">
                <CardContent className="pt-6 space-y-3 text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground leading-snug">
                    {p.title}
                  </h3>
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
