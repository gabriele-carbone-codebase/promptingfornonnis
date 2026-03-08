import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Copy, Check, Sparkles } from "lucide-react";
import chatgptLogo from "@/assets/chatgpt-logo.svg";
import { toast } from "@/components/ui/sonner";
import {
  AgeBucket,
  activitiesByAge,
} from "@/data/discoveryActivities";
import { activitiesByAgeIt } from "@/data/discoveryActivities.it";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageContext";

export function DiscoveryWizard() {
  const t = useTranslation();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedAge, setSelectedAge] = useState<AgeBucket | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activities = selectedAge ? activitiesByAge[selectedAge] : [];

  const results = useMemo(() => {
    if (!selectedAge) return [];
    const chosen = activities.filter((a) => selectedActivities.includes(a.id));

    const items: { type: "activity" | "usecase"; id: string; title: string; description: string; prompt: string }[] = [];
    const seenIds = new Set<string>();

    for (const activity of chosen) {
      items.push({
        type: "activity",
        id: `act-${activity.id}`,
        title: activity.label,
        description: "",
        prompt: activity.examplePrompt,
      });

      for (const uc of activity.useCases) {
        if (!seenIds.has(uc.id)) {
          seenIds.add(uc.id);
          items.push({
            type: "usecase",
            id: uc.id,
            title: uc.title,
            description: uc.description,
            prompt: uc.examplePrompt,
          });
        }
      }
    }

    return items;
  }, [selectedAge, selectedActivities, activities]);

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const copyPrompt = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast(t.discovery.copiedClipboard);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="container max-w-2xl py-12 px-4 space-y-8">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 justify-center" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3} aria-label={`Step ${step} of 3`}>
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all ${
              s === step ? "w-10 bg-primary" : s < step ? "w-6 bg-primary/50" : "w-6 bg-muted"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Step 1: Age */}
      {step === 1 && (
        <div className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-bold">{t.discovery.step1Title}</h2>
            <p className="text-muted-foreground mt-1">
              {t.discovery.step1Subtitle}
            </p>
          </div>

          <RadioGroup
            value={selectedAge ?? ""}
            onValueChange={(v) => setSelectedAge(v as AgeBucket)}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {(Object.entries(t.discovery.ageBuckets) as [AgeBucket, string][]).map(
              ([value, label]) => (
                <Label
                  key={value}
                  htmlFor={`age-${value}`}
                  className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-colors hover:border-primary/50 flex items-center justify-center ${
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
                  <span className="text-lg font-medium whitespace-nowrap">{label}</span>
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
            {t.discovery.next}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Step 2: Activities */}
      {step === 2 && (
        <div className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-bold">{t.discovery.step2Title}</h2>
            <p className="text-muted-foreground mt-1">
              {t.discovery.step2Subtitle}
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

          <div className="flex flex-col items-center gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setStep(1);
                setSelectedActivities([]);
              }}
              className="gap-2 w-full max-w-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.discovery.back}
            </Button>
            <Button
              size="lg"
              onClick={() => setStep(3)}
              disabled={selectedActivities.length === 0}
              className="gap-2 w-full max-w-sm"
            >
              {t.discovery.showResults}
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
              {t.discovery.step3Title}
            </h2>
            <p className="text-muted-foreground mt-1">
              {t.discovery.step3Subtitle
                .replace("{count}", String(results.length))
                .replace("{plural}", results.length !== 1 ? "i" : "o")
                .replace("{plural2}", results.length !== 1 ? "i" : "o")}
            </p>
          </div>

          <div className="space-y-4">
            {results.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 sm:p-5 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {item.type === "activity" ? t.discovery.activityPrompt : t.discovery.useCase}
                        </Badge>
                      </div>
                    </div>
                    {item.type === "usecase" && (
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground whitespace-pre-line bg-muted/50 rounded-md p-3 italic">
                      {item.prompt}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      onClick={() => copyPrompt(item.id, item.prompt)}
                      className="gap-1.5 flex-1 sm:flex-none min-h-[44px]"
                      aria-label={`Copy ${item.title} prompt`}
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          {t.wizard.output.copied}
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          {t.discovery.copy}
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-1.5 bg-success/10 border-success/30 text-success hover:bg-success/20 flex-1 sm:flex-none min-h-[44px]"
                      onClick={() => window.open(`https://chat.openai.com/?q=${encodeURIComponent(item.prompt)}`, '_blank')}
                      aria-label={`Open ${item.title} in ChatGPT`}
                    >
                      <img src={chatgptLogo} alt="" className="w-3.5 h-3.5" />
                      ChatGPT
                    </Button>
                  </div>
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
              {t.discovery.changeAnswers}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
