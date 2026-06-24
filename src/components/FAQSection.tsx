import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Babu88?",
    a: "Babu88 is India's premier gaming and entertainment platform offering cricket fantasy, live casino, slot games, crash games, and card games like Teen Patti and Andar Bahar. We provide live IPL 2026 odds, sports exchange, and 24/7 gaming entertainment."
  },
  {
    q: "What games can I play on Babu88?",
    a: "You can play Fantasy Cricket, Live Casino (Roulette, Blackjack), Teen Patti, Andar Bahar, Slot Games (777 Lucky Spins), Crash Games, and follow live cricket odds with our sports exchange feature."
  },
  {
    q: "How do I register on Babu88?",
    a: "Registration is quick and easy. Click the Register button on our website and connect with our support team via WhatsApp. You must be 18+ years old to create an account."
  },
  {
    q: "Does Babu88 support INR payments?",
    a: "Yes, Babu88 fully supports Indian Rupees (₹ INR). All game limits, transactions, and displays are in INR for the convenience of Indian players."
  },
  {
    q: "Is Babu88 available on mobile?",
    a: "Yes, Babu88 is fully optimized for mobile devices. You can access all games, live cricket odds, and casino features directly from your smartphone browser without downloading any app."
  },
  {
    q: "What cricket events does Babu88 cover?",
    a: "Babu88 covers all major cricket events including IPL 2026, T20 World Cup, ODI World Cup, bilateral series, and domestic tournaments with live odds, match analysis, and fantasy cricket contests."
  },
  {
    q: "How do I contact Babu88 support?",
    a: "You can reach our 24/7 customer support team through the WhatsApp button on our website. Our team is available round the clock to assist you with any queries."
  },
  {
    q: "Does Babu88 promote responsible gaming?",
    a: "Absolutely. Babu88 is committed to responsible gaming. We provide session reminders, activity tracking tools, and self-management features. Players must be 18+ to use our platform."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-3 py-6" id="faq">
      <h2 className="font-heading text-lg font-bold text-foreground uppercase mb-4">❓ Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-3 py-3 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="text-sm font-semibold text-foreground pr-2">{faq.q}</span>
              <ChevronDown
                size={16}
                className={`text-primary shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-3" : "max-h-0"}`}>
              <p className="text-xs text-muted-foreground px-3 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
