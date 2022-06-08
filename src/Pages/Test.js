import React from "react";
import "../Styles/styles.css";
import StylesForFemale from "../Components/Styles/StylesForFemale";
import SpecificStyle from "../Components/Styles/SpecificStyle";
// import Test from "../Pages/Test";

import Form from "../Components/Form/Form";

export default function Product() {
    return (
      <div className="product col-12">
        <div className="product_banner col-12">
          <SpecificStyle />

        </div>

        <div className="col-12 view_product">
          <div className="product_con col-12">
            <p>Trending Styles For You...</p>
            <p>View More</p>
          </div>
          {/* <Test /> */}
          <StylesForFemale />
        </div>
      </div>
    );
  } 
