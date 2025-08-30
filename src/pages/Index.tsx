// Update this page (the content is just a fallback if you fail to update the page)

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollReveal />
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
