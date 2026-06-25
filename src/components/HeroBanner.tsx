import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroCricket from "@/assets/hero-cricket.jpg";
import promoBonus from "@/assets/promo-bonus.jpg";
import promoCricket from "@/assets/promo-cricket.jpg";

const slides = [
  { image: heroCricket, to: "/cricket", alt: "Babu8 live cricket exchange – IPL 2026 odds and betting" },
  { image: promoBonus, to: "/casino", alt: "Babu8 online casino bonuses and promotions" },
  { image: promoCricket, to: "/fantasy-cricket", alt: "Babu8 fantasy cricket – build your dream XI and win prizes" },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-2 pt-2">
      {/* Visible H1 for SEO - styled to sit just above the banner */}
      <h1 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2 px-1">
        Babu8 – India's Trusted Cricket Exchange &amp; Online Casino Platform
      </h1>
      <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden">
        {slides.map((slide, i) => (
          <Link
            key={i}
            to={slide.to}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" width={1920} height={640} />
          </Link>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3 pb-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-sm transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/40 w-5"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
