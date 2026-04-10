import { Building2, CheckCircle2, FileText, ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: FileText,
    title: "Mandatory before import",
    description: "CDSCO approval is required before customs clearance, sale, distribution, or marketing in India.",
  },
  {
    icon: Building2,
    title: "Issued to Indian entities",
    description: "The Cosmetic Import License is granted to an authorized Indian entity handling the import process.",
  },
  {
    icon: ShieldAlert,
    title: "No post-import registration",
    description: "Indian law does not permit importing first and registering later for cosmetic products.",
  },
];

const compliancePoints = [
  "Use ingredients permitted under Indian cosmetic & BIS standards",
  "Meet safety and quality requirements",
  "Comply with Indian labeling norms",
  "Protect public health and consumer safety",
];

const InfoCards = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <Card className="border-none shadow-card bg-card">
              <CardContent className="p-8 md:p-10 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    CDSCO Cosmetic Import License or Registration (Cos-2) in India
                  </h2>
                  <p className="text-lg text-muted-foreground leading-8">
                    The CDSCO mandates the <strong>Cosmetic Import License</strong>, also known as
                    <strong> Cosmetic Import Registration</strong>, as a mandatory regulatory approval for importing
                    cosmetic products into India. Under the <strong>Drugs and Cosmetics Act, 1940</strong> and
                    <strong> Cosmetics Rules, 2020</strong>, CDSCO grants this approval to authorized Indian
                    entities, enabling them to legally import, sell, and distribute cosmetic
                    products in India.
                  </p>
                  <p className="text-lg text-muted-foreground leading-8">
                    Any foreign cosmetic manufacturer, exporter, global brand, or Indian importer planning to sell
                    skincare, haircare, makeup, personal care products, or other cosmetic products in India must
                    obtain this <strong>license or registration</strong> before importing goods into India. The terms
                    <strong> cosmetic import license</strong> and <strong>cosmetic import registration</strong> are
                    often used interchangeably in India.
                  </p>
                  <p className="text-lg text-muted-foreground leading-8">
                    Therefore, understanding the <strong>CDSCO Cosmetic Import License</strong>, specifically
                    <strong> COS-1 and COS-2</strong>, is critical for importers who want smooth customs clearance,
                    uninterrupted sales, and long-term
                    regulatory compliance.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    What Is the CDSCO Cosmetic Import License or Cosmetic Import Registration (Cos-1 & Cos-2)?
                  </h3>
                  <p className="text-muted-foreground leading-8">
                    <strong>CDSCO cosmetic import license or registration (Cos-2)</strong> is an approval granted by
                    CDSCO allowing the import of cosmetic products into India for sale, distribution, or marketing.
                    It authorizes an Indian entity to legally import cosmetic products into India for sale,
                    distribution, or marketing.
                  </p>
                  <p className="text-muted-foreground leading-8">
                    Importers must secure this registration before customs clearance. Indian law does not permit
                    <strong> post-import registration</strong> or retrospective approvals. The
                    <strong> COS-2 license</strong> confirms that imported
                    cosmetic products:
                  </p>

                  <div className="grid gap-3 md:grid-cols-2">
                    {compliancePoints.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/40 p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm md:text-base text-foreground">{point}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-8">
                    <strong>CDSCO does not permit post-import registration</strong>, meaning cosmetic products cannot
                    be imported first and registered later.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4 self-start lg:sticky lg:top-24">
              {highlights.map((highlight) => (
                <Card key={highlight.title} className="border-none shadow-card bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-card-foreground">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground leading-6">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
