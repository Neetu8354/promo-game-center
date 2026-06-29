import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Zap, Star, RotateCcw, Gift, Smartphone, Shield, Users, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const advantages = [
  "Extensive collection of online slot games",
  "Optimized for Indian mobile users",
  "Fast and responsive platform",
  "Modern user interface",
  "Wide variety of slot themes",
  "Easy game navigation",
  "High-quality graphics",
  "Exciting bonus features",
  "Secure gaming environment",
  "Regularly updated game library",
  "Quick access across all devices",
  "24/7 customer support",
];

const gameTypes = [
  {
    title: "Classic Slot Games",
    desc: "Classic slots feature traditional symbols such as fruits, lucky sevens, bars, and bells. Their straightforward gameplay makes them an excellent choice for beginners and players who appreciate timeless slot machine entertainment.",
  },
  {
    title: "Video Slot Games",
    desc: "Video slots combine advanced graphics, immersive animations, engaging sound effects, and creative themes. These games often include bonus rounds, free spins, expanding wilds, and interactive features that make every spin exciting.",
  },
  {
    title: "Progressive Jackpot Slots",
    desc: "Progressive jackpot slot games feature prize pools that grow over time, adding extra excitement for players who enjoy chasing larger rewards.",
  },
  {
    title: "Megaways Slot Games",
    desc: "Megaways slots use dynamic reel layouts that can create thousands of possible winning combinations during gameplay, making every spin unique.",
  },
  {
    title: "Adventure & Fantasy Slots",
    desc: "Explore exciting worlds inspired by mythology, ancient civilizations, pirates, wildlife, fantasy kingdoms, treasure hunts, and magical adventures.",
  },
  {
    title: "Fruit Slot Games",
    desc: "Fruit-themed slot games continue to be favourites among Indian players due to their familiar symbols, colourful visuals, and simple gameplay mechanics.",
  },
];

const slotFeatures = [
  "Free Spins",
  "Wild Symbols",
  "Scatter Symbols",
  "Multipliers",
  "Bonus Rounds",
  "Cascading Reels",
  "Sticky Wilds",
  "Expanding Wilds",
  "Mystery Symbols",
  "Bonus Wheel",
  "Auto Spin",
  "Interactive Mini Games",
  "Progressive Jackpots",
  "Multiple Paylines",
  "High-Quality Animations",
];

const steps = [
  { step: "01", title: "Create your Babu8 account" },
  { step: "02", title: "Log in securely" },
  { step: "03", title: "Visit the Slot Games section" },
  { step: "04", title: "Browse different slot categories" },
  { step: "05", title: "Select your preferred game" },
  { step: "06", title: "Start spinning and enjoy an exciting gaming experience" },
];

const mobileBenefits = [
  "Fast loading",
  "Touch-friendly controls",
  "HD graphics",
  "Easy navigation",
  "Mobile optimization",
  "Seamless gameplay",
  "Instant game access",
];

const themes = [
  "Egyptian Adventures",
  "Pirate Treasure",
  "Jungle Safari",
  "Ancient Civilizations",
  "Fantasy Kingdoms",
  "Dragons",
  "Lucky Fruits",
  "Ocean Adventures",
  "Wild West",
  "Mythological Worlds",
  "Space Exploration",
  "Luxury Themes",
  "Animal Kingdom",
  "Mystic Magic",
  "Adventure Expeditions",
];

const popularityReasons = [
  "Easy gameplay",
  "Entertaining graphics",
  "Fast game sessions",
  "Wide game selection",
  "Mobile compatibility",
  "Creative bonus features",
  "Smooth user experience",
  "Exciting visual effects",
  "Innovative game mechanics",
  "Convenient online access",
];

const faqs = [
  {
    q: "What are online slot games?",
    a: "Online slot games are digital reel-based games that feature different themes, symbols, paylines, and entertaining bonus features.",
  },
  {
    q: "Can beginners play slot games?",
    a: "Yes. Most slot games are easy to understand and suitable for beginners.",
  },
  {
    q: "Are slot games available on mobile?",
    a: "Yes. Babu8 supports Android, iPhone, tablets, and desktop devices.",
  },
  {
    q: "What types of slot games are available?",
    a: "Classic slots, video slots, progressive jackpot slots, Megaways slots, and themed slot games.",
  },
  {
    q: "What are free spins?",
    a: "Free spins are bonus features that provide additional spins during gameplay under certain game conditions.",
  },
  {
    q: "What are Wild symbols?",
    a: "Wild symbols can substitute for other symbols to help complete winning combinations.",
  },
  {
    q: "What are Scatter symbols?",
    a: "Scatter symbols often unlock bonus features or free spin rounds.",
  },
  {
    q: "Are slot games easy to play?",
    a: "Yes. Slot games have simple controls and are designed for players of all experience levels.",
  },
  {
    q: "Can I play slot games on Android?",
    a: "Yes. Babu8 is fully compatible with Android devices.",
  },
  {
    q: "Do slot games include bonus rounds?",
    a: "Many slot games feature interactive bonus rounds, mini-games, and multipliers.",
  },
  {
    q: "What are progressive jackpot slots?",
    a: "These games have jackpots that can increase over time, adding extra excitement to gameplay.",
  },
  {
    q: "What makes video slots different?",
    a: "Video slots include advanced graphics, animations, and multiple bonus features compared to classic slots.",
  },
  {
    q: "Can I switch between different slot games?",
    a: "Yes. You can explore a wide range of slot games available on Babu8.",
  },
  {
    q: "Which devices support Babu8 slot games?",
    a: "Android phones, iPhones, tablets, laptops, and desktop computers.",
  },
  {
    q: "Are there adventure-themed slot games?",
    a: "Yes. Babu8 offers games inspired by mythology, pirates, wildlife, fantasy, and more.",
  },
  {
    q: "Why are slot games popular in India?",
    a: "They are easy to play, visually engaging, mobile-friendly, and available in many exciting themes.",
  },
  {
    q: "Does Babu8 update its slot game collection?",
    a: "Yes. New slot titles are added regularly to keep the experience fresh.",
  },
  {
    q: "Is the platform mobile-friendly?",
    a: "Yes. Every slot game is optimized for smooth mobile performance.",
  },
  {
    q: "Is Babu8 suitable for new players?",
    a: "Yes. The platform is designed for both beginners and experienced players.",
  },
  {
    q: "Why should I choose Babu8 for online slot games in India?",
    a: "Babu8 offers a wide variety of online slot games, mobile compatibility, fast performance, secure access, engaging themes, and a seamless gaming experience designed for Indian players.",
  },
];

const SlotGames = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Play Online Slot Games in India | Best Slot Games at Babu8</title>
        <meta name="description" content="Play online slot games in India with Babu8. Explore classic slots, video slots, jackpot slots, exciting themes, mobile gameplay, and a seamless gaming experience." />
        <link rel="canonical" href={`${SITE_URL}/slot-games`} />
        <meta property="og:title" content="Play Online Slot Games in India | Best Slot Games at Babu8" />
        <meta property="og:description" content="Play online slot games in India with Babu8. Explore classic slots, video slots, jackpot slots, exciting themes, mobile gameplay, and a seamless gaming experience." />
        <meta property="og:url" content={`${SITE_URL}/slot-games`} />
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
            <li className="text-foreground font-medium">Slot Games</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">Play Online Slot Games in India on Babu8</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-5">Discover Exciting Online Slot Games for Indian Players</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Play Slot Games Now
          </a>
        </div>

        {/* Intro */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Discover Exciting Online Slot Games for Indian Players</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            If you're looking for the best online slot games in India, Babu8 offers an exciting collection of modern and classic slot games designed for an engaging gaming experience. Whether you enjoy spinning traditional fruit reels or exploring immersive video slots with bonus features, our platform provides a wide variety of games for every type of player.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Online slot games have become one of the most popular categories in the Indian gaming community because they are easy to play, visually engaging, and available across desktop and mobile devices. At Babu8, you can browse an ever-growing selection of slot titles featuring unique themes, smooth gameplay, and innovative features.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Whether you are new to slot games or an experienced player, Babu8 delivers a seamless experience with fast loading speeds, user-friendly navigation, and compatibility across Android, iOS, tablets, and desktops.
          </p>
        </section>

        {/* Why Choose */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Why Choose Babu8 for Online Slot Games?</h2>
          <p className="text-sm text-muted-foreground mb-4">Babu8 is built to provide Indian players with a secure, smooth, and enjoyable gaming platform. We focus on delivering a premium user experience with a diverse collection of slot games and modern gaming features.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {advantages.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Game Types */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Explore Different Types of Slot Games</h2>
          <p className="text-sm text-muted-foreground mb-4">Every player has different preferences. That's why Babu8 offers multiple categories of slot games.</p>
          <div className="space-y-4">
            {gameTypes.map((type, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Slot Features */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Exciting Features of Online Slot Games</h2>
          <p className="text-sm text-muted-foreground mb-4">Modern slot games offer much more than spinning reels. Babu8 includes games packed with innovative features that make gameplay even more entertaining.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {slotFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* How to Play */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">How to Play Slot Games Online</h2>
          <p className="text-sm text-muted-foreground mb-4">Getting started is simple.</p>
          <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-3 bg-card border border-border rounded-lg p-4 items-start">
                <span className="text-primary font-heading font-bold text-xl w-10 shrink-0">{s.step}</span>
                <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Experience */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Mobile Slot Games in India</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Indian players increasingly prefer mobile gaming, and Babu8 is fully optimized for smartphones and tablets. Whether you use Android or iPhone, you can access your favourite slot games anytime with a stable internet connection. The responsive interface ensures smooth gameplay without compromising quality.
          </p>
          <p className="text-sm text-muted-foreground mb-3">Benefits include:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {mobileBenefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </section>

        {/* Themes */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Popular Slot Themes</h2>
          <p className="text-sm text-muted-foreground mb-4">Babu8 offers games inspired by a wide range of exciting themes.</p>
          <p className="text-sm text-muted-foreground mb-3">Choose from:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {themes.map((theme, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {theme}
              </div>
            ))}
          </div>
        </section>

        {/* Popularity */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Why Slot Games Are Popular in India</h2>
          <p className="text-sm text-muted-foreground mb-3">The popularity of online slot games continues to grow because they offer:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {popularityReasons.map((reason, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {reason}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            Whether you're looking for online slot games India, video slot games, or mobile slot games, Babu8 provides a platform tailored to Indian players.
          </p>
        </section>

        {/* Safe & Secure */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Safe & Secure Gaming Platform</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            At Babu8, user security is a priority. The platform is designed with secure access, smooth performance, and a user-friendly interface to create a reliable gaming experience.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Players can enjoy uninterrupted gameplay on desktop, tablet, and mobile devices while accessing a diverse library of slot games.
          </p>
        </section>

        {/* Why Indian Players Prefer */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Why Indian Players Prefer Babu8</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Modern slot games",
              "Mobile-first design",
              "Regular game updates",
              "Intuitive navigation",
              "Secure platform",
              "Fast performance",
              "Premium gaming experience",
              "Diverse slot collection",
              "Responsive customer support",
              "Optimized experience for Indian users",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Responsible Gaming */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Responsible Gaming</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Babu8 encourages responsible gaming. Slot games should always be enjoyed for entertainment purposes. We recommend setting personal limits, managing your playtime responsibly, and maintaining a balanced gaming experience.
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
