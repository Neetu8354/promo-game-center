import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-3 z-50 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-accent-foreground" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
