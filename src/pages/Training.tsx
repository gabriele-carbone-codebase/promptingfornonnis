import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrainingProgress } from "@/components/training/TrainingProgress";
import { LessonCard } from "@/components/training/LessonCard";
import { FinalQuiz } from "@/components/training/FinalQuiz";
import { Certificate } from "@/components/training/Certificate";
import { lessons } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type TrainingState = 
  | "lessons_hub"
  | "lesson_active"
  | "final_quiz_active"
  | "certificate";

const Training = () => {
  const [trainingState, setTrainingState] = useState<TrainingState>("lessons_hub");
  const [currentLesson, setCurrentLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [finalQuizScore, setFinalQuizScore] = useState({ score: 0, total: 0 });

  const totalLessons = lessons.length;
  const allLessonsComplete = completedLessons.length === totalLessons;

  const handleLessonComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons((prev) => [...prev, currentLesson]);
    }
    setTrainingState("lessons_hub");
  };

  const handleLessonClick = (lessonNumber: number) => {
    setCurrentLesson(lessonNumber);
    setTrainingState("lesson_active");
  };

  const handleBack = () => {
    setTrainingState("lessons_hub");
  };

  const handleStartFinalQuiz = () => {
    setTrainingState("final_quiz_active");
  };

  const handleFinalQuizComplete = (score: number, total: number) => {
    setFinalQuizScore({ score, total });
    setTrainingState("certificate");
  };

  const currentLessonData = lessons.find((l) => l.id === currentLesson);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="container py-8">
        {trainingState === "certificate" ? (
          <Certificate
            score={finalQuizScore.score}
            total={finalQuizScore.total}
            completionDate={new Date()}
          />
        ) : trainingState === "final_quiz_active" ? (
          <FinalQuiz
            onComplete={handleFinalQuizComplete}
            onBack={handleBack}
          />
        ) : trainingState === "lesson_active" && currentLessonData ? (
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="mb-4 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to lessons
            </Button>
            <LessonCard
              key={currentLesson}
              lesson={currentLessonData}
              onComplete={handleLessonComplete}
            />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Free Training: Master Prompts in 5 Minutes
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn the 5 essential techniques that will transform your AI
                conversations. Each lesson takes about 1 minute.
              </p>
            </div>

            <TrainingProgress
              currentLesson={currentLesson}
              completedLessons={completedLessons}
              totalLessons={totalLessons}
              onLessonClick={handleLessonClick}
              allLessonsComplete={allLessonsComplete}
              onStartFinalQuiz={handleStartFinalQuiz}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Training;
