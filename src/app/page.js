import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";

import SubTitle from "@/components/SubTitle";

export default function Home() {
  return (
    <>
      {/* <header className="container mx-auto bg-slate-500 flex items-center"></header> */}
      <SubTitle></SubTitle>
      <About></About>

      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}
