import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const menuItems = [
  { label: "Cricket", href: WHATSAPP_LINK, external: true },
  { label: "Fantasy Cricket", href: WHATSAPP_LINK, external: true },
  { label: "Casino", href: WHATSAPP_LINK, external: true },
  { label: "Live Card", href: WHATSAPP_LINK, external: true },
  { label: "Slot Games", href: WHATSAPP_LINK, external: true },
  { label: "Crash Games", href: WHATSAPP_LINK, external: true },
  { label: "Blog", href: "/blog", external: false },
  { label: "About Us", href: WHATSAPP_LINK, external: true },
  { label: "FAQ", href: "/#faq", external: false },
  { label: "T&C", href: WHATSAPP_LINK, external: true },
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
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-secondary border-b border-border transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
