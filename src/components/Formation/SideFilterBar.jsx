import React from "react";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
// or
import { Chip } from "@mui/material";

import { FormControlLabel, FormGroup } from "@mui/material";
const SideFilterBar = ({FilterClicked, setFilterClicked}) => {
  return (
    <div className=" flex flex-col bg-transparent w-3/12 mt-16 px-4 py-10">
      <h1 className="text-2xl font-bold text-neutral-900 mt-20">
        Filtrer par :{" "}
      </h1>

      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11Filter par domainss pageeeee */}

      <div className="flex flex-col p-2">
        <h1 className="text-xl font-bold text-neutral-900 mt-20">Domaine </h1>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Informatique "
          />
          <FormControlLabel
            required
            control={
              <Checkbox
                onChange={(e) => {
                  setFilterClicked(e.target.value);
                }}
              />
            }
            value={FilterClicked}
            label={FilterClicked}
          />
        </FormGroup>
        <Divider />
      </div>

      <div className="flex flex-col p-2">
        <h1 className="text-xl font-bold text-neutral-900 mt-20">Theme </h1>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="HTML "
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="CSS "
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Cyber security"
          />
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
