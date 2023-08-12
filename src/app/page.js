import Projects from "@/components/Projects";
import Title from "@/components/Title";
import SocialLinks from "@/components/buttons/SocialLinks";
export default function Home() {
  return (
    <>
      {/* <header className="container mx-auto bg-slate-500 flex items-center"></header> */}
      <div className="container hidden lg:mx-auto  lg:flex md:justify-between ld:mt-5">
        <p className="font-bold"> Joaquin Bianchi</p>

        <div className="flex flex-row ">
          <SocialLinks size="30px"></SocialLinks>
        </div>
      </div>
      <Title></Title>

      <Projects></Projects>
    </>
  );
}
