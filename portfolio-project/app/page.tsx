import Navbar from "@/components/layout/navbar";
import Container from "@/components/ui/container";


export default function Home() {

  return (

    <main
      className="
        min-h-screen
        bg-black
        text-white
      "
    >

      <Navbar />


      <Container>

        <section
          className="
            flex
            min-h-screen
            items-center
          "
        >

          <h1
            className="
              text-6xl
              font-bold
            "
          >
            Portfolio is under construction.
          </h1>


        </section>


      </Container>


    </main>

  );
}