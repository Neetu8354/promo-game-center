import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pb-16 pt-6">
      <div className="px-4">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <h4 className="font-heading font-bold text-xs text-foreground mb-2 uppercase">Games</h4>
            <ul className="space-y-1.5">
              {["Cricket", "Fantasy", "Casino", "Slots", "Cards", "Crash"].map((item) => (
                <li key={item}>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-xs text-foreground mb-2 uppercase">Company</h4>
            <ul className="space-y-1.5">
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><Link to="/blog" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-xs text-foreground mb-2 uppercase">Support</h4>
            <ul className="space-y-1.5">
              <li><a href="#faq" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">Help</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">T&C</a></li>
            </ul>
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="border-t border-border pt-4 mb-4">
          <h2 className="font-heading font-bold text-xs text-foreground mb-2">About Babu88 - India's Gaming Platform</h2>
          <p className="text-[9px] text-muted-foreground leading-relaxed mb-2">
            Babu88 is India's leading online gaming and entertainment platform, offering an extensive range of games including fantasy cricket, live casino games, Teen Patti, Andar Bahar, slot games, and crash games. Our platform features live cricket odds for IPL 2026 and all major cricket tournaments with real-time match analysis and predictions.
          </p>
          <p className="text-[9px] text-muted-foreground leading-relaxed mb-2">
            Whether you're a cricket enthusiast looking for live match odds and fantasy cricket contests, or a casino gaming fan seeking Teen Patti, Roulette, and Blackjack, Babu88 has everything you need. Our mobile-optimized platform supports Indian Rupees (INR) and provides 24/7 WhatsApp customer support.
          </p>
          <p className="text-[9px] text-muted-foreground leading-relaxed">
            Join thousands of Indian players on Babu88 for the ultimate gaming experience. Play responsibly — you must be 18+ to use this platform.
          </p>
        </div>

        <div className="border-t border-border pt-4 text-center">
          <p className="font-heading font-bold text-sm text-foreground italic mb-1">
            Babu<span className="text-primary">88</span>
          </p>
          <p className="text-[9px] text-muted-foreground max-w-xs mx-auto">
            Babu88 is a gaming and entertainment platform. You must be 18+ to use this platform. Play responsibly.
          </p>
          <p className="text-[9px] text-muted-foreground mt-1.5">
            © 2026 Babu88. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
