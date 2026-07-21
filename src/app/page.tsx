import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Programs } from "@/components/Programs";
import { Projects } from "@/components/Projects";
import { Students } from "@/components/Students";
import { Testimonials } from "@/components/Testimonials";
import { InstagramSection } from "@/components/InstagramSection";
import { Partners } from "@/components/Partners";
import { FinalCTA } from "@/components/FinalCTA";

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
      <InstagramSection />
      <Partners />
      <FinalCTA />
    </>
  );
}
