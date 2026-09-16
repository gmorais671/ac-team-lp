import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Plans from "@/components/sections/Plans";
import Results from "@/components/sections/Results";
import SmartHeader from "@/components/layout/SmartHeader";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <SmartHeader />
      <main>
        <Hero />
        <AboutMe />
        <HowItWorks />
        <Results />
        <Plans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
