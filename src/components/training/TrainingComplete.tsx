import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

interface TrainingCompleteProps {
  onStartFinalQuiz: () => void;
}

export function TrainingComplete({ onStartFinalQuiz }: TrainingCompleteProps) {
  const t = useTranslation();

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in text-center">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-success/10">
        <Trophy className="w-12 h-12 text-success" />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          {t.trainingComplete.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          {t.trainingComplete.subtitle}
        </p>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-semibold">{t.trainingComplete.quizUnlocked}</h3>
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-muted-foreground">
            {t.trainingComplete.quizDescription}
          </p>
        </CardContent>
      </Card>

      <Button size="lg" onClick={onStartFinalQuiz} className="gap-2">
        {t.trainingComplete.startFinalQuiz}
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
