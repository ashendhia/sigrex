import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
// or
import { Chip } from "@mui/material";

import { FormControlLabel, FormGroup } from "@mui/material";
const SideFilterBar = ({ FilterClicked, setFilterClicked }) => {
  const [Domaine, setDomaine] = useState([]);
  const [Theme, setTheme] = useState([]);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const result = await fetch(`http://localhost:5000/api/domaine`, {
          method: "GET",
          "Content-Type": "application/json",
        });
        if (result.ok) {
          const data = await result.json();
          setDomaine(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchDomains();
  }, []);
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const result = await fetch(`http://localhost:5000/api/theme`, {
          method: "GET",
          "Content-Type": "application/json",
        });
        if (result.ok) {
          const data = await result.json();
          setTheme(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchTheme();
  }, []);
  return (
    <div className=" flex flex-col bg-transparent w-3/12 mt-16 px-4 py-10">
      <h1 className="text-2xl font-bold text-neutral-900 mt-20">
        Filtrer par :{" "}
      </h1>

      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11Filter par domainss pageeeee */}

      <div className="flex flex-col p-2">
        <h1 className="text-xl font-bold text-neutral-900 mt-20">Domaine </h1>
        <FormGroup>
          {/* <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Informatique "
          /> */}
          {Domaine.map(({ designation }) => (
            <FormControlLabel
              required
              control={
                <Checkbox
                  onChange={(e) => {
                    setFilterClicked((prevFilterClicked) => [
                      ...prevFilterClicked,
                      e.target.value,
                    ]);
                  }}
                />
              }
              value={designation}
              label={designation}
            />
          ))}
        </FormGroup>
        <Divider />
      </div>

      <div className="flex flex-col p-2">
        <h1 className="text-xl font-bold text-neutral-900 mt-20">Theme </h1>
        <FormGroup>
          {Theme.map(({ designation }) => (
            <FormControlLabel
              required
              control={
                <Checkbox
                  onChange={(e) => {
                    setFilterClicked((prevFilterClicked) => [
                      ...prevFilterClicked,
                      e.target.value,
                    ]);
                  }}
                />
              }
              value={designation}
              label={designation}
            />
          ))}
        </FormGroup>
        <Divider />
      </div>

      <div className="flex flex-col p-2">
        <h1 className="text-xl font-bold text-neutral-900 mt-20">
          Competance{" "}
        </h1>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="css "
          />
          <FormControlLabel required control={<Checkbox />} label="html" />
        </FormGroup>
        <Divider />
      </div>
    </div>
  );
};

export default SideFilterBar;
