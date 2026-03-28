import DrugServiceTemplate from "./DrugServiceTemplate";
import { drugServicesData } from "./drugServicesData";

const IndianAuthorizedAgentFssaiProductsService = () => (
  <DrugServiceTemplate data={drugServicesData.authorizedAgentFssaiProducts} />
);

export default IndianAuthorizedAgentFssaiProductsService;
