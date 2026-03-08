import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n";
import Index from "./pages/Index";
import Training from "./pages/Training";
import Community from "./pages/Community";
import UseCases from "./pages/UseCases";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import Privacy from "./pages/Privacy";
import MyPrompts from "./pages/MyPrompts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/training" element={<Training />} />
      <Route path="/community" element={<Community />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/my-prompts" element={<MyPrompts />} />
      {/* Italian routes */}
      <Route path="/it" element={<Index />} />
      <Route path="/it/training" element={<Training />} />
      <Route path="/it/community" element={<Community />} />
      <Route path="/it/use-cases" element={<UseCases />} />
      <Route path="/it/auth" element={<Auth />} />
      <Route path="/it/reset-password" element={<ResetPassword />} />
      <Route path="/it/privacy" element={<Privacy />} />
      <Route path="/it/my-prompts" element={<MyPrompts />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <AppRoutes />
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
