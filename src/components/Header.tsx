import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const menuItems = [
  { label: "Cricket", href: "/cricket", external: false },
  { label: "Fantasy Cricket", href: "/fantasy-cricket", external: false },
  { label: "Casino", href: "/casino", external: false },
  { label: "Live Card", href: "/live-card", external: false },
  { label: "Slot Games", href: "/slot-games", external: false },
  { label: "Crash Games", href: "/crash-games", external: false },
  { label: "Blog", href: "/blog", external: false },
  { label: "About Us", href: "/about-us", external: false },
  { label: "FAQ", href: "/faq", external: false },
  { label: "T&C", href: "/terms-and-conditions", external: false },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-secondary border-b border-border">
        <div className="flex items-center justify-between px-3 h-12">
          <div className="flex items-center gap-2">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground p-1">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span className="font-heading font-bold text-xl italic text-foreground">
                Babu<span className="text-primary">88</span>
              </span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
            >
              Login
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-background/80" onClick={() => setMenuOpen(false)} />
          <div className="fixed top-12 left-0 bottom-0 w-64 z-50 bg-card border-r border-border overflow-y-auto">
            <div className="py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-secondary border-b border-border transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
