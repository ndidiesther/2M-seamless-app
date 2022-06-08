import React, { useRef } from "react";
import ProductImg from "../../Assets/Images/product.png";
import sProductImg from "../../Assets/Images/sproduct.png";
import "../../Styles/styles.css";
import { Link, useLocation } from "react-router-dom";

const SpecificStyle = (props) => {
  const location = useLocation();
  const ImageRef = useRef();
  const { state } = location;
  const orderImage = location.state.name;
  const reader = new FileReader();
  reader.addEventListener("load", (e) => {
    ImageRef.current.src = e.target.result;
  });
  reader.readAsDataURL(state.name);

  return (
    <div className="clearfix">
      <p className="product_para">
        <Link to="/femalestyle">
          <button className="male_backarrow">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </Link>

        <span>Ankara Bohemian Gown</span>
      </p>
      <div className="productImg_div">
        <img className="product_img" ref={ImageRef} src={orderImage} />
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
