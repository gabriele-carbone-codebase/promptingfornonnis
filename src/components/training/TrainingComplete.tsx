import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function TrainingComplete() {
  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-8 py-12 animate-fade-in">
      <div className="relative inline-block">
        <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto">
          <Trophy className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-warning rounded-full flex items-center justify-center animate-pulse-soft">
          <Sparkles className="w-5 h-5 text-warning-foreground" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          🎉 Congratulations!
        </h2>
        <p className="text-xl text-muted-foreground">
          You've mastered the 5 essentials of prompt writing!
        </p>
      </div>

      <Card className="shadow-soft border-2 border-success/20">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold text-lg text-foreground">
            What you learned:
          </h3>
          <ul className="text-left space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="text-success">✓</span>
              More details = better results
            </li>
            <li className="flex items-center gap-2">
              <span className="text-success">✓</span>
              Ask AI what info it needs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-success">✓</span>
              Use examples to show what you want
            </li>
            <li className="flex items-center gap-2">
              <span className="text-success">✓</span>
              Put text in quotes for clarity
            </li>
            <li className="flex items-center gap-2">
              <span className="text-success">✓</span>
              Assign roles for better responses
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <p className="text-muted-foreground">
          Ready to put your new skills to work?
        </p>
        <Button size="lg" asChild className="gap-2">
          <Link to="/">
            <Sparkles className="w-5 h-5" />
            Build Your First Prompt
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
