import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Video, Shield, Clock, Wifi } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const cardGames = [
  { name: "Teen Patti Live", desc: "Play with live dealer, multiplayer tables", icon: "🃏", players: "1K+ playing" },
  { name: "Andar Bahar Live", desc: "Classic game with real HD dealer", icon: "🎴", players: "800+ playing" },
  { name: "Poker (Hold'em)", desc: "Texas Hold'em with live opponents", icon: "♠️", players: "500+ playing" },
  { name: "Rummy", desc: "Points, Deals & Pool Rummy formats", icon: "🎯", players: "1.2K+ playing" },
  { name: "Blackjack Live", desc: "Beat the live dealer to 21", icon: "🂡", players: "300+ playing" },
  { name: "Baccarat Live", desc: "High-stakes live baccarat tables", icon: "🎰", players: "200+ playing" },
];

const advantages = [
  { icon: <Video size={18} />, title: "HD Video Stream", desc: "Crystal clear 1080p live dealers" },
  { icon: <Shield size={18} />, title: "Fair & Verified", desc: "Certified RNG and live audit" },
  { icon: <Clock size={18} />, title: "24/7 Available", desc: "Tables open around the clock" },
  { icon: <Wifi size={18} />, title: "Low Latency", desc: "Near-zero delay gameplay" },
];

const LiveCard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Live Card Games Online India - Poker, Rummy, Teen Patti | Babu88</title>
        <meta name="description" content="Play live card games on Babu88 India. Real dealers for Teen Patti, Andar Bahar, Poker, Rummy and Blackjack. 24/7 live tables with INR support." />
        <link rel="canonical" href={`${SITE_URL}/live-card`} />
        <meta property="og:title" content="Live Card Games Online India - Poker, Rummy, Teen Patti | Babu88" />
        <meta property="og:description" content="Real live dealers for Teen Patti, Poker, Rummy and more on Babu88. INR deposits, 24/7 available." />
        <meta property="og:url" content={`${SITE_URL}/live-card`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <main className="px-4 md:px-8 py-6 pb-24 md:pb-10 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">Live Card</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">🎴 Live Card Games</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-5">Real dealers. Real cards. Real-time action — 24/7</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Join Live Tables
          </a>
        </div>

        {/* Live Games */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Live Games Available Now</h2>
          <div className="space-y-2 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
            {cardGames.map((g, i) => (
              <a
                key={i}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all"
              >
                <span className="text-2xl">{g.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-foreground">{g.name}</h3>
                  <p className="text-xs text-muted-foreground">{g.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-bold text-green-500">{g.players}</span>
                  <div className="flex items-center gap-1 justify-end mt-0.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] text-muted-foreground">LIVE</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Live Gaming Advantages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advantages.map((a, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <div className="text-primary mb-2">{a.icon}</div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-1">{a.title}</h3>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="mb-6 bg-card border border-border rounded-lg p-4">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Live Card Games on Babu88</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Experience the thrill of real casino card games from your smartphone. Babu88's live card game lobby features professional dealers, multiple camera angles, and interactive chat — bringing the authentic casino atmosphere straight to you.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Choose from dedicated Indian card game tables or international favorites. All live games support INR bets with instant payouts and are available 24 hours a day, 7 days a week.
          </p>
        </section>

        <div className="text-center">
          <Link to="/casino" className="inline-block border border-primary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
            ← All Casino Games
          </Link>
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default LiveCard;
