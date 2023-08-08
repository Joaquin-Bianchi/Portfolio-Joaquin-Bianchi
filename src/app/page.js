import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <header className="container mx-auto bg-slate-500 flex items-center">
        <Nav></Nav>
      </header>
      <section className="container lg:ml-10  mt-16">
        <div className="bg-zinc-200 flex flex-col gap-1">
          <h1 className="text-6xl">Soy Joaquin Bianchi </h1>
          <h2 className="text-4xl mt-2">Full Stack Developer</h2>
          <p className="text-2xl sm:w-6/12 ml text-left break-words">
            Soy Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            unde cupiditate expedita nisi odit hic, eligendi earum in labore
            voluptates? Accusamus officiis dolorum ut inventore tempore, nihil
            magni ipsa? Libero! pedita nisi odit hic, eligendi earum in labore
            voluptates? Accusamus officiis
          </p>
        </div>
      </section>
    </>
  );
}
