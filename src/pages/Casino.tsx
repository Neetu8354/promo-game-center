import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Spade, Dice1, Video, Gamepad2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const games = [
  { name: "Teen Patti", desc: "India's favorite 3-card poker game", icon: "🃏", category: "Card" },
  { name: "Andar Bahar", desc: "Classic Indian card matching game", icon: "🎴", category: "Card" },
  { name: "Roulette", desc: "European & American variants", icon: "🎡", category: "Table" },
  { name: "Blackjack", desc: "Beat the dealer to 21", icon: "♠️", category: "Card" },
  { name: "Baccarat", desc: "High-stakes card game for pros", icon: "🎰", category: "Table" },
  { name: "Dragon Tiger", desc: "Fast-paced two-card showdown", icon: "🐉", category: "Card" },
];

const features = [
  { icon: <Video size={18} />, title: "Live Dealers", desc: "Real HD-streamed dealers 24/7" },
  { icon: <Spade size={18} />, title: "Indian Games", desc: "Teen Patti, Andar Bahar & more" },
  { icon: <Dice1 size={18} />, title: "INR Supported", desc: "Instant deposits & withdrawals" },
  { icon: <Gamepad2 size={18} />, title: "Mobile Ready", desc: "Optimized for all smartphones" },
];

const Casino = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Online Casino India - Teen Patti, Roulette & Live Games | Babu88</title>
        <meta name="description" content="Play online casino games on Babu88 India. Teen Patti, Andar Bahar, Roulette, Blackjack and live dealer games with INR deposits. Join now!" />
        <link rel="canonical" href={`${SITE_URL}/casino`} />
        <meta property="og:title" content="Online Casino India - Teen Patti, Roulette & Live Games | Babu88" />
        <meta property="og:description" content="India's best online casino with Teen Patti, Roulette, Andar Bahar and live dealers. INR supported." />
        <meta property="og:url" content={`${SITE_URL}/casino`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <main className="px-4 md:px-8 py-6 pb-24 md:pb-10 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">Casino</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">🎰 Online Casino</h1>
          <p className="text-sm text-muted-foreground mb-4">Live dealers, Indian card games & international table games</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Play Casino Now
          </a>
        </div>

        {/* Games Grid */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Popular Casino Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {games.map((g, i) => (
              <a
                key={i}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-lg p-3 hover:border-primary/50 transition-all text-center"
              >
                <div className="text-3xl mb-2">{g.icon}</div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-1">{g.name}</h3>
                <p className="text-xs text-muted-foreground">{g.desc}</p>
                <span className="inline-block mt-2 text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{g.category}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Why Play on Babu88?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <div className="text-primary mb-2">{f.icon}</div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* House Edge Table */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Game Odds at a Glance</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-secondary">
              <div className="px-4 py-2 text-sm font-bold text-foreground">Game</div>
              <div className="px-4 py-2 text-sm font-bold text-foreground">House Edge</div>
            </div>
            {[
              ["Blackjack", "0.5%"],
              ["Baccarat", "1.06%"],
              ["European Roulette", "2.7%"],
              ["Andar Bahar", "2-5%"],
              ["Teen Patti", "3-5%"],
              ["Dragon Tiger", "3.73%"],
            ].map(([game, edge]) => (
              <div key={game} className="grid grid-cols-2 border-t border-border">
                <div className="px-4 py-2 text-sm text-muted-foreground">{game}</div>
                <div className="px-4 py-2 text-sm font-semibold text-primary">{edge}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="mb-6 bg-card border border-border rounded-lg p-4">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Online Casino India — Babu88</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Babu88 brings India's most loved casino games online — from traditional Teen Patti and Andar Bahar to internationally popular Roulette, Blackjack, and Baccarat. All games are powered by live dealers with HD video streaming.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Deposits and withdrawals in Indian Rupees (INR) are instant via UPI, Net Banking and popular wallets. Play responsibly — you must be 18+ to participate.
          </p>
        </section>

        <div className="text-center">
          <Link to="/live-card" className="inline-block border border-primary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
            Live Card Games →
          </Link>
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default Casino;
