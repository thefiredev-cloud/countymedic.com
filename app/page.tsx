import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import EnterpriseContactForm from "./components/EnterpriseContactForm";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <Hero />
      <FadeInSection delay={0}>
        <Features />
      </FadeInSection>
      <FadeInSection delay={100}>
        <FAQ />
      </FadeInSection>
      <EnterpriseContactForm />
      <Footer />
    </main>
  );
}
