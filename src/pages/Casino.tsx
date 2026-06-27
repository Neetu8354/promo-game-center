import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Spade, Dice1, Video, Gamepad2, Smartphone, Shield, Zap, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const benefits = [
  "Wide selection of casino games",
  "Smooth gameplay across devices",
  "Mobile-friendly platform",
  "Fast account registration",
  "Secure user experience",
  "Modern game interface",
  "Live dealer gaming options",
  "Regularly updated game library",
  "Easy-to-use dashboard",
  "Responsible gaming support",
];

const features = [
  { icon: <Smartphone size={20} />, title: "Mobile Compatibility", desc: "Access casino games on Android, iPhone, tablets, or desktop browsers without compromising performance" },
  { icon: <Zap size={20} />, title: "Fast Loading Games", desc: "Optimized technology helps games load quickly, reducing waiting time and improving the overall experience" },
  { icon: <Users size={20} />, title: "Modern User Interface", desc: "A clean layout allows players to easily browse games, categories, and new releases" },
  { icon: <Shield size={20} />, title: "Secure Platform", desc: "Babu8 uses modern security practices to help protect user accounts and personal information during gameplay" },
  { icon: <Video size={20} />, title: "Extensive Game Collection", desc: "The platform continually expands its game library, giving players access to a broad variety of casino entertainment" },
];

const gameCategories = [
  {
    title: "Live Casino",
    desc: "Enjoy real-time casino action with professional live dealers. Play classic casino games while interacting in a live gaming environment that recreates the atmosphere of a traditional casino.",
    games: ["Live Roulette", "Live Blackjack", "Live Baccarat", "Dragon Tiger", "Teen Patti", "Andar Bahar"],
  },
  {
    title: "Slot Games",
    desc: "Slot games remain one of the most popular casino categories thanks to their engaging themes, exciting features, and simple gameplay.",
    games: ["Classic Slots", "Video Slots", "Adventure Slots", "Fruit Slots", "Fantasy Slots", "Progressive Jackpot Slots"],
  },
  {
    title: "Table Games",
    desc: "Table games continue to be favorites among players who enjoy strategy and skill.",
    games: ["Blackjack", "Roulette", "Baccarat", "Poker Variants", "Sic Bo", "Casino Hold'em"],
  },
  {
    title: "Crash Games",
    desc: "Crash games combine quick decision-making with fast-paced gameplay. These games have become increasingly popular among players looking for a different casino experience.",
    games: [],
  },
  {
    title: "Instant Win Games",
    desc: "Instant games offer quick rounds and simple gameplay, making them perfect for players who enjoy short gaming sessions.",
    games: [],
  },
];

const steps = [
  { step: "01", title: "Create Your Account", desc: "Register by providing the required information" },
  { step: "02", title: "Access the Casino Section", desc: "Browse through the available casino categories" },
  { step: "03", title: "Select Your Favorite Game", desc: "Choose from live casino, slots, table games, or other entertainment options" },
  { step: "04", title: "Start Playing", desc: "Launch your selected game and enjoy the experience through an intuitive interface" },
];

const tips = [
  "Learn the rules before playing",
  "Start with games that match your experience level",
  "Explore different game categories",
  "Set a personal entertainment budget",
  "Take regular breaks during longer sessions",
  "Play responsibly and avoid chasing losses",
];

const faqs = [
  {
    q: "What is an online casino?",
    a: "An online casino is a digital platform where players can enjoy games such as slots, blackjack, roulette, baccarat, poker, and live dealer games from their computer or mobile device.",
  },
  {
    q: "What casino games are available on Babu8?",
    a: "Babu8 offers a variety of casino entertainment, including Live Casino, Slot Games, Blackjack, Roulette, Baccarat, Poker, Teen Patti, Andar Bahar, Crash Games, and Instant Games.",
  },
  {
    q: "Can I play on my mobile phone?",
    a: "Yes. Babu8 is fully optimized for smartphones and tablets, allowing you to enjoy casino games anytime and anywhere.",
  },
  {
    q: "Are live casino games available?",
    a: "Yes. Live casino games feature professional dealers and real-time gameplay, providing an immersive casino experience.",
  },
  {
    q: "Which casino game is best for beginners?",
    a: "Many new players begin with slot games because they have simple gameplay, while blackjack and roulette are also popular choices once players learn the basic rules.",
  },
  {
    q: "Do I need previous casino experience?",
    a: "No. Most casino games are easy to learn, and beginners can quickly understand the basic rules before playing.",
  },
  {
    q: "How do I choose the right casino game?",
    a: "Choose based on your interests: Slots for simple entertainment, Blackjack for strategic gameplay, Roulette for classic casino action, Baccarat for straightforward rules, Live Casino for real-time interaction.",
  },
  {
    q: "Is Babu8 suitable for both beginners and experienced players?",
    a: "Yes. The platform offers games that appeal to players of different experience levels, from simple slot games to more strategic table games.",
  },
  {
    q: "Does Babu8 regularly add new casino games?",
    a: "The casino library is updated periodically with new titles and game categories to provide players with fresh entertainment options.",
  },
  {
    q: "Why choose Babu8 Casino?",
    a: "Babu8 combines a modern interface, a diverse collection of casino games, mobile compatibility, smooth performance, and a secure gaming environment, making it a convenient destination for players looking to enjoy online casino entertainment.",
  },
];

const Casino = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Online Casino India | Play Live Casino &amp; Slot Games on Babu8</title>
        <meta name="description" content="Explore the Babu8 online casino with live dealer games, slot games, blackjack, roulette, baccarat, poker, Teen Patti, and more. Enjoy a secure, mobile-friendly casino experience with a wide selection of premium games." />
        <link rel="canonical" href={`${SITE_URL}/casino`} />
        <meta property="og:title" content="Online Casino India | Play Live Casino &amp; Slot Games on Babu8" />
        <meta property="og:description" content="Explore the Babu8 online casino with live dealer games, slot games, blackjack, roulette, baccarat, poker, Teen Patti, and more. Enjoy a secure, mobile-friendly casino experience with a wide selection of premium games." />
        <meta property="og:url" content={`${SITE_URL}/casino`} />
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
            <li className="text-foreground font-medium">Casino</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">Online Casino in India  Enjoy Premium Casino Games on Babu8</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-5">Experience Online Casino Entertainment on Babu8</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Play Casino Now
          </a>
        </div>

        {/* Intro */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Experience Online Casino Entertainment on Babu8</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Step into the world of online casino gaming with Babu8, where a wide selection of exciting games meets a smooth and user-friendly platform. Whether you enjoy spinning slot reels, testing your strategy in table games, or interacting with live dealers, Babu8 offers an engaging gaming experience for every type of player.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Designed for modern players, our casino platform provides easy navigation, fast loading speeds, mobile compatibility, and access to a variety of popular casino games. From beginners exploring casino games for the first time to experienced players looking for immersive entertainment, Babu8 delivers a seamless experience across desktop and mobile devices.
          </p>
        </section>

        {/* Why Choose */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Why Choose Babu8 Casino?</h2>
          <p className="text-sm text-muted-foreground mb-4">At Babu8, we focus on creating an enjoyable gaming environment with quality games and a secure platform.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Game Categories */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Explore Our Casino Games</h2>
          <p className="text-sm text-muted-foreground mb-4">No matter your preferred style of play, Babu8 offers something for everyone.</p>
          <div className="space-y-4">
            {gameCategories.map((cat, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cat.desc}</p>
                {cat.games.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {cat.games.map((game, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {game}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">How to Get Started</h2>
          <p className="text-sm text-muted-foreground mb-4">Starting your casino journey on Babu8 is simple.</p>
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

        {/* Features */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Features That Enhance Your Experience</h2>
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

        {/* Tips */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Tips for Enjoying Casino Games</h2>
          <p className="text-sm text-muted-foreground mb-3">To make the most of your gaming experience:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {tip}
              </div>
            ))}
          </div>
        </section>

        {/* Responsible Gaming */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Responsible Gaming</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Casino games are designed for entertainment. Always play responsibly, stay within your personal limits, and ensure gaming remains enjoyable. If gaming stops being fun, take a break and seek support if needed.
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
