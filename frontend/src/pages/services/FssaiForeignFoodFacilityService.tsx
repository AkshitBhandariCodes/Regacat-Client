import FssaiServiceTemplate from "./FssaiServiceTemplate";
import { fssaiServicesData } from "./fssaiServicesData";
import { Navigate } from "react-router-dom";

const FssaiForeignFoodFacilityService = () => {
	const pageData = fssaiServicesData.foreignFoodFacility;

	if (!pageData) {
		return <Navigate to="/fssai-consultants-india" replace />;
	}

	return <FssaiServiceTemplate data={pageData} />;
};

export default FssaiForeignFoodFacilityService;