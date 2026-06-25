import { Link } from "react-router-dom";

const SEOContent = () => {
  return (
    <section className="px-4 md:px-8 py-8 max-w-6xl mx-auto space-y-8 text-sm text-muted-foreground leading-relaxed">

      {/* Intro */}
      <div>
        <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">
          Babu8 – Trusted Cricket Exchange &amp; Online Casino Platform in India
        </h2>
        <p className="mb-3">
          Welcome to Babu8, a premier destination for cricket exchange, online casino games, and live sports entertainment. Designed to deliver a seamless user experience, Babu8 provides access to live cricket markets, casino games, virtual sports, and interactive gaming options on a single platform. Whether you are following major cricket tournaments or exploring exciting casino games, Babu8 offers a secure and user-friendly environment for online gaming enthusiasts.
        </p>
        <p>
          With a mobile-friendly interface, quick navigation, and round-the-clock access, Babu8 allows users to stay connected to their favorite games anytime and anywhere. The platform is built to provide smooth performance, ensuring a reliable experience across desktop, tablet, and mobile devices.
        </p>
      </div>

      {/* Why Choose */}
      <div>
        <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">Why Choose Babu8?</h2>
        <p className="mb-3">Babu8 has become a popular choice among users looking for a complete online gaming platform. Here are some key features that make it stand out:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          {[
            "Live cricket exchange markets",
            "Wide range of online casino games",
            "Fast and secure transactions",
            "Mobile-friendly gaming experience",
            "User-friendly dashboard",
            "Live dealer casino games",
            "Popular sports betting markets",
            "Responsive customer support",
            "Regular promotions and offers",
            "Secure and reliable platform",
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cricket Exchange */}
      <div>
        <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">
          <Link to="/cricket" className="hover:text-primary transition-colors">Live Cricket Exchange at Babu8</Link>
        </h2>
        <p className="mb-3">
          Cricket remains one of the most followed sports in India, and Babu8 brings an exciting <Link to="/cricket" className="text-primary hover:underline">cricket exchange</Link> experience to users. The platform offers access to live cricket markets where users can follow matches in real time and engage with dynamic betting opportunities.
        </p>
        <h3 className="font-semibold text-foreground mb-2">Features of Cricket Exchange</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-1.5 mb-3">
          {["Live match updates", "Competitive odds", "Major international tournaments", "Domestic cricket leagues", "Real-time market movements", "Mobile access for on-the-go gaming"].map((f, i) => (
            <li key={i} className="flex gap-2"><span className="text-primary shrink-0">•</span><span>{f}</span></li>
          ))}
        </ul>
        <p>From international series to T20 leagues and championship events, users can stay engaged with live cricket action throughout the year. Explore <Link to="/fantasy-cricket" className="text-primary hover:underline">Fantasy Cricket</Link> to build your dream XI for every match.</p>
      </div>

      {/* Casino Games */}
      <div>
        <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">
          <Link to="/casino" className="hover:text-primary transition-colors">Online Casino Games</Link>
        </h2>
        <p className="mb-4">Babu8 features a diverse collection of <Link to="/casino" className="text-primary hover:underline">online casino games</Link> suitable for both beginners and experienced players. The platform offers classic casino favorites alongside modern gaming experiences.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Live Casino", to: "/live-card", desc: "Experience real-time gaming with professional dealers through live casino tables. Interactive gameplay creates an immersive casino atmosphere from the comfort of your device." },
            { title: "Slot Games", to: "/slot-games", desc: "Explore a variety of themed slot games featuring engaging visuals and exciting gameplay mechanics with high RTP rates." },
            { title: "Crash Games", to: "/crash-games", desc: "Watch multipliers rise and cash out before the crash. Provably fair crash games including Aviator and JetX." },
            { title: "Live Card Games", to: "/live-card", desc: "Enjoy Blackjack, Baccarat, Teen Patti, Andar Bahar and Rummy with real dealers available 24/7." },
          ].map((g, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-1">
                <Link to={g.to} className="hover:text-primary transition-colors">{g.title}</Link>
              </h3>
              <p className="text-xs">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Betting */}
      <div>
        <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">Sports Betting Markets</h2>
        <p className="mb-3">In addition to cricket exchange, Babu8 offers a range of sports betting opportunities covering major sporting events around the world.</p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
          {["Cricket", "Football", "Tennis", "Basketball", "Kabaddi", "Volleyball", "Esports", "Horse Racing"].map((s, i) => (
            <li key={i} className="flex gap-2"><span className="text-primary shrink-0">•</span><span>{s}</span></li>
          ))}
        </ul>
      </div>

      {/* Mobile + Security side by side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-heading text-base md:text-lg font-bold text-foreground mb-2">Mobile Gaming Experience</h2>
          <p className="mb-2">Modern users expect flexibility, and Babu8 delivers a fully optimized mobile experience. Whether using Android, iOS, or a mobile browser, users can access the platform without compromising performance.</p>
          <ul className="space-y-1">
            {["Easy navigation", "Fast loading pages", "Responsive design", "Real-time updates", "Access from anywhere"].map((f, i) => (
              <li key={i} className="flex gap-2"><span className="text-primary shrink-0">✓</span><span>{f}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-base md:text-lg font-bold text-foreground mb-2">Safe and Secure Platform</h2>
          <p className="mb-2">Security is an important aspect of any online gaming experience. Babu8 focuses on providing a reliable environment where users can access games and manage their accounts confidently.</p>
          <ul className="space-y-1">
            {["Secure login system", "Protected user information", "Safe payment processing", "Regular platform monitoring", "Responsible gaming practices"].map((f, i) => (
              <li key={i} className="flex gap-2"><span className="text-primary shrink-0">✓</span><span>{f}</span></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-border pt-4">
        <p className="text-xs text-muted-foreground/70">
          <strong className="text-muted-foreground">Disclaimer:</strong> Gaming involves risk and may be habit-forming. Participate responsibly and ensure compliance with applicable local laws and regulations. Users must be of legal age to access gaming services. See our <Link to="/terms-and-conditions" className="text-primary hover:underline">Terms &amp; Conditions</Link> for full details.
        </p>
      </div>
    </section>
  );
};

export default SEOContent;
