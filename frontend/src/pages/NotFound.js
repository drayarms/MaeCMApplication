import SEO from "../components/SEO";
import NotFoundHero from "../sections/NotFoundHero";
import NotFoundContent from "../sections/NotFoundContent";
import Footer from "../sections/Footer";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found - MaeCMServices Construction Management"
      />    
      <NotFoundHero />
      <NotFoundContent />
      <Footer />
    </>
  );
}