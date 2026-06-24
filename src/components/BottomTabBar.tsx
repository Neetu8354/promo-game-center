import { Layers, Dice5, Trophy, Rocket } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const tabs = [
  { label: "LIVE CARD", icon: Layers },
  { label: "LIVE CASINO", icon: Dice5 },
  { label: "SLOT GAMES", icon: Trophy },
  { label: "CRASH GAMES", icon: Rocket },
];

const BottomTabBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border">
      <div className="flex">
        {tabs.map((tab, i) => (
          <a
            key={tab.label}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 hover:bg-secondary transition-colors ${i < tabs.length - 1 ? "border-r border-border" : ""}`}
          >
            <tab.icon size={22} className="text-primary" />
            <span className="text-[9px] font-bold uppercase tracking-wider text-foreground">
              {tab.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomTabBar;
