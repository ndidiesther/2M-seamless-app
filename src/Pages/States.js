import React, { useState } from "react";
import { Select } from "react-select-states-and-lga-in-nigeria";
import "react-select-states-and-lga-in-nigeria/dist/index.css";

const States = () => {
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleLgaChange = (e) => {
    setLga(e.target.value);
  };
  return (
    <div className="state_selector">
      <p>States in Nigeria</p>
      <p>Additional Information</p>
      <div>
        <Select
          state={state}
          lga={lga}
          changeState={handleStateChange}
          changeLga={handleLgaChange}
        />
      </div>
    </div>
  );
};

export default States;
