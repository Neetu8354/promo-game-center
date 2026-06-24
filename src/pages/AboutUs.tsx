import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Shield, Users, Trophy, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const stats = [
  { value: "1L+", label: "Active Players" },
  { value: "500+", label: "Games Available" },
  { value: "24/7", label: "Customer Support" },
  { value: "₹INR", label: "Instant Payouts" },
];

const values = [
  { icon: <Shield size={20} />, title: "Safe & Secure", desc: "Industry-standard encryption protects every transaction and player data" },
  { icon: <Trophy size={20} />, title: "Fair Play", desc: "Certified RNG and provably fair systems across all games" },
  { icon: <Users size={20} />, title: "Player First", desc: "Every feature is designed around the needs of Indian players" },
  { icon: <Headphones size={20} />, title: "24/7 Support", desc: "Instant WhatsApp support in Hindi and English, always available" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Babu88 - India's #1 Cricket & Casino Gaming Platform</title>
        <meta name="description" content="Learn about Babu88, India's leading gaming platform. Our mission, values, and commitment to safe, fair gaming for cricket and casino enthusiasts across India." />
        <link rel="canonical" href={`${SITE_URL}/about-us`} />
        <meta property="og:title" content="About Babu88 - India's #1 Cricket & Casino Gaming Platform" />
        <meta property="og:description" content="Babu88 is India's most trusted gaming platform for cricket, casino, slots and more." />
        <meta property="og:url" content={`${SITE_URL}/about-us`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Babu88",
          "url": SITE_URL,
          "description": "India's premier gaming platform for cricket, casino, slots and entertainment",
          "foundingDate": "2024",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": WHATSAPP_LINK,
            "availableLanguage": ["English", "Hindi"]
          }
        })}</script>
      </Helmet>

      <Header />

      <main className="px-3 py-4 pb-20 max-w-lg mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">About Us</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-5 mb-6 text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">About Babu88</h1>
          <p className="text-sm text-muted-foreground">India's #1 Cricket & Casino Gaming Platform since 2024</p>
        </div>

        {/* Stats */}
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="font-heading text-2xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="mb-6 bg-card border border-border rounded-lg p-4">
          <h2 className="font-heading text-lg font-bold text-foreground mb-2">Our Mission</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Babu88 was founded with a simple mission: to give every Indian cricket fan and gaming enthusiast a world-class platform that's safe, fair, and built for India. From live IPL odds to Teen Patti and crash games — we bring the full gaming universe to your smartphone.
          </p>
        </section>

        {/* Values */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Our Values</h2>
          <div className="space-y-3">
            {values.map((v, i) => (
              <div key={i} className="flex gap-3 bg-card border border-border rounded-lg p-3">
                <div className="text-primary mt-0.5 shrink-0">{v.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{v.title}</h3>
                  <p className="text-[11px] text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Babu88 */}
        <section className="mb-6 bg-card border border-border rounded-lg p-4">
          <h2 className="font-heading text-base font-bold text-foreground mb-2">Why Indian Players Choose Babu88</h2>
          <ul className="space-y-2">
            {[
              "Fully INR-based deposits and instant withdrawals via UPI",
              "Dedicated Indian games: Teen Patti, Andar Bahar, Rummy",
              "Live IPL 2026 odds with ball-by-ball in-play updates",
              "Mobile-first design built for Indian smartphones",
              "Hindi & English customer support via WhatsApp",
              "Responsible gaming tools and 18+ age verification",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                <span className="text-primary font-bold shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="mb-6 bg-card border border-border rounded-lg p-4 text-center">
          <h2 className="font-heading text-base font-bold text-foreground mb-2">Get in Touch</h2>
          <p className="text-xs text-muted-foreground mb-4">Have questions? Our team is available 24/7 on WhatsApp.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Contact Us on WhatsApp
          </a>
        </section>

        <div className="flex justify-center gap-3 flex-wrap">
          <Link to="/faq" className="inline-block border border-primary text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
            FAQ
          </Link>
          <Link to="/terms-and-conditions" className="inline-block border border-border text-muted-foreground px-4 py-2 rounded-full text-sm font-bold hover:text-foreground transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default AboutUs;
