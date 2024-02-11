import { Button } from "@/components/ui/button";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Partenaire from "./Partenaire";
import FormationPerDomaine from "../Formation/FormationPerDomaine";

import Divider from "@mui/material/Divider";
function App() {
  return (
    <div>
      <Navbar />
      <div
        id="section-hero"
        className="w-full h-[100vh] bg-background flex items-center justify-between px-10">
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
          className="bg-cover bg-center w-1/2 h-[60vh] rounded-tl-[225px] rounded-br-[225px]"></div>
      </div>
      <Partenaire />
      <Divider />
      <div className="px-10 w-full my-28">
        <h1 className="h1 my-3 ">Explore SIGREX</h1>
        <div className="flex flex-row flex-wrap w-full justify-between">
          <FormationPerDomaine />
          <FormationPerDomaine />
          <FormationPerDomaine />
          <FormationPerDomaine />
          <FormationPerDomaine />
          <FormationPerDomaine />
          <FormationPerDomaine />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
