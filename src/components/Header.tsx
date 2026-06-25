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
        <div className="flex items-center justify-between px-4 lg:px-8 h-14 max-w-7xl mx-auto">
          {/* Logo + mobile hamburger */}
          <div className="flex items-center gap-2">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground p-1 md:hidden">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link to="/" className="flex items-center" aria-label="Babu8 home">
              <img
                src="/logo-babu8.svg"
                alt="Babu8 - India's Trusted Cricket Exchange & Online Casino"
                width="160"
                height="38"
                className="h-9 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.slice(0, 6).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 mr-2">
              {menuItems.slice(6).map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-2.5 py-1 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
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

      {/* Mobile sidebar overlay — only on mobile */}
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
