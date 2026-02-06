import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, X, ArrowRight, Lightbulb } from "lucide-react";
import type { Lesson } from "@/data/lessons";

interface LessonCardProps {
  lesson: Lesson;
  onComplete: () => void;
}

export function LessonCard({ lesson, onComplete }: LessonCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (optionId: string) => {
    if (showResult) return;
    setSelectedAnswer(optionId);
  };

  const handleCheck = () => {
    setShowResult(true);
  };

  const isCorrect =
    selectedAnswer &&
    lesson.quiz.options.find((o) => o.id === selectedAnswer)?.isCorrect;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in">
      {/* Lesson header */}
      <div className="text-center space-y-2">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Lesson {lesson.id}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          {lesson.title}
        </h2>
      </div>

      {/* Explanation */}
      <Card className="shadow-card">
        <CardContent className="p-6 space-y-4">
          <p className="text-foreground leading-relaxed">{lesson.description}</p>
          
          <div className="flex gap-3 p-4 rounded-lg bg-accent/50">
            <Lightbulb className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm text-accent-foreground">{lesson.tip}</p>
          </div>
        </CardContent>
      </Card>

      {/* Quiz */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          Quick Quiz: {lesson.quiz.question}
        </h3>

        <div className="space-y-3">
          {lesson.quiz.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const showCorrectness = showResult;

            return (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                disabled={showResult}
                className={cn(
                  "w-full p-4 rounded-lg border text-left transition-all duration-200",
                  !showResult && !isSelected && "border-border hover:border-primary/50 hover:bg-muted/50",
                  !showResult && isSelected && "border-primary bg-primary/5",
                  showCorrectness && option.isCorrect && "border-success bg-success/10",
                  showCorrectness && isSelected && !option.isCorrect && "border-destructive bg-destructive/10"
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-medium",
                      !showResult && !isSelected && "bg-muted text-muted-foreground",
                      !showResult && isSelected && "bg-primary text-primary-foreground",
                      showCorrectness && option.isCorrect && "bg-success text-success-foreground",
                      showCorrectness && isSelected && !option.isCorrect && "bg-destructive text-destructive-foreground"
                    )}
                  >
                    {showCorrectness ? (
                      option.isCorrect ? (
                        <Check className="w-4 h-4" />
                      ) : isSelected ? (
                        <X className="w-4 h-4" />
                      ) : (
                        option.id.toUpperCase()
                      )
                    ) : (
                      option.id.toUpperCase()
                    )}
                  </div>
                  <p className="text-foreground whitespace-pre-wrap">{option.text}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Result and explanation */}
      {showResult && (
        <div
          className={cn(
            "p-4 rounded-lg animate-scale-in",
            isCorrect ? "bg-success/10 border border-success/30" : "bg-warning/10 border border-warning/30"
          )}
        >
          <p className="font-medium mb-2">
            {isCorrect ? "🎉 Correct!" : "💡 Not quite, but that's okay!"}
          </p>
          <p className="text-sm text-muted-foreground">{lesson.quiz.explanation}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-center gap-4">
        {!showResult ? (
          <Button
            size="lg"
            onClick={handleCheck}
            disabled={!selectedAnswer}
          >
            Check Answer
          </Button>
        ) : (
          <Button size="lg" onClick={onComplete} className="gap-2">
            {isCorrect ? "Next Lesson" : "Continue Anyway"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
