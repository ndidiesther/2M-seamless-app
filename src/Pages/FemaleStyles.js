import React from "react";
import "../Styles/styles.css";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import { Form } from "react-bootstrap";
import StylesForFemale from "../Components/Styles/StylesForFemale";

const FemaleStyles = () => {
  return (
    <div>
      <div className=" col-12 female_styles">
        <div className=" col-12 styles_header">
          <div>
            <button className="female_backarrow">
              <i className="fa-solid fa-arrow-left"></i>
              <span>Select a Style</span>
            </button>
          </div>
          <div>
            <ButtonContainer>Upload Your Style</ButtonContainer>
          </div>
        </div>
        <div className=" col-12 styles_subheader">
          <div className="col-lg-6 col-md-7 col-mdx-12">
            <button>All Styles</button>
            <button>African Prints</button>
            <button>Vintage</button>
            <button>Artsy</button>
            <button>Grunge</button>
            <button>Gown</button>
          </div>
          <div className="col-lg-6 col-md-5 col-mdx-12">
            <div>
              <Form.Select
                aria-label="Default select example"
                className="shadow-none"
              >
                <option value="1">Female Style</option>
                <option value="2">Male Style</option>
              </Form.Select>
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
          <ButtonContainer>Load More Styles</ButtonContainer>
        </div>
      </div>
    </div>
  );
};

export default FemaleStyles;