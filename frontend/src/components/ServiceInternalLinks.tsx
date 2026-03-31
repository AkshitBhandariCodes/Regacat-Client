import { Link, useLocation } from "react-router-dom";

const internalServiceLinks = [
  { label: "CDSCO Import Service", href: "/cdsco-import-service" },
  { label: "Cosmetic Import License", href: "/cosmetic-import-license-india" },
  { label: "CDSCO Drug Registration", href: "/cdsco-registration" },
  { label: "Medical Device Import License", href: "/medical-device-import-license-india" },
  { label: "FSSAI Services", href: "/fssai-consultants-india" },
  { label: "FSSAI License", href: "/fssai-license-registration-services-india" },
  { label: "Nutraceutical Consultant", href: "/fssai-consultant-nutraceutical-supplement-india" },
  { label: "NSF Approval", href: "/non-specified-food-ingredient-approval-india" },
  { label: "Import Assistance", href: "/fssai-import-assistance-services-india" },
  { label: "Nutraceutical Import Consultant", href: "/fssai-nutraceutical-import-consultant-india" },
  { label: "Indian Authorized Agent Services", href: "/iaa-services" },
  { label: "Legal Metrology", href: "/legal-metrology" },
  { label: "EPR Authorization", href: "/epr-registration" },
];

const normalizePath = (path: string) => path.replace(/\/$/, "");

const ServiceInternalLinks = () => {
  const { pathname } = useLocation();
  const currentPath = normalizePath(pathname);

  const links = internalServiceLinks.filter((service) => normalizePath(service.href) !== currentPath);

  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Explore Related Services</h2>
          <p className="text-slate-600 mt-2">
            Compare related service pages and choose the right compliance path for your product category.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {links.map((service) => (
            <Link
              key={service.href}
              to={service.href}
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:border-primary hover:text-primary transition-colors"
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceInternalLinks;