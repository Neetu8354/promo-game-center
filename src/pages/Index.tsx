import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import HeroBanner from "@/components/HeroBanner";
import CricketOdds from "@/components/CricketOdds";
import GamesGrid from "@/components/GamesGrid";
import CasinoSection from "@/components/CasinoSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomTabBar from "@/components/BottomTabBar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header />
      <CategoryTabs />
      <HeroBanner />
      <CricketOdds />
      <GamesGrid />
      <CasinoSection />
      <InternalLinks />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
      <BottomTabBar />
    </div>
  );
};

export default Index;
