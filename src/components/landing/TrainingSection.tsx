import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, MessageCircleQuestion, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "5 lessons", sub: "Bite-sized concepts" },
  { icon: MessageCircleQuestion, label: "25 practice questions", sub: "Instant feedback" },
  { icon: Award, label: "Certificate", sub: "Shareable on social" },
];

export function TrainingSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Free Training & Certification
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Master prompt engineering in under 10 minutes. Complete the training, pass the final quiz, and earn a shareable certificate.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-2 p-6 rounded-xl bg-accent/30"
              >
                <s.icon className="w-8 h-8 text-primary" />
                <span className="text-lg font-semibold text-foreground">{s.label}</span>
                <span className="text-sm text-muted-foreground">{s.sub}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="gap-2">
              <Link to="/training">
                <GraduationCap className="w-5 h-5" />
                Start Free Training
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
