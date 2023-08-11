import Projects from "@/components/Projects";
import Title from "@/components/Title";
export default function Home() {
  return (
    <>
      {/* <header className="container mx-auto bg-slate-500 flex items-center"></header> */}
      <div className="container flex justify-between -mt-7">
        <p> Joaquin Bianchi</p>

        <div className="flex flex-row ">
          <p>ada</p>
          <p>ada</p>
          <p>ada</p>
          <p>ada</p>
        </div>
      </div>
      <Title></Title>

      <Projects></Projects>
    </>
  );
}
