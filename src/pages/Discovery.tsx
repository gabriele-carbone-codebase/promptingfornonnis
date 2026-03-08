import { Header } from "@/components/layout/Header";
import { DiscoveryWizard } from "@/components/discovery/DiscoveryWizard";

const Discovery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DiscoveryWizard />
    </div>
  );
};

export default Discovery;
