import { Button } from "@/components/ui/button";
import { UsersRound, Heart, Share2 } from "lucide-react";
import communityImage from "@/assets/community-elderly.jpg";
import { useTranslation } from "@/i18n";
import { LocalizedLink } from "@/components/LocalizedLink";

const featureIcons = [UsersRound, Heart, Share2];

export function CommunitySection() {
  const t = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.communitySection.title}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t.communitySection.subtitle}</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <img src={communityImage} alt="Group of elderly people laughing together while using phones and tablets" className="w-full rounded-2xl shadow-lg" loading="lazy" />
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {t.communitySection.features.map((text, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{text}</span>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="gap-2">
              <LocalizedLink to="/community">
                <UsersRound className="w-5 h-5" />
                {t.communitySection.cta}
              </LocalizedLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
