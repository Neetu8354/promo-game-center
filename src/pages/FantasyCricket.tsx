import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Trophy, Star, Zap, Gift, Users, Smartphone, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const steps = [
  { step: "01", title: "Select the Match", desc: "Choose from available cricket fixtures, including domestic leagues and international tournaments" },
  { step: "02", title: "Pick 11 Players", desc: "Select your squad while maintaining the required player combinations and team balance" },
  { step: "03", title: "Choose Captain & Vice-Captain", desc: "Your captain usually earns double points, while the vice-captain receives a points multiplier" },
  { step: "04", title: "Confirm Your Team", desc: "Review your selections and finalize your lineup before the match starts" },
  { step: "05", title: "Track Live Performance", desc: "Watch your fantasy points update as the real match unfolds" },
];

const whyChoose = [
  "User-friendly fantasy cricket platform",
  "Create your dream team in minutes",
  "Covers major domestic and international cricket tournaments",
  "Secure and fast platform",
  "Mobile-optimized experience",
  "Easy team management",
  "Responsible gaming environment",
  "Regular fantasy contests",
];

const features = [
  { icon: <Zap size={20} />, title: "Fast Registration", desc: "Get started quickly and begin creating your fantasy teams" },
  { icon: <Smartphone size={20} />, title: "Mobile Friendly", desc: "Play anytime from your smartphone, tablet, or desktop" },
  { icon: <Users size={20} />, title: "Smooth User Experience", desc: "Simple navigation helps you create teams without hassle" },
  { icon: <Shield size={20} />, title: "Secure Platform", desc: "Your account and information remain protected through secure technology" },
  { icon: <Trophy size={20} />, title: "Regular Match Coverage", desc: "Participate in fantasy contests across major cricket events throughout the year" },
];

const tournaments = [
  "Indian Premier League (IPL)",
  "ICC Cricket World Cup",
  "ICC Champions Trophy",
  "ICC T20 World Cup",
  "Asia Cup",
  "Indian domestic tournaments",
  "International bilateral series",
  "Big Bash League",
  "Caribbean Premier League",
  "The Hundred",
  "SA20",
  "Major League Cricket",
];

const pointsSystem = [
  { action: "Runs scored", points: "+1" },
  { action: "Boundaries and sixes", points: "Bonus" },
  { action: "Wickets taken", points: "+25" },
  { action: "Catches", points: "+8" },
  { action: "Run-outs", points: "+6" },
  { action: "Stumpings", points: "+12" },
  { action: "Economy rate", points: "Bonus" },
  { action: "Strike rate", points: "Bonus" },
  { action: "Player of the Match", points: "Bonus" },
];

const strategyTips = [
  { title: "Study Recent Player Form", desc: "Players in good form are generally more reliable fantasy picks" },
  { title: "Check Pitch Reports", desc: "Different pitches favor different types of players" },
  { title: "Review Team News", desc: "Always verify the final playing XI before the contest begins" },
  { title: "Balance Your Squad", desc: "Include reliable batters, quality bowlers, all-rounders, and an effective wicketkeeper" },
  { title: "Don't Ignore All-Rounders", desc: "All-rounders can contribute with both bat and ball, increasing their fantasy scoring potential" },
  { title: "Monitor Weather Conditions", desc: "Rain interruptions can significantly affect player performances" },
];

const faqs = [
  {
    q: "What is fantasy cricket?",
    a: "Fantasy cricket is a game where you create a virtual team using real cricket players. Your team earns points based on the actual performance of those players during live matches.",
  },
  {
    q: "Is fantasy cricket based on skill?",
    a: "Yes. Successful fantasy cricket relies on player research, match analysis, pitch conditions, and strategic team selection rather than random choices.",
  },
  {
    q: "How many players are required in a fantasy cricket team?",
    a: "Most fantasy contests require selecting 11 players while following position and budget rules.",
  },
  {
    q: "Why is selecting the captain important?",
    a: "The captain usually receives bonus fantasy points, making captain selection one of the most important strategic decisions.",
  },
  {
    q: "Can I edit my fantasy team?",
    a: "Yes. Most fantasy contests allow changes before the official match deadline.",
  },
  {
    q: "Which cricket tournaments are available?",
    a: "You can usually participate in fantasy contests for IPL, ICC events, international series, T20 leagues, and other major cricket competitions.",
  },
  {
    q: "What factors should I consider before selecting players?",
    a: "Consider recent form, playing XI confirmation, pitch report, weather conditions, player role, head-to-head records, and venue statistics.",
  },
  {
    q: "Can beginners play fantasy cricket?",
    a: "Absolutely. Fantasy cricket is suitable for both beginners and experienced cricket fans.",
  },
  {
    q: "How often should I update my fantasy team?",
    a: "You should review and update your team before every match after checking the confirmed playing XI.",
  },
  {
    q: "Why choose Babu8 for fantasy cricket?",
    a: "Babu8 provides an easy-to-use fantasy cricket experience with a modern interface, mobile compatibility, secure access, and coverage of major cricket tournaments, making it simple for cricket fans to build and manage their dream teams.",
  },
];

const FantasyCricket = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fantasy Cricket Online in India | Create Your Dream Team on Babu8</title>
        <meta name="description" content="Play fantasy cricket online with Babu8. Create your dream XI, follow live cricket action, use expert strategies, and enjoy fantasy contests across IPL, ICC tournaments, and international matches." />
        <link rel="canonical" href={`${SITE_URL}/fantasy-cricket`} />
        <meta property="og:title" content="Fantasy Cricket Online in India | Create Your Dream Team on Babu8" />
        <meta property="og:description" content="Play fantasy cricket online with Babu8. Create your dream XI, follow live cricket action, use expert strategies, and enjoy fantasy contests across IPL, ICC tournaments, and international matches." />
        <meta property="og:url" content={`${SITE_URL}/fantasy-cricket`} />
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
            <li className="text-foreground font-medium">Fantasy Cricket</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">Fantasy Cricket Online in India – Build Your Winning Team on Babu8</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-5">Play Fantasy Cricket with Strategy, Skill &amp; Real Match Excitement</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Play Fantasy Cricket Now
          </a>
        </div>

        {/* Intro */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Play Fantasy Cricket with Strategy, Skill &amp; Real Match Excitement</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Fantasy cricket is one of the most exciting ways for cricket fans to enjoy every match. Instead of simply watching the game, you create your own virtual team by selecting players from both competing sides. Your team's performance depends on how those players perform in the real match, making every run, wicket, catch, and six even more exciting.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            At Babu8, you can experience a smooth, mobile-friendly fantasy cricket platform designed for both beginners and experienced fantasy players. Whether it's IPL, ICC tournaments, T20 leagues, ODIs, or Test matches, you can build your dream XI and enjoy the thrill of every contest.
          </p>
        </section>

        {/* Why Choose Babu8 */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Why Choose Babu8 Fantasy Cricket?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* How Fantasy Cricket Works */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">How Fantasy Cricket Works</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Fantasy cricket is a skill-based game where you create a virtual team before the real match begins. Your selected players earn fantasy points based on their real-life performances.
          </p>
          <p className="text-sm text-muted-foreground font-semibold mb-2">Typical fantasy points may be awarded for:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {["Runs scored", "Boundaries and sixes", "Wickets taken", "Catches", "Run-outs", "Stumpings", "Economy rate", "Strike rate", "Player of the Match performances"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            Choosing the right combination of players is essential for achieving a high fantasy score. Successful fantasy players often rely on player form, pitch reports, team balance, and match conditions rather than simply picking the biggest names.
          </p>
        </section>

        {/* Build Your Dream XI */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Build Your Dream XI</h2>
          <p className="text-sm text-muted-foreground mb-4">Creating your fantasy cricket team is simple.</p>
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

        {/* Strategy Tips */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Fantasy Cricket Strategy Tips</h2>
          <p className="text-sm text-muted-foreground mb-4">Winning consistently requires smart planning rather than luck.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategyTips.map((tip, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-sm font-bold text-foreground mb-1">{tip.title}</h3>
                <p className="text-xs text-muted-foreground">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tournaments */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Major Cricket Tournaments Available</h2>
          <p className="text-sm text-muted-foreground mb-4">Enjoy fantasy cricket during:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tournaments.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Features of Babu8 Fantasy Cricket</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <div className="text-primary mb-2">{f.icon}</div>
                <h3 className="text-sm font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsible Gaming */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Responsible Fantasy Gaming</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Fantasy cricket should always be played responsibly. Build teams based on research, strategy, and your knowledge of cricket. Set personal limits, play for entertainment, and avoid making impulsive decisions.
          </p>
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
