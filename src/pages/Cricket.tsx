import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Trophy, TrendingUp, Star, Users, Shield, Smartphone, Zap } from "lucide-react";
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
  { icon: <TrendingUp size={20} />, title: "Live Cricket Markets", desc: "Live cricket markets updated in real time" },
  { icon: <Trophy size={20} />, title: "Top Tournaments", desc: "Competitive odds across major tournaments" },
  { icon: <Zap size={20} />, title: "Fast Payments", desc: "Fast deposits and quick withdrawals" },
  { icon: <Smartphone size={20} />, title: "Mobile-Friendly", desc: "Optimized interface for all devices" },
  { icon: <Shield size={20} />, title: "Secure Platform", desc: "Safe and encrypted platform" },
  { icon: <Users size={20} />, title: "24/7 Support", desc: "24/7 customer support always available" },
  { icon: <Star size={20} />, title: "Easy Registration", desc: "Easy registration process for new users" },
  { icon: <Star size={20} />, title: "Secure Methods", desc: "Secure payment methods accepted" },
];

const tournaments = [
  "Indian Premier League (IPL)",
  "ICC Cricket World Cup",
  "ICC Champions Trophy",
  "ICC T20 World Cup",
  "Test Championship",
  "Asia Cup",
  "Big Bash League (BBL)",
  "Pakistan Super League (PSL)",
  "SA20 League",
  "Caribbean Premier League (CPL)",
  "International Test Matches",
  "One Day Internationals (ODIs)",
  "T20 Internationals",
];

const markets = [
  "Match Winner", "Toss Winner", "Top Batsman", "Top Bowler",
  "Total Runs", "Team Totals", "Session Markets", "Over-by-Over Markets",
  "Player Performance Markets", "First Wicket", "Highest Opening Partnership",
  "Total Sixes", "Total Fours",
];

const faqs = [
  {
    q: "What is online cricket betting?",
    a: "Online cricket betting allows users to place predictions on various cricket match outcomes through a secure online platform. Depending on the available markets, users can choose from match winner, toss winner, top batsman, total runs, and many other options before or during a live match.",
  },
  {
    q: "Can I bet on live cricket matches?",
    a: "Yes. Babu8 offers live cricket betting markets where odds are updated throughout the match. As the game progresses, users can access different betting options based on the current match situation, making live betting more interactive and exciting.",
  },
  {
    q: "Which cricket tournaments can I follow on Babu8?",
    a: "Babu8 covers many of the world's most popular cricket tournaments, including the Indian Premier League (IPL), ICC Cricket World Cup, ICC T20 World Cup, Asia Cup, Big Bash League (BBL), Caribbean Premier League (CPL), Pakistan Super League (PSL), Test matches, ODIs, and T20 Internationals.",
  },
  {
    q: "What cricket betting markets are available?",
    a: "Users can access a variety of betting markets, including Match Winner, Toss Winner, Top Batsman, Top Bowler, Team Total Runs, Total Match Runs, Session Betting, Over-by-Over Markets, Player Performance Markets, and Highest Opening Partnership. The available markets may vary depending on the match.",
  },
  {
    q: "Is Babu8 available on mobile devices?",
    a: "Yes. Babu8 is fully optimized for smartphones and tablets. Whether you use Android or iPhone, you can access live cricket markets, monitor matches, and manage your account without downloading additional software.",
  },
  {
    q: "How do live cricket odds work?",
    a: "Live cricket odds change continuously during a match based on the current score, wickets, overs remaining, player performances, and other match conditions. This allows users to explore different betting opportunities as the game unfolds.",
  },
  {
    q: "Is registration on Babu8 simple?",
    a: "Yes. Registering on Babu8 is designed to be quick and straightforward. After completing the registration process, users can securely access the platform and explore available cricket markets.",
  },
  {
    q: "Is my personal information secure?",
    a: "Yes. Babu8 uses modern encryption technology and secure servers to help protect user accounts, personal information, and financial transactions.",
  },
  {
    q: "Can I watch live cricket scores while betting?",
    a: "Yes. Users can follow live score updates and match progress while accessing live betting markets, helping them stay informed throughout the game.",
  },
  {
    q: "Does Babu8 offer betting on international and domestic cricket?",
    a: "Yes. Babu8 provides markets for both international fixtures and domestic leagues, allowing users to enjoy action from major cricket competitions throughout the year.",
  },
  {
    q: "Can beginners use Babu8 for cricket betting?",
    a: "Absolutely. The platform features a clean and user-friendly interface that makes it easy for new users to navigate cricket markets, explore available options, and manage their accounts.",
  },
  {
    q: "What payment methods are supported?",
    a: "Babu8 supports secure payment methods for deposits and withdrawals. Available options may vary depending on your location and account preferences.",
  },
  {
    q: "How often are cricket betting odds updated?",
    a: "Cricket odds are updated in real time based on live match events such as wickets, boundaries, partnerships, required run rate, and overs remaining.",
  },
  {
    q: "Can I bet before the match starts?",
    a: "Yes. Pre-match cricket betting markets are available before the first ball is bowled. Users can choose from various betting options before live betting begins.",
  },
  {
    q: "Why is live cricket betting popular?",
    a: "Live cricket betting offers a dynamic experience because users can react to changing match conditions. Real-time odds and multiple market options make every over more engaging.",
  },
  {
    q: "Does Babu8 provide a secure betting environment?",
    a: "Yes. Security is a priority at Babu8. The platform uses encrypted connections, secure payment processing, and account protection measures to provide a safe user experience.",
  },
  {
    q: "Can I access cricket betting 24/7?",
    a: "Yes. The platform is available around the clock, allowing users to access cricket markets whenever matches are scheduled across different time zones.",
  },
  {
    q: "Are there different betting options for Test, ODI, and T20 matches?",
    a: "Yes. Babu8 offers betting markets for all major cricket formats, including Test matches, One Day Internationals (ODIs), and T20 games. Available markets may differ based on the match format.",
  },
  {
    q: "How can I improve my cricket betting decisions?",
    a: "Many users improve their decisions by reviewing team form, player statistics, pitch reports, weather conditions, head-to-head records, and recent performances before placing bets. Responsible betting and informed decision-making are always recommended.",
  },
  {
    q: "Why choose Babu8 for online cricket betting in India?",
    a: "Babu8 provides a fast, secure, and mobile-friendly platform with live cricket betting markets, competitive odds, multiple payment options, and coverage of major domestic and international cricket tournaments. Whether you're following the IPL or global cricket events, Babu8 offers a smooth and convenient online cricket betting experience.",
  },
];

const Cricket = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Online Cricket Betting in India | Live Cricket Betting | Babu8</title>
        <meta name="description" content="Enjoy online cricket betting in India with Babu8. Access live cricket betting, top tournaments, competitive odds, secure payments, and fast gameplay." />
        <link rel="canonical" href={`${SITE_URL}/cricket`} />
        <meta property="og:title" content="Online Cricket Betting in India | Live Cricket Betting | Babu8" />
        <meta property="og:description" content="Enjoy online cricket betting in India with Babu8. Access live cricket betting, top tournaments, competitive odds, secure payments, and fast gameplay." />
        <meta property="og:url" content={`${SITE_URL}/cricket`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        })}</script>
      </Helmet>

      <Header />

      <main className="px-4 md:px-8 py-6 pb-24 md:pb-10 max-w-6xl mx-auto">
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
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">Cricket Betting Online in India – Live Cricket Odds, Match Markets &amp; Secure Gameplay</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-5">IPL · T20 World Cup · ODIs · Test Matches — all in one place</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Bet on Cricket Now
          </a>
        </div>

        {/* Intro */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Experience Online Cricket Action with Babu8</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Cricket is more than just a sport in India—it's a passion followed by millions every day. At Babu8, you can enjoy a seamless online cricket experience with live match markets, competitive odds, and an intuitive interface designed for both beginners and experienced users. Whether you're following international tournaments, domestic leagues, or franchise competitions, Babu8 keeps you connected to every ball, wicket, and boundary.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our platform is optimized for desktop and mobile devices, allowing you to access live cricket markets anytime, anywhere. With fast loading speeds, secure transactions, and a user-friendly dashboard, Babu8 delivers a premium cricket experience.
          </p>
        </section>

        {/* Upcoming Matches */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Upcoming Matches</h2>
          <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {matches.map((m, i) => (
              <a
                key={i}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded">{m.status}</span>
                  <span className="text-[10px] text-muted-foreground">{m.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-semibold text-foreground">{m.team1}</p>
                    <p className="text-xs text-muted-foreground">vs</p>
                    <p className="text-sm md:text-base font-semibold text-foreground">{m.team2}</p>
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

        {/* Why Choose Babu8 */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Why Choose Babu8 for Cricket?</h2>
          <p className="text-sm text-muted-foreground mb-4">Babu8 is built to provide a smooth and reliable platform for cricket enthusiasts. We focus on performance, security, and ease of use, ensuring that every user enjoys a hassle-free experience.</p>
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

        {/* Tournaments */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Cricket Tournaments Available</h2>
          <p className="text-sm text-muted-foreground mb-4">At Babu8, you can follow and enjoy markets from some of the world's biggest cricket events, including:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tournaments.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Live Markets */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Live Cricket Markets</h2>
          <p className="text-sm text-muted-foreground mb-4">Babu8 provides a wide variety of cricket markets, allowing users to follow every stage of the game. Popular markets include:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {markets.map((m, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {m}
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Experience */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Mobile Cricket Experience</h2>
          <p className="text-sm text-muted-foreground mb-3">Stay connected wherever you are with Babu8's responsive platform. Benefits include:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
            {["Instant access from any smartphone", "Fast login", "Live score updates", "Real-time market changes", "Quick navigation", "Secure account management"].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">No complicated setup is required—simply log in and enjoy the action.</p>
        </section>

        {/* Safe & Secure */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Safe &amp; Secure Platform</h2>
          <p className="text-sm text-muted-foreground mb-3">Your privacy and security remain our priority. Babu8 offers:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {["SSL encrypted connection", "Protected user information", "Secure payment processing", "Reliable account verification", "Safe login system"].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </section>

        {/* Fast Deposits */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Fast Deposits &amp; Withdrawals</h2>
          <p className="text-sm text-muted-foreground mb-3">Managing your account is simple with multiple payment options. Advantages include:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {["Quick deposits", "Fast withdrawals", "Secure transactions", "Multiple banking methods", "Easy account management"].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </section>

        {/* Why Cricket Fans Prefer */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Why Cricket Fans Prefer Babu8</h2>
          <p className="text-sm text-muted-foreground mb-3">Thousands of cricket fans choose Babu8 because it offers:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {["Excellent website performance", "Live cricket coverage", "Competitive odds", "Easy navigation", "Mobile compatibility", "Secure platform", "Responsive customer support", "Regular platform improvements"].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-sm md:text-base font-bold text-foreground mb-2">{i + 1}. {faq.q}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
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
