interface BrandsCarouselProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  sectionClassName?: string;
}

const brandLogoModules = import.meta.glob("../assets/brandslogo/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const formatLogoName = (path: string) =>
  path
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim() ?? "Client";

export const BrandsCarousel = ({
  eyebrow = "Our Clientele",
  title = "Trusted by Leading Brands",
  description,
  sectionClassName = "bg-[#f4f1ea]",
}: BrandsCarouselProps) => {
  const brands = Array.from(
    new Map(
      Object.entries(brandLogoModules)
        .filter(([path]) => !path.toLowerCase().endsWith("whatsapp.png"))
        .sort((a, b) => formatLogoName(a[0]).localeCompare(formatLogoName(b[0])))
        .map(([path, image]) => {
          const name = formatLogoName(path);
          return [name.toLowerCase(), { name, image }];
        }),
    ).values(),
  );

  const logoRows = Array.from({ length: 3 }, (_, rowIndex) =>
    brands.filter((_, index) => index % 3 === rowIndex),
  );

  return (
    <section className={`py-16 ${sectionClassName}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-600">{eyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
          {description ? (
            <p className="mt-4 text-slate-600 leading-7 max-w-3xl mx-auto">{description}</p>
          ) : null}
        </div>

        <div className="space-y-4 overflow-hidden">
          {logoRows.map((row, rowIndex) => (
            <div key={rowIndex} className="overflow-hidden">
              <div
                className={`flex w-max gap-4 ${
                  rowIndex % 2 === 0 ? "animate-client-tile-scroll" : "animate-client-tile-scroll-reverse"
                }`}
              >
                {[...row, ...row].map((logo, logoIndex) => (
                  <div
                    key={`${logo.name}-${logoIndex}`}
                    className="flex h-24 w-40 shrink-0 items-center justify-center rounded-[18px] border border-slate-200 bg-white px-5 shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img src={logo.image} alt={logo.name} className="max-h-12 max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes client-tile-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes client-tile-scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-client-tile-scroll {
          animation: client-tile-scroll 34s linear infinite;
        }

        .animate-client-tile-scroll-reverse {
          animation: client-tile-scroll-reverse 36s linear infinite;
        }
      `}</style>
    </section>
  );
};
