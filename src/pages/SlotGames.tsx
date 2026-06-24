import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Zap, Star, RotateCcw, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const slots = [
  { name: "Book of India", rtp: "96.5%", volatility: "High", theme: "🏛️ Mythology" },
  { name: "Cricket Mania", rtp: "97.1%", volatility: "Medium", theme: "🏏 Sports" },
  { name: "Bollywood Nights", rtp: "95.8%", volatility: "Low", theme: "🎬 Bollywood" },
  { name: "Mega Gems", rtp: "96.0%", volatility: "Medium", theme: "💎 Classic" },
  { name: "Golden Tiger", rtp: "97.5%", volatility: "High", theme: "🐅 Adventure" },
  { name: "Fruit Frenzy", rtp: "96.2%", volatility: "Low", theme: "🍊 Fruit" },
];

const features = [
  { icon: <Zap size={18} />, title: "500+ Slots", desc: "Huge library from top providers" },
  { icon: <Star size={18} />, title: "High RTP", desc: "95%+ return-to-player rates" },
  { icon: <RotateCcw size={18} />, title: "Free Spins", desc: "Bonus spins on top games" },
  { icon: <Gift size={18} />, title: "Jackpots", desc: "Progressive jackpots up to ₹1Cr" },
];

const SlotGames = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Online Slot Games India - Best Slots with High RTP | Babu88</title>
        <meta name="description" content="Play 500+ online slot games on Babu88 India. High RTP slots, free spins, progressive jackpots. Indian-themed and international slots with INR support." />
        <link rel="canonical" href={`${SITE_URL}/slot-games`} />
        <meta property="og:title" content="Online Slot Games India - Best Slots with High RTP | Babu88" />
        <meta property="og:description" content="500+ online slots with high RTP on Babu88 India. Free spins, jackpots, mobile-ready." />
        <meta property="og:url" content={`${SITE_URL}/slot-games`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <main className="px-3 py-4 pb-20 max-w-lg mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">Slot Games</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">🎰 Slot Games</h1>
          <p className="text-sm text-muted-foreground mb-4">500+ slots with free spins, jackpots & high RTP rates</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Spin & Win Now
          </a>
        </div>

        {/* Features */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Slot Features</h2>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-3">
                <div className="text-primary mb-2">{f.icon}</div>
                <h3 className="text-sm font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-[10px] text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Slots */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Top Slot Games</h2>
          <div className="space-y-2">
            {slots.map((s, i) => (
              <a
                key={i}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-3 hover:border-primary/50 transition-all"
              >
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-xl shrink-0">
                  {s.theme.split(" ")[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-foreground">{s.name}</h3>
                  <p className="text-[10px] text-muted-foreground">{s.theme.split(" ").slice(1).join(" ")}</p>
                </div>
                <div className="text-right shrink-0 space-y-1">
                  <div className="text-[10px] font-bold text-green-500">RTP {s.rtp}</div>
                  <div className="text-[9px] text-muted-foreground">{s.volatility} vol.</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* How Slots Work */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Understanding Slots</h2>
          <div className="bg-card border border-border rounded-lg p-4 space-y-3">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-1">What is RTP?</h3>
              <p className="text-xs text-muted-foreground">Return to Player (RTP) is the percentage of total money wagered that a slot pays back over time. A 96% RTP returns ₹96 for every ₹100 wagered on average.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-1">Volatility Explained</h3>
              <p className="text-xs text-muted-foreground"><strong className="text-foreground">Low:</strong> Frequent small wins. <strong className="text-foreground">Medium:</strong> Balanced. <strong className="text-foreground">High:</strong> Rare but big wins. Choose based on your budget and risk preference.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-1">Random Number Generator</h3>
              <p className="text-xs text-muted-foreground">Every spin outcome is determined by a certified RNG, ensuring completely random and fair results on every spin.</p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="mb-6 bg-card border border-border rounded-lg p-4">
          <h2 className="font-heading text-base font-bold text-foreground mb-2">Slot Games at Babu88</h2>
          <p className="text-xs text-muted-foreground leading-relaxed mb-2">
            Babu88 hosts one of India's largest online slot game collections, featuring 500+ titles from world-leading game providers. From Indian mythology and Bollywood-themed slots to classic fruit machines and progressive jackpot games, there's something for every player.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            All slot games are fully mobile-optimized and support INR bets. New slots added weekly. Play responsibly — you must be 18+ to participate.
          </p>
        </section>

        <div className="text-center">
          <Link to="/crash-games" className="inline-block border border-primary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
            Crash Games →
          </Link>
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default SlotGames;
