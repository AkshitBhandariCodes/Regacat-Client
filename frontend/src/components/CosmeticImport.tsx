import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Shield, Award, TestTube, Package, Globe, CheckCircle, FileCheck } from "lucide-react";
import { 
  Info, 
  DollarSign, 

  ShieldCheck, 
  Handshake,
  Gavel,
  Users,
  AlertTriangle,
  Languages,

  Scale,
  Atom,
  Ban,

  Route,
  Settings,

} from "lucide-react";

const CosmeticImport = () => {
  const documents = [
    { icon: FileText, text: "Covering Letter" },
    { icon: FileCheck, text: "Power of Attorney / Authorization Letter" },
    { icon: Globe, text: "Free Sale Certificate (FSC)" },
    { icon: Award, text: "ISO 13485 Certificate" },
    { icon: FileText, text: "Device Master File (DMF)" },
    { icon: FileText, text: "Plant Master File (PMF)" },
    { icon: Package, text: "Product Labels / Packaging Artwork" },
    { icon: Shield, text: "CE / USFDA / Other Regulatory Approvals" },
    { icon: TestTube, text: "Test Reports and Safety Certificates" }
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-background border-b">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Overview of Cosmetic Import License (Cos-1, Cos-2) in India
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
          Quick guide to CDSCO Cosmetic Import License process (COS-1 & COS-2) required for importing cosmetics into India.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="fee-structure" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-primary text-white p-2 h-auto">
            <TabsTrigger value="overview" className="gap-2">
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">COS-1 / COS-2 </span>
            </TabsTrigger>
            <TabsTrigger value="fee-structure" className="gap-2">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Fee Structure</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Documents Required</span>
            </TabsTrigger>
            <TabsTrigger value="compliance" className="gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Compliance</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="gap-2">
              <Handshake className="w-4 h-4" />
              <span className="hidden sm:inline">Our Services</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="bg-card rounded-xl shadow-sm border p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      What Are COS-1 and COS-2 Forms?
                    </h2>
                    <h3 className="text-lg ">COS-1 – (Application for Cosmetic Import License)</h3>
                  </div>
                  
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <p className="text-foreground/90 leading-relaxed italic text-justify">
                    •	Form COS-1 is the application form submitted by a manufacturer, their authorized Indian agent, or a subsidiary to obtain approval for importing cosmetics into India. <br />
                    •	The application is filed online through the CDSCO SUGAM portal and must include all required documents such as the Free Sale Certificate, ingredient list, product labels, and authorization letters.

                    </p>
                    {/* <div className="text-right mt-4 text-sm text-muted-foreground">
                      — Drugs and Cosmetics Act, 1940
                    </div> */}
                  </div><br />
                  <h3 className="text-lg ">COS-2 – (Issuance of Cosmetic Import License)</h3><br />
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <p className="text-foreground/90 leading-relaxed italic text-justify">
                    •	Once the CDSCO reviews and approves the COS-1 application, the Cosmetic Import License is granted in Form COS-2. <br />
•	This license authorizes the holder to legally import and distribute cosmetics in India.


                    </p>
                    {/* <div className="text-right mt-4 text-sm text-muted-foreground">
                      — Drugs and Cosmetics Act, 1940
                    </div> */}
                  </div>
                  
                </div>
                

                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Key Information
                    </h2>
                    <p className="text-sm text-muted-foreground">Essential regulatory details</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card border rounded-lg p-6">
                      <h3 className="flex items-center gap-3 text-lg font-semibold text-foreground mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Gavel className="w-5 h-5 text-primary" />
                        </div>
                        Governing Laws
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Drugs and Cosmetics Act, 1940</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Cosmetic Rules, 2020</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-card border rounded-lg p-6">
                      <h3 className="flex items-center gap-3 text-lg font-semibold text-foreground mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        Eligible Applicants
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Indian Manufacturer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Foreign Subsidiary in India</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Authorized Indian Agent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Indian Importer</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Fee Structure Tab */}
          <TabsContent value="fee-structure" className="mt-8">
            <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
              <div className="p-8">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Fee Structure
                  </h2>
                  <p className="text-muted-foreground">Statutory fees for cosmetic import License (Cos-2)</p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="rounded-lg overflow-hidden border">
                    <div className="bg-primary dark:bg-slate-800 text-white px-6 py-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        Registration Fees
                      </h3>
                    </div>
                    
                    <div className="divide-y">
                      <div className="flex justify-between items-center px-6 py-5 bg-background hover:bg-muted/30 transition-colors">
                        <span className="text-foreground font-medium">Category Registration (per category)</span>
                        <span className="text-foreground font-bold text-lg">USD 1,000</span>
                      </div>
                      
                      <div className="flex justify-between items-center px-6 py-5 bg-background hover:bg-muted/30 transition-colors">
                        <span className="text-foreground font-medium">Manufacturing Site Registration</span>
                        <span className="text-foreground font-bold text-lg">USD 500</span>
                      </div>
                      
                      <div className="flex justify-between items-center px-6 py-5 bg-background hover:bg-muted/30 transition-colors">
                        <span className="text-foreground font-medium">Product Variant (per variant)</span>
                        <span className="text-foreground font-bold text-lg">USD 50</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-5 rounded-r-lg">
                    <p className="text-blue-900 dark:text-blue-200 flex items-start gap-3">
                      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Note:</strong> Approximately 80 categories are listed in the Third Schedule. Fees apply only to unregistered categories and sites.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="mt-8">
            <div className="bg-card rounded-xl shadow-sm border p-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Required Documents
                </h2>
                <p className="text-muted-foreground">Checklist for cosmetic import license (Cos-2)</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {[
                  "Power of Attorney",
                  "Free Sale Certificate",
                  "Product Artworks",
                  "Composition Sheets",
                  "Product Specifications",
                  "Manufacturing License",
                  "GMP Certificate / ISO 22716",
                  "Relevant Undertakings",
                  "Shelf-life Declaration"
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-foreground font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          {/* <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Documents Required for CDSCO Medical Device License
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete documentation package needed for successful license application
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl border-2 border-border hover:border-primary bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <doc.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 pt-1">
                <p className="font-semibold text-card-foreground leading-tight">{doc.text}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Note:</strong> Additional documents may be required based on device classification 
            and specific regulatory requirements. Our team will guide you through the complete checklist.
          </p>
        </div>
      </div>
    </section> */}

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="mt-8">
            <div className="space-y-8">
              {/* Labeling Compliance */}
              <div className="bg-card rounded-xl shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Labeling Compliance
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      Prohibited Claims
                    </h4>
                    <p className="text-muted-foreground">
                      Terms like "Anti-aging," "Anti-wrinkle," or "cosmeceutical" are not recognized and may be non-compliant.
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Languages className="w-5 h-5 text-green-500" />
                      Compliant Language
                    </h4>
                    <p className="text-muted-foreground">
                      We help rephrase claims to ensure full compliance with CDSCO norms and regulatory requirements.
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <TestTube className="w-5 h-5 text-orange-500" />
                      Ingredient Warnings
                    </h4>
                    <p className="text-muted-foreground">
                      Certain ingredients require specific label warnings (e.g., Resorcinol-containing products).
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-blue-500" />
                      Legal Metrology
                    </h4>
                    <p className="text-muted-foreground">
                      Labels must include MRP, net content, marketer details, manufacturing date, etc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ingredients Compliance */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl shadow-sm border border-green-200 dark:border-green-800 p-8">
                <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-6 flex items-center gap-3">
                  <Atom className="w-6 h-6 text-green-600" />
                  Ingredients Compliance
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                      <Ban className="w-5 h-5" />
                      Banned Ingredients
                    </h4>
                    <p className="text-muted-foreground">
                      Completely prohibited substances that cannot be used in cosmetic products.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-600 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Restricted Ingredients
                    </h4>
                    <p className="text-muted-foreground">
                      Allowed within specified concentration limits and usage conditions.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Permitted Ingredients
                    </h4>
                    <p className="text-muted-foreground">
                      Approved ingredients that can be safely used in cosmetic formulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="mt-8">
            <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 text-center border-b">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive solutions for CDSCO Cosmetic Import License and regulatory compliance
                </p>
              </div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {/* Service 1 */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-8 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Cosmetic Import License (COS-2) Approval
                        </h3>
                        <p className="text-muted-foreground mb-4">End-to-end support for cosmetic import license application and approval</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Assistance with fresh, endorsement & renewal applications.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Complete CDSCO documentation & SUGAM portal filing.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Compliance with Cosmetics Rules, 2020.</span>
                      </li>
                      {/* <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Application tracking and follow-up</span>
                      </li> */}
                    </ul>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-8 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Authorized Agent Support</h3>
                        <p className="text-muted-foreground mb-4">Comprehensive compliance assessment and gap analysis</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Act as Indian representative for foreign manufacturers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Manage CDSCO communication & submissions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Ensure full local regulatory compliance.</span>
                      </li>
                      {/* <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Claims validation and correction</span>
                      </li> */}
                    </ul>
                    <a
                      href="https://regacats.in/indian-authorized-agent-for-cosmetics-in-india"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-green-700 underline underline-offset-4"
                    >
                      Learn about Indian Authorized Agent support
                    </a>
                  </div>

                  {/* Service 3 */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-8 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">⁠Legal Metrology Importer Registration</h3>
                        <p className="text-muted-foreground mb-4">Compliant label artwork design and legal metrology adherence</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>LMPC registration under Legal Metrology Act.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Compliance for weight, volume & labeling norms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Avoid customs delays & legal penalties.
                        </span>
                      </li>
                      {/* <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Warning and cautionary statement</span>
                      </li> */}
                    </ul>
                  </div>

                  {/* Service 4 */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 p-8 rounded-xl border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Handshake className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">EPR Authorization from CPCB</h3>
                        <p className="text-muted-foreground mb-4">Professional assistance with all required documentation</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>EPR registration under Plastic Waste Management Rules.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Ensure sustainable packaging compliance.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Preparation of EPR plan & coordination with CPCB.
                        </span>
                      </li>
                      {/* <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Product specification sheets</span>
                      </li> */}
                    </ul>
                  </div>

                  {/* Service 5 */}
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 p-8 rounded-xl border border-cyan-200 dark:border-cyan-800 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">⁠Labeling Compliance</h3>
                        <p className="text-muted-foreground mb-4">Strategic guidance for international cosmetic brands entering India</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>Label review per Cosmetic Rules & BIS standards.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>Verify mandatory details & bilingual text.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>Pre-import label approval support</span>
                      </li>
                      {/* <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>Ongoing compliance support</span>
                      </li> */}
                    </ul>
                  </div>

                  {/* Service 6 */}
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 p-8 rounded-xl border border-pink-200 dark:border-pink-800 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Route className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2"> ⁠Ingredient Compliance
                        </h3>
                        <p className="text-muted-foreground mb-4">Continued support after license approval for smooth operations</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>Ingredient check against prohibited/restricted lists.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>Verify formulations with Indian cosmetic standards.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>Guidance for reformulation if required.
                        </span>
                      </li>
                      {/* <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>Compliance audit and monitoring</span>
                      </li> */}
                    </ul>
                  </div>
                

                {/* service 7 */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 p-8 rounded-xl border border-pink-200 dark:border-pink-800 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Route className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2"> ⁠Regulatory Reporting & Post-Approval Changes

                        </h3>
                        <p className="text-muted-foreground mb-4">Continued support after license approval for smooth operations</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>Handle formula, label & manufacturer change filings.

                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>Support renewals & endorsements.

                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>Maintain updated regulatory documentation.
                        </span>
                      </li>
                      {/* <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>Compliance audit and monitoring</span>
                      </li> */}
                    </ul>
                  </div>
               


                

                {/* CTA */}
                <div className="mt-12 text-center">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Ready to Get Started?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Let our experts guide you through the entire CDSCO cosmetic import licensing process. Get in touch for a free consultation.
                    </p>
                    <a 
                      href="https://wa.me/919711467307" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <Handshake className="w-5 h-5" />
                      Contact Us Today
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CosmeticImport;
