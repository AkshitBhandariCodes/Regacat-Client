import { Linkedin, Twitter, Facebook, Instagram, Mail } from "lucide-react";

const FloatingSocialMedia = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/regacats",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/regacats",
      label: "Twitter",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/regacats",
      label: "Facebook",
      color: "hover:bg-[#1877F2]",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/regacats",
      label: "Instagram",
      color: "hover:bg-[#E4405F]",
    },
    {
      icon: Mail,
      href: "mailto:contact@regacats.com",
      label: "Email",
      color: "hover:bg-secondary",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 animate-fade-in-up">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`
              group relative w-12 h-12 rounded-full 
              bg-card border-2 border-border
              flex items-center justify-center
              shadow-card hover:shadow-hover
              transition-smooth
              ${social.color}
              animate-fade-in-up
            `}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Icon className="w-5 h-5 text-foreground group-hover:text-white transition-smooth" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1 bg-card border border-border rounded-lg text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none shadow-card">
              {social.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default FloatingSocialMedia;
