import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { PromptData } from "@/types/prompt";

interface StepNotesProps {
  promptData: PromptData;
  updatePromptData: (updates: Partial<PromptData>) => void;
}

export function StepNotes({ promptData, updatePromptData }: StepNotesProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Any extra details or notes?
          </h2>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            Optional
          </span>
        </div>
        <p className="text-muted-foreground">
          Add anything else the AI should know
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="notes" className="sr-only">
            Extra notes
          </Label>
          <Textarea
            id="notes"
            placeholder="e.g., Please avoid using jargon, I'm writing for a general audience. Also, I'd prefer bullet points where possible..."
            value={promptData.extraNotes}
            onChange={(e) => updatePromptData({ extraNotes: e.target.value })}
            className="min-h-[140px] text-base resize-none"
          />
        </div>

        <div className="bg-accent/50 rounded-lg p-4 space-y-2">
          <p className="text-sm font-medium text-accent-foreground">
            ✨ Ideas for extra notes:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Things to avoid or include</li>
            <li>• Special formatting requirements</li>
            <li>• Context about your situation</li>
            <li>• Specific examples you'd like to see</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
