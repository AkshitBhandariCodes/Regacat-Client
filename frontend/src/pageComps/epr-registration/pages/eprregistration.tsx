import {StepCard}  from "../components/StepCard";
import { Accordion } from "@/components/ui/accordion";
import { FileText, Shield, FileCheck } from "lucide-react";

const EprRegistration = () => {
  const steps = [
    {
      title: "Visit CPCB Portal",
      description: "Access the official CPCB EPR registration portal",
      details: [
        "Open your web browser and navigate to the official CPCB website",
        "Look for the EPR (Extended Producer Responsibility) section",
        "Click on 'New Registration' or 'Apply for EPR Registration'",
        "Ensure you have a stable internet connection for the process"
      ]
    },
    {
      title: "Create Account / Login",
      description: "Set up your credentials or access existing account",
      details: [
        "If you're a new user, click on 'Sign Up' or 'Register'",
        "Provide your email address and create a secure password",
        "Verify your email through the link sent to your inbox",
        "For existing users, simply login with your credentials"
      ]
    },
    {
      title: "Select EPR Category",
      description: "Choose the appropriate waste category",
      details: [
        "Navigate to the EPR application section",
        "Select your waste category (E-waste, Plastic, Battery, etc.)",
        "Read the guidelines specific to your chosen category",
        "Ensure you meet the eligibility criteria for that category"
      ]
    },
    {
      title: "Fill Application Form",
      description: "Complete all required information accurately",
      details: [
        "Enter company details including name, address, and registration number",
        "Provide contact information and authorized person details",
        "Fill in production/import details and waste generation estimates",
        "Double-check all information for accuracy before proceeding"
      ]
    },
    {
      title: "Upload Documents",
      description: "Attach all necessary supporting documents",
      details: [
        "Company registration certificate (MOA/AOA)",
        "GST registration certificate",
        "Authorization letter from the company",
        "Environmental clearance documents (if applicable)",
        "Ensure all documents are in PDF format and within size limits"
      ]
    },
    {
      title: "Pay Application Fee",
      description: "Complete the payment process",
      details: [
        "Review the fee structure based on your category and company size",
        "Choose your preferred payment method (Net Banking, Card, etc.)",
        "Complete the payment transaction securely",
        "Save the payment receipt for future reference"
      ]
    },
    {
      title: "Submit Application",
      description: "Final submission and acknowledgment",
      details: [
        "Review all entered information one final time",
        "Accept the terms and conditions",
        "Click on 'Submit' to complete your application",
        "Download and save the acknowledgment receipt with application number"
      ]
    },
    {
      title: "Track Application Status",
      description: "Monitor your application progress",
      details: [
        "Use your application number to track status online",
        "Check for any queries or additional document requests",
        "Respond promptly to any communication from CPCB",
        "Wait for approval notification via email and SMS"
      ]
    }
  ];

  return (



      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold mb-3 text-foreground">Registration Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these steps carefully to ensure a smooth registration process. Each step is crucial for successful EPR registration.
          </p>
        </div>

        <Accordion type="multiple" className="space-y-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              details={step.details}
              delay={index * 100}
            />
          ))}
        </Accordion>
        <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
  
            {/* Validity Section */}
            <div className="p-6 rounded-xl shadow-sm border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600 text-3xl">🕒</div>
                <h2 className="text-2xl font-semibold text-blue-700">Validity</h2>
              </div>
  
              <p className="text-gray-600 mb-4">
                The license validity is different for the different categories of the waste:
              </p>
  
              <ul className="list-disc ml-6 space-y-1 text-gray-700">
                <li>Plastic waste – Lifetime</li>
                <li>Electronic waste – 5 years</li>
                <li>Battery waste – 5 years</li>
              </ul>
            </div>
  
            {/* Fee Involved Section */}
            <div className="p-6 rounded-xl shadow-sm border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600 text-3xl">💳</div>
                <h2 className="text-2xl font-semibold text-blue-700">Fee Involved</h2>
              </div>
  
              <p className="text-gray-600">
                The government charges for the application process vary from case to case.
              </p>
            </div>
  
          </div>
        </div>
      </section>


       
      </div>

  );
};

export default EprRegistration;
