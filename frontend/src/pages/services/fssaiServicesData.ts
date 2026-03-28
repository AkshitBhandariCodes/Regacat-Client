import { FssaiServiceData } from "./FssaiServiceTemplate";

export const fssaiServicesData: Record<string, FssaiServiceData> = {
  nutraceuticalImport: {
    heroBadge: "FSSAI Nutraceutical Import Support",
    heroTitle: "FSSAI Nutraceutical Import Consultant in India",
    heroDescription:
      "Complete regulatory support for global brands and Indian importers from classification and label review to NSF approvals and port clearance.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/02/fssai-nutraceutical-import-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/02/fssai-nutraceutical-import-process-infographic-1024x683.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/02/fssai-import-clearance-regacats-1024x683.webp",
    highlights: [
      "FSSAI Nutraceutical Import Consultant for global brands and Indian importers",
      "Regulatory classification assessment for nutraceutical, dietary supplement, FSDU, FSMP, prebiotic and probiotic products",
      "Ingredient and dosage validation against FSSAI schedules and limits",
      "FSSAI Central License with import endorsement and filing support",
      "Label adaptation for Indian market with mandatory declarations",
      "NSF approval support for non-listed ingredients",
      "Foreign manufacturing facility registration support where applicable",
      "Pre-shipment audit and port clearance coordination",
    ],
    detailedSteps: [
      {
        title: "Step 1: Regulatory Classification",
        description:
          "We classify products as nutraceutical, dietary supplement, FSDU, FSMP, prebiotic, or probiotic to avoid downstream objections.",
      },
      {
        title: "Step 2: Ingredient and Dosage Validation",
        description:
          "Ingredient permissibility, limits, additive usage, and prohibited substance checks are done against FSSAI schedules.",
      },
      {
        title: "Step 3: Central License and Import Endorsement",
        description:
          "Importer licensing documentation is prepared and filed with coordinated response handling.",
      },
      {
        title: "Step 4: Label Adaptation for India",
        description:
          "Label checks include mandatory declarations, nutritional format, allergen, symbols, importer details, and disclaimers.",
      },
      {
        title: "Step 5: NSF Approval (If Required)",
        description:
          "For non-listed ingredients, we prepare scientific safety justification with relevant technical evidence.",
      },
      {
        title: "Step 6: Pre-shipment and Port Clearance",
        description:
          "We run pre-shipment compliance checks and support customs/FSSAI coordination during sampling and release.",
        points: [
          "Documentation verification and COA alignment",
          "Label compliance confirmation before dispatch",
          "Sampling and testing coordination at port level",
          "Query handling with customs brokers and FSSAI officers",
        ],
      },
      {
        title: "Common Challenges in Nutraceutical Import",
        description:
          "Importers commonly face rejection risks from dosage, ingredient, and label gaps when products are not pre-assessed for Indian requirements.",
        points: [
          "Excess vitamin dosage rejection",
          "Ingredient non-permissibility",
          "Label misalignment and claim overstatement",
          "Missing documentation and incorrect HS classification",
          "Shipment detention and delayed release",
        ],
      },
      {
        title: "Estimated Timelines and Planning",
        description:
          "Timelines depend on product complexity and scientific review needs, so regulatory planning should begin before shipment preparation.",
        points: [
          "Central License: 2-4 weeks",
          "Label review: 3-5 days",
          "NSF approval: 4-6 months",
          "Port clearance: 2-12 days",
        ],
      },
    ],
    timeline: [
      { label: "Central License", value: "2-4 weeks" },
      { label: "Label compliance review", value: "3-5 days" },
      { label: "NSF approval", value: "4-6 months" },
      { label: "Port clearance", value: "2-12 days" },
    ],
    documents: [
      "FSSAI Central license copy",
      "IEC (Import Export Code)",
      "Product composition and specifications",
      "Ingredient and dosage schedules mapping",
      "Certificate of Free Sale",
      "Raw material CoA",
      "Country of origin certificate",
      "Manufacturing license copy",
      "Label artwork",
      "Power of Attorney (if applicable)",
    ],
    challenges: [
      "Excess vitamin dosage rejection",
      "Ingredient non-permissibility",
      "Label and claim non-compliance",
      "Missing documentation",
      "Incorrect HS classification",
      "Shipment detention",
    ],
    faqs: [
      {
        question: "Is FSSAI approval required before importing nutraceuticals?",
        answer: "Yes. Importers should complete licensing, label compliance, and ingredient validation before shipment.",
      },
      {
        question: "Do foreign brands need Indian representation?",
        answer: "Often yes. Depending on business structure, local regulatory coordination in India is necessary.",
      },
      {
        question: "What happens if shipment fails testing?",
        answer: "FSSAI may require re-export, destruction, or corrective action, so pre-shipment compliance is critical.",
      },
      {
        question: "Can NSF be avoided for all products?",
        answer: "No. If an ingredient is not covered in permitted schedules, NSF approval may be mandatory.",
      },
    ],
    formServiceOptions: ["Nutraceutical Import Consultant", "FSSAI Central License", "NSF Approval", "Label Compliance Review"],
  },
  nonSpecifiedFood: {
    heroBadge: "Non-Specified Food Approval",
    heroTitle: "Non-Specified Food & Ingredient Approval in India",
    heroDescription:
      "Scientific and regulatory support for NSF/novel food approvals including dossier preparation, submissions, and authority coordination under FSSAI.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2025/12/non-specified-food-ingredient-approval-india-regacats-1024x682.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2025/12/step-by-step-non-specified-food-ingredient-approval-india-regacats-1024x682.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/Non-Specified-Product-Ingredient-Approval-799x1024.png",
    highlights: [
      "Regulatory support for non-specified, novel food, and new ingredients",
      "Applicability assessment under Approval for Non-Specified Food and Food Ingredients Regulations, 2017",
      "Scientific safety dossier development and submission",
      "Application filing through FSSAI approval mechanism",
      "Expert panel query response support",
      "Importer and international brand compliance alignment",
      "Post-approval labeling and license mapping support",
    ],
    detailedSteps: [
      {
        title: "Step 1: Application Submission",
        description:
          "Application is filed with complete product and ingredient details, intended use, and correct classification.",
      },
      {
        title: "Step 2: Scientific Documentation Submission",
        description:
          "Comprehensive data package is submitted including composition, safety/toxicology data, labeling, source details, and manufacturing process.",
      },
      {
        title: "Step 3: Scientific Evaluation",
        description:
          "FSSAI scientific panels evaluate safety, usage levels, and regulatory suitability for Indian market conditions.",
      },
      {
        title: "Step 4: Queries and Clarifications",
        description:
          "Technical queries are addressed quickly with structured scientific responses to avoid delays.",
      },
      {
        title: "Step 5: Approval or Rejection",
        description:
          "Decision is issued based on data adequacy and risk profile; approved products can be marketed under specified conditions.",
      },
      {
        title: "Regulatory Framework Governing NSF Approvals",
        description:
          "Approvals are governed by the Food Safety and Standards Act, 2006, NSF Regulations, 2017, and relevant FSSAI advisories.",
      },
      {
        title: "Role of Expert Regulatory Consultants",
        description:
          "Consultant support improves classification accuracy, dossier quality, and authority coordination to reduce avoidable delays and rejection risk.",
        points: [
          "Regulatory strategy and product classification",
          "Scientific documentation and dossier structuring",
          "Efficient authority coordination",
          "Risk reduction through regulator-aligned submissions",
          "Cross-category support across food, nutraceutical, and supplements",
        ],
      },
    ],
    timeline: [
      { label: "Indicative approval timeline", value: "6-8 months" },
      { label: "Government fee", value: "INR 50,000 + 18% GST" },
      { label: "Evaluation model", value: "Scientific panel-based" },
      { label: "Import use-case", value: "Prior approval required" },
    ],
    documents: [
      "Detailed product and ingredient information",
      "Ingredient source and nature",
      "Manufacturing process and flow chart",
      "FSSAI license number (if available)",
      "Intended use and functional use details",
      "Worldwide regulatory status (at least two countries)",
      "NABL CoA and safety data",
      "Applicant-manufacturer relationship agreement",
      "Claim substantiation studies/journals",
      "Label compliant with FSSAI regulations",
      "Declaration for post-marketing surveillance",
    ],
    challenges: [
      "Complex scientific documentation requirements",
      "Extended expert review and clarifications",
      "Regulatory gaps for imported ingredients",
      "Misclassification by food businesses",
    ],
    faqs: [
      {
        question: "What if a product is sold without NSF approval?",
        answer: "It can face rejection, recall, seizure, notices, and monetary penalties.",
      },
      {
        question: "Is NSF approval mandatory for imported non-standard ingredients?",
        answer: "Yes. Products with non-specified ingredients need prior approval before import and sale.",
      },
      {
        question: "Can one NSF approval cover multiple products?",
        answer: "Generally no. Approval is product-specific and ingredient-specific.",
      },
      {
        question: "Does NSF approval replace FSSAI license?",
        answer: "No. It is additional to the applicable FSSAI license.",
      },
    ],
    formServiceOptions: ["Non-Specified Food Approval", "NSF Dossier", "Novel Ingredient Review", "Import NSF Support"],
  },
  foreignFoodFacility: {
    heroBadge: "ReFOM Registration",
    heroTitle: "Foreign Food Manufacturing Facility Registration in India",
    heroDescription:
      "Regulator-aligned ReFOM support for overseas food manufacturers exporting notified food categories to India.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/foreign-food-manufacturing-facility-registration-india-regacats-1024x682.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/step-by-step-refom-registration-india-regacats-1024x682.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/food-categories-refom-registration-india-regacats-hq-1024x683.webp",
    highlights: [
      "FSSAI registration for foreign food manufacturers exporting to India",
      "Applicability check for notified categories under ReFOM",
      "ReFOM application preparation and authority-side coordination",
      "Competent authority and facility data alignment",
      "Inspection readiness guidance for risk-based assessments",
      "Authority communication support through review and closure",
      "India market entry risk reduction for notified food categories",
    ],
    detailedSteps: [
      {
        title: "Step 1: Application Submission",
        description:
          "ReFOM application is filed with complete information by competent authority of exporting country.",
      },
      {
        title: "Step 2: Application Review",
        description:
          "FSSAI reviews details and may seek additional information where the application is incomplete.",
      },
      {
        title: "Step 3: Inspection (If Required)",
        description:
          "Risk-based inspection may be conducted for the foreign facility; associated inspection cost is borne by applicant.",
      },
      {
        title: "Step 4: Approval or Rejection",
        description:
          "Registration is granted on compliance or rejected with reasons; reapplication is possible after corrective action.",
      },
      {
        title: "Mandatory Food Categories and Coverage",
        description:
          "FSSAI currently focuses ReFOM controls on higher risk categories where preventive upstream regulation improves traceability and import safety.",
        points: [
          "Milk and milk products",
          "Meat and meat products",
          "Egg powder",
          "Infant food",
          "Nutraceuticals",
        ],
      },
      {
        title: "Validity, Fees, and Ongoing Compliance",
        description:
          "ReFOM registration remains valid for two years from grant date; there is no registration fee currently, but inspection cost is payable when inspection is triggered.",
      },
    ],
    timeline: [
      { label: "Registration validity", value: "2 years" },
      { label: "Government fee", value: "No fee currently" },
      { label: "Inspection cost", value: "Payable if inspection occurs" },
      { label: "Timeline basis", value: "Data quality + inspection needs" },
    ],
    documents: [
      "Exporting country details",
      "Competent authority details",
      "Foreign manufacturing facility details",
      "Valid approval/license from competent authority",
      "Product list and HS codes for India export",
      "Category-specific compliance evidence",
    ],
    challenges: [
      "Incomplete or inconsistent documentation",
      "Inspection-related delays",
      "Misalignment with Indian category requirements",
      "Uncertainty about notified category coverage",
    ],
    faqs: [
      {
        question: "Is ReFOM mandatory for all exported foods to India?",
        answer: "No. It is mandatory for notified categories identified by FSSAI.",
      },
      {
        question: "Can a foreign manufacturer apply without Indian representative?",
        answer: "Applications may be submitted directly or through an authorized representative, depending on case.",
      },
      {
        question: "Does FSSAI inspect every foreign facility?",
        answer: "No. Inspection depends on risk assessment.",
      },
      {
        question: "What if registration is rejected?",
        answer: "Facility may reapply after implementing corrective actions.",
      },
    ],
    formServiceOptions: ["ReFOM Registration", "Foreign Facility Compliance", "ReFOM Documentation", "FSSAI Export Readiness"],
  },
  veganEndorsement: {
    heroBadge: "FSSAI Vegan Endorsement",
    heroTitle: "FSSAI Vegan Endorsement Services in India",
    heroDescription:
      "Compliance support for vegan claims and vegan logo usage through ingredient review, process checks, documentation, and authority coordination.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/vegan-endorsement-services-india-regacats-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/step-by-step-vegan-endorsement-process-fssai-1024x683.png",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/what-is-vegan-endorsement-under-fssai-regulations-1024x683.png",
    highlights: [
      "FSSAI vegan endorsement for food and nutraceutical products",
      "Vegan claim eligibility review",
      "Ingredient and additive source validation",
      "Manufacturing cross-contact and contamination assessment",
      "Vegan labeling and logo compliance",
      "Submission and authority query support",
      "Indian and imported product compliance planning",
    ],
    detailedSteps: [
      {
        title: "Step 1: Product and Ingredient Assessment",
        description:
          "Ingredient list, additives, processing aids, and raw material origin are reviewed for vegan eligibility.",
      },
      {
        title: "Step 2: Manufacturing Process Evaluation",
        description:
          "Process controls are checked to rule out animal-origin contamination or cross-contact risk.",
      },
      {
        title: "Step 3: Documentation Preparation",
        description:
          "Declarations, justifications, and compliance documents are prepared in regulator-acceptable format.",
      },
      {
        title: "Step 4: Submission for Endorsement",
        description:
          "Application is filed through prescribed regulatory mechanism with complete supporting evidence.",
      },
      {
        title: "Step 5: Clarifications and Review",
        description:
          "Authority queries are handled with timely and accurate responses.",
      },
      {
        title: "Step 6: Grant of Vegan Endorsement",
        description:
          "On approval, product becomes eligible for official vegan logo and compliant vegan communication.",
      },
      {
        title: "FSSAI Position on Vegan Claims",
        description:
          "No food business operator should use vegan term or vegan logo unless endorsement is granted under prescribed process; self-declaration is not sufficient.",
      },
      {
        title: "Who Requires Vegan Endorsement in India",
        description:
          "Vegan endorsement applies to food products and imported products claiming vegan status, in addition to valid FSSAI license obligations.",
        points: [
          "Food products claiming vegan status",
          "Imported food products marketed as vegan",
          "Indian manufacturers using vegan claim or logo",
          "Foreign brands selling vegan products in India",
        ],
      },
    ],
    timeline: [
      { label: "Eligibility assessment", value: "3-7 days" },
      { label: "Documentation and filing", value: "1-3 weeks" },
      { label: "Authority review", value: "Case-based" },
      { label: "Overall timeline", value: "Depends on product complexity" },
    ],
    documents: [
      "Complete ingredient and additive list",
      "Raw material source declarations",
      "Manufacturing process and controls",
      "Label artwork and vegan claim statements",
      "Existing FSSAI license details",
      "Supporting declarations and compliance notes",
    ],
    challenges: [
      "Hidden animal-origin additives",
      "Unclear raw material origin",
      "Inconsistent vegan labeling",
      "Misunderstanding of endorsement rules",
    ],
    faqs: [
      {
        question: "Is vegan endorsement mandatory in India?",
        answer: "Yes, if product is marketed as vegan or uses vegan logo/claim.",
      },
      {
        question: "Can imported products use vegan claims without endorsement?",
        answer: "No. Imported products must also comply and obtain endorsement before marketing.",
      },
      {
        question: "Does vegan endorsement replace FSSAI license?",
        answer: "No. It is an additional compliance requirement.",
      },
      {
        question: "How long does vegan endorsement take?",
        answer: "It varies by product complexity and quality of submitted documentation.",
      },
    ],
    formServiceOptions: ["Vegan Endorsement", "Vegan Claim Compliance", "Ingredient Assessment", "Vegan Label Review"],
  },

  license: {
    heroBadge: "FSSAI License & Registration",
    heroTitle: "FSSAI License & Registration Services in India",
    heroDescription:
      "End-to-end support for Registration, State License, and Central License through FoSCoS with documentation, filing, and authority coordination.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2025/12/fssai-license-registration-services-india-regacats-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/how-to-apply-fssai-license-foscos-process-regacats-1024x682.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/documents-required-fssai-license-india-regacats-1024x682.webp",
    highlights: [
      "FSSAI license for food, nutraceutical, and dietary supplement businesses",
      "License category assessment (Registration/State/Central)",
      "Form A / Form B application support",
      "FoSCoS filing and query management",
      "License modification and renewal support",
      "Importer-focused Central license assistance",
      "Regulator-aligned documentation and compliance execution",
    ],
    detailedSteps: [
      {
        title: "Submission on FoSCoS Portal",
        description:
          "Application is filed for appropriate category based on turnover, product type, and activity with Form A or Form B.",
      },
      {
        title: "Uploading Required Documents",
        description:
          "Complete document package is prepared including premises proof, layout, product details, machinery, FSMS plan, and supporting legal documents.",
      },
      {
        title: "Declaration Submission",
        description:
          "A compliance declaration is submitted confirming adherence to FSSAI rules and license conditions.",
      },
      {
        title: "Authority Queries and Clarifications",
        description:
          "Any clarification from licensing authority is addressed within prescribed timeline to avoid delay or rejection.",
      },
      {
        title: "Grant of License",
        description:
          "Upon successful review and closure of queries, license is issued in Form C.",
      },
      {
        title: "Types of FSSAI License and Registration",
        description:
          "Licensing category depends on turnover, scale, and activity. Registration applies up to INR 12 lakh, State License above INR 12 lakh to INR 20 crore, and Central License above INR 20 crore and for specified activities such as import and nutraceutical categories.",
        points: [
          "Registration fee: INR 100",
          "State License fee: INR 2000/3000/5000",
          "Central License fee: INR 7500 + GST",
        ],
      },
      {
        title: "Who Requires FSSAI License and Registration",
        description:
          "Any entity in the food supply chain must hold applicable registration or license before operations.",
        points: [
          "Manufacturers and processors",
          "Nutraceutical and dietary supplement companies",
          "Importers and exporters",
          "Warehouses, distributors, and wholesalers",
          "Retailers, e-commerce, restaurants, cloud kitchens, and caterers",
        ],
      },
    ],
    timeline: [
      { label: "Form C issuance target", value: "~30-45 days after filing or query closure" },
      { label: "Authority response window", value: "Within 30 days for raised queries" },
      { label: "Registration fee", value: "INR 100" },
      { label: "Central license fee", value: "INR 7500 + GST" },
    ],
    documents: [
      "Blueprint/layout of processing unit",
      "Directors/partners/proprietor details",
      "List of machinery and equipment",
      "Water testing report",
      "Photo ID and address proof",
      "Proof of possession of premises",
      "MOA/AOA or relevant constitution document",
      "Form IX (where applicable)",
      "Food recall plan and production unit photos",
    ],
    challenges: [
      "Wrong license category selection",
      "Incomplete document sets",
      "Improper product category mapping",
      "Delayed authority query responses",
      "Renewal and modification gaps",
    ],
    faqs: [
      {
        question: "Is FSSAI license mandatory for all food businesses?",
        answer: "Yes. Every food business operator must obtain suitable FSSAI registration or license before operations.",
      },
      {
        question: "How long does FSSAI licensing take?",
        answer: "It depends on license type and documentation completeness. Central licenses usually take longer than registration/state licenses.",
      },
      {
        question: "Can international companies apply?",
        answer: "Yes. International companies importing food into India need Central FSSAI license and import compliance support.",
      },
      {
        question: "Does one license cover multiple premises?",
        answer: "Not always. Separate premises may need separate licensing depending on business setup and operations.",
      },
    ],
    formServiceOptions: ["FSSAI License", "State License", "Central License", "License Renewal"],
  },
  import: {
    heroBadge: "FSSAI Import Assistance",
    heroTitle: "FSSAI Import Assistance Services in India",
    heroDescription:
      "Specialized support for imported food, nutraceutical, and dietary supplement products with label checks, licensing, NOC filing, and port clearance coordination.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/fssai-import-assistance-services-india-regacats-1024x682.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/step-by-step-fssai-import-clearance-india-regacats.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/fssai-food-import-compliance-customs-clearance-india-1024x683.png",
    highlights: [
      "Understanding FSSAI import regulations for food and nutraceutical products",
      "Product and ingredient compliance assessment",
      "Central FSSAI importer license support",
      "Indian label compliance review",
      "NOC filing support on FICS portal",
      "Port sampling and customs coordination",
      "Risk mitigation for detention, testing delays, and rejection",
    ],
    detailedSteps: [
      {
        title: "Step 1: Product and Ingredients Assessment",
        description:
          "We map product category, ingredient permissibility, labeling and claims requirements, and any prior approval dependencies.",
      },
      {
        title: "Step 2: Central FSSAI Importer License",
        description:
          "Importer must hold valid Central license with import endorsement before customs clearance.",
      },
      {
        title: "Step 3: Label Review and Compliance",
        description:
          "We verify mandatory declarations, nutrition format, allergen details, claims language, and layout requirements for India.",
      },
      {
        title: "Step 4: Pre-import Compliance Strategy",
        description:
          "For complex products, we plan NSF and claim pathways in advance to avoid shipment-stage surprises.",
      },
      {
        title: "Step 5: NOC Filing on FICS",
        description:
          "Application is submitted with bill of entry details, product data, and supporting documents for FSSAI NOC processing.",
      },
      {
        title: "Step 6: Port Clearance and Sampling Support",
        description:
          "We coordinate with customs, FSSAI officers, and CHA during verification, sampling, and final release.",
      },
      {
        title: "Our FSSAI Import Assistance Services",
        description:
          "Import support is delivered as a structured compliance package across licensing, approvals, labeling, and authority coordination.",
        points: [
          "Import regulatory mapping",
          "Labeling and claims compliance",
          "Central FSSAI importer license",
          "Non-specified food and ingredient approval support",
          "NOC filing on FICS portal",
          "Customs and authority coordination",
          "Import risk mitigation",
        ],
      },
      {
        title: "Who Requires Import Assistance and Why",
        description:
          "Import compliance applies to Indian importers, foreign manufacturers, nutraceutical brands, and e-commerce businesses importing packaged foods.",
        points: [
          "Indian food importers",
          "Foreign food manufacturers exporting to India",
          "Nutraceutical and dietary supplement brands",
          "E-commerce businesses importing packaged foods",
          "Global companies entering Indian food market",
        ],
      },
    ],
    timeline: [
      { label: "Importer license readiness", value: "2-6 weeks" },
      { label: "Label review", value: "3-5 days" },
      { label: "NOC processing", value: "Case-based" },
      { label: "Port clearance", value: "Depends on sampling/testing" },
    ],
    documents: [
      "Central FSSAI importer license",
      "Invoice, packing list, and bill of entry",
      "Product labels and artwork",
      "Ingredient and composition details",
      "Country of origin and manufacturer details",
      "HS code and consignment details",
      "Additional approval documents (if applicable)",
    ],
    challenges: [
      "Label mismatch at port",
      "Ingredient non-compliance",
      "Delays due to sampling and testing",
      "Missing endorsement for import KoB",
      "Incomplete document uploads on FICS",
    ],
    faqs: [
      {
        question: "Is FSSAI import compliance mandatory for every shipment?",
        answer: "Yes. Every regulated food consignment is evaluated for compliance before release in India.",
      },
      {
        question: "Can products approved abroad bypass Indian checks?",
        answer: "No. Products must still meet Indian standards, labeling rules, and FSSAI import requirements.",
      },
      {
        question: "Is NOC filing required through FICS?",
        answer: "Yes, for applicable consignments NOC filing and review is part of the import clearance workflow.",
      },
      {
        question: "Can you support customs and sampling stage?",
        answer: "Yes. We coordinate with customs, FSSAI officers, and CHA for smooth handling.",
      },
    ],
    formServiceOptions: ["FSSAI Import Assistance", "FICS NOC Filing", "Import Label Review", "Importer License"],
  },
  healthClaim: {
    heroBadge: "FSSAI Health Claim Approval",
    heroTitle: "FSSAI Health Claim Approval Services in India",
    heroDescription:
      "Regulatory and scientific support for claim feasibility, CSD development, submission, and authority responses under Indian claims regulations.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/fssai-health-claim-approval-services-india-regacats-1024x682.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/step-by-step-fssai-health-claim-approval-india-regacats-1024x682.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/types-of-health-claims-fssai-india-regacats.webp",
    highlights: [
      "Regulatory support for food, nutraceutical, and dietary supplement claims",
      "Claim feasibility assessment",
      "Scientific Claim Support Dossier (CSD)",
      "Application filing and fee support",
      "Expert committee query handling",
      "Claim wording alignment for labels and advertising",
      "Global-to-India claim adaptation",
    ],
    detailedSteps: [
      {
        title: "Step 1: Claim Feasibility Assessment",
        description: "We evaluate whether the proposed claim is permitted, restricted, or requires formal approval.",
      },
      {
        title: "Step 2: CSD Preparation",
        description:
          "Scientific package is prepared with in-vitro, in-vivo, and human evidence, mechanism-of-action support, and usage context.",
      },
      {
        title: "Step 3: Application Preparation and Submission",
        description:
          "Application is prepared in prescribed format and filed with required government fee and supporting documents.",
      },
      {
        title: "Step 4: Scientific Scrutiny by FSSAI",
        description: "Expert committees evaluate evidence quality, causality support, and consumer relevance.",
      },
      {
        title: "Step 5: Query and Deficiency Responses",
        description:
          "Regulatory questions are answered within timeline to avoid procedural delays or negative outcomes.",
      },
      {
        title: "Step 6: Approval / Amendment / Rejection Outcome",
        description:
          "Based on scientific adequacy, claim may be approved, modified, or rejected with recommendation.",
      },
      {
        title: "Step 7: Acceptance of Amended Claim",
        description: "Where required, amended claim language is accepted and aligned before final use.",
      },
      {
        title: "Who Can Apply and What Claims Are Covered",
        description:
          "FSSAI health claim approvals are applicable to manufacturers, nutraceutical and dietary supplement companies, importers, brand owners, and relabelers when claims exceed standard permitted statements.",
        points: [
          "Disease risk reduction claims",
          "Ingredient-led health benefit claims",
          "Product-led functional claims",
          "Enhanced physiological or metabolic function claims",
        ],
      },
      {
        title: "Regulatory Framework and Risk Considerations",
        description:
          "Claims are evaluated under the Food Safety and Standards Act, Advertising and Claims Regulations, nutraceutical regulations, and scientific advisories with focus on non-misleading substantiation.",
      },
    ],
    timeline: [
      { label: "Indicative review timeline", value: "~180 days" },
      { label: "Government fee", value: "INR 50,000 + 18% GST" },
      { label: "Claims per application", value: "Up to 3" },
      { label: "Validity", value: "No fixed term if regulations unchanged" },
    ],
    documents: [
      "Claim statement and rationale",
      "Scientific substantiation studies",
      "Cause-and-effect evidence",
      "Validated analytical methods",
      "Ingredient safety and interaction data",
      "Product composition and category",
      "FSSAI license copy",
      "Global approvals and IPR details (if any)",
    ],
    challenges: [
      "Weak or unstructured scientific evidence",
      "Marketing claims beyond permissible scope",
      "Mismatch between global and Indian standards",
      "Inconsistent claims across label and advertising",
    ],
    faqs: [
      {
        question: "Is health claim approval needed for all claims?",
        answer: "No. Approval is required for claims beyond standard permitted statements.",
      },
      {
        question: "Can one approval cover multiple products?",
        answer: "No. Health claim approvals are generally claim-specific and product-specific.",
      },
      {
        question: "Can imported products use claims without Indian approval?",
        answer: "No. Imported products must comply with Indian claim regulations.",
      },
      {
        question: "Can rejected claims be filed again?",
        answer: "Yes. Claims can be resubmitted with revised scientific support.",
      },
    ],
    formServiceOptions: ["Health Claim Approval", "CSD Preparation", "Claim Feasibility", "Regulatory Query Support"],
  },
  nutraceuticalConsultant: {
    heroBadge: "Nutraceutical Regulatory Consultant",
    heroTitle: "FSSAI Consultant for Nutraceutical & Supplement in India",
    heroDescription:
      "Comprehensive regulatory support for nutraceutical and dietary supplement businesses from formulation review to licensing, NSF, claim support, and post-market compliance.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/02/fssai-nutraceutical-consultant-india-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/02/fssai-consultant-for-nutraceutical-services-1024x683.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/02/fssai-consultant-for-nutraceutical-services.webp",
    highlights: [
      "FSSAI consultant support from formulation review to post-market compliance",
      "Regulatory strategy and pathway mapping",
      "Nutraceutical license support",
      "Formulation and dosage compliance",
      "Label and claims compliance",
      "NSF and novel ingredient approvals",
      "Inspection and post-market support",
      "Training and capacity building for internal teams",
    ],
    detailedSteps: [
      {
        title: "Intake and Scoping",
        description:
          "Product concept, claims, and business plan are reviewed to establish realistic compliance timelines.",
      },
      {
        title: "Technical Gap Analysis",
        description:
          "Formulation and raw material data are evaluated to identify regulatory and scientific gaps early.",
      },
      {
        title: "Label Blueprint and Claims Map",
        description:
          "Compliant label direction is drafted and each claim is mapped to supporting evidence.",
      },
      {
        title: "Dossier Assembly",
        description:
          "Licensing, NSF, or claim dossiers are assembled with validated methods, CoAs, and references.",
      },
      {
        title: "Submission and Liaison",
        description:
          "Applications are filed and authority communications are managed as single-point regulatory interface.",
      },
      {
        title: "Inspection and Ongoing Compliance",
        description:
          "Inspection readiness, CAPA handling, and post-market updates are managed for sustained compliance.",
      },
      {
        title: "Who Needs an FSSAI Consultant for Nutraceuticals",
        description:
          "Specialist support is useful for businesses launching new categories, scaling portfolios, or entering regulated claim-driven segments.",
        points: [
          "Contract manufacturers and co-packers",
          "Startups launching first SKU or MVP",
          "Established brands entering dietary supplements",
          "Herbal extract producers and sports nutrition companies",
          "R&D teams developing novel ingredient blends",
        ],
      },
      {
        title: "Technical Depth and Claim Governance",
        description:
          "Scientific rigor is critical for nutraceutical reviews, so dossiers should include ingredient characterization, safety margin assessment, validation methods, and stability rationale.",
        points: [
          "Ingredient characterization and standardization",
          "Marker compound and extraction data",
          "Toxicology and safety margin summaries",
          "Exposure assessments and method validation",
          "Stability study design and shelf-life justification",
        ],
      },
      {
        title: "Case Outcomes and Pricing Models",
        description:
          "Regulatory planning improves submission quality, reduces rework, and enables predictable launch timelines using fixed-fee, project, or retainer engagement models.",
      },
    ],
    timeline: [
      { label: "State license", value: "2-4 weeks" },
      { label: "Central license", value: "4-8 weeks" },
      { label: "NSF approvals", value: "4-6 months" },
      { label: "Claim dossier cycle", value: "6-8 months" },
    ],
    documents: [
      "Business registration, PAN, GST, and KYC",
      "Factory layout, process flow, equipment list",
      "SKU formulation and specifications",
      "Raw material CoAs and testing plans",
      "Stability and method validation summaries",
      "SOPs for hygiene and production",
      "Label proofs and claims evidence",
    ],
    challenges: [
      "Ingredient misclassification",
      "Unsupported health claims",
      "Label omissions and formatting errors",
      "Incomplete CoA/analytical validation",
      "Inspection unpreparedness",
    ],
    faqs: [
      {
        question: "Do nutraceuticals need a separate regulatory route?",
        answer: "Yes. Nutraceuticals often require specific classification, licensing, and scientific compliance controls.",
      },
      {
        question: "Can multiple SKUs be managed under one license?",
        answer: "Often yes, if each SKU meets formulation, category, and labeling requirements.",
      },
      {
        question: "How long does NSF approval usually take?",
        answer: "Typically several months, depending on dossier quality and review complexity.",
      },
      {
        question: "Do you support inspection and CAPA closure?",
        answer: "Yes. We support preparation, attendance (where required), and corrective action closure.",
      },
    ],
    formServiceOptions: ["Nutraceutical Consultant", "Formulation Compliance", "NSF Approval", "Claims Dossier"],
  },
  authorizedAgent: {
    heroBadge: "Indian Authorized Agent (FSSAI)",
    heroTitle: "Indian Authorized Agent for FSSAI Products in India",
    heroDescription:
      "Regulatory representation for foreign manufacturers and exporters entering India with food, nutraceutical, and dietary supplement products.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-fssai-food-regacats-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/key-responsibilities-fssai-authorized-agent-india-1024x683.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/who-requires-fssai-authorized-agent-india.webp",
    highlights: [
      "Official local representative before FSSAI",
      "Application and licensing submission support",
      "Regulatory query and inspection coordination",
      "Import compliance and authority communication",
      "Post-market compliance continuity",
      "Single point of accountability in India",
      "Category support for food, dietary supplements, nutraceuticals, prebiotics and probiotics",
    ],
    detailedSteps: [
      {
        title: "Regulatory Assessment and Product Classification",
        description:
          "Product composition, claims, and intended use are reviewed to choose the right regulatory route.",
      },
      {
        title: "Formal Appointment as Indian Authorized Agent",
        description:
          "Agent appointment structure is established to provide local accountability and communication.",
      },
      {
        title: "Submission of FSSAI Applications and Approvals",
        description:
          "Required licensing and registration submissions are managed with compliant documentation.",
      },
      {
        title: "Continuous Authority Coordination",
        description:
          "Agent handles regulatory communication during review, clarification, and import stages.",
      },
      {
        title: "Post-market Compliance Management",
        description:
          "Ongoing support for updates, notices, and compliance continuity after market entry.",
      },
      {
        title: "Key Responsibilities of FSSAI Authorized Agent",
        description:
          "An authorized agent performs core regulatory accountability functions for foreign manufacturers and exporters in India.",
        points: [
          "Acts as official regulatory representative in India",
          "Submits FSSAI registration and licensing applications",
          "Coordinates product approvals and import compliance",
          "Responds to FSSAI queries, notices, and inspections",
          "Manages post-market surveillance and compliance",
        ],
      },
      {
        title: "Why Choosing the Right Agent Matters",
        description:
          "Inexperienced representation can create rejection risk, import delays, and penalties, while structured regulatory execution protects market access and brand reputation.",
      },
    ],
    timeline: [
      { label: "Agent setup and onboarding", value: "Case-based" },
      { label: "Licensing and approval support", value: "As per route" },
      { label: "Authority query handling", value: "Ongoing" },
      { label: "Post-market support", value: "Continuous" },
    ],
    documents: [
      "Foreign manufacturer details",
      "Product category and composition data",
      "Indian importer and entity details",
      "Licensing and registration records",
      "Label and claims documents",
      "Authority communication records",
    ],
    challenges: [
      "No local accountability in India",
      "Slow response to authority notices",
      "Import delays due to coordination gaps",
      "Regulatory rejection from weak representation",
      "Post-market compliance lapses",
    ],
    faqs: [
      {
        question: "Is Indian Authorized Agent mandatory for imported food products?",
        answer: "In many cases yes. FSSAI expects a local representative for regulatory communication and accountability.",
      },
      {
        question: "Can one agent support multiple products?",
        answer: "Yes, within agreed scope and compliance coverage.",
      },
      {
        question: "Can the foreign manufacturer change the agent later?",
        answer: "Yes, subject to regulatory procedures and documentation updates.",
      },
      {
        question: "Does agent appointment replace licensing?",
        answer: "No. IAA appointment and FSSAI licensing are separate obligations.",
      },
    ],
    formServiceOptions: ["FSSAI Indian Authorized Agent", "Import Compliance", "FSSAI Licensing Support", "Post-market Compliance"],
  },
};
