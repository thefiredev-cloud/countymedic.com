import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
