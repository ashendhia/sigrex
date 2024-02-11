import React from 'react'
import img from "../../assets/esipic.png";

const FormationPerDomaine = () => {
  return (
   
      <div className="flex flex-row w-2/12 px-4 py-5  bg-white ml-12 my-5 cursor-pointer transition-all duration-150 hover:bg-stone-300">
        <img src={img} className="h-11" />
        <div className="flex flex-col ml-4 ">
          <h3 className="font-bold">Informatique </h3>
          <p>1096 cours </p>
        </div>
      </div>
   
  )
}

export default FormationPerDomaine