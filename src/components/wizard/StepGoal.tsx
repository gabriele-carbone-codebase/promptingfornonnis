import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import type { PromptData } from "@/types/prompt";
import { useTranslation } from "@/i18n/useTranslation";

interface StepGoalProps {
  promptData: PromptData;
  updatePromptData: (updates: Partial<PromptData>) => void;
}

export function StepGoal({ promptData, updatePromptData }: StepGoalProps) {
  const t = useTranslation();

  const handleExampleClick = (example: string) => {
    updatePromptData({ goal: example });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          {t.wizard.stepGoal.title}
        </h2>
        <p className="text-muted-foreground">
          {t.wizard.stepGoal.subtitle}
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="goal" className="sr-only">
            {t.wizard.stepGoal.title}
          </Label>
          <Textarea
            id="goal"
            placeholder={t.wizard.stepGoal.placeholder}
            value={promptData.goal}
            onChange={(e) => updatePromptData({ goal: e.target.value })}
            className="min-h-[120px] text-base resize-none"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {t.wizard.stepGoal.inspiration}
          </p>
          <div className="flex flex-wrap gap-2">
            {t.wizard.stepGoal.examples.map((example) => (
              <Badge
                key={example}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleExampleClick(example)}
              >
                {example}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
