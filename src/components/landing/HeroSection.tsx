import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onStartBuilding: () => void;
}

export function HeroSection({ onStartBuilding }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-warm opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            No AI experience needed
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Create perfect AI prompts{" "}
            <span className="text-primary">in 5 easy steps</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop guessing. Our friendly wizard guides you through building 
            powerful prompts that get amazing results from ChatGPT, Claude, 
            and other AI chatbots.
          </p>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={onStartBuilding}
              className="text-lg px-8 gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Start Building
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            ✓ 100% free &nbsp;•&nbsp; ✓ No signup required &nbsp;•&nbsp; ✓ Works with any AI
          </p>
        </div>
      </div>
    </section>
  );
}
