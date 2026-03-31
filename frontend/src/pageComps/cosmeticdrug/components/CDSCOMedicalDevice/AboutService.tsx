import { Shield, FileCheck, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ClinicalFormsTable from '../CDSCOMedicalDevice/clinicalformtable';

export const AboutService = () => {
  const features = [
    {
      icon: Shield,
      title: "Current Regulatory Status",
      description: "Our Expert a perform a thorough market research and determine the current regulatory status of drug in India "
    },
    {
      icon: FileCheck,
      title: "End-to-End Application Handling",
      description: "Complete management of documentation, submission, and follow-up processes"
    },
    {
      icon: CheckCircle,
      title: "100% CDSCO Compliance Support",
      description: "Full regulatory compliance assurance with ongoing post-license support"
    }
  ];

  const serviceCards = [
    {
      title: "CDSCO Import License Consultant",
      description: "End-to-end import licensing support for cosmetics, medical devices, and drugs under CDSCO pathways.",
      href: "/cdsco-import-license",
    },
    {
      title: "Indian Authorized Agent for Drugs",
      description: "Regulatory representation for foreign pharmaceutical companies covering registration, import, and post-market compliance.",
      href: "/indian-authorized-agent-for-drugs",
    },
    {
      title: "Indian Authorized Agent for Medical Devices",
      description: "Local accountable representation for foreign medical device manufacturers under Indian rules.",
      href: "/indian-authorized-agent-for-medical-devices",
    },
    {
      title: "Indian Authorized Agent for Cosmetics",
      description: "CDSCO-focused representation for global cosmetic brands entering and operating in India.",
      href: "/indian-authorized-agent-for-cosmetics-in-india",
    },
    {
      title: "Indian Authorized Agent for FSSAI Products",
      description: "Authorized representation for imported food, supplements, and nutraceutical products in India.",
      href: "/indian-authorized-agent-for-fssai-products",
    },
    {
      title: "Indian Authorized Agent Services India",
      description: "Cross-category IAA support for food, cosmetics, devices, and pharmaceuticals.",
      href: "/indian-authorized-agent-services-india",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            What is Drug
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
          <h3>As suggested by Drugs and Cosmetics act, 1940 a drug may be defined as:</h3>
          <ol>
	<li>All medicines for internal or external use of human beings or animals and all substances intended to be used for or in the diagnosis, treatment, mitigation or prevention of any disease or disorder in human beings or animals, including preparations applied on human body for the purpose of repelling insects like mosquitoes.</li>
<li>such substances (other than food) intended to affect the structure or any function of the human body or intended to be used for the destruction of vermin or insects which cause disease in human beings or animals.</li>
</ol>

          </p><br />
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            What is New Drug
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
          <ol type="i" className="justify">
       <h3> As stated by New Drugs and Clinical trials Rules, 2019,   a New drug may be defined as:</h3> 
<li><strong>A drug</strong>, including active pharmaceutical ingredient or phytopharmaceutical drug, which has not been used in the country to any significant extent, except in accordance with the provisions of the Act and the rules made thereunder, as per conditions specified in the labelling thereof and has not been approved as safe and efficacious by the Central Licencing Authority with respect to its claims; or </li> 

<li><strong>A drug </strong> approved by the Central Licencing Authority for certain claims and proposed to be marketed with modified or new claims including indication, route of administration, dosage and
dosage form; or</li>
<li>A fixed dose combination of two or more drugs, approved separately for certain claims and
proposed to be combined for the first time in a fixed ratio, or where the ratio of ingredients in an
approved combination is proposed to be changed with certain claims including indication, route
of administration, dosage and dosage form; or</li> 
<li>A modified or sustained release form of a drug or novel drug delivery system of any drug
approved by the Central Licencing Authority; or</li>
<li> <strong>A vaccine,</strong> recombinant Deoxyribonucleic Acid (r-DNA) derived product, living modified
organism, monoclonal anti-body, stem cell derived product, gene therapeutic product or xenografts, intended to be used as drug;</li><br />

<li><strong>The drugs</strong>, other than drugs referred to in sub-clauses (iv) and (v), shall continue to be new drugs for a period of four years from the date of their permission granted by the Central Licencing Authority and the drugs referred to in sub-clauses (iv) and (v) shall always be deemed to be new drugs.</li>
</ol>


          </p><br />

          <h2 className="text-4xl font-bold mb-6 text-foreground">
          What is subsequent drug?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
          A subsequent new drug includes the new drug approved by Central Licensing authority proposed for a new indication or indications, dosage, dosage form (including sustained release dosage form) and route of administration with in the time frame of 4 years of approval of new drug.
          </p><br />
          <h2 className="text-4xl font-bold mb-6 text-foreground">
          What is Fixed Dose Combination (FDC) ?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
          Fixed dose combinations refer to the products containing one or more active ingredients used for particular indication. 
Fixed dose combinations may be further includes the combinations in which one or more of active ingredients is a new drug.
FDCs also includes the combinations in which active ingredients already approved/marketed individually are combined for the first time for a particular claim.
FDC also includes already marketed but it is proposed to either change the ratio of active ingredient or to make a new therapeutic claim.
There is one more category of FDCs which includes combinations whose individual active ingredients (or drugs from the same class) have been widely used in a particular indication for years and are proposed to be combined for the first time.

          </p><br />
          <ClinicalFormsTable/>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          At <strong className="text-primary">Regacats Solutions</strong> our team of seasoned experts delivers comprehensive <strong>regulatory compliance assistance, </strong>strategic regulatory planning, and market analysis tailored to meet our clients' specific needs. In addition to the services outlined in the previous section, we also offer a range of supplementary services that enhance our clients' compliance efforts and address regulatory requirements.
Our commitment to excellence ensures that you receive not only expert guidance but also ongoing support to navigate the evolving regulatory landscape. We pride ourselves on building strong, collaborative relationships with our clients, allowing us to anticipate challenges and deliver proactive solutions.
For further information about our services or to discuss how we can assist you in achieving your regulatory goals, please contact us via the email and phone number provided above. We look forward to partnering with you on your journey to compliance and success.

          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground">Drug Services You Can Explore</h3>
            <p className="text-muted-foreground mt-2">
              Open each dedicated service page for detailed process, documents, FAQs, and consultation support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {serviceCards.map((service) => (
              <Card key={service.title} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-lg font-bold text-card-foreground">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    View Service
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
