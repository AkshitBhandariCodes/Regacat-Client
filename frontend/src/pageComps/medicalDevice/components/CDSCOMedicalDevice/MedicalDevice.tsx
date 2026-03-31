// Fixed CosmeticImport Component
// All TabsContent are now correctly placed inside <Tabs>

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Shield,
  Award,
  TestTube,
  Package,
  Globe,
  CheckCircle,
  FileCheck,
  BadgeCheck,
} from "lucide-react";
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
    { icon: TestTube, text: "Test Reports and Safety Certificates" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-background border-b">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Overview of Medical Device Import License (MD14, MD15) in India
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Quick guide to Medical Device Import License process (MD14 & MD15)
            required for importing medical devices into India.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-primary text-white p-2 h-auto">
            <TabsTrigger value="overview" className="gap-2">
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">MD14 / MD15</span>
            </TabsTrigger>
            <TabsTrigger value="fee-structure" className="gap-2">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Fee Structure</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Documents Required</span>
            </TabsTrigger>
          
            <TabsTrigger value="services" className="gap-2">
              <Handshake className="w-4 h-4" />
              <span className="hidden sm:inline">Our Services</span>
            </TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="mt-8">
            <div className="bg-card rounded-xl shadow-sm border p-8"> <div className="grid md:grid-cols-2 gap-8"> <div> <div className="mb-6"> <h2 className="text-2xl font-bold text-foreground mb-2"> What Are MD-14 and MD-15 Forms? </h2> <h3 className="text-lg ">MD-14 – (Application for Medical Device Import License)</h3> </div> <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg"> <p className="text-foreground/90 leading-relaxed italic text-justify"> • <strong>Form MD-14</strong> is the application form submitted by a manufacturer, their authorized Indian agent, or a subsidiary to obtain approval for importing medical devices into India. <br /> • The application is filed online through the <strong>CDSCO MD online portal</strong> and must include all required documents such as the Power of Attonery, Free Sale Certificate, Product labels, ISO 13485, CE certification, etc. </p> {/* <div className="text-right mt-4 text-sm text-muted-foreground"> — Drugs and Cosmetics Act, 1940 </div> */} </div><br /> <h3 className="text-lg ">MD-15 – (Issuance of Medical Device License)</h3><br /> <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg"> <p className="text-foreground/90 leading-relaxed italic text-justify"> • Once the CDSCO reviews and approves the MD-14 application, the <strong>Medical Device Import License</strong> is granted in Form MD-15. <br /> • This license authorizes the holder to legally import and distribute <strong>medical devices in India.</strong> </p> {/* <div className="text-right mt-4 text-sm text-muted-foreground"> — Drugs and Cosmetics Act, 1940 </div> */} </div> </div> <div> <div className="mb-6"> <h2 className="text-2xl font-bold text-foreground mb-2"> Key Information </h2> <p className="text-sm text-muted-foreground">Essential regulatory details</p> </div> <div className="space-y-4"> <div className="bg-card border rounded-lg p-6"> <h3 className="flex items-center gap-3 text-lg font-semibold text-foreground mb-4"> <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"> <Gavel className="w-5 h-5 text-primary" /> </div> Governing Laws </h3> <ul className="space-y-2 text-muted-foreground"> <li className="flex items-start gap-2"> <span className="text-primary mt-1">•</span> <span>Drugs and Cosmetics Act, 1940</span> </li> <li className="flex items-start gap-2"> <span className="text-primary mt-1">•</span> <span>Medical Device Rules, 2017</span> </li> </ul> </div> <div className="bg-card border rounded-lg p-6"> <h3 className="flex items-center gap-3 text-lg font-semibold text-foreground mb-4"> <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"> <Users className="w-5 h-5 text-primary" /> </div> Eligible Applicants </h3> <ul className="space-y-2 text-muted-foreground"> <li className="flex items-start gap-2"> <span className="text-primary mt-1">•</span> <span>Indian Manufacturer</span> </li> <li className="flex items-start gap-2"> <span className="text-primary mt-1">•</span> <span>Foreign Subsidiary in India</span> </li> <li className="flex items-start gap-2"> <span className="text-primary mt-1">•</span> <span>Authorized Indian Agent</span> </li> <li className="flex items-start gap-2"> <span className="text-primary mt-1">•</span> <span>Indian Importer</span> </li> </ul> </div> </div> </div> </div> </div>
          </TabsContent>

          {/* FEE STRUCTURE TAB */}
          <TabsContent value="fee-structure" className="mt-8">
            <div className="bg-card rounded-xl shadow-sm border overflow-hidden"> <div className="p-8"> <div className="mb-8 text-center"> <h2 className="text-3xl font-bold text-foreground mb-2"> Fee Structure </h2> <p className="text-muted-foreground">Statutory fees for cosmetic import License (Cos-2)</p> </div> <div className="max-w-4xl mx-auto"> <div className="rounded-lg overflow-hidden "> <div className="bg-primary dark:bg-slate-800 text-white px-6 py-4"> <h3 className="text-lg font-semibold flex items-center gap-2"> <DollarSign className="w-5 h-5" /> Registration Fees </h3> </div> {/* <div className="divide-"> <div className="flex justify-between items-center px-6 py-5 bg-background hover:bg-muted/30 transition-colors"> <span className="text-foreground font-medium">Class A</span> <span className="text-foreground font-bold text-lg">USD 1,000</span> </div> <div className="flex justify-between items-center px-6 py-5 bg-background hover:bg-muted/30 transition-colors"> <span className="text-foreground font-medium">Manufacturing Site Registration</span> <span className="text-foreground font-bold text-lg">USD 500</span> </div> <div className="flex justify-between items-center px-6 py-5 bg-background hover:bg-muted/30 transition-colors"> <span className="text-foreground font-medium">Product Variant (per variant)</span> <span className="text-foreground font-bold text-lg">USD 50</span> </div> </div> */} ; <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"> {/* Class A */} <div className="border rounded-xl overflow-hidden bg-background shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"> {/* Gradient Header */} <div className="px-6 py-4 border-b bg-gradient-to-r from-primary to-primary/60 flex items-center gap-3 text-white"> <ShieldCheck className="w-6 h-6" /> <h3 className="text-lg font-semibold">Class A</h3> </div> {/* Fees */} <div className="px-6 py-6 space-y-4"> <div className="flex justify-between items-center"> <span className="text-sm text-muted-foreground">Mfg.Site</span> <span className="text-foreground font-bold text-lg">USD 1,000</span> </div> <div className="flex justify-between items-center"> <span className="text-sm text-muted-foreground">Each Medical Device</span> <span className="text-foreground font-bold text-lg">USD 50</span> </div> </div> </div> {/* Class B */} <div className="border rounded-xl overflow-hidden bg-background shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"> <div className="px-6 py-4 border-b bg-gradient-to-r from-primary to-primary/60 flex items-center gap-3 text-white"> <BadgeCheck className="w-6 h-6" /> <h3 className="text-lg font-semibold">Class B</h3> </div> <div className="px-6 py-6 space-y-4"> <div className="flex justify-between items-center"> <span className="text-sm text-muted-foreground">Mfg.Site</span> <span className="text-foreground font-bold text-lg">USD 2,000</span> </div> <div className="flex justify-between items-center"> <span className="text-sm text-muted-foreground">Each Medical Device</span> <span className="text-foreground font-bold text-lg">USD 1000</span> </div> </div> </div> {/* Class C/D */} <div className="border rounded-xl overflow-hidden bg-background shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"> <div className="px-6 py-4 border-b bg-gradient-to-r from-primary to-primary/60 flex items-center gap-3 text-white"> <AlertTriangle className="w-6 h-6" /> <h3 className="text-lg font-semibold">Class C/D</h3> </div> <div className="px-6 py-6 space-y-4"> <div className="flex justify-between items-center"> <span className="text-sm text-muted-foreground">Mfg. Site</span> <span className="text-foreground font-bold text-lg">USD 3,000</span> </div> <div className="flex justify-between items-center"> <span className="text-sm text-muted-foreground">Each Medical Device</span> <span className="text-foreground font-bold text-lg">USD 1,500</span> </div> </div> </div> </div> </div> <br /> </div> </div> </div>
          </TabsContent>

          {/* DOCUMENTS TAB */}
          <TabsContent value="documents" className="mt-8">
            <section className="py-10 bg-background">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">
                  Documents Required
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 rounded-xl border-2 border-border hover:border-primary bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20">
                        <doc.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{doc.text}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          {/* COMPLIANCE TAB */}
         

          {/* SERVICES TAB */}
          <TabsContent value="services" className="mt-8">
          <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 text-center border-b">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive solutions for CDSCO Medical Device Import License and regulatory compliance
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
                        <h3 className="text-xl font-bold text-foreground mb-2">Medical Device Import License (MD15) Approval
                        </h3>
                        <p className="text-muted-foreground mb-4">End-to-end support for Medical Import  license application and approval</p>
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
                        <span>Complete CDSCO documentation & filing.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Compliance with Medical Device Rules, 2017.</span>
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
                  </div>

                  {/* Service 3 */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-8 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all group">
  <div className="flex items-start gap-4 mb-4">
    <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
      <ShieldCheck className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-foreground mb-2">Device Model Approval Support</h3>
      <p className="text-muted-foreground mb-4">End-to-end guidance for Legal Metrology Model Approval</p>
    </div>
  </div>

  <ul className="space-y-2 text-sm text-muted-foreground">
    <li className="flex items-start gap-2">
      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
      <span>Assist manufacturers in obtaining Model Approval under Legal Metrology (Govt. of India).</span>
    </li>

    <li className="flex items-start gap-2">
      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
      <span>Handle documentation, test reports & interactions with LM laboratories.</span>
    </li>

    <li className="flex items-start gap-2">
      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
      <span>Ensure device compliance with Indian metrology standards & technical regulations.</span>
    </li>
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
                        <span>Label review per Medical Deivce Rules & BIS standards.</span>
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
      <h3 className="text-xl font-bold text-foreground mb-2">BIS Compliance Certification</h3>
      <p className="text-muted-foreground mb-4">End-to-end support for BIS registration & certification requirements</p>
    </div>
  </div>

  <ul className="space-y-2 text-sm text-muted-foreground">

    <li className="flex items-start gap-2">
      <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
      <span>Verify product category under mandatory BIS CRS/FMT/ISI schemes.</span>
    </li>

    <li className="flex items-start gap-2">
      <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
      <span>Assess technical specifications with relevant Indian Standards (IS codes).</span>
    </li>

    <li className="flex items-start gap-2">
      <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
      <span>Guidance on product modification or documentation updates if required.</span>
    </li>

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
                      href="https://wa.me/919211921474" 
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
