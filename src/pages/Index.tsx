import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CricketOdds from "@/components/CricketOdds";
import GamesGrid from "@/components/GamesGrid";
import CasinoSection from "@/components/CasinoSection";
import BottomTabBar from "@/components/BottomTabBar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import SEOHead from "@/components/SEOHead";
import SEOContent from "@/components/SEOContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header />
      <HeroBanner />
      <CricketOdds />
      <GamesGrid />
      <CasinoSection />
      <InternalLinks />
      <SEOContent />
      <FAQSection />
      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default Index;
