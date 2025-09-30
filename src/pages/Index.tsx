import { Hero } from "@/components/Hero";
import { VideoShowcase } from "@/components/VideoShowcase";
import { ProblemSection } from "@/components/ProblemSection";
import { TrustBrands } from "@/components/TrustBrands";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Founder } from "@/components/Founder";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MediaLabs",
          "description": "Premier User-Generated Content agency training creators to earn stable income through exclusive brand partnerships and expert coaching.",
          "url": "https://medialabs.com",
          "logo": "https://medialabs.com/logo.png",
          "foundingDate": "2020",
          "founders": [{
            "@type": "Person",
            "name": "Alex P Sedlak"
          }],
          "sameAs": [
            "https://twitter.com/medialabs",
            "https://instagram.com/medialabs",
            "https://linkedin.com/company/medialabs",
            "https://youtube.com/@medialabs"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "support@medialabs.com",
            "contactType": "Customer Support"
          },
          "offers": {
            "@type": "Offer",
            "name": "MediaLabs Creator Program",
            "price": "2500",
            "priceCurrency": "USD",
            "description": "Comprehensive UGC creator training with expert coaching, exclusive brand partnerships, and community access"
          }
        })}
      </script>

      <main>
      <Hero />
      <VideoShowcase />
      <ProblemSection />
        <TrustBrands />
        <Features />
        <Testimonials />
        <Pricing />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;