import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div
        id="section-hero"
        className="w-full h-[100vh] bg-background flex items-center justify-between px-10"
      >
        <div className="w-[35%] text-[calc(1rem+.35vw)] flex flex-col gap-6">
          <h1 className="h1">Découvrez nos formations</h1>
          <p className="p">
            SIGREX est votre compagnon web pour vous guider à trouver la
            formation qui vous correspond de la liste des formations qu'offre
            l'école supérieure d'informatique ESI.
          </p>

          <Button variant="default" className="btn">
            Nos Offres de Formation
          </Button>
        </div>
        <div
          // background image from https://unsplash.com/photos/3Z1f8ZrQjwo
          style={{
            backgroundImage: "url(src/assets/esi.jpg)",
          }}
          className="bg-cover bg-center w-1/2 h-[60vh] rounded-tl-[225px] rounded-br-[225px]"
        ></div>
      </div>
    </>
  );
}

export default App;
