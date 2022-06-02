import React from "react";
import "../Styles/styles.css";
import Test from "../Pages/Test"

import Bag from "../Assets/Images/Bag.png";
import Vector from "../Assets/Images/Vector.png";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import StylesForFemale from "../Components/Styles/StylesForFemale";
import SpecificStyle from "../Components/Styles/SpecificStyle";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product col-12">
      <div className="product_banner col-12">
        <SpecificStyle />

        <div className="p_div">
          <div className="p_description">
            <p>Ankara Bohemian Gown</p>
            <p>Olympia, Multi Colored Ankara</p>
            <p>₦166,076.00</p>
            <span className="c_star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <span className="p_star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <span>(124 customer ratings)</span>
            <p className="p_content">
              Our state-of-the-art Non Iron dress shirt in mid blue twill
              ensures a high-quality fit and feel throughout the day with
              minimal effort. The two-ply fabric and taped seams provide
              enhanced comfort while also maintaining a smooth, pucker-free
              finish, and the densely woven shirt gives a heavy body and is very
              opaque. Wear this gem whenever you want to impress your
              surroundings and make a smooth statement, this is definitely a
              dress shirt worthy of its name. Made to your measurements.
            </p>
            <div className="div_btn">
              <Link to="/femaleForm">
                <ButtonContainer>Customize</ButtonContainer>
              </Link>

              <button>
                <img src={Bag} /> <span>Add to Cart</span>
              </button>
            </div>
            <div className="vector_div">
              <span>
                <img src={Vector} />
                <span>Free delivery for orders above 10pcs</span>
              </span>
              <span>
                <img src={Vector} />
                <span>Fit Guarantee</span>
              </span>
            </div>
            <div className="fabric_desc">
              <div className="dbr"></div>
              <p>Fabric: Olympia, Multi Colored Ankara</p>
              <p>Pattern Type: Random Patterns</p>
              <p>Colors: Yellow, Blue, Green, Black, White, Orange</p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="col-12 view_product">
        <div className="product_con col-12">
          <p>Trending Styles For You...</p>
          <p>View More</p>
        </div>
        <Test />
        <StylesForFemale />
      </div>
    </div>
  );
};

export default Product;
