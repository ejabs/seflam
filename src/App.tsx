
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import BackToTop from "./components/common/BackToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import GalleriesIndex from "./pages/galleries/GalleriesIndex";
import HotTapGallery from "./pages/galleries/HotTapGallery";
import QPDUPGallery from "./pages/galleries/QPDUPGallery";
import MiscellaneousGallery from "./pages/galleries/MiscellaneousGallery";
import QHSE from "./pages/QHSE";
import NigerianContent from "./pages/NigerianContent";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="seflam-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <BackToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/galleries" element={<GalleriesIndex />} />
            <Route path="/galleries/hot-tap" element={<HotTapGallery />} />
            <Route path="/galleries/qpdup" element={<QPDUPGallery />} />
            <Route path="/galleries/miscellaneous" element={<MiscellaneousGallery />} />
            <Route path="/qhse" element={<QHSE />} />
            <Route path="/nigerian-content" element={<NigerianContent />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
