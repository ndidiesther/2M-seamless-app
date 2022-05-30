import React from "react";
import ProductImg from "../../Assets/Images/product.png";
import sProductImg from "../../Assets/Images/sproduct.png";
import "../../Styles/styles.css";

const SpecificStyle = () => {
  return (
    <div className="clearfix">
      <p className="product_para">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
        <span>Ankara Bohemian Gown</span>
      </p>
      <div className="productImg_div">
        <img className="product_img" src={ProductImg} />
      </div>
      <div className="sProduct">
        <img src={sProductImg} />
        <img src={sProductImg} />
        <img src={sProductImg} />
        <img src={sProductImg} />
      </div>
    </div>
  );
};

export default SpecificStyle;
