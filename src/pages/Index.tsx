import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhoIsThisFor } from "@/components/landing/WhoIsThisFor";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { TrainingSection } from "@/components/landing/TrainingSection";
import { CommunitySection } from "@/components/landing/CommunitySection";
import { PromptWizard } from "@/components/wizard/PromptWizard";

const Index = () => {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {showWizard ? (
        <main className="container py-8">
          <PromptWizard />
        </main>
      ) : (
        <>
          <HeroSection onStartBuilding={() => setShowWizard(true)} />
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
