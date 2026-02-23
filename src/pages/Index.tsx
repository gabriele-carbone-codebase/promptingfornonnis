import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhoIsThisFor } from "@/components/landing/WhoIsThisFor";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { TrainingSection } from "@/components/landing/TrainingSection";
import { CommunitySection } from "@/components/landing/CommunitySection";
import { PromptWizard } from "@/components/wizard/PromptWizard";
import { DiscoveryWizard } from "@/components/discovery/DiscoveryWizard";

type View = "landing" | "wizard" | "discovery";

const Index = () => {
  const [view, setView] = useState<View>("landing");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {view === "wizard" ? (
        <main className="container py-8">
          <PromptWizard />
        </main>
      ) : view === "discovery" ? (
        <main>
          <DiscoveryWizard />
        </main>
      ) : (
        <>
          <HeroSection
            onStartBuilding={() => setView("wizard")}
            onDiscover={() => setView("discovery")}
          />
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
