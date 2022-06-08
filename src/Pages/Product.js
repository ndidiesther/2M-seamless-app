import React, { useRef, useEffect } from "react";
import "../Styles/styles.css";
import StylesForFemale from "../Components/Styles/StylesForFemale";
import SpecificStyle from "../Components/Styles/SpecificStyle";
import Bag from "../Assets/Images/Bag.png";
import Vector from "../Assets/Images/Vector.png";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import { useLocation, useNavigate } from "react-router-dom";
import SimilarMaleStyles from "../Components/Styles/SimilarMaleStyles"

export default function Product({}) {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;
  let orderImage = location.state?.src;
  let chooseSex = location.state?.id;
  let styleName = location.state?.stylename;
  // console.log(location.state.stylename)
  // console.log(location.state.id);
  // console.log(location.state)
  useEffect(() => {
    orderImage = location.state?.src;
  }, [orderImage]);
  return (
    <div className="product col-12">
      <div className="product_banner col-12">
        <SpecificStyle orderImage={orderImage} chooseSex ={chooseSex} styleName={styleName} />

        <div className="p_div">
          <div className="p_description">
            <p>{styleName}</p>
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
              <ButtonContainer
                onClick={() =>
                  navigate("/customizeform", {
                    state: { src: orderImage, stylename: styleName, id: chooseSex},
                  })
                }
              >
                Customize
              </ButtonContainer>

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
          <p>Similar Styles...</p>
          <p>View More</p>
        </div>
        {/* <Test /> */}{" "}
        {location.state.id === 1 ? <SimilarMaleStyles /> : <StylesForFemale />}
        {/* <StylesForFemale /> */}
      </div>
    </div>
  );
}
