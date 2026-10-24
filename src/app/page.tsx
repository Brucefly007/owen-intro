import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Frame } from "@/components/frame";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <Frame>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Frame>
  );
}
