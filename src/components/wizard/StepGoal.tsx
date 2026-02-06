import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import type { PromptData } from "@/types/prompt";

interface StepGoalProps {
  promptData: PromptData;
  updatePromptData: (updates: Partial<PromptData>) => void;
}

const examples = [
  "Write an email",
  "Summarize a text",
  "Create a poem",
  "Plan my week",
  "Explain a concept",
  "Generate ideas",
  "Write code",
  "Translate text",
];

export function StepGoal({ promptData, updatePromptData }: StepGoalProps) {
  const handleExampleClick = (example: string) => {
    updatePromptData({ goal: example });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          What do you want the chatbot to do?
        </h2>
        <p className="text-muted-foreground">
          Describe the main task you need help with
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="goal" className="sr-only">
            Your goal
          </Label>
          <Textarea
            id="goal"
            placeholder="e.g., Write a professional email to my boss asking for time off next week..."
            value={promptData.goal}
            onChange={(e) => updatePromptData({ goal: e.target.value })}
            className="min-h-[120px] text-base resize-none"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Need inspiration? Try one of these:
          </p>
          <div className="flex flex-wrap gap-2">
            {examples.map((example) => (
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
