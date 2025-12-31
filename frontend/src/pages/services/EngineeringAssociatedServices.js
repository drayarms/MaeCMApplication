import ServicePageTemplate from "../../templates/ServicePageTemplate";
import { ENGINEERING_ASSOCIATED_SERVICES } from "../../data/services/engineering-associated-services";

export default function EngineeringAssociatedServices() {
  return <ServicePageTemplate {...ENGINEERING_ASSOCIATED_SERVICES} />;
}
