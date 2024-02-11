import React from "react";
import Navbar from "./../Navbar";
import Footer from "./../Footer";

const Formation = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex flex-col mt-16 px-20 py-20">
        <div className="flex flex-row w-11/12 justify-between ">
          <div className="flex flex-col  w-1/3 my-5">
            <h1 className="text-4xl font-bold ">
              {" "}
              Titre de formation de lesi{" "}
            </h1>
            <p className="mx-3 text-lg font-bold mt-4">Enseigné en Anglais </p>

            <p className="mx-3 text-lg font-bold mt-4">Organisation name </p>

          </div>
          <div className="flex flex-col ">
            {" "}
            <button className="p-3 w-24 h-12 bg-green-600 rounded-md">
              
              Status
            </button>
            <div className="flex flex-col">
              <h2 className="text-lg my-3">Nombre Participants : 5</h2>
              <h2 className="text-lg my-3">Enseignants : Brian McManus  Enseignant de premier plan</h2>
            </div>
          </div>
        </div>
        <button className="px-14 py-5 rounded-lg text-white bg-black w-3/12 font-bold">Demande Devis </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Formation;
