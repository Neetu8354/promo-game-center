import { Link } from "react-router-dom";
import { Play, Flame, Globe, Shield, MoreHorizontal } from "lucide-react";

const tabs = [
  { label: "INPLAY", icon: Play, fill: true, to: "/cricket" },
  { label: "IPL 2026", icon: Flame, to: "/cricket" },
  { label: "SPORTS EXCH", icon: Globe, to: "/cricket" },
  { label: "SPORTSBOOK", icon: Shield, to: "/casino" },
  { label: "MORE", icon: MoreHorizontal, to: "/faq" },
];

const CategoryTabs = () => {
  return (
    <div className="bg-muted/60 overflow-x-auto scrollbar-hide">
      <div className="flex min-w-max">
        {tabs.map((tab, i) => (
          <Link
            key={tab.label}
            to={tab.to}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2.5 min-w-[80px] text-center border-r border-border/50 hover:bg-muted transition-colors ${i === 0 ? "bg-muted" : ""}`}
          >
            <tab.icon size={20} className={`${i === 0 ? "text-primary" : "text-muted-foreground"}`} fill={tab.fill ? "currentColor" : "none"} />
            <span className={`text-[10px] font-bold uppercase tracking-wider ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}>
              {tab.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
