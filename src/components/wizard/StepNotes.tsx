import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { PromptData } from "@/types/prompt";
import { useTranslation } from "@/i18n/useTranslation";

interface StepNotesProps {
  promptData: PromptData;
  updatePromptData: (updates: Partial<PromptData>) => void;
}

export function StepNotes({ promptData, updatePromptData }: StepNotesProps) {
  const t = useTranslation();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            {t.wizard.stepNotes.title}
          </h2>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            {t.wizard.stepNotes.optional}
          </span>
        </div>
        <p className="text-muted-foreground">
          {t.wizard.stepNotes.subtitle}
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="notes" className="sr-only">
            {t.wizard.stepNotes.title}
          </Label>
          <Textarea
            id="notes"
            placeholder={t.wizard.stepNotes.placeholder}
            value={promptData.extraNotes}
            onChange={(e) => updatePromptData({ extraNotes: e.target.value })}
            className="min-h-[140px] text-base resize-none"
          />
        </div>

        <div className="bg-accent/50 rounded-lg p-4 space-y-2">
          <p className="text-sm font-medium text-accent-foreground">
            {t.wizard.stepNotes.ideasTitle}
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {t.wizard.stepNotes.ideas.map((idea, i) => (
              <li key={i}>• {idea}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
