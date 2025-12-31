import ServicePageTemplate from "../../templates/ServicePageTemplate";
import { COMMERCIAL_CONSTRUCTION } from "../../data/services/commercial-construction";

export default function CommercialConstruction() {
  return <ServicePageTemplate {...COMMERCIAL_CONSTRUCTION} />;
}
