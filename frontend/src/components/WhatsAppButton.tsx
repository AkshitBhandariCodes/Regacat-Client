import { Button } from "@/components/ui/button";
import WhatsappIcon from "@/assets/brandslogo/whatsapp.png";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/7WAZLONKOT5SN1", "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="relative">
        {/* Wave Animation Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-pulse"></span>

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="relative h-16 w-16 rounded-full shadow-lg hover:shadow-xl transition-all bg-[#25D366] hover:bg-[#20BA5A] p-0 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <img src={WhatsappIcon} alt="WhatsApp" className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
};
