import React, { useState } from "react";
import { Link } from "react-router-dom";
import UploadStyles from "../UploadStyles/UploadStyles";
import { ButtonContainer } from "../Shared/ButtonComponent";

const SelectStyles = () => {
  const [uploadStyles, setUploadStyle] = useState(false);

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
          <ButtonContainer onClick={() => setUploadStyle(true)}>
            Upload Your Style
          </ButtonContainer>
        </div>
      </div>
      <UploadStyles {...{ uploadStyles, setUploadStyle }} />
    </>
  );
};

export default SelectStyles;
