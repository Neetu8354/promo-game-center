import { Wifi } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const matches = [
  {
    team1: "Mumbai Indians v Chennai Super Kings",
    time: "Today at 7:30 PM",
    live: true,
    odds: [
      { back1: "1.85", back2: "1.90", back3: "-", lay1: "-", lay2: "2.10", lay3: "2.15" },
    ],
    min: 100,
    max: 25000,
  },
  {
    team1: "Sri Lanka A v New Zealand A",
    time: "Today at 10:00 AM",
    live: false,
    odds: [
      { back1: "-", back2: "-", back3: "-", lay1: "-", lay2: "-", lay3: "-" },
    ],
    min: 100,
    max: 1,
  },
  {
    team1: "Scotland v Oman",
    time: "Today at 1:00 PM",
    live: false,
    odds: [
      { back1: "1.35", back2: "1.38", back3: "-", lay1: "-", lay2: "3.6", lay3: "3.85" },
    ],
    min: 100,
    max: 1,
  },
  {
    team1: "Delhi Capitals v Gujarat Titans",
    time: "Today at 3:30 PM",
    live: false,
    odds: [
      { back1: "-", back2: "-", back3: "-", lay1: "-", lay2: "-", lay3: "-" },
    ],
    min: 100,
    max: 2000,
  },
  {
    team1: "Kolkata Knight Riders v Rajasthan Royals",
    time: "Tomorrow 7:30 PM",
    live: false,
    odds: [
      { back1: "1.27", back2: "1.29", back3: "-", lay1: "-", lay2: "4.4", lay3: "5.1" },
    ],
    min: 100,
    max: 5000,
  },
  {
    team1: "Punjab Kings v Sunrisers Hyderabad",
    time: "Tomorrow 3:30 PM",
    live: false,
    odds: [
      { back1: "2.16", back2: "2.2", back3: "-", lay1: "-", lay2: "1.84", lay3: "1.86" },
    ],
    min: 100,
    max: 25000,
  },
];

const CricketOdds = () => {
  return (
    <section>
      {/* INPLAY label */}
      <div className="flex items-center gap-2 px-3 py-2.5">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Wifi size={16} className="text-primary" />
        </div>
        <span className="font-heading font-bold text-base text-foreground uppercase">INPLAY</span>
      </div>

      {/* Cricket header bar */}
      <div className="bg-primary flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-lg">🏏</span>
          <span className="font-heading font-bold text-sm text-primary-foreground uppercase tracking-wide">CRICKET</span>
        </div>
        <div className="flex gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase"
          >
            Live
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary-foreground text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase"
          >
            Virtual
          </a>
        </div>
      </div>

      {/* Match cards */}
      <div className="divide-y divide-border">
        {matches.map((match, i) => (
          <a
            key={i}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card hover:bg-secondary/30 transition-colors"
          >
            <div className="px-3 pt-2.5 pb-1 flex items-start justify-between">
              <p className="text-sm font-semibold text-foreground flex-1 pr-2">{match.team1}</p>
              {match.live && (
                <Wifi size={16} className="text-accent shrink-0 animate-live-dot" />
              )}
              {!match.live && (
                <Wifi size={16} className="text-muted-foreground/40 shrink-0" />
              )}
            </div>

            {/* Odds grid - 6 columns */}
            <div className="px-3 pb-1">
              <div className="grid grid-cols-6 gap-1">
                {match.odds.map((o, oi) => (
                  <OddsRow key={oi} odds={o} />
                ))}
              </div>
            </div>

            <div className="px-3 pb-2.5 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-primary">{match.time}</span>
              <span className="text-[10px] text-muted-foreground">
                Min : {match.min} ⇅ Max : {match.max.toLocaleString("en-IN")}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const OddsRow = ({ odds }: { odds: Record<string, string> }) => {
  const backCells = [odds.back1, odds.back2, odds.back3];
  const layCells = [odds.lay1, odds.lay2, odds.lay3];

  return (
    <>
      {backCells.map((val, i) => (
        <div
          key={`b${i}`}
          className="bg-odds-back text-odds text-center py-2 rounded text-xs font-bold"
        >
          {val}
        </div>
      ))}
      {layCells.map((val, i) => (
        <div
          key={`l${i}`}
          className="bg-odds-lay text-odds text-center py-2 rounded text-xs font-bold"
        >
          {val}
        </div>
      ))}
    </>
  );
};

export default CricketOdds;
