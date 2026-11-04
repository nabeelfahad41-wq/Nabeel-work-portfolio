import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Results from "@/components/Results";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Results />
      <Projects />
      <Capabilities />
      <Experience />
      <About />
      <Process />
      <Contact />
    </main>
  );
}
