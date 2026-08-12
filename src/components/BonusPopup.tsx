import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const BonusPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup automatically when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Small delay for smooth entrance

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-sm bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl shadow-2xl p-6 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          aria-label="Close popup"
        >
          <X size={18} className="text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="text-center space-y-4">
          {/* Gift Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
              <span className="text-3xl">🎁</span>
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              100% BONUS
            </h2>
            <p className="text-sm text-muted-foreground">
              Claim your 100% bonus now!
            </p>
          </div>

          {/* CTA Button */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              CLICK HERE — WHATSAPP
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BonusPopup;