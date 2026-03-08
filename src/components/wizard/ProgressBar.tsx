import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
}

export function ProgressBar({ currentStep, totalSteps, onStepClick }: ProgressBarProps) {
  const t = useTranslation();
  const stepLabels = t.wizard.stepLabels;
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6">
      <div className="relative">
        <div className="absolute top-4 left-0 right-0 h-1 bg-muted rounded-full" />
        <div
          className="absolute top-4 left-0 h-1 bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />

        <div className="relative flex justify-between">
          {Array.from({ length: totalSteps }, (_, i) => {
            const stepNumber = i + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            const isClickable = stepNumber <= currentStep;

            return (
              <button
                key={stepNumber}
                onClick={() => isClickable && onStepClick?.(stepNumber)}
                disabled={!isClickable}
                className={cn(
                  "relative flex flex-col items-center gap-2 transition-all duration-300",
                  isClickable ? "cursor-pointer" : "cursor-default"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                    isCompleted && "bg-primary text-primary-foreground",
                    isCurrent && "bg-primary text-primary-foreground ring-4 ring-primary/20",
                    !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    stepNumber
                  )}
                </div>

                <span
                  className={cn(
                    "text-xs font-medium transition-colors duration-300 hidden sm:block",
                    isCurrent && "text-primary",
                    isCompleted && "text-foreground",
                    !isCompleted && !isCurrent && "text-muted-foreground"
                  )}
                >
                  {stepLabels[i]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
