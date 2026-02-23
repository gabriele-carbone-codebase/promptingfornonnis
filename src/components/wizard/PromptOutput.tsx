import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Check, RotateCcw, BookOpen, Save, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
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

interface PromptOutputProps {
  generatedPrompt: string;
  promptData: PromptData;
  onReset: () => void;
}

export function PromptOutput({ generatedPrompt, promptData, onReset }: PromptOutputProps) {
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
      toast.success("Prompt copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy. Please try again.");
    }
  };

  const handleSave = async () => {
    if (!user) return;
    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }

    setSaving(true);
    const insertData = {
      user_id: user.id,
      title: title.trim(),
      content: generatedPrompt,
      goal: promptData.goal || null,
      expected_result: promptData.expectedResult || null,
      attachments: promptData.attachments as unknown as null,
      web_links: promptData.webLinks as unknown as null,
      extra_notes: promptData.extraNotes || null,
      is_public: isPublic,
    };
    
    const { error } = await supabase.from("prompts").insert(insertData);

    setSaving(false);

    if (error) {
      toast.error("Failed to save prompt");
    } else {
      toast.success("Prompt saved!");
      setShowSaveDialog(false);
      setTitle("");
      setIsPublic(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          🎉 Your prompt is ready!
        </h2>
        <p className="text-muted-foreground">
          Choose an AI chatbot below, or copy the prompt to use anywhere
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
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Prompt
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
            Save Prompt
          </Button>
        ) : (
          <Button size="lg" variant="secondary" asChild>
            <Link to="/auth?mode=signup">
              <Save className="w-4 h-4 mr-2" />
              Sign Up to Save
            </Link>
          </Button>
        )}
        
        <Button
          size="lg"
          variant="outline"
          onClick={onReset}
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Create Another
        </Button>
      </div>

      <Card className="shadow-soft border-2 border-primary/20">
        <CardContent className="p-6">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground font-sans">
            {generatedPrompt}
          </pre>
        </CardContent>
      </Card>

      {/* Open in ChatGPT */}
      <div className="text-center">
        <Button
          size="lg"
          className="bg-[hsl(145,60%,40%)] hover:bg-[hsl(145,60%,35%)] text-white"
          onClick={() => window.open(`https://chat.openai.com/?q=${encodeURIComponent(generatedPrompt)}`, '_blank')}
        >
          <img src={chatgptLogo} alt="ChatGPT" className="w-5 h-5" />
          Open in ChatGPT
        </Button>
      </div>

      <div className="bg-accent/50 rounded-lg p-6 text-center space-y-3">
        <p className="text-sm text-accent-foreground">
          Want to write even better prompts?
        </p>
        <Button variant="secondary" asChild>
          <Link to="/training">
            <BookOpen className="w-4 h-4 mr-2" />
            Free Training: Master Prompts in 5 Minutes
          </Link>
        </Button>
      </div>

      {/* Save Dialog */}
      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save Prompt</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="prompt-title">Title</Label>
              <Input
                id="prompt-title"
                placeholder="Give your prompt a name..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="public-toggle">Share publicly</Label>
                <p className="text-xs text-muted-foreground">
                  Others can see and copy this prompt
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
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
