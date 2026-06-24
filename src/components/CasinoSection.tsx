import casinoImg from "@/assets/casino-games.jpg";
import liveCardImg from "@/assets/live-card.jpg";
import slotImg from "@/assets/slot-games.jpg";
import crashImg from "@/assets/crash-game.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const casinoGames = [
  { title: "Roulette", players: "2.4K playing", image: casinoImg },
  { title: "Teen Patti", players: "5.1K playing", image: liveCardImg },
  { title: "Andar Bahar", players: "3.2K playing", image: liveCardImg },
  { title: "Lucky 777", players: "1.8K playing", image: slotImg },
  { title: "Crash", players: "4.5K playing", image: crashImg },
];

const CasinoSection = () => {
  return (
    <section className="px-3 py-2">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-heading text-base font-bold text-foreground uppercase">
          🎰 Casino & Cards
        </h2>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary font-semibold">
          See All →
        </a>
      </div>

      <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-2">
        {casinoGames.map((game, i) => (
          <a
            key={i}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[110px] group"
          >
            <div className="aspect-square rounded-lg overflow-hidden border border-border group-hover:border-primary/50 transition-all">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={150}
                height={150}
              />
            </div>
            <div className="mt-1.5">
              <h3 className="font-heading font-bold text-xs text-foreground">{game.title}</h3>
              <p className="text-[9px] text-accent">{game.players}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CasinoSection;
