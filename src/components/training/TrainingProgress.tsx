import { cn } from "@/lib/utils";
import { Check, Lock } from "lucide-react";

interface TrainingProgressProps {
  currentLesson: number;
  completedLessons: number[];
  totalLessons: number;
  onLessonClick: (lesson: number) => void;
}

const lessonTitles = [
  "More text is better",
  "Ask what info is needed",
  "Use examples",
  "Use quotes for text",
  "Assign roles",
];

export function TrainingProgress({
  currentLesson,
  completedLessons,
  totalLessons,
  onLessonClick,
}: TrainingProgressProps) {
  const progressPercentage = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      {/* Overall progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">
            Your Progress
          </span>
          <span className="text-sm text-muted-foreground">
            {completedLessons.length} of {totalLessons} lessons
          </span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-success transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Lesson cards */}
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
                isCurrent && "border-primary bg-primary/5 shadow-soft",
                isCompleted && !isCurrent && "border-success/50 bg-success/5",
                !isCompleted && !isCurrent && !isLocked && "border-border hover:border-primary/50 hover:bg-muted/50",
                isLocked && "opacity-50 cursor-not-allowed"
              )}
            >
              {/* Status icon */}
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
                  isCompleted && "bg-success text-success-foreground",
                  isCurrent && !isCompleted && "bg-primary text-primary-foreground",
                  !isCompleted && !isCurrent && !isLocked && "bg-muted text-muted-foreground",
                  isLocked && "bg-muted text-muted-foreground"
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

              {/* Lesson info */}
              <div className="flex-1 min-w-0">
                <h3
                  className={cn(
                    "font-medium",
                    isCurrent && "text-primary",
                    isCompleted && "text-foreground",
                    !isCompleted && !isCurrent && "text-foreground"
                  )}
                >
                  Lesson {lessonNumber}: {lessonTitles[i]}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {isCompleted
                    ? "Completed ✓"
                    : isCurrent
                    ? "In progress..."
                    : isLocked
                    ? "Complete previous lesson to unlock"
                    : "Ready to start"}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
