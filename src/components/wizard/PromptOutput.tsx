import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Check, RotateCcw, BookOpen, Save, Loader2 } from "lucide-react";
import { toast } from "sonner";
import chatgptLogo from "@/assets/chatgpt-logo.svg";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import type { PromptData } from "@/types/prompt";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageContext";
import { LocalizedLink } from "@/components/LocalizedLink";

interface PromptOutputProps {
  generatedPrompt: string;
  promptData: PromptData;
  onReset: () => void;
}

export function PromptOutput({ generatedPrompt, promptData, onReset }: PromptOutputProps) {
  const t = useTranslation();
  const { lang } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [copied, setCopied] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      toast.success(t.wizard.output.copiedToClipboard);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error(t.wizard.output.failedCopy);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      toast.error(t.wizard.output.saveDialog.enterTitle);
      return;
    }
    if (trimmedTitle.length > 100) {
      toast.error(t.wizard.output.saveDialog.titleTooLong);
      return;
    }

    setSaving(true);
    const insertData = {
      user_id: user.id,
      title: trimmedTitle,
      content: generatedPrompt,
      goal: promptData.goal || null,
      expected_result: promptData.expectedResult || null,
      attachments: promptData.attachments as unknown as null,
      web_links: promptData.webLinks as unknown as null,
      extra_notes: promptData.extraNotes || null,
      is_public: isPublic,
      language: lang,
    };
    
    const { error } = await supabase.from("prompts").insert(insertData);

    setSaving(false);

    if (error) {
      toast.error(t.wizard.output.saveDialog.failedSave);
    } else {
      toast.success(t.wizard.output.saveDialog.saved);
      setShowSaveDialog(false);
      setTitle("");
      setIsPublic(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          {t.wizard.output.title}
        </h2>
        <p className="text-muted-foreground">
          {t.wizard.output.subtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          size="lg"
          onClick={handleCopy}
          className="min-w-[160px]"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              {t.wizard.output.copied}
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              {t.wizard.output.copyPrompt}
            </>
          )}
        </Button>

        {isAuthenticated ? (
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setShowSaveDialog(true)}
          >
            <Save className="w-4 h-4 mr-2" />
            {t.wizard.output.savePrompt}
          </Button>
        ) : (
          <Button size="lg" variant="secondary" asChild>
            <LocalizedLink to="/auth?mode=signup">
              <Save className="w-4 h-4 mr-2" />
              {t.wizard.output.signUpToSave}
            </LocalizedLink>
          </Button>
        )}
        
        <Button
          size="lg"
          variant="outline"
          onClick={onReset}
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          {t.wizard.output.createAnother}
        </Button>
      </div>

      <Card className="shadow-soft border-2 border-primary/20">
        <CardContent className="p-6">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground font-sans">
            {generatedPrompt}
          </pre>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button
          size="lg"
          className="bg-success hover:bg-success/90 text-success-foreground"
          onClick={() => window.open(`https://chat.openai.com/?q=${encodeURIComponent(generatedPrompt)}`, '_blank')}
        >
          <img src={chatgptLogo} alt="ChatGPT" className="w-5 h-5" />
          {t.wizard.output.openInChatGPT}
        </Button>
      </div>

      <div className="bg-accent/50 rounded-lg p-6 text-center space-y-3">
        <p className="text-sm text-accent-foreground">
          {t.wizard.output.betterPrompts}
        </p>
        <Button variant="secondary" asChild className="whitespace-normal h-auto py-2">
          <LocalizedLink to="/training">
            <BookOpen className="w-4 h-4 mr-2 shrink-0" />
            {t.wizard.output.freeTraining}
          </LocalizedLink>
        </Button>
      </div>

      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t.wizard.output.saveDialog.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="prompt-title">{t.wizard.output.saveDialog.titleLabel}</Label>
              <Input
                id="prompt-title"
                placeholder={t.wizard.output.saveDialog.titlePlaceholder}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="public-toggle">{t.wizard.output.saveDialog.sharePublicly}</Label>
                <p className="text-xs text-muted-foreground">
                  {t.wizard.output.saveDialog.shareDescription}
                </p>
              </div>
              <Switch
                id="public-toggle"
                checked={isPublic}
                onCheckedChange={setIsPublic}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSaveDialog(false)}>
              {t.wizard.output.saveDialog.cancel}
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t.wizard.output.saveDialog.saving}
                </>
              ) : (
                t.wizard.output.saveDialog.save
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
