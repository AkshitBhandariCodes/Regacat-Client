import { LucideIcon } from "lucide-react";

interface RegistrationCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  items: string[];
}

export const RegistrationCard = ({ icon: Icon, title, subtitle, items }: RegistrationCardProps) => {
  return (
    <div className="flex gap-4 pb-8">
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-icon-bg flex items-center justify-center">
          <Icon className="w-10 h-10 text-primary " strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-bold text-foreground mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm font-semibold text-foreground mb-3">
            {subtitle}
          </p>
        )}
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
