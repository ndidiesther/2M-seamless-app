import React from "react";
import { Link } from "react-router-dom";
import UploadButton from "../UploadStyles/UploadButton";

const SelectStyles = () => {
  return (
    <>
      <div className=" col-12 styles_header">
        <div>
          <Link to="/">
            <button className="female_backarrow">
              <i className="fa-solid fa-arrow-left"></i>
              <span>Select a Style</span>
            </button>
          </Link>
        </div>
        <div>
          <UploadButton />
        </div>
      </div>
    </>
  );
};

export default SelectStyles;
