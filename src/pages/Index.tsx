import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/HeroSection";
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
        <HeroSection onStartBuilding={() => setShowWizard(true)} />
      )}
    </div>
  );
};

export default Index;
