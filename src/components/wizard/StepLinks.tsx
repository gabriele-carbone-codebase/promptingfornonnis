import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X, Link as LinkIcon } from "lucide-react";
import type { PromptData, WebLink } from "@/types/prompt";
import { useTranslation } from "@/i18n/useTranslation";

interface StepLinksProps {
  promptData: PromptData;
  addWebLink: () => void;
  updateWebLink: (id: string, updates: Partial<WebLink>) => void;
  removeWebLink: (id: string) => void;
}

export function StepLinks({
  promptData,
  addWebLink,
  updateWebLink,
  removeWebLink,
}: StepLinksProps) {
  const t = useTranslation();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            {t.wizard.stepLinks.title}
          </h2>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            {t.wizard.stepLinks.optional}
          </span>
        </div>
        <p className="text-muted-foreground">
          {t.wizard.stepLinks.subtitle}
        </p>
      </div>

      <div className="bg-warning/20 rounded-lg p-4 text-sm text-warning-foreground">
        <p>
          <strong>Heads up:</strong> {t.wizard.stepLinks.note}
        </p>
      </div>

      <div className="space-y-4">
        {promptData.webLinks.map((link, index) => (
          <div
            key={link.id}
            className="bg-card border rounded-lg p-4 space-y-3 shadow-card animate-scale-in"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <LinkIcon className="w-4 h-4" />
                {t.wizard.stepLinks.link} {index + 1}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeWebLink(link.id)}
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor={`url-${link.id}`} className="text-sm">
                  {t.wizard.stepLinks.url}
                </Label>
                <Input
                  id={`url-${link.id}`}
                  type="url"
                  placeholder={t.wizard.stepLinks.urlPlaceholder}
                  value={link.url}
                  onChange={(e) =>
                    updateWebLink(link.id, { url: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor={`link-description-${link.id}`} className="text-sm">
                  {t.wizard.stepLinks.description}
                </Label>
                <Input
                  id={`link-description-${link.id}`}
                  placeholder={t.wizard.stepLinks.descriptionPlaceholder}
                  value={link.description}
                  onChange={(e) =>
                    updateWebLink(link.id, { description: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="outline"
          onClick={addWebLink}
          className="w-full border-dashed"
        >
          <Plus className="w-4 h-4 mr-2" />
          {t.wizard.stepLinks.addWebLink}
        </Button>
      </div>
    </div>
  );
}
