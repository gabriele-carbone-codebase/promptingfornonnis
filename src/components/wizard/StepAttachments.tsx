import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X, Paperclip } from "lucide-react";
import type { PromptData, Attachment } from "@/types/prompt";
import { useTranslation } from "@/i18n/useTranslation";

interface StepAttachmentsProps {
  promptData: PromptData;
  addAttachment: () => void;
  updateAttachment: (id: string, updates: Partial<Attachment>) => void;
  removeAttachment: (id: string) => void;
}

export function StepAttachments({
  promptData,
  addAttachment,
  updateAttachment,
  removeAttachment,
}: StepAttachmentsProps) {
  const t = useTranslation();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            {t.wizard.stepAttachments.title}
          </h2>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            {t.wizard.stepAttachments.optional}
          </span>
        </div>
        <p className="text-muted-foreground">
          {t.wizard.stepAttachments.subtitle}
        </p>
      </div>

      <div className="bg-warning/20 rounded-lg p-4 text-sm text-warning-foreground">
        <p>
          <strong>Note:</strong> {t.wizard.stepAttachments.note}
        </p>
      </div>

      <div className="space-y-4">
        {promptData.attachments.map((attachment, index) => (
          <div
            key={attachment.id}
            className="bg-card border rounded-lg p-4 space-y-3 shadow-card animate-scale-in"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Paperclip className="w-4 h-4" />
                {t.wizard.stepAttachments.attachment} {index + 1}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeAttachment(attachment.id)}
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor={`filename-${attachment.id}`} className="text-sm">
                  {t.wizard.stepAttachments.filename}
                </Label>
                <Input
                  id={`filename-${attachment.id}`}
                  placeholder={t.wizard.stepAttachments.filenamePlaceholder}
                  value={attachment.filename}
                  onChange={(e) =>
                    updateAttachment(attachment.id, { filename: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor={`description-${attachment.id}`} className="text-sm">
                  {t.wizard.stepAttachments.description}
                </Label>
                <Input
                  id={`description-${attachment.id}`}
                  placeholder={t.wizard.stepAttachments.descriptionPlaceholder}
                  value={attachment.description}
                  onChange={(e) =>
                    updateAttachment(attachment.id, { description: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="outline"
          onClick={addAttachment}
          className="w-full border-dashed"
        >
          <Plus className="w-4 h-4 mr-2" />
          {t.wizard.stepAttachments.addAttachment}
        </Button>
      </div>
    </div>
  );
}
