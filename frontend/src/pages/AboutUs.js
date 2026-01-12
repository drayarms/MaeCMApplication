import SEO from "../components/SEO";
import AboutHero from "../sections/AboutHero";
import CompanyIntro from "../sections/CompanyIntro";
import StaffSection from "../sections/StaffSection";
import GeneralConstruction from "../sections/GeneralConstruction";
import CTAWide from "../sections/CTAWide";
import Footer from "../sections/Footer";

export default function SoftStoryRetrofit() {
  return (
    <>
      <SEO
        title="About MAE CM Services"
        description="Learn more about MAE CM Services, a trusted construction and engineering firm with over 35 years of experience."
        keywords="construction company Los Angeles, MAE CM, engineering services"
        url="https://maecmservices.com"
      />    
      <AboutHero />
      <CompanyIntro />
      <StaffSection />
      <GeneralConstruction />
      <CTAWide />
      <Footer />
    </>
  );
}

