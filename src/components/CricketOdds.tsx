import { Wifi } from "lucide-react";
import { Link } from "react-router-dom";

const matches = [
  {
    team1: "India v England",
    series: "T20I Series • 3rd T20I",
    time: "Today at 7:00 PM IST",
    live: true,
    odds: [
      { back1: "1.72", back2: "1.75", back3: "-", lay1: "-", lay2: "2.28", lay3: "2.32" },
    ],
    min: 100,
    max: 50000,
  },
  {
    team1: "Pakistan v West Indies",
    series: "ODI Series • 2nd ODI",
    time: "Today at 2:30 PM IST",
    live: false,
    odds: [
      { back1: "1.55", back2: "1.58", back3: "-", lay1: "-", lay2: "2.65", lay3: "2.70" },
    ],
    min: 100,
    max: 25000,
  },
  {
    team1: "Australia v South Africa",
    series: "Test Series • 2nd Test Day 2",
    time: "Today at 5:00 AM IST",
    live: true,
    odds: [
      { back1: "2.10", back2: "2.14", back3: "-", lay1: "-", lay2: "1.92", lay3: "1.94" },
    ],
    min: 100,
    max: 30000,
  },
  {
    team1: "New Zealand v Sri Lanka",
    series: "T20I Series • 1st T20I",
    time: "Tomorrow at 12:00 PM IST",
    live: false,
    odds: [
      { back1: "1.48", back2: "1.50", back3: "-", lay1: "-", lay2: "2.90", lay3: "2.95" },
    ],
    min: 100,
    max: 20000,
  },
  {
    team1: "Bangladesh v Zimbabwe",
    series: "T20I Series • 2nd T20I",
    time: "Tomorrow at 4:00 PM IST",
    live: false,
    odds: [
      { back1: "1.22", back2: "1.24", back3: "-", lay1: "-", lay2: "5.2", lay3: "5.5" },
    ],
    min: 100,
    max: 10000,
  },
  {
    team1: "Ireland v Afghanistan",
    series: "ODI Series • 1st ODI",
    time: "26 Jun at 3:30 PM IST",
    live: false,
    odds: [
      { back1: "3.80", back2: "3.90", back3: "-", lay1: "-", lay2: "1.35", lay3: "1.37" },
    ],
    min: 100,
    max: 10000,
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
          <Link
            to="/cricket"
            className="bg-primary-foreground text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase"
          >
            Live
          </Link>
          <Link
            to="/fantasy-cricket"
            className="border border-primary-foreground text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase"
          >
            Fantasy
          </Link>
        </div>
      </div>

      {/* Match cards */}
      <div className="divide-y divide-border">
        {matches.map((match, i) => (
          <Link
            key={i}
            to="/cricket"
            className="block bg-card hover:bg-secondary/30 transition-colors"
          >
            <div className="px-3 pt-2.5 pb-1 flex items-start justify-between">
              <div className="flex-1 pr-2">
                <p className="text-sm font-semibold text-foreground">{match.team1}</p>
                <p className="text-[10px] text-muted-foreground">{match.series}</p>
              </div>
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
          </Link>
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
