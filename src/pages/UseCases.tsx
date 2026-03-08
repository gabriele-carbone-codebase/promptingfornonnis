import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, ChevronDown, ChevronUp, Sparkles, Compass } from "lucide-react";
import { useCasePrompts, type UseCasePrompt } from "@/data/useCasePrompts";
import { DiscoveryWizard } from "@/components/discovery/DiscoveryWizard";
import { toast } from "sonner";

const categories = ["All", "Business", "Education", "Creative", "Marketing", "Personal"] as const;

const categoryColors: Record<string, string> = {
  Business: "bg-primary/10 text-primary border-primary/20",
  Education: "bg-accent text-accent-foreground border-accent",
  Creative: "bg-secondary text-secondary-foreground border-secondary",
  Marketing: "bg-warning/10 text-warning-foreground border-warning/20",
  Personal: "bg-muted text-muted-foreground border-muted",
};

function PromptCard({ prompt }: { prompt: UseCasePrompt }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    toast.success("Prompt copied!");
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
                <ChevronUp className="w-4 h-4 mr-1" /> Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" /> More
              </>
            )}
          </Button>
          <Button size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-1" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-1" /> Copy
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

const UseCases = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? useCasePrompts
      : useCasePrompts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Prompt Examples
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse 20 ready-to-use prompts across different categories. Copy any prompt and paste it into your favourite AI chatbot.
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
              <Link to="/">
                <Sparkles className="w-5 h-5" />
                Create Your Own Prompt
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UseCases;
