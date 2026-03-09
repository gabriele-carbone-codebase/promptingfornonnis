import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrainingProgress } from "@/components/training/TrainingProgress";
import { LessonCard } from "@/components/training/LessonCard";
import { FinalQuiz } from "@/components/training/FinalQuiz";
import { Certificate } from "@/components/training/Certificate";
import { lessons as lessonsEn } from "@/data/lessons";
import { lessonsIt } from "@/data/lessons.it";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Award } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useTrainingProgress } from "@/hooks/useTrainingProgress";

type TrainingState = 
  | "lessons_hub"
  | "lesson_active"
  | "final_quiz_active"
  | "name_prompt"
  | "certificate";

const Training = () => {
  const t = useTranslation();
  const { lang } = useLanguage();
  const { user } = useAuth();
  const lessons = lang === "it" ? lessonsIt : lessonsEn;

  const { completedLessons, markLessonComplete, loading: progressLoading } = useTrainingProgress();

  const [trainingState, setTrainingState] = useState<TrainingState>("lessons_hub");
  const [finalQuizScore, setFinalQuizScore] = useState({ score: 0, total: 0 });
  const [userName, setUserName] = useState("");
  const [nameInput, setNameInput] = useState("");

  const totalLessons = lessons.length;
  const allLessonsComplete = completedLessons.length === totalLessons;

  // Auto-resume: first incomplete lesson
  const initialLesson = useMemo(() => {
    for (let i = 1; i <= totalLessons; i++) {
      if (!completedLessons.includes(i)) return i;
    }
    return 1;
  }, [completedLessons, totalLessons]);

  const [currentLesson, setCurrentLesson] = useState(1);

  // Sync currentLesson when progress loads
  useState(() => {
    if (!progressLoading) {
      setCurrentLesson(initialLesson);
    }
  });

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
    // Pre-fill with auth user's display name if available
    const prefill = user?.user_metadata?.display_name || "";
    setNameInput(prefill);
    setTrainingState("name_prompt");
  };

  const handleNameSubmit = () => {
    const name = nameInput.trim();
    if (!name) return;
    setUserName(name);
    setTrainingState("certificate");
  };

  const currentLessonData = lessons.find((l) => l.id === currentLesson);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="container py-8">
        {trainingState === "certificate" ? (
          <Certificate
            userName={userName}
            score={finalQuizScore.score}
            total={finalQuizScore.total}
            completionDate={new Date()}
          />
        ) : trainingState === "name_prompt" ? (
          <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t.certificate.namePrompt.title}
              </h1>
              <p className="text-muted-foreground">
                {t.certificate.namePrompt.subtitle}
              </p>
            </div>
            <Card className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="certificate-name">{t.certificate.namePrompt.placeholder}</Label>
                <Input
                  id="certificate-name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder={t.certificate.namePrompt.placeholder}
                  onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
                  autoFocus
                />
              </div>
              <Button
                onClick={handleNameSubmit}
                disabled={!nameInput.trim()}
                className="w-full"
                size="lg"
              >
                {t.certificate.namePrompt.continue}
              </Button>
            </Card>
          </div>
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
              {t.training.backToLessons}
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
                {t.training.pageTitle}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.training.pageSubtitle}
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
      <Footer />
    </div>
  );
};

export default Training;
