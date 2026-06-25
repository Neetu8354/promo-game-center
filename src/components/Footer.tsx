import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pb-16 md:pb-8 pt-8">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 mb-8">
          <div>
            <h4 className="font-heading font-bold text-xs md:text-sm text-foreground mb-3 uppercase tracking-wide">Games</h4>
            <ul className="space-y-2">
              <li><Link to="/cricket" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cricket</Link></li>
              <li><Link to="/fantasy-cricket" className="text-xs text-muted-foreground hover:text-primary transition-colors">Fantasy Cricket</Link></li>
              <li><Link to="/casino" className="text-xs text-muted-foreground hover:text-primary transition-colors">Casino</Link></li>
              <li><Link to="/slot-games" className="text-xs text-muted-foreground hover:text-primary transition-colors">Slot Games</Link></li>
              <li><Link to="/live-card" className="text-xs text-muted-foreground hover:text-primary transition-colors">Live Card</Link></li>
              <li><Link to="/crash-games" className="text-xs text-muted-foreground hover:text-primary transition-colors">Crash Games</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-xs md:text-sm text-foreground mb-3 uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-xs text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><Link to="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-xs md:text-sm text-foreground mb-3 uppercase tracking-wide">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-xs text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">Help</a></li>
              <li><Link to="/terms-and-conditions" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h4 className="font-heading font-bold text-sm text-foreground mb-3 uppercase tracking-wide">Follow Us</h4>
            <div className="space-y-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                <span className="text-base">💬</span> WhatsApp
              </a>
            </div>
            <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-xs font-bold text-foreground mb-1">18+ Only</p>
              <p className="text-[10px] text-muted-foreground">Play responsibly. This platform is for entertainment purposes only.</p>
            </div>
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="border-t border-border pt-5 mb-5">
          <h2 className="font-heading font-bold text-sm text-foreground mb-3">About Babu8 - India's Gaming Platform</h2>
          <p className="text-xs text-muted-foreground leading-relaxed mb-2">
            Babu8 is India's leading online gaming and entertainment platform, offering an extensive range of games including fantasy cricket, live casino games, Teen Patti, Andar Bahar, slot games, and crash games. Our platform features live cricket odds for IPL 2026 and all major cricket tournaments with real-time match analysis and predictions.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-2">
            Whether you're a cricket enthusiast looking for live match odds and fantasy cricket contests, or a casino gaming fan seeking Teen Patti, Roulette, and Blackjack, Babu8 has everything you need. Our platform supports Indian Rupees (INR) and provides 24/7 WhatsApp customer support.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Join thousands of Indian players on Babu8 for the ultimate gaming experience. Play responsibly — you must be 18+ to use this platform.
          </p>
        </div>

        <div className="border-t border-border pt-4 text-center">
          <p className="font-heading font-bold text-sm text-foreground italic mb-1">
            Babu<span className="text-primary">88</span>
          </p>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Babu8 is a gaming and entertainment platform. You must be 18+ to use this platform. Play responsibly.
          </p>
          <p className="text-xs text-muted-foreground mt-1.5">
            © 2026 Babu8. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
