import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Trophy } from "lucide-react";
import { finalQuizQuestions } from "@/data/finalQuizQuestions";
import { FinalQuizQuestionCard } from "./FinalQuizQuestion";

interface FinalQuizProps {
  onComplete: (score: number, total: number) => void;
  onBack: () => void;
}

export function FinalQuiz({ onComplete, onBack }: FinalQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const totalQuestions = finalQuizQuestions.length;
  const hasStarted = currentQuestionIndex >= 0;

  const handleStart = () => {
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (currentQuestionIndex === totalQuestions - 1) {
      // Quiz complete
      onComplete(correctAnswers + (isCorrect ? 1 : 0), totalQuestions);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  if (!hasStarted) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="mb-4 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to lessons
        </Button>

        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Final Quiz
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Test your knowledge with {totalQuestions} questions covering all 5 prompt engineering concepts.
          </p>
        </div>

        <Card className="shadow-card">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-foreground">What to expect:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {totalQuestions} questions with 3 options each
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Immediate feedback after each answer
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Earn a shareable certificate upon completion
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button size="lg" onClick={handleStart} className="gap-2">
            Start Final Quiz
            <Trophy className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion = finalQuizQuestions[currentQuestionIndex];

  return (
    <FinalQuizQuestionCard
      key={currentQuestionIndex}
      question={currentQuestion}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={totalQuestions}
      onAnswer={handleAnswer}
      isLastQuestion={currentQuestionIndex === totalQuestions - 1}
    />
  );
}
