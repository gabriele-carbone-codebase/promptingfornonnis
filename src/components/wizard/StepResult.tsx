import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { PromptData } from "@/types/prompt";

interface StepResultProps {
  promptData: PromptData;
  updatePromptData: (updates: Partial<PromptData>) => void;
}

export function StepResult({ promptData, updatePromptData }: StepResultProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          What result are you expecting?
        </h2>
        <p className="text-muted-foreground">
          Describe your ideal output: tone, length, level of detail
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="result" className="sr-only">
            Expected result
          </Label>
          <Textarea
            id="result"
            placeholder="e.g., A formal but friendly email, about 3 paragraphs long, that clearly explains my request and suggests specific dates..."
            value={promptData.expectedResult}
            onChange={(e) => updatePromptData({ expectedResult: e.target.value })}
            className="min-h-[140px] text-base resize-none"
          />
        </div>

        <div className="bg-accent/50 rounded-lg p-4 space-y-2">
          <p className="text-sm font-medium text-accent-foreground">
            💡 Tips for better results:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>Tone:</strong> Formal, casual, friendly, professional?</li>
            <li>• <strong>Length:</strong> Short (1 paragraph), medium, or detailed?</li>
            <li>• <strong>Format:</strong> Bullet points, numbered list, paragraphs?</li>
            <li>• <strong>Audience:</strong> Who will read this?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
