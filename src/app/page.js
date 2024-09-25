import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SubTitle from "@/components/SubTitle";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <main className="lg:mx-[20px] xl:mx-[80px] 2xl:mx:[120px] mx-[10px] scroll-smooth z-40">
        {/* <Particles /> */}
        <div className="sonic-fondo"> </div>
        <SubTitle></SubTitle>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        {/* <Skills></Skills> */}
        <Contact></Contact>
      </main>
    </>
  );
}
