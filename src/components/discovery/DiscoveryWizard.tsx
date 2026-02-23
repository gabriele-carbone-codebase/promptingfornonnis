import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Copy, Check, Sparkles } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import {
  AgeBucket,
  ageBucketLabels,
  activitiesByAge,
} from "@/data/discoveryActivities";
import { useCasePrompts } from "@/data/useCasePrompts";

export function DiscoveryWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedAge, setSelectedAge] = useState<AgeBucket | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const activities = selectedAge ? activitiesByAge[selectedAge] : [];

  const filteredPrompts = useMemo(() => {
    if (!selectedAge) return [];
    const chosen = activities.filter((a) => selectedActivities.includes(a.id));
    const cats = new Set(chosen.flatMap((a) => a.categories));
    return useCasePrompts.filter((p) => cats.has(p.category));
  }, [selectedAge, selectedActivities, activities]);

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const copyPrompt = async (prompt: typeof useCasePrompts[0]) => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopiedId(prompt.id);
    toast("Copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="container max-w-2xl py-12 space-y-8">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 justify-center">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all ${
              s === step ? "w-10 bg-primary" : s < step ? "w-6 bg-primary/50" : "w-6 bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Age */}
      {step === 1 && (
        <div className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-bold">How old are you?</h2>
            <p className="text-muted-foreground mt-1">
              This helps us show you the most relevant examples.
            </p>
          </div>

          <RadioGroup
            value={selectedAge ?? ""}
            onValueChange={(v) => setSelectedAge(v as AgeBucket)}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {(Object.entries(ageBucketLabels) as [AgeBucket, string][]).map(
              ([value, label]) => (
                <Label
                  key={value}
                  htmlFor={`age-${value}`}
                  className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-colors hover:border-primary/50 ${
                    selectedAge === value
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <RadioGroupItem
                    value={value}
                    id={`age-${value}`}
                    className="sr-only"
                  />
                  <span className="text-lg font-medium">{label}</span>
                </Label>
              )
            )}
          </RadioGroup>

          <Button
            size="lg"
            onClick={() => setStep(2)}
            disabled={!selectedAge}
            className="gap-2"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Step 2: Activities */}
      {step === 2 && (
        <div className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-bold">What do you usually do?</h2>
            <p className="text-muted-foreground mt-1">
              Pick as many as you like — we'll find relevant AI use cases for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {activities.map((activity) => {
              const checked = selectedActivities.includes(activity.id);
              return (
                <Label
                  key={activity.id}
                  htmlFor={`act-${activity.id}`}
                  className={`cursor-pointer flex items-center gap-3 rounded-lg border-2 p-4 transition-colors hover:border-primary/50 ${
                    checked ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <Checkbox
                    id={`act-${activity.id}`}
                    checked={checked}
                    onCheckedChange={() => toggleActivity(activity.id)}
                  />
                  <span className="font-medium">{activity.label}</span>
                </Label>
              );
            })}
          </div>

          <div className="flex gap-3 justify-center">
            <Button
              variant="outline"
              onClick={() => {
                setStep(1);
                setSelectedActivities([]);
              }}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              size="lg"
              onClick={() => setStep(3)}
              disabled={selectedActivities.length === 0}
              className="gap-2"
            >
              Show me what AI can do
              <Sparkles className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              Here's what AI can help you with!
            </h2>
            <p className="text-muted-foreground mt-1">
              {filteredPrompts.length} use case{filteredPrompts.length !== 1 && "s"} found.
              Copy any prompt and paste it into ChatGPT, Claude, or any AI chatbot.
            </p>
          </div>

          <div className="space-y-4">
            {filteredPrompts.map((prompt) => (
              <Card key={prompt.id}>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{prompt.title}</h3>
                      <Badge variant="secondary" className="mt-1">
                        {prompt.category}
                      </Badge>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyPrompt(prompt)}
                      className="shrink-0 gap-1.5"
                    >
                      {copiedId === prompt.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line line-clamp-4">
                    {prompt.prompt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => {
                setStep(2);
              }}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Change my answers
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
