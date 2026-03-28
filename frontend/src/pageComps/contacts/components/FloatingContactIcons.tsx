import { Mail, Linkedin, MessageCircle } from "lucide-react";

const contactLinks = [
  {
    icon: MessageCircle,
    href: "https://wa.me/message/7WAZLONKOT5SN1",
    label: "WhatsApp",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/regacats-solution/posts/?feedView=all",
    label: "LinkedIn",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: Mail,
    href: "mailto:contact@regacats.com",
    label: "Email",
    color: "bg-accent hover:bg-accent/90",
  },
];

const FloatingContactIcons = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3 animate-slide-in">
      {contactLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`${link.color} text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 glow-effect`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};

export default FloatingContactIcons;
