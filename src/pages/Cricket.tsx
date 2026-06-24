import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Trophy, TrendingUp, Star, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const matches = [
  { team1: "Mumbai Indians", team2: "Chennai Super Kings", time: "7:30 PM", odds1: "1.85", odds2: "2.10", status: "Today" },
  { team1: "Royal Challengers", team2: "Kolkata Knight Riders", time: "3:30 PM", odds1: "2.20", odds2: "1.75", status: "Tomorrow" },
  { team1: "Delhi Capitals", team2: "Punjab Kings", time: "7:30 PM", odds1: "1.95", odds2: "1.98", status: "Tomorrow" },
  { team1: "Rajasthan Royals", team2: "Sunrisers Hyderabad", time: "3:30 PM", odds1: "2.05", odds2: "1.90", status: "Sat" },
];

const features = [
  { icon: <TrendingUp size={20} />, title: "Live Odds", desc: "Real-time match odds updated ball by ball" },
  { icon: <Trophy size={20} />, title: "IPL 2026", desc: "All IPL matches with in-play betting" },
  { icon: <Star size={20} />, title: "Expert Analysis", desc: "Pre-match analysis and pitch reports" },
  { icon: <Users size={20} />, title: "Fantasy Cricket", desc: "Build teams and win prizes every match" },
];

const Cricket = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cricket Betting & Live Odds - IPL 2026 | Babu88</title>
        <meta name="description" content="Follow live cricket odds, IPL 2026 matches, and in-play betting on Babu88. Real-time scores, expert analysis and the best cricket odds in India." />
        <link rel="canonical" href={`${SITE_URL}/cricket`} />
        <meta property="og:title" content="Cricket Betting & Live Odds - IPL 2026 | Babu88" />
        <meta property="og:description" content="Live cricket odds and IPL 2026 betting on Babu88 India's #1 cricket gaming platform." />
        <meta property="og:url" content={`${SITE_URL}/cricket`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "Babu88 Cricket",
          "url": `${SITE_URL}/cricket`,
          "sport": "Cricket",
          "description": "Live cricket odds and IPL 2026 betting platform"
        })}</script>
      </Helmet>

      <Header />

      <main className="px-3 py-4 pb-20 max-w-lg mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">Cricket</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">🏏 Live Cricket Odds</h1>
          <p className="text-sm text-muted-foreground mb-4">IPL 2026 · T20s · ODIs · Test Matches — all in one place</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Bet on Cricket Now
          </a>
        </div>

        {/* Upcoming Matches */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Upcoming Matches</h2>
          <div className="space-y-2">
            {matches.map((m, i) => (
              <a
                key={i}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-lg p-3 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded">{m.status}</span>
                  <span className="text-[10px] text-muted-foreground">{m.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{m.team1}</p>
                    <p className="text-[10px] text-muted-foreground">vs</p>
                    <p className="text-sm font-semibold text-foreground">{m.team2}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-center">
                      <div className="bg-secondary rounded px-3 py-1.5 text-sm font-bold text-foreground">{m.odds1}</div>
                      <div className="text-[9px] text-muted-foreground mt-0.5">1</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary rounded px-3 py-1.5 text-sm font-bold text-foreground">{m.odds2}</div>
                      <div className="text-[9px] text-muted-foreground mt-0.5">2</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Why Babu88 Cricket?</h2>
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

        {/* SEO Content */}
        <section className="mb-6 bg-card border border-border rounded-lg p-4">
          <h2 className="font-heading text-base font-bold text-foreground mb-2">Cricket Betting at Babu88</h2>
          <p className="text-xs text-muted-foreground leading-relaxed mb-2">
            Babu88 is India's premier destination for live cricket odds covering IPL 2026, T20 World Cup, ODI series, and Test matches. Our platform provides real-time ball-by-ball odds with the best rates in the Indian market.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            From match winner markets to player performance bets, enjoy comprehensive cricket coverage with instant deposits and withdrawals in INR. Join over 1 lakh cricket fans already on Babu88.
          </p>
        </section>

        <div className="text-center">
          <Link to="/fantasy-cricket" className="inline-block border border-primary text-primary px-6 py-2.5 rounded-full text-sm font-bold mr-3 hover:bg-primary hover:text-primary-foreground transition-colors">
            Fantasy Cricket →
          </Link>
          <Link to="/blog" className="inline-block border border-border text-muted-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:text-foreground transition-colors">
            Cricket Blog
          </Link>
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default Cricket;
