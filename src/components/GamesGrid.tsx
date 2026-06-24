import casinoImg from "@/assets/casino-games.jpg";
import slotImg from "@/assets/slot-games.jpg";
import fantasyImg from "@/assets/fantasy-cricket.jpg";
import liveCardImg from "@/assets/live-card.jpg";
import crashImg from "@/assets/crash-game.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const games = [
  { title: "Fantasy Cricket", subtitle: "Build your dream XI", image: fantasyImg, tag: "Popular" },
  { title: "Casino", subtitle: "Roulette & Blackjack", image: casinoImg, tag: "Hot" },
  { title: "Slot Games", subtitle: "777 Lucky Spins", image: slotImg, tag: "New" },
  { title: "Live Cards", subtitle: "Teen Patti & Poker", image: liveCardImg, tag: "Live" },
  { title: "Crash Game", subtitle: "Ride the multiplier", image: crashImg, tag: "Trending" },
  { title: "Andar Bahar", subtitle: "Classic Indian game", image: liveCardImg, tag: "Popular" },
];

const GamesGrid = () => {
  return (
    <section className="px-3 py-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-heading text-base font-bold text-foreground uppercase">
          🎮 All Games
        </h2>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary font-semibold">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {games.map((game, i) => (
          <a
            key={i}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>
            <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[8px] font-bold px-1.5 py-0.5 rounded">
              {game.tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-1.5">
              <h3 className="font-heading font-bold text-[11px] text-foreground leading-tight">{game.title}</h3>
              <p className="text-[9px] text-muted-foreground">{game.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GamesGrid;
