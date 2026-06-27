import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Video, Shield, Clock, Wifi, Smartphone, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const highlights = [
  "Real-time live dealer games",
  "High-definition live streaming",
  "Mobile-friendly platform",
  "Fast and smooth gameplay",
  "Professional live dealers",
  "Easy game navigation",
  "Secure gaming environment",
  "Available across major devices",
  "Beginner-friendly interface",
  "Regularly updated game collection",
];

const games = [
  {
    title: "Teen Patti Live",
    desc: "One of India's most popular card games, Teen Patti Live brings the traditional game to an online live table. Enjoy fast-paced rounds, interactive gameplay, and the excitement of competing in real time.",
  },
  {
    title: "Andar Bahar Live",
    desc: "A simple yet thrilling Indian card game where players predict whether the matching card will appear on the Andar or Bahar side. Its easy rules make it a favorite among new and experienced players alike.",
  },
  {
    title: "Live Blackjack",
    desc: "Blackjack combines strategy and decision-making. The objective is to build a hand closer to 21 than the dealer without exceeding it, making it one of the most popular live casino games worldwide.",
  },
  {
    title: "Live Baccarat",
    desc: "Baccarat offers simple gameplay with three betting options—Player, Banker, or Tie. Its straightforward rules and fast rounds make it ideal for beginners and experienced players.",
  },
  {
    title: "Casino Poker",
    desc: "Poker enthusiasts can enjoy live poker variants featuring professional dealers and interactive gameplay that recreates the atmosphere of a land-based casino.",
  },
  {
    title: "Dragon Tiger",
    desc: "Dragon Tiger is a fast-paced card game with simple rules and quick rounds. Players predict whether the Dragon or Tiger hand will have the higher card.",
  },
];

const benefits = [
  { icon: <Users size={20} />, title: "Authentic Casino Atmosphere", desc: "Experience real dealers, professional gaming tables, and live interaction without leaving your home" },
  { icon: <Video size={20} />, title: "Real-Time Gameplay", desc: "Watch every card dealt live through high-quality video streaming for a more immersive gaming experience" },
  { icon: <Zap size={20} />, title: "Easy to Learn", desc: "Many live card games have straightforward rules, making them suitable for players of all experience levels" },
  { icon: <Smartphone size={20} />, title: "Play Anywhere", desc: "Access live card games on Android, iPhone, tablets, or desktop browsers without downloading additional software" },
  { icon: <Shield size={20} />, title: "Wide Game Selection", desc: "Choose from classic Indian card games and internationally recognized casino favorites to match your playing style" },
];

const steps = [
  { step: "01", title: "Create Your Account", desc: "Sign up using the required registration details" },
  { step: "02", title: "Visit the Live Card Section", desc: "Browse the collection of available live card games" },
  { step: "03", title: "Choose Your Favorite Game", desc: "Select Teen Patti, Andar Bahar, Blackjack, Baccarat, Poker, or Dragon Tiger" },
  { step: "04", title: "Join the Live Table", desc: "Enter the game and enjoy live dealer action with real-time gameplay" },
];

const tips = [
  "Learn the rules before joining a table",
  "Begin with games that suit your experience level",
  "Understand basic strategies for games like Blackjack",
  "Stay focused during live rounds",
  "Set a personal entertainment budget",
  "Take breaks during longer gaming sessions",
  "Play responsibly at all times",
];

const faqs = [
  {
    q: "What are live card games?",
    a: "Live card games are casino games hosted by professional dealers and streamed in real time. Players can watch the action live while participating through an online platform.",
  },
  {
    q: "Which live card games are available on Babu8?",
    a: "The platform includes popular games such as Teen Patti Live, Andar Bahar Live, Live Blackjack, Live Baccarat, Dragon Tiger, and Casino Poker.",
  },
  {
    q: "Can I play live card games on my mobile phone?",
    a: "Yes. Babu8 is fully optimized for smartphones and tablets, allowing you to enjoy live card games from virtually anywhere with an internet connection.",
  },
  {
    q: "Are live dealers real?",
    a: "Yes. Live dealer games are hosted by trained dealers who manage the games in real time through professional studio broadcasts.",
  },
  {
    q: "Which live card game is best for beginners?",
    a: "Andar Bahar and Baccarat are often preferred by beginners because of their simple rules, while Teen Patti is familiar to many Indian players.",
  },
  {
    q: "Do live card games require strategy?",
    a: "Some games, such as Blackjack and Poker, involve strategic decision-making, while others rely more on straightforward gameplay.",
  },
  {
    q: "Is the live gaming experience different from regular online games?",
    a: "Yes. Live card games use real dealers and real-time video streaming, creating a more authentic and interactive casino environment than standard digital games.",
  },
  {
    q: "Why choose Babu8 Live Card Games?",
    a: "Babu8 offers a smooth, secure, and mobile-friendly platform with a diverse collection of live card games, professional dealers, HD streaming, and an intuitive interface designed to provide an engaging online casino experience.",
  },
];

const LiveCard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Live Card Games Online India | Play Teen Patti, Blackjack &amp; Baccarat on Babu8</title>
        <meta name="description" content="Play live card games online with Babu8. Enjoy Teen Patti Live, Andar Bahar, Blackjack, Baccarat, Dragon Tiger, and Poker with professional live dealers, HD streaming, and a secure mobile-friendly platform." />
        <link rel="canonical" href={`${SITE_URL}/live-card`} />
        <meta property="og:title" content="Live Card Games Online India | Play Teen Patti, Blackjack &amp; Baccarat on Babu8" />
        <meta property="og:description" content="Play live card games online with Babu8. Enjoy Teen Patti Live, Andar Bahar, Blackjack, Baccarat, Dragon Tiger, and Poker with professional live dealers, HD streaming, and a secure mobile-friendly platform." />
        <meta property="og:url" content={`${SITE_URL}/live-card`} />
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
            <li className="text-foreground font-medium">Live Card</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">Live Card Casino Games in India – Experience Real-Time Action on Babu8</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-5">Play Live Card Games with Real Dealers</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Play Live Card Games Now
          </a>
        </div>

        {/* Intro */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Play Live Card Games with Real Dealers</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Bring the excitement of a real casino to your screen with Babu8 Live Card Games. Our live gaming section lets you enjoy classic card games streamed in real time with professional dealers, high-quality video, and smooth gameplay. Whether you're a fan of traditional Indian card games or international casino classics, Babu8 offers an immersive experience that combines convenience with authentic casino entertainment.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Play from your desktop, smartphone, or tablet and enjoy live card games whenever you want. Every game is designed to provide an engaging and interactive environment where you can focus on strategy, quick decisions, and entertainment.
          </p>
        </section>

        {/* Why Choose */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Why Choose Babu8 Live Card Games?</h2>
          <p className="text-sm text-muted-foreground mb-4">Babu8 is built to deliver a premium live gaming experience with reliable performance and easy navigation.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Games */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Popular Live Card Games Available</h2>
          <p className="text-sm text-muted-foreground mb-4">Explore a variety of exciting live card games on Babu8.</p>
          <div className="space-y-4">
            {games.map((game, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{game.title}</h3>
                <p className="text-sm text-muted-foreground">{game.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Benefits of Playing Live Card Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <div className="text-primary mb-2">{b.icon}</div>
                <h3 className="text-sm font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">How to Start Playing</h2>
          <p className="text-sm text-muted-foreground mb-4">Getting started on Babu8 is quick and easy.</p>
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
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Tips for Better Live Card Gaming</h2>
          <p className="text-sm text-muted-foreground mb-3">Improve your overall experience with these helpful tips:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {tip}
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Experience */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Mobile Live Card Experience</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The Babu8 platform is fully optimized for mobile devices, allowing you to enjoy uninterrupted live card gaming wherever you are. The responsive design ensures smooth navigation, quick loading times, and high-quality streaming across different screen sizes.
          </p>
        </section>

        {/* Responsible Gaming */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Responsible Gaming</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Live card games are designed for entertainment. Always play responsibly by setting personal limits, managing your time wisely, and treating gaming as a recreational activity. Responsible play helps ensure that your experience remains enjoyable.
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
