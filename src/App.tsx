import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const Cricket = lazy(() => import("./pages/Cricket.tsx"));
const FantasyCricket = lazy(() => import("./pages/FantasyCricket.tsx"));
const Casino = lazy(() => import("./pages/Casino.tsx"));
const LiveCard = lazy(() => import("./pages/LiveCard.tsx"));
const SlotGames = lazy(() => import("./pages/SlotGames.tsx"));
const CrashGames = lazy(() => import("./pages/CrashGames.tsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.tsx"));
const FAQ = lazy(() => import("./pages/FAQ.tsx"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions.tsx"));

const queryClient = new QueryClient();

const Loader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cricket" element={<Cricket />} />
              <Route path="/fantasy-cricket" element={<FantasyCricket />} />
              <Route path="/casino" element={<Casino />} />
              <Route path="/live-card" element={<LiveCard />} />
              <Route path="/slot-games" element={<SlotGames />} />
              <Route path="/crash-games" element={<CrashGames />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
