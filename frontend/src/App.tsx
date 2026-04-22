import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import CosmeticImportLicense from "./pages/services/CosmeticImportLicense";
import CDSCORegistration from "./pages/services/CDSCORegistration";
import MedicalDeviceLicense from "./pages/services/MedicalDeviceLicense";
import TrademarkFSSAI from "./pages/services/TrademarkFSSAI";
import FssaiNutraceuticalImportConsultant from "./pages/services/FssaiNutraceuticalImportConsultant";
import FssaiLicenseService from "./pages/services/FssaiLicenseService";
import FssaiImportAssistanceService from "./pages/services/FssaiImportAssistanceService";
import FssaiHealthClaimApprovalService from "./pages/services/FssaiHealthClaimApprovalService";
import FssaiNutraceuticalSupplementConsultant from "./pages/services/FssaiNutraceuticalSupplementConsultant";
import FssaiAuthorizedAgentService from "./pages/services/FssaiAuthorizedAgentService";
import FssaiNonSpecifiedFoodService from "./pages/services/FssaiNonSpecifiedFoodService";
import FssaiForeignFoodFacilityService from "./pages/services/FssaiForeignFoodFacilityService";
import FssaiVeganEndorsementService from "./pages/services/FssaiVeganEndorsementService";
import CdscoImportLicenseService from "./pages/services/CdscoImportLicenseService";
import CdscoCosmeticRegistrationIndia from "./pages/services/CdscoCosmeticRegistrationIndia";
import IndianAuthorizedAgentDrugsService from "./pages/services/IndianAuthorizedAgentDrugsService";
import IndianAuthorizedAgentMedicalDevicesService from "./pages/services/IndianAuthorizedAgentMedicalDevicesService";
import IndianAuthorizedAgentCosmeticsService from "./pages/services/IndianAuthorizedAgentCosmeticsService";
import IndianAuthorizedAgentFssaiProductsService from "./pages/services/IndianAuthorizedAgentFssaiProductsService";
import IndianAuthorizedAgentServicesIndiaMain from "./pages/services/IndianAuthorizedAgentServicesIndiaMain";
import Privacy from "./pageComps/privacy policy/pages/Privacy";
import Disclaimer from "./pageComps/desclaimer/pages/Disclaimer";
import Terms from "./pageComps/termspage/pages/Terms";
import EPRPage from "./pages/services/EPRPage";
import LegalPage from "./pages/services/LegalPage";

import NotFound from "./pages/NotFound";
import { GlobalConsultWidget } from "./components/GlobalConsultWidget";
import RouteErrorBoundary from "./components/RouteErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <GlobalConsultWidget />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cosmetic-import-license-india" element={<CosmeticImportLicense />} />
          <Route path="/cosmetic-import-license-india/" element={<CosmeticImportLicense />} />
          <Route path="/cdsco-registration" element={<CDSCORegistration />} />
          <Route path="/cdsco-registration-in-india" element={<CdscoCosmeticRegistrationIndia />} />
          <Route path="/cdsco-registration-in-india/" element={<CdscoCosmeticRegistrationIndia />} />
          <Route path="/medical-device-import-license-india" element={<MedicalDeviceLicense />} />
          <Route path="/medical-device-import-license-india/" element={<MedicalDeviceLicense />} />
          <Route path="/fssai-consultants-india" element={<TrademarkFSSAI />} />
          <Route path="/fssai-consultants-india/" element={<TrademarkFSSAI />} />
          <Route path="/fssai-nutraceutical-import-consultant-india" element={<FssaiNutraceuticalImportConsultant />} />
          <Route path="/fssai-certification" element={<FssaiLicenseService />} />
          <Route path="/fssai-certification/" element={<FssaiLicenseService />} />
          <Route path="/fssai-license-registration-services-india" element={<Navigate to="/fssai-certification/" replace />} />
          <Route path="/fssai-license-registration-servicesindia" element={<Navigate to="/fssai-certification/" replace />} />
          <Route path="/fssai-import-assistance-services-india" element={<FssaiImportAssistanceService />} />
          <Route path="/fssai-health-claim-approval-services-india" element={<FssaiHealthClaimApprovalService />} />
          <Route path="/fssai-consultant-nutraceutical-supplement-india" element={<FssaiNutraceuticalSupplementConsultant />} />
          <Route path="/indian-authorized-agent-for-fssai-products-india" element={<FssaiAuthorizedAgentService />} />
          <Route path="/non-specified-food-ingredient-approval-india" element={<FssaiNonSpecifiedFoodService />} />
          <Route path="/non-specified-food-ingredient-approval-india/" element={<FssaiNonSpecifiedFoodService />} />
          <Route path="/non-specified-foodingredient-approval-india" element={<Navigate to="/non-specified-food-ingredient-approval-india" replace />} />
          <Route path="/non-specified-foodingredient-approval-india/" element={<Navigate to="/non-specified-food-ingredient-approval-india" replace />} />
          <Route path="/foreign-food-manufacturing-facility-registration-india" element={<Navigate to="/foreign-food-manufacturing-facility-registration-in-india" replace />} />
          <Route
            path="/foreign-food-manufacturing-facility-registration-in-india"
            element={
              <RouteErrorBoundary>
                <FssaiForeignFoodFacilityService />
              </RouteErrorBoundary>
            }
          />
          <Route
            path="/foreign-food-manufacturing-facility-registration-in-india/"
            element={
              <RouteErrorBoundary>
                <FssaiForeignFoodFacilityService />
              </RouteErrorBoundary>
            }
          />
          <Route path="/vegan-endorsement-india" element={<FssaiVeganEndorsementService />} />
          <Route path="/vegan-endorsement-india/" element={<FssaiVeganEndorsementService />} />
          <Route path="/cdsco-import-service" element={<CdscoImportLicenseService />} />
          <Route path="/cdsco-import-service/" element={<CdscoImportLicenseService />} />
          <Route path="/cdscoimport-service" element={<Navigate to="/cdsco-import-service" replace />} />
          <Route path="/cdscoimport-service/" element={<Navigate to="/cdsco-import-service" replace />} />
          <Route path="/cdsco-import-license" element={<Navigate to="/cdsco-import-service" replace />} />
          <Route path="/indian-authorized-agent-for-drugs" element={<IndianAuthorizedAgentDrugsService />} />
          <Route path="/indian-authorized-agent-for-medical-devices" element={<IndianAuthorizedAgentMedicalDevicesService />} />
          <Route path="/indian-authorized-agent-for-cosmetics-in-india" element={<IndianAuthorizedAgentCosmeticsService />} />
          <Route path="/indian-authorized-agent-for-fssai-products" element={<IndianAuthorizedAgentFssaiProductsService />} />
          <Route path="/indian-authorized-agent-services-india" element={<IndianAuthorizedAgentServicesIndiaMain />} />
          <Route path="/fssai-services" element={<Navigate to="/fssai-consultants-india" replace />} />
          <Route path="/iaa-services" element={<Navigate to="/indian-authorized-agent-services-india" replace />} />
          <Route path="/legal-metrology" element={<LegalPage />} />
          <Route path="/legal-metrology/" element={<LegalPage />} />
          <Route path="/legal" element={<Navigate to="/legal-metrology" replace />} />
          <Route path="/epr-registration" element={<EPRPage />} />
          <Route path="/epr-registration/" element={<EPRPage />} />
          <Route path="/epr" element={<Navigate to="/epr-registration" replace />} />
          <Route path="/disclaimer" element={<Disclaimer/>} />
          <Route path="/terms-and-conditions" element={<Terms/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
