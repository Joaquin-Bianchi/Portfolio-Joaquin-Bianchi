import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SubTitle from "@/components/SubTitle";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main>
        <SubTitle></SubTitle>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </main>
    </>
  );
}
