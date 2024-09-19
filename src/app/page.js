import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SubTitle from "@/components/SubTitle";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Particle from "@/components/particles";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("../components/particles"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <main className="lg:mx-[20px] mx-[10px] scroll-smooth z-40">
        {/* <Particles /> */}

        <SubTitle></SubTitle>
        <About></About>
        <Experience></Experience>
        {/* <Projects></Projects> */}
        <Skills></Skills>
        <Contact></Contact>
      </main>
    </>
  );
}
