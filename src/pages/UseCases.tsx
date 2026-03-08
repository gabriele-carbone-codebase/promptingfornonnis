import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, ChevronDown, ChevronUp, Sparkles, Compass } from "lucide-react";
import { useCasePrompts, type UseCasePrompt } from "@/data/useCasePrompts";
import { useCasePromptsIt } from "@/data/useCasePrompts.it";
import { DiscoveryWizard } from "@/components/discovery/DiscoveryWizard";
import { toast } from "sonner";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageContext";
import { LocalizedLink } from "@/components/LocalizedLink";

const categoryColors: Record<string, string> = {
  Business: "bg-primary/10 text-primary border-primary/20",
  Education: "bg-accent text-accent-foreground border-accent",
  Creative: "bg-secondary text-secondary-foreground border-secondary",
  Marketing: "bg-warning/10 text-warning-foreground border-warning/20",
  Personal: "bg-muted text-muted-foreground border-muted",
};

function PromptCard({ prompt }: { prompt: UseCasePrompt }) {
  const t = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    toast.success(t.useCasesPage.promptCopied);
    setTimeout(() => setCopied(false), 2000);
  };

  const preview = prompt.prompt.slice(0, 120) + "...";

  return (
    <Card className="shadow-card hover:shadow-soft transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base">{prompt.title}</CardTitle>
          <Badge variant="outline" className={categoryColors[prompt.category]}>
            {prompt.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-sans leading-relaxed">
          {expanded ? prompt.prompt : preview}
        </pre>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" /> {t.useCasesPage.less}
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" /> {t.useCasesPage.more}
              </>
            )}
          </Button>
          <Button size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-1" /> {t.useCasesPage.copiedMsg}
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-1" /> {t.useCasesPage.copy}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

const UseCases = () => {
  const t = useTranslation();
  const categories = t.useCasesPage.categories;
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [showDiscovery, setShowDiscovery] = useState(false);

  const categoryMap: Record<string, string> = {
    [categories[0]]: "All",
    [categories[1]]: "Business",
    [categories[2]]: "Education",
    [categories[3]]: "Creative",
    [categories[4]]: "Marketing",
    [categories[5]]: "Personal",
  };

  const englishCategory = categoryMap[activeCategory] || "All";

  const filtered =
    englishCategory === "All"
      ? useCasePrompts
      : useCasePrompts.filter((p) => p.category === englishCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {!showDiscovery ? (
            <Card className="border-primary/20 bg-primary/5 shadow-card">
              <CardContent className="flex flex-col sm:flex-row items-center gap-4 py-6">
                <Compass className="w-10 h-10 text-primary shrink-0" />
                <div className="text-center sm:text-left flex-1">
                  <h2 className="text-lg font-semibold text-foreground">{t.useCasesPage.discoverTitle}</h2>
                  <p className="text-muted-foreground text-sm">
                    {t.useCasesPage.discoverSubtitle}
                  </p>
                </div>
                <Button onClick={() => setShowDiscovery(true)} className="gap-2 shrink-0">
                  <Compass className="w-4 h-4" />
                  {t.useCasesPage.discoverNow}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-end">
                <Button variant="ghost" size="sm" onClick={() => setShowDiscovery(false)}>
                  {t.useCasesPage.backToExamples}
                </Button>
              </div>
              <DiscoveryWizard />
            </div>
          )}

          {!showDiscovery && (
            <>
              <div className="text-center space-y-3">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {t.useCasesPage.pageTitle}
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t.useCasesPage.pageSubtitle}
                </p>
              </div>

              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0">
                  {categories.map((cat) => (
                    <TabsTrigger
                      key={cat}
                      value={cat}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
                    >
                      {cat}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="grid gap-4 sm:grid-cols-2">
                {filtered.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>

              <div className="text-center pt-4">
                <Button size="lg" asChild className="gap-2">
                  <LocalizedLink to="/">
                    <Sparkles className="w-5 h-5" />
                    {t.useCasesPage.createYourOwn}
                  </LocalizedLink>
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
