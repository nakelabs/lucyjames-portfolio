import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BiographySection } from "@/components/BiographySection";
import { PPDCSection } from "@/components/PPDCSection";
import { LifestyleSection } from "@/components/LifestyleSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BiographySection />
        <PPDCSection />
        <LifestyleSection />
        <GallerySection />
        <ContactSection />
      </main>
      
      {/* Newsletter Section */}
      <Newsletter className="bg-gray-50" />
      
      <Footer />
    </div>
  );
};

export default Index;
