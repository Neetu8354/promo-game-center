import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, TrendingUp, Shield, Zap, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const games = [
  { name: "Aviator", desc: "The original crash game — fly as high as you dare", icon: "✈️", popular: true },
  { name: "JetX", desc: "High-speed jet multiplier game", icon: "🚀", popular: true },
  { name: "Spaceman", desc: "Rocket-powered multiplier adventure", icon: "👨‍🚀", popular: false },
  { name: "Cash Show", desc: "Interactive crash with live multipliers", icon: "💰", popular: false },
];

const strategies = [
  { name: "Conservative", cashout: "1.5x – 2x", desc: "Small but frequent wins. Best for beginners.", risk: "Low" },
  { name: "Moderate", cashout: "3x – 5x", desc: "Balance between risk and reward.", risk: "Medium" },
  { name: "Aggressive", cashout: "10x+", desc: "High risk, high reward strategy.", risk: "High" },
];

const features = [
  { icon: <TrendingUp size={18} />, title: "Rising Multipliers", desc: "Watch your winnings grow in real time" },
  { icon: <Shield size={18} />, title: "Provably Fair", desc: "Verified random outcomes every round" },
  { icon: <Zap size={18} />, title: "Auto Cash-Out", desc: "Set your target multiplier automatically" },
  { icon: <Users size={18} />, title: "Multiplayer", desc: "See other players cash out live" },
];

const CrashGames = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Crash Games Online India - Aviator & More | Babu8</title>
        <meta name="description" content="Play Aviator, JetX and more crash games on Babu8 India. Watch multipliers rise and cash out before the crash. Provably fair with INR support." />
        <link rel="canonical" href={`${SITE_URL}/crash-games`} />
        <meta property="og:title" content="Crash Games Online India - Aviator & More | Babu8" />
        <meta property="og:description" content="Play Aviator and crash games on Babu8. Rising multipliers, provably fair, INR deposits." />
        <meta property="og:url" content={`${SITE_URL}/crash-games`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <main className="px-4 md:px-8 py-6 pb-24 md:pb-10 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">Crash Games</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">🚀 Crash Games</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-5">Multipliers keep rising — cash out before the crash!</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Play Crash Games
          </a>
        </div>

        {/* Games */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Available Crash Games</h2>
          <div className="space-y-2 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
            {games.map((g, i) => (
              <a
                key={i}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all"
              >
                <span className="text-2xl">{g.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm md:text-base font-bold text-foreground">{g.name}</h3>
                    {g.popular && <span className="text-[9px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">HOT</span>}
                  </div>
                  <p className="text-[10px] text-muted-foreground">{g.desc}</p>
                </div>
                <ChevronRight size={14} className="text-muted-foreground shrink-0" />
              </a>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">How Crash Games Work</h2>
          <div className="bg-card border border-border rounded-lg p-4 space-y-3">
            {[
              ["Place Your Bet", "Bet any amount before the round starts"],
              ["Watch the Multiplier", "The multiplier climbs from 1.00x upward"],
              ["Cash Out in Time", "Tap cash out to lock your win"],
              ["Avoid the Crash", "If it crashes before you cash out, you lose"],
            ].map(([title, desc], i) => (
              <div key={i} className="flex gap-3">
                <span className="text-primary font-bold text-lg w-6 shrink-0">{i + 1}</span>
                <div>
                  <p className="text-sm font-bold text-foreground">{title}</p>
                  <p className="text-[11px] text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategies */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Strategies</h2>
          <div className="space-y-2">
            {strategies.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm md:text-base font-bold text-foreground">{s.name}</h3>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                    s.risk === "Low" ? "text-green-500 bg-green-500/10" :
                    s.risk === "Medium" ? "text-yellow-500 bg-yellow-500/10" :
                    "text-red-500 bg-red-500/10"
                  }`}>{s.risk} Risk</span>
                </div>
                <p className="text-[10px] text-primary font-semibold mb-0.5">Cash out at: {s.cashout}</p>
                <p className="text-[10px] text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Platform Features</h2>
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

        {/* SEO Content */}
        <section className="mb-6 bg-card border border-border rounded-lg p-4">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Crash Games on Babu8</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Crash games are the fastest-growing game category in India. Babu8 offers top crash games including Aviator and JetX with provably fair technology ensuring every outcome is completely transparent and verifiable.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Watch multipliers rise in real time, chat with other players, and cash out at your target — all from your mobile. INR deposits and instant withdrawals supported. 18+ only. Play responsibly.
          </p>
        </section>

        <div className="text-center">
          <Link to="/slot-games" className="inline-block border border-primary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
            ← Slot Games
          </Link>
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default CrashGames;
