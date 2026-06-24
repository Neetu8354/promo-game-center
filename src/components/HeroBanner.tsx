import { useState, useEffect } from "react";
import heroCricket from "@/assets/hero-cricket.jpg";
import promoBonus from "@/assets/promo-bonus.jpg";
import promoCricket from "@/assets/promo-cricket.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const slides = [
  { image: heroCricket },
  { image: promoBonus },
  { image: promoCricket },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-2 pt-2">
      <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden">
        {slides.map((slide, i) => (
          <a
            key={i}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <img src={slide.image} alt={`Babu88 cricket and casino promotional banner ${i + 1}`} className="w-full h-full object-cover" width={1920} height={640} />
          </a>
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
