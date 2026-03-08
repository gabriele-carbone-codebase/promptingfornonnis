import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhoIsThisFor } from "@/components/landing/WhoIsThisFor";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { TrainingSection } from "@/components/landing/TrainingSection";
import { CommunitySection } from "@/components/landing/CommunitySection";
import { PromptWizard } from "@/components/wizard/PromptWizard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/i18n";
import { useLanguage } from "@/i18n/LanguageContext";
import { NonniPopup } from "@/components/landing/NonniPopup";

type View = "landing" | "wizard";

const Index = () => {
  const [view, setView] = useState<View>("landing");
  const location = useLocation();
  const t = useTranslation();

  useEffect(() => {
    setView("landing");
  }, [location.key]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
            {t.index.backToHome}
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
      <Footer />
    </div>
  );
};

export default Index;
