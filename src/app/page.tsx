import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Programs } from "@/components/Programs";
import { Projects } from "@/components/Projects";
import { Students } from "@/components/Students";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { InstagramSection } from "@/components/InstagramSection";
import { Gallery } from "@/components/Gallery";
import { Partners } from "@/components/Partners";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Programs />
      <Projects />
      <Students />
      <Testimonials />
      <FAQ />
      <Gallery />
      <InstagramSection />
      <Partners />
      <FinalCTA />
      <Footer />
    </>
  );
}
