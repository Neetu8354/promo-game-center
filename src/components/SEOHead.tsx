import { Helmet } from "react-helmet-async";

const SEOHead = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Babu88?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Babu88 is India's premier gaming and entertainment platform offering cricket fantasy games, live casino, slot games, crash games, and card games like Teen Patti and Andar Bahar."
        }
      },
      {
        "@type": "Question",
        "name": "What games are available on Babu88?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Babu88 offers a wide range of games including Fantasy Cricket, Live Casino (Roulette, Blackjack), Teen Patti, Andar Bahar, Slot Games, Crash Games, and live sports exchange with real-time cricket odds."
        }
      },
      {
        "@type": "Question",
        "name": "How do I join Babu88?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can join Babu88 by clicking the Register button on our website. You must be 18 years or older to create an account. Registration is quick and simple through our WhatsApp support."
        }
      },
      {
        "@type": "Question",
        "name": "Is Babu88 safe and secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Babu88 uses industry-standard security measures to protect user data and transactions. We promote responsible gaming and provide tools for users to manage their gaming activity."
        }
      },
      {
        "@type": "Question",
        "name": "What cricket events can I follow on Babu88?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Babu88 covers all major cricket events including IPL, T20 World Cup, ODI World Cup, bilateral series, and domestic tournaments with live odds, match analysis, and fantasy cricket contests."
        }
      },
      {
        "@type": "Question",
        "name": "Does Babu88 support Indian Rupees (INR)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Babu88 fully supports Indian Rupees (INR) for all transactions. Our platform is designed specifically for Indian users with INR-based limits and Indian payment methods."
        }
      }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Babu88",
    "url": "https://www.babu8.online",
    "description": "India's premier gaming platform for cricket, casino, and entertainment",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://wa.link/reddyanna_",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": ["https://wa.link/reddyanna_"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.babu8.online" },
      { "@type": "ListItem", "position": 2, "name": "Cricket", "item": "https://www.babu8.online/cricket" },
      { "@type": "ListItem", "position": 3, "name": "Casino", "item": "https://www.babu8.online/casino" },
      { "@type": "ListItem", "position": 4, "name": "Blog", "item": "https://www.babu8.online/blog" }
    ]
  };

  return (
    <Helmet>
      <title>Babu88 - #1 Cricket & Casino Gaming Platform in India 2026</title>
      <meta name="description" content="Babu88 is India's #1 gaming platform. Play fantasy cricket, live casino, Teen Patti, Andar Bahar, slots & crash games. Live IPL 2026 odds. Join now! 🏏🎰" />
      <meta name="keywords" content="Babu88, cricket games India, fantasy cricket, IPL 2026, online casino India, Teen Patti online, Andar Bahar, slot games, crash games, live cricket odds, cricket exchange, casino games India" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Babu88" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-IN" />
      <link rel="canonical" href="https://www.babu8.online" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Babu88" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Babu88 - #1 Cricket & Casino Gaming Platform in India" />
      <meta property="og:description" content="Play fantasy cricket, live casino, Teen Patti, Andar Bahar, slots & crash games. Live IPL 2026 odds on Babu88." />
      <meta property="og:url" content="https://www.babu8.online" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Babu88 - Cricket & Casino Gaming Platform India" />
      <meta name="twitter:description" content="India's #1 gaming platform. Fantasy cricket, casino, slots & more. Live IPL odds." />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};

export default SEOHead;
