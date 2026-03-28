import DrugServiceTemplate from "./DrugServiceTemplate";
import { drugServicesData } from "./drugServicesData";

const IndianAuthorizedAgentDrugsService = () => (
  <DrugServiceTemplate data={drugServicesData.authorizedAgentDrugs} />
);

export default IndianAuthorizedAgentDrugsService;
