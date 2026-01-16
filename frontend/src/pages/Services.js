import SEO from "../components/SEO";
import ServicesHero from "../sections/ServicesHero";
import AllServices from "../sections/AllServices";
import Footer from "../sections/Footer";

export default function SoftStoryRetrofit() {  
  return (
    <>
      <SEO
        title="Services - MaeCMServices Construction Management"
        description="Learn more about MAE CM Services, a trusted construction and engineering firm with over 35 years of experience."
        keywords="construction company Los Angeles, MAE CM, engineering services"
        url="https://maecmservices.com/services"
      />    
      <ServicesHero />
      <AllServices />
      <Footer />
    </>
  );
}
