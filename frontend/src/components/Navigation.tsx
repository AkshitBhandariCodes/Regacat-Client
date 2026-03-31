import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import logoImg from '../assets/images/logo2.png';

interface NavigationProps {
  onConsultClick: () => void;
}

const services = [
  { name: "CDSCO Import Service", href: "/cdsco-import-service" },
  { name: "Cosmetic Import License", href: "/cosmetic-import-license-india" },
  { name: "Medical Device Import License", href: "/medical-device-import-license-india" },
  { name: "FSSAI Services", href: "/fssai-consultants-india" },
  { name: "Indian Authorized Agent Services", href: "/iaa-services" },
  { name: "EPR Authorization", href: "/epr-registration" },
  { name: "Legal Metrology", href: "/legal-metrology" },
];

export const Navigation = ({ onConsultClick }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-[var(--topbar-height,0px)] z-[70] bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center ">
            <Link to="/" className="text-xl font-bold text-primary">
              <img src={logoImg} alt="Regacats Solutions" className="w-[300px] " />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-1 p-3 bg-popover">
                      {services.map((service) => (
                        <li key={service.name}>
                          <Link
                            to={service.href}
                            className="block rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div>{service.name}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link to="/team" className="text-foreground hover:text-primary transition-colors">
              Team
            </Link>
            <a
              href="https://blogs.regacats.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            
            <Button onClick={onConsultClick} className="ml-4">
              Get Consulting
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/team" className="text-foreground hover:text-primary transition-colors">
                Team
              </Link>
              <a
                href="https://blogs.regacats.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                Blog
              </a>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              
              <Button onClick={onConsultClick} className="w-full">
                Get Consulting
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};
