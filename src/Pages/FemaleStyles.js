import React, { useState } from "react";
import "../Styles/styles.css";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import StylesForFemale from "../Components/Styles/StylesForFemale";
import SelectStyles from "../Components/Styles/SelectStyles";
import { useNavigate } from "react-router-dom";

const FemaleStyles = () => {
  const [sexType, setSexType] = useState("");

  let navigate = useNavigate();

  const handleSelect = (e) => {
    // console.log("Hello");
    setSexType(e.target.value);
    if (e.target.value === "male") {
      navigate("/tailoring/malestyle");
    } else if (e.target.value === "female") {
      navigate("/tailoring/femalestyle");
    }
  };
  const arr = [
    "All Styles",
    "African Prints",
    "Vintage",
    "Artsy",
    "Grunge",
    "Suits",
    "Custom",
  ];
  const [activeButton, setActiveButton] = useState("All Styles");

  return (
    <div>
      <div className=" col-12 female_styles">
        <SelectStyles />

        <div className=" col-12 styles_subheader">
          <div className="col-lg-7 col-md-7 col-mdx-12">
            {arr.map((item, index) => {
              return (
                <button
                  onClick={() => setActiveButton(item)}
                  className={activeButton == item ? "active" : undefined}
                  key={index}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="selectstyle col-lg-5 col-md-5 col-mdx-12">
            <div>
              <span>
                <span className="">
                  <select
                    value={sexType}
                    onChange={handleSelect}
                    className="form-select form-select-lg  shadow-none select-sex"
                    aria-label=".form-select-lg example"
                  >
                    <option value="female"> Female</option>
                    <option value="male"> Male</option>
                  </select>
                </span>
              </span>
            </div>
            <div className="search_icon">
              <input placeholder="Search for Styles" />
              <span>
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
        <StylesForFemale />
        <StylesForFemale />
        <div className="load_more">
          <ButtonContainer cart>Load More Styles</ButtonContainer>
        </div>
        {/* <div className="other_uploadbtn">
          <UploadButton />
        </div> */}
      </div>
    </div>
  );
};

export default FemaleStyles;
