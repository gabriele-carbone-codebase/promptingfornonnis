import { cn } from "@/lib/utils";
import { Check, Lock, Trophy } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

interface TrainingProgressProps {
  currentLesson: number;
  completedLessons: number[];
  totalLessons: number;
  onLessonClick: (lesson: number) => void;
  allLessonsComplete: boolean;
  onStartFinalQuiz: () => void;
}

export function TrainingProgress({
  currentLesson,
  completedLessons,
  totalLessons,
  onLessonClick,
  allLessonsComplete,
  onStartFinalQuiz,
}: TrainingProgressProps) {
  const t = useTranslation();
  const lessonTitles = t.training.lessonTitles;
  const progressPercentage = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">
            {t.training.yourProgress}
          </span>
          <span className="text-sm text-muted-foreground">
            {completedLessons.length} {t.training.lessonsOf} {totalLessons} {t.training.lessons}
          </span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-success transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="grid gap-3">
        {Array.from({ length: totalLessons }, (_, i) => {
          const lessonNumber = i + 1;
          const isCompleted = completedLessons.includes(lessonNumber);
          const isCurrent = lessonNumber === currentLesson;
          const isLocked = lessonNumber > completedLessons.length + 1;

          return (
            <button
              key={lessonNumber}
              onClick={() => !isLocked && onLessonClick(lessonNumber)}
              disabled={isLocked}
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg border text-left transition-all duration-200",
                isCurrent && !isCompleted && "border-primary bg-primary/5 shadow-soft",
                isCompleted && "border-success/50 bg-success/5",
                !isCompleted && !isCurrent && !isLocked && "border-border hover:border-primary/50 hover:bg-muted/50",
                isLocked && "opacity-50 cursor-not-allowed"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
                  isCompleted && "bg-success text-success-foreground",
                  isCurrent && !isCompleted && "bg-primary text-primary-foreground",
                  !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : isLocked ? (
                  <Lock className="w-4 h-4" />
                ) : (
                  lessonNumber
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3
                  className={cn(
                    "font-medium text-foreground",
                    isCurrent && !isCompleted && "text-primary"
                  )}
                >
                  {t.training.lessonPrefix} {lessonNumber}: {lessonTitles[i]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isCompleted
                    ? t.training.completed
                    : isCurrent
                    ? t.training.inProgress
                    : isLocked
                    ? t.training.unlockPrevious
                    : t.training.readyToStart}
                </p>
              </div>
            </button>
          );
        })}

        <button
          onClick={onStartFinalQuiz}
          disabled={!allLessonsComplete}
          className={cn(
            "flex items-center gap-4 p-4 rounded-lg border text-left transition-all duration-200 mt-2 bg-accent border-primary/30",
            allLessonsComplete
              ? "hover:bg-accent/80 shadow-soft"
              : "opacity-50 cursor-not-allowed"
          )}
        >
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
              allLessonsComplete
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {allLessonsComplete ? (
              <Trophy className="w-5 h-5" />
            ) : (
              <Lock className="w-4 h-4" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className={cn(
                "font-medium",
                allLessonsComplete ? "text-primary" : "text-foreground"
              )}
            >
              {t.training.finalQuiz}
            </h3>
            <p className="text-sm text-muted-foreground">
              {allLessonsComplete
                ? t.training.finalQuizUnlocked
                : t.training.finalQuizLocked}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
