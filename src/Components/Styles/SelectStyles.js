import React from "react";
import { Link } from "react-router-dom";

const SelectStyles = ({ setOrderStyle }) => {
  return (
    <>
      <div className=" col-12 styles_header">
        <div>
          <Link to="/tailoring">
            <button className="female_backarrow">
              <i className="fa-solid fa-arrow-left"></i>
              <span>Select a Style</span>
            </button>
          </Link>
        </div>
        <div>
          {/* <UploadButton /> */}
          <span>
            <span>Can’t find a style you want?</span>
            <span>
              <button onClick={() => setOrderStyle(true)}>
                Order a Custom Style
              </button>
            </span>
          </span>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default SelectStyles;
