import React from "react";
import "../Styles/styles.css";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import { Form } from "react-bootstrap";
import StylesForMale from "../Components/Styles/StylesForMale";
import SelectStyles from "../Components/Styles/SelectStyles";

const MaleStyles = () => {
  return (
    <div>
      <div className=" col-12 male_styles">
        <SelectStyles />
        <div className=" col-12 styles_subheader">
          <div className="col-lg-6 col-md-7 col-mdx-12">
            <button>All Styles</button>
            <button>African Prints</button>
            <button>Vintage</button>
            <button>Artsy</button>
            <button>Grunge</button>
            <button>Suits</button>
          </div>
          <div className="col-lg-6 col-md-5 col-mdx-12">
            <div>
              <Form.Select
                aria-label="Default select example"
                className="shadow-none"
              >
                <option value="1">Male Style</option>
                <option value="2">Female Style</option>
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
        <StylesForMale />
        <div className="load_more">
          <ButtonContainer>Load More Styles</ButtonContainer>
        </div>
      </div>
    </div>
  );
};

export default MaleStyles;
