import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageTextToSpeech } from "./components/TextToSpeech";

// Pages
import Index from "./pages/Index";
import GovernmentServices from "./pages/GovernmentServices";
import Healthcare from "./pages/Healthcare";
import Community from "./pages/Community";
import TechHelp from "./pages/TechHelp";
import NotFound from "./pages/NotFound";
import { AllNews } from "./pages/AllNews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/government" element={<GovernmentServices />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/community" element={<Community />} />
            <Route path="/tech-help" element={<TechHelp />} />
            <Route path="/all-news" element={<AllNews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <PageTextToSpeech selector="main" />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
