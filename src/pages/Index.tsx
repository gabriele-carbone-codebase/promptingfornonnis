import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhoIsThisFor } from "@/components/landing/WhoIsThisFor";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { TrainingSection } from "@/components/landing/TrainingSection";
import { CommunitySection } from "@/components/landing/CommunitySection";
import { PromptWizard } from "@/components/wizard/PromptWizard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type View = "landing" | "wizard";

const Index = () => {
  const [view, setView] = useState<View>("landing");
  const location = useLocation();

  // Reset to landing when navigating to "/" (e.g. clicking logo)
  useEffect(() => {
    setView("landing");
  }, [location.key]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {view === "wizard" ? (
        <main className="container py-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setView("landing")}
            className="mb-4 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <PromptWizard />
        </main>
      ) : (
        <>
          <HeroSection onStartBuilding={() => setView("wizard")} />
          <WhoIsThisFor />
          <UseCasesSection />
          <TrainingSection />
          <CommunitySection />
        </>
      )}
    </div>
  );
};

export default Index;
