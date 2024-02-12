import React, { useEffect, useState } from "react";
import Navbar from "./../Navbar";
import Footer from "./../Footer";
import { useParams } from "react-router-dom";

const Formation = () => {
  const { id } = useParams();
  const [Formationinfo, setFormationinfo] = useState([]);
  useEffect(() => {
    const fetchFormation = async () => {
      try {
        const result = await fetch(
          `http://localhost:5000/api/formation?id=${id}`,
          {
            method: "GET",
            "Content-Type": "application/json",
          }
        );
        if (result.ok) {
          const data = await result.json();
          setFormationinfo(data);
          console.log(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchFormation();
  }, []);
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex flex-col mt-16 px-20 py-20">
        <div className="flex flex-row w-11/12 justify-between ">
          <div className="flex flex-col  w-1/3 my-5">
            <h1 className="text-4xl font-bold ">
              {" "}
              {Formationinfo.length > 0 && Formationinfo[0].designation}
            </h1>
            <p className="mx-3 text-lg font-bold mt-4">Enseigné en Anglais </p>

            <p className="mx-3 text-lg font-bold mt-4">
              Certaficat a retenir :{" "}
              {Formationinfo.length > 0 && Formationinfo[0].certificate}
            </p>
            <p className="mx-3 text-lg font-bold mt-4">
              Domaine :{" "}
              {Formationinfo.length > 0 &&
                Formationinfo[0].theme.domaine.designation}
            </p>
            <p className="mx-3 text-lg font-bold mt-4">
              Theme :{" "}
              {Formationinfo.length > 0 && Formationinfo[0].theme.designation}
            </p>
            <p className="my-11">
              {" "}
              {Formationinfo.length > 0 && Formationinfo[0].description}
            </p>
            <button className="px-14 py-5 rounded-lg text-white bg-black w-3/12 font-bold w-full">
          Demande Devis{" "}
        </button>
          </div>
          <div className="flex flex-col ">
            {" "}
            <button className="p-3 w-24 h-12 bg-green-600 rounded-md">
              {Formationinfo.length > 0 && Formationinfo[0].status}
            </button>
            <div className="flex flex-col">
              <h2 className="text-lg my-3">
                Nombre de groupe :{" "}
                {Formationinfo.length > 0 && Formationinfo[0].nbGroupes}
              </h2>
              <h2 className="text-lg my-3">
                Nombre de groupe :{" "}
                {Formationinfo.length > 0 && Formationinfo[0].nbParticipants}
              </h2>
              <h2 className="text-lg my-3">
                Enseignants : Brian McManus Enseignant de premier plan
              </h2>
              <h2 className="text-xl font-bold my-3">
              Ressources Materielles
              </h2>
              <div className="ml-4 flex flex-row w-52 justify-between flex-wrap">
                <p>Livres:</p>
                {Formationinfo.length > 0 &&
                  Formationinfo[0].ressourcesMaterielles.livres.map(
                    (livre, index) => (
                      <h2 className="text-lg mx-10 my-3" key={index}>
                        {livre}
                      </h2>
                    )
                  )}
              </div>
              <div className="ml-4 flex flex-row w-52 justify-between flex-wrap">
                Logiciels:
                {Formationinfo.length > 0 &&
                  Formationinfo[0].ressourcesMaterielles.logiciels.map(
                    (logiciels, index) => (
                      <h2 className="text-lg mx-10 my-3" key={index}>
                        {logiciels}
                      </h2>
                    )
                  )}
              </div>
              <h2 className="text-xl font-bold my-3">
              Ressources Logicielles
              </h2>
              <div className="ml-4 flex flex-row w-52 justify-between flex-wrap">
                Base de donnes:
                {Formationinfo.length > 0 &&
                  Formationinfo[0].ressourcesLogicielles.basesDeDonnees.map(
                    (basesDeDonnees, index) => (
                      <h2 className="text-lg mx-10 my-3" key={index}>
                        {basesDeDonnees}
                      </h2>
                    )
                  )}
              </div>
              <div className="ml-4 flex flex-row w-52 justify-between flex-wrap">
                Frameworks:
                {Formationinfo.length > 0 &&
                  Formationinfo[0].ressourcesLogicielles.frameworks.map(
                    (frameworks, index) => (
                      <h2 className="text-lg mx-10 my-3" key={index}>
                        {frameworks}
                      </h2>
                    )
                  )}
              </div>
              {/* 
              <div>
                Livres :{Formationinfo[0].ressourcesLogicielles.frameworks.map((index,titre)=><h2 className="text-lg my-3" key={index}>
                 {titre}
              </h2>)}
              </div> */}
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Formation;
