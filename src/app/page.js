import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SubTitle from "@/components/SubTitle";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className="lg:mx-[20px] mx-[10px]">
        <SubTitle></SubTitle>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </main>
    </>
  );
}
