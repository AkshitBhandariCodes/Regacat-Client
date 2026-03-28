import DrugServiceTemplate from "./DrugServiceTemplate";
import { drugServicesData } from "./drugServicesData";

const IndianAuthorizedAgentMedicalDevicesService = () => (
  <DrugServiceTemplate data={drugServicesData.authorizedAgentMedicalDevices} />
);

export default IndianAuthorizedAgentMedicalDevicesService;
