import React, { useState } from "react";
import "../Styles/styles.css";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import StylesForMale from "../Components/Styles/StylesForMale";
import SelectStyles from "../Components/Styles/SelectStyles";
import { useNavigate } from "react-router-dom";

const MaleStyles = ({ orderStyle, setOrderStyle }) => {
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
  ];
  const [activeButton, setActiveButton] = useState("All Styles");

  return (
    <div>
      <div className=" col-12 male_styles">
        <SelectStyles {...{ orderStyle, setOrderStyle }} />
        <div className=" col-12 styles_subheader">
          <div className="col-lg-7 col-md-7 col-mdx-12">
            {arr.map((item, index) => {
              return (
                <button
                  onClick={() => setActiveButton(item)}
                  className={activeButton === item ? "active" : undefined}
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
                    <option value="male"> Male Styles</option>
                    <option value="female"> Female Styles</option>
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
        <StylesForMale />
        <div className="load_more">
          <ButtonContainer cart>Load More Styles</ButtonContainer>
        </div>
        <div className="other_uploadbtn">
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
    </div>
  );
};

export default MaleStyles;
