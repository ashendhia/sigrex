import React, { useState } from "react";
import Navbar from "../Navbar";
import ListFormation from "./ListFormation";
import SideFilterBar from "./SideFilterBar";
const Formations = () => {
  const [FilterClicked, setFilterClicked] = useState("Elec");
  return (
    <div className="flex flex-row w-full h-full ">
      <SideFilterBar
        FilterClicked={FilterClicked}
        setFilterClicked={setFilterClicked}
      />

      <ListFormation
        FilterClicked={FilterClicked}
        setFilterClicked={setFilterClicked}
      />
    </div>
  );
};

export default Formations;
