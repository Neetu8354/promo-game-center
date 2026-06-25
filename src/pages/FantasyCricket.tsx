import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Trophy, Star, Zap, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const steps = [
  { step: "01", title: "Pick a Match", desc: "Choose from upcoming IPL, T20 or ODI matches" },
  { step: "02", title: "Build Your Team", desc: "Select 11 players within your credit budget" },
  { step: "03", title: "Choose Captain", desc: "Captain earns 2x points, Vice-Captain 1.5x" },
  { step: "04", title: "Win Prizes", desc: "Earn points based on real player performance" },
];

const tips = [
  { icon: <Star size={16} />, title: "Pick In-Form Players", desc: "Recent performance matters more than reputation" },
  { icon: <Zap size={16} />, title: "Differential Picks", desc: "Low-ownership players can boost your rank" },
  { icon: <Trophy size={16} />, title: "Pitch Reports", desc: "Batting or bowling pitch changes your strategy" },
  { icon: <Gift size={16} />, title: "Toss Result", desc: "Adjust team after toss for max points" },
];

const FantasyCricket = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fantasy Cricket India - Build Teams & Win Prizes | Babu8</title>
        <meta name="description" content="Play fantasy cricket on Babu8. Pick players, build your dream team for IPL 2026 matches and win real prizes. Expert tips and strategies included." />
        <link rel="canonical" href={`${SITE_URL}/fantasy-cricket`} />
        <meta property="og:title" content="Fantasy Cricket India - Build Teams & Win Prizes | Babu8" />
        <meta property="og:description" content="Play fantasy cricket on Babu8 and win real prizes. IPL 2026 contests available." />
        <meta property="og:url" content={`${SITE_URL}/fantasy-cricket`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <main className="px-4 md:px-8 py-6 pb-24 md:pb-10 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">Fantasy Cricket</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">🏆 Fantasy Cricket</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-5">Build your dream XI and win big prizes on every IPL match</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Play Fantasy Cricket
          </a>
        </div>

        {/* How It Works */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">How to Play</h2>
          <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-3 bg-card border border-border rounded-lg p-4 items-start">
                <span className="text-primary font-heading font-bold text-xl w-10 shrink-0">{s.step}</span>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Winning Tips</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tips.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <div className="text-primary mb-2">{t.icon}</div>
                <h3 className="text-sm font-bold text-foreground mb-1">{t.title}</h3>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scoring */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Scoring System</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-secondary">
              <div className="px-4 py-2 text-sm font-bold text-foreground">Action</div>
              <div className="px-4 py-2 text-sm font-bold text-foreground">Points</div>
            </div>
            {[
              ["Run scored", "+1"],
              ["Boundary (4)", "+1 bonus"],
              ["Six", "+2 bonus"],
              ["Wicket (bowler)", "+25"],
              ["Maiden over", "+8"],
              ["Catch", "+8"],
              ["Stumping", "+12"],
              ["Run out", "+6"],
            ].map(([action, pts]) => (
              <div key={action} className="grid grid-cols-2 border-t border-border">
                <div className="px-4 py-2 text-sm text-muted-foreground">{action}</div>
                <div className="px-4 py-2 text-sm font-semibold text-primary">{pts}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="mb-6 bg-card border border-border rounded-lg p-4">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Fantasy Cricket on Babu8</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Babu8 offers India's most exciting fantasy cricket contests for IPL 2026, T20 World Cup, and all major bilateral series. Create your fantasy team of 11 real cricket players and earn points based on their actual match performances.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            With daily contests, mega leagues, and head-to-head battles, there's something for every fantasy cricket enthusiast. Use our expert tips and player analysis to build winning teams consistently.
          </p>
        </section>

        <div className="text-center">
          <Link to="/cricket" className="inline-block border border-primary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
            ← Live Cricket Odds
          </Link>
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default FantasyCricket;
