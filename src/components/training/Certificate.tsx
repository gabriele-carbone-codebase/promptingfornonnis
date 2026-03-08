import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Heart, ArrowRight } from "lucide-react";
import { ShareButtons } from "./ShareButtons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageContext";

interface CertificateProps {
  userName?: string;
  score: number;
  total: number;
  completionDate: Date;
}

export function Certificate({ userName, score, total, completionDate }: CertificateProps) {
  const t = useTranslation();
  const { lang, localePath } = useLanguage();
  const certificateRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const displayName = userName || t.certificate.defaultName;
  const percentage = Math.round((score / total) * 100);
  const formattedDate = completionDate.toLocaleDateString(lang === "it" ? "it-IT" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getGrade = () => {
    if (percentage >= 90) return t.certificate.grades.aPlus;
    if (percentage >= 80) return t.certificate.grades.a;
    if (percentage >= 70) return t.certificate.grades.b;
    if (percentage >= 60) return t.certificate.grades.c;
    return t.certificate.grades.d;
  };

  const { grade, label } = getGrade();

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
          <Heart className="w-4 h-4" />
          {t.certificate.quizComplete}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          {label}
        </h1>
        <p className="text-muted-foreground">
          {t.certificate.youScored
            .replace("{score}", String(score))
            .replace("{total}", String(total))
            .replace("{percentage}", String(percentage))}
        </p>
      </div>

      <Card
        ref={certificateRef}
        className="relative overflow-hidden border-2 border-primary/20 shadow-xl"
      >
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/30 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary/30 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary/30 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary/30 rounded-br-lg" />

        <div className="p-8 sm:p-12 text-center space-y-6 bg-gradient-to-b from-background to-muted/20">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30">
            <Trophy className="w-12 h-12 text-primary" />
          </div>

          <div className="space-y-1">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              {t.certificate.certificateOf}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t.certificate.courseTitle}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <Heart className="w-4 h-4 text-primary" />
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{t.certificate.awardedTo}</p>
            <p className="text-2xl font-semibold text-foreground">{displayName}</p>
          </div>

          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{grade}</p>
              <p className="text-xs text-muted-foreground">{t.certificate.grade}</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{score}/{total}</p>
              <p className="text-xs text-muted-foreground">{t.certificate.score}</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{percentage}%</p>
              <p className="text-xs text-muted-foreground">{t.certificate.accuracy}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            {t.certificate.completedOn.replace("{date}", formattedDate)}
          </p>
        </div>
      </Card>

      <div className="space-y-4">
        <p className="text-center text-sm text-muted-foreground">
          {t.certificate.shareAchievement}
        </p>
        <ShareButtons certificateRef={certificateRef} score={score} total={total} />
      </div>

      <div className="flex justify-center pt-4">
        <Button size="lg" onClick={() => navigate(localePath("/"))} className="gap-2">
          {t.certificate.startCreating}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
