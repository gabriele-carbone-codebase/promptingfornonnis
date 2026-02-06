import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { TrainingProgress } from "@/components/training/TrainingProgress";
import { LessonCard } from "@/components/training/LessonCard";
import { TrainingComplete } from "@/components/training/TrainingComplete";
import { lessons } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Training = () => {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [showLesson, setShowLesson] = useState(false);

  const totalLessons = lessons.length;
  const isComplete = completedLessons.length === totalLessons;

  const handleLessonComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons((prev) => [...prev, currentLesson]);
    }

    if (currentLesson < totalLessons) {
      setCurrentLesson(currentLesson + 1);
    } else {
      setShowLesson(false);
    }
  };

  const handleLessonClick = (lessonNumber: number) => {
    setCurrentLesson(lessonNumber);
    setShowLesson(true);
  };

  const handleBack = () => {
    setShowLesson(false);
  };

  const currentLessonData = lessons.find((l) => l.id === currentLesson);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        {isComplete && !showLesson ? (
          <TrainingComplete />
        ) : showLesson && currentLessonData ? (
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
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Training;
