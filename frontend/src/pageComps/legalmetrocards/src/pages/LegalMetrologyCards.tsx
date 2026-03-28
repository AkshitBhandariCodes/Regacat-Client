"use client";

import { FileText, Building2, Award, ShoppingBag, Wrench, Stamp } from "lucide-react";
import { RegistrationCard } from "../components/RegistrationCard";
import { motion } from "framer-motion";

const LegalMetrologyCards = () => {
  const registrationTypes = [
    {
      icon: FileText,
      title: "Registration",
      subtitle: "For importers:",
      items: [
        "Importer registration under the Legal Metrology (General) Rules, 2011",
        "Importer and Packer Registration",
        "Company Registration with the Legal Metrology Portal",
      ],
    },
    {
      icon: Building2,
      title: "Registration of Manufacturers / Importers / Packers",
      subtitle: "For manufacturers:",
      items: [
        "Manufacturer and Packer Registration",
        "Company Registration on the Legal Metrology Portal",
      ],
    },
    {
      icon: Award,
      title: "Manufacturer License",
      items: [
        "Application under Form LM-1",
        "License procurement under Form LM-3",
        "Periodic updates",
        "License renewal under Form LM-2",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Dealer License",
      items: [
        "Application under Form LD-1",
        "Procurement under Form LD-3",
        "Periodic updates",
        "Renewal under Form LD-2",
      ],
    },
    {
      icon: Wrench,
      title: "Repairer License",
      items: [
        "Application under Form LR-1",
        "Procurement under Form LR-3",
        "Periodic updates",
        "Renewal 3 months prior to expiry",
      ],
    },
    {
      icon: Stamp,
      title: "Stamping, Verification & Labelling",
      items: [
        "All measuring instruments must be verified & stamped.",
        "Verification certificate issued as per Legal Metrology Act 2009.",
        "Products must display correct stamping/verification details.",
      ],
    },
    {
      icon: Stamp,
      title: "Model Approval",
      items: [
        "Mandatory certification before manufacturing/importing.",
        "Accuracy check & Indian standards compliance.",
        "Consumer protection through testing.",
        "Hassle-free document & certification processing.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6">
      
      {/* 🔥 Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 
                  text-primary  
                   drop-shadow-lg"
      >
        Types of Registrations Handled
      </motion.h1>

      {/* 🔥 3-Column Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {registrationTypes.map((registration, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl shadow-lg border border-border/40 
                       bg-card hover:shadow-primary backdrop-blur-sm p-6 hover:shadow-1xl 
                       transition-shadow duration-300"
          >
            <RegistrationCard
              icon={registration.icon}
              title={registration.title}
              subtitle={registration.subtitle}
              items={registration.items}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LegalMetrologyCards;
