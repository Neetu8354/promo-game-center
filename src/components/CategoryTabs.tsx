import { Play, Flame, Globe, Shield, MoreHorizontal } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const tabs = [
  { label: "INPLAY", icon: Play, fill: true },
  { label: "IPL 2026", icon: Flame },
  { label: "SPORTS EXCH", icon: Globe },
  { label: "SPORTSBOOK", icon: Shield },
  { label: "MORE", icon: MoreHorizontal },
];

const CategoryTabs = () => {
  return (
    <div className="bg-muted/60 overflow-x-auto scrollbar-hide">
      <div className="flex min-w-max">
        {tabs.map((tab, i) => (
          <a
            key={tab.label}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2.5 min-w-[80px] text-center border-r border-border/50 hover:bg-muted transition-colors ${i === 0 ? "bg-muted" : ""}`}
          >
            <tab.icon size={20} className={`${i === 0 ? "text-primary" : "text-muted-foreground"}`} fill={tab.fill ? "currentColor" : "none"} />
            <span className={`text-[10px] font-bold uppercase tracking-wider ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}>
              {tab.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
