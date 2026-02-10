import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UsersRound, Heart, Share2 } from "lucide-react";

const features = [
  { icon: UsersRound, text: "Browse prompts shared by others" },
  { icon: Heart, text: "Like your favourites" },
  { icon: Share2, text: "Share your own creations" },
];

export function CommunitySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Join the Community
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover prompts created by other users, get inspired, and share your own with the world.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{f.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="gap-2">
              <Link to="/community">
                <UsersRound className="w-5 h-5" />
                Explore Community
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
