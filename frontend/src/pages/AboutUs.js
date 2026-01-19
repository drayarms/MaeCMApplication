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
        title="About US - MaeCMServices Construction Management"
        description="MAE CM Services is a licensed general contractor with over 35 years of experience in engineering and construction. We deliver structural reinforcement, new construction, ADU conversions, regulatory compliance, and commercial and residential projects with professionalism, quality, and trust."
        keywords="general contractor, construction company California, engineering and construction services, structural reinforcement, ADU conversions, regulatory compliance construction, commercial construction, residential construction, licensed general contractor, construction management, building compliance projects, California contractors license, MAE CM Services"
        url="https://maecmservices.com/about-us"
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

