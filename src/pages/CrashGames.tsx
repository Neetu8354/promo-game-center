import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, TrendingUp, Shield, Zap, Users, Smartphone, Gamepad2, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const benefits = [
  "Wide collection of online crash games",
  "Mobile-friendly platform",
  "Fast-loading game interface",
  "Responsive gameplay",
  "User-friendly dashboard",
  "Smooth performance on all devices",
  "High-quality graphics",
  "Secure platform",
  "Regular game updates",
  "Easy navigation",
  "Quick account access",
  "Dedicated customer support",
];

const keyFeatures = [
  "Real-time multiplier action",
  "Fast game rounds",
  "Instant gameplay",
  "Mobile compatibility",
  "Smooth animations",
  "User-friendly interface",
  "HD graphics",
  "Responsive controls",
  "Quick loading",
  "Regular updates",
  "Secure platform",
  "Cross-device compatibility",
];

const popularityReasons = [
  "Short gaming sessions",
  "Modern graphics",
  "Interactive gameplay",
  "Easy-to-use controls",
  "Mobile optimization",
  "Fast performance",
  "Smooth interface",
  "Exciting multiplier mechanics",
  "Wide game selection",
  "Convenient online access",
];

const mobileBenefits = [
  "Responsive design",
  "Fast loading speed",
  "Touch-friendly controls",
  "HD display",
  "Smooth gameplay",
  "Easy navigation",
  "Cross-device synchronization",
];

const whyPrefer = [
  "Premium crash games",
  "Optimized performance",
  "Mobile-first experience",
  "Modern interface",
  "Secure access",
  "Fast game loading",
  "Regular platform improvements",
  "Excellent usability",
  "Responsive customer support",
  "Optimized experience for Indian players",
];

const standOut = [
  "Fast performance",
  "Mobile optimization",
  "Easy navigation",
  "Modern game collection",
  "Responsive design",
  "High-quality graphics",
  "Secure environment",
  "Regular content updates",
  "Cross-device compatibility",
];

const faqs = [
  {
    q: "What are crash games?",
    a: "Crash games are fast-paced online games where a multiplier increases throughout each round, creating an exciting gaming experience.",
  },
  {
    q: "Can beginners play crash games?",
    a: "Yes. Crash games have simple gameplay that makes them suitable for beginners.",
  },
  {
    q: "Are crash games available on mobile?",
    a: "Yes. Babu8 supports Android, iPhone, tablets, and desktop devices.",
  },
  {
    q: "Do crash games load quickly?",
    a: "Yes. The platform is optimized for fast loading and smooth performance.",
  },
  {
    q: "Can I play crash games anytime?",
    a: "Yes. Babu8 offers 24/7 access to its crash games.",
  },
  {
    q: "Are crash games easy to understand?",
    a: "Yes. Their straightforward gameplay makes them easy for new players.",
  },
  {
    q: "Which devices support crash games?",
    a: "Android phones, iPhones, tablets, laptops, and desktop computers.",
  },
  {
    q: "Why are crash games popular in India?",
    a: "They offer quick rounds, engaging multiplier mechanics, and mobile-friendly gameplay.",
  },
  {
    q: "Does Babu8 update its crash games?",
    a: "Yes. New games and platform improvements are introduced regularly.",
  },
  {
    q: "Is the platform mobile-friendly?",
    a: "Yes. The website is fully optimized for smartphones and tablets.",
  },
  {
    q: "Is registration simple?",
    a: "Yes. Creating an account is quick and user-friendly.",
  },
  {
    q: "Can I access crash games from anywhere in India?",
    a: "Yes. You can access the platform with a compatible device and internet connection.",
  },
  {
    q: "Is Babu8 suitable for experienced players?",
    a: "Yes. Both beginners and experienced users can enjoy the platform.",
  },
  {
    q: "What makes Babu8 different?",
    a: "Its mobile optimization, smooth interface, diverse game collection, and user-friendly experience.",
  },
  {
    q: "Does Babu8 support desktop users?",
    a: "Yes. The platform is optimized for desktop as well as mobile devices.",
  },
  {
    q: "Are crash games fast-paced?",
    a: "Yes. Each round is designed to be quick and engaging.",
  },
  {
    q: "Can I switch between different games?",
    a: "Yes. You can browse and choose from multiple crash games on the platform.",
  },
  {
    q: "Does Babu8 focus on security?",
    a: "Yes. The platform prioritizes a secure and reliable gaming environment.",
  },
  {
    q: "Is customer support available?",
    a: "Yes. Dedicated customer support is available to assist users.",
  },
  {
    q: "Why choose Babu8 for crash games in India?",
    a: "Babu8 offers a fast, mobile-friendly, secure platform with a growing collection of crash games designed for Indian players.",
  },
];

const CrashGames = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Play Crash Games Online in India | Best Crash Games on Babu8</title>
        <meta name="description" content="Play exciting crash games online in India at Babu8. Explore fast-paced multiplier games, mobile-friendly gameplay, instant access, and an engaging online gaming experience." />
        <link rel="canonical" href={`${SITE_URL}/crash-games`} />
        <meta property="og:title" content="Play Crash Games Online in India | Best Crash Games on Babu8" />
        <meta property="og:description" content="Play exciting crash games online in India at Babu8. Explore fast-paced multiplier games, mobile-friendly gameplay, instant access, and an engaging online gaming experience." />
        <meta property="og:url" content={`${SITE_URL}/crash-games`} />
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
            <li className="text-foreground font-medium">Crash Games</li>
          </ol>
        </nav>

{/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">Play Crash Games Online in India on Babu8</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-5">Experience the Thrill of Online Crash Games in India</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Play Crash Games Now
          </a>
        </div>

        {/* Intro */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Experience the Thrill of Online Crash Games in India</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Looking for the best crash games in India? Welcome to Babu8, where fast-paced gameplay meets exciting multiplier action. Crash games have become one of the fastest-growing categories in online gaming, offering a simple concept with an engaging experience. Every round begins with a rising multiplier, and the challenge is deciding the right moment before the round ends.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Whether you're new to online gaming or already familiar with crash-style games, Babu8 provides a smooth, secure, and mobile-friendly platform designed for Indian players. With quick loading speeds, intuitive navigation, and responsive gameplay, you can enjoy crash games anytime on your preferred device.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our platform is continuously updated to deliver an enjoyable experience across desktop, Android, iPhone, and tablet devices, making Babu8 a preferred destination for crash game enthusiasts in India.
          </p>
        </section>

        {/* Why Choose */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Why Choose Babu8 for Crash Games?</h2>
          <p className="text-sm text-muted-foreground mb-4">Babu8 is designed with Indian users in mind, providing an engaging and reliable gaming experience.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* What Are Crash Games */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">What Are Crash Games?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Crash games are fast-paced online games where a multiplier increases continuously from the beginning of each round. Players enjoy watching the multiplier rise while every round offers a unique experience.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Their simple gameplay, quick rounds, and exciting visual effects have made crash games one of the most popular online gaming categories in India.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Popular Features of Crash Games</h2>
          <p className="text-sm text-muted-foreground mb-4">Modern crash games include several exciting features that make gameplay more engaging.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {keyFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Why Popular */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Why Crash Games Are Popular in India</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Crash games continue to grow in popularity because they combine simplicity with excitement. Indian players appreciate games that are easy to understand and provide quick entertainment.
          </p>
          <p className="text-sm text-muted-foreground mb-3">Popular reasons include:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {popularityReasons.map((reason, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {reason}
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Experience */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Play Crash Games on Mobile</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Babu8 offers a fully responsive platform that works seamlessly across Android smartphones, iPhones, tablets, laptops, and desktop computers. Whether you're at home or travelling, you can enjoy crash games with a stable internet connection and an optimized user experience.
          </p>
          <p className="text-sm text-muted-foreground mb-3">Mobile Benefits:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {mobileBenefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </section>

        {/* Why Prefer */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Why Indian Players Prefer Babu8</h2>
          <p className="text-sm text-muted-foreground mb-3">Thousands of players choose Babu8 because we provide:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {whyPrefer.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Safe & Secure */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Safe and Secure Gaming Experience</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your gaming experience matters. Babu8 focuses on providing a secure platform with smooth performance, responsive technology, and a user-friendly interface so you can enjoy uninterrupted gameplay across all devices.
          </p>
        </section>

        {/* Responsible Gaming */}
        <section className="mb-6 bg-card border border-border rounded-lg p-5">
          <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Responsible Gaming</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Babu8 encourages responsible gaming. Crash games should always be enjoyed as a form of entertainment. We recommend managing your gaming time responsibly and playing within your personal limits.
          </p>
        </section>

        {/* Why Stands Out */}
        <section className="mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Why Babu8 Stands Out</h2>
          <p className="text-sm text-muted-foreground mb-4">Babu8 combines performance, reliability, and user experience to deliver one of the best crash gaming platforms for Indian users.</p>
          <p className="text-sm text-muted-foreground mb-3">Our platform offers:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {standOut.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
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
