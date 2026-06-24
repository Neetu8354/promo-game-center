import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";
const SITE_URL = "https://www.babu8.online";

const faqs = [
  {
    q: "What is Babu88?",
    a: "Babu88 is India's #1 online gaming platform offering cricket betting, fantasy cricket, live casino games, Teen Patti, Andar Bahar, slot games, and crash games. We are designed specifically for Indian players with INR support."
  },
  {
    q: "How do I register on Babu88?",
    a: "Registration is quick and easy via WhatsApp. Click the Register button on our website, and our support team will guide you through the sign-up process in minutes. You must be 18+ to create an account."
  },
  {
    q: "What payment methods are supported?",
    a: "Babu88 supports all major Indian payment methods including UPI (GPay, PhonePe, Paytm), Net Banking, and popular e-wallets. Deposits and withdrawals are processed instantly in Indian Rupees (INR)."
  },
  {
    q: "Is Babu88 safe and secure?",
    a: "Yes. Babu88 uses industry-standard SSL encryption to protect all transactions and personal data. Our games use certified Random Number Generators (RNG) to ensure fair outcomes for every player."
  },
  {
    q: "What cricket events can I follow?",
    a: "Babu88 covers all major cricket events: IPL 2026, T20 World Cup, ODI World Cup, Asia Cup, bilateral series between India and all major nations, and domestic tournaments. Live in-play odds are available for all matches."
  },
  {
    q: "How do crash games work?",
    a: "In crash games, a multiplier rises from 1x. You place a bet before the round starts and must cash out before the multiplier crashes. The longer you wait, the higher your potential win — but if the game crashes before you cash out, you lose your bet."
  },
  {
    q: "What is Fantasy Cricket?",
    a: "Fantasy cricket lets you build a virtual team of 11 real cricket players. Your team earns points based on their actual match performance. The better your players perform in real life, the higher your fantasy score and prize."
  },
  {
    q: "Are there bonuses and promotions?",
    a: "Yes! Babu88 offers welcome bonuses, deposit bonuses, free spins for slots, and special promotions during IPL and major cricket tournaments. Contact us on WhatsApp to learn about current offers."
  },
  {
    q: "How do I withdraw my winnings?",
    a: "Withdrawals are processed directly to your UPI ID or bank account. Most withdrawals are completed within 24 hours. Contact our WhatsApp support to initiate a withdrawal."
  },
  {
    q: "What is the minimum age to play?",
    a: "You must be 18 years or older to register and play on Babu88. We strictly enforce age verification as part of our responsible gaming commitment."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Babu88</title>
        <meta name="description" content="Find answers to common questions about Babu88: registration, payments, games, withdrawals and responsible gaming on India's #1 gaming platform." />
        <link rel="canonical" href={`${SITE_URL}/faq`} />
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Babu88" />
        <meta property="og:description" content="Common questions about Babu88 India's gaming platform answered." />
        <meta property="og:url" content={`${SITE_URL}/faq`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      <Header />

      <main className="px-3 py-4 pb-20 max-w-lg mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">FAQ</li>
          </ol>
        </nav>

        <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
        <p className="text-sm text-muted-foreground mb-6">Everything you need to know about Babu88.</p>

        {/* FAQ Accordion */}
        <section className="mb-6 space-y-2" id="faq">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-semibold text-foreground pr-3">{faq.q}</span>
                {openIndex === i
                  ? <ChevronUp size={16} className="text-primary shrink-0" />
                  : <ChevronDown size={16} className="text-muted-foreground shrink-0" />
                }
              </button>
              {openIndex === i && (
                <div className="px-4 pb-3 border-t border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed pt-2">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <h2 className="font-heading text-base font-bold text-foreground mb-2">Still have questions?</h2>
          <p className="text-xs text-muted-foreground mb-4">Our support team is available 24/7 on WhatsApp.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            Chat on WhatsApp
          </a>
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default FAQ;
