import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleEffect from "@/components/ParticleEffect";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import HowItWorks from "@/sections/HowItWorks";
import Design from "@/sections/Design";
import Timeline from "@/sections/Timeline";
import Team from "@/sections/Team";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Design />
      <Timeline />
      <Team />
      <Contact />
      <Footer />
      
      {/* Initialize scroll reveal effect */}
      <ScrollReveal />
      
      {/* Initialize particle effect for the hero section */}
      <ParticleEffect containerSelector="#particles-container" />
    </>
  );
};

export default Home;
