import React, { useRef, useEffect } from "react";
import "../../Styles/styles.css";
import { useNavigate } from "react-router-dom";

const SpecificStyle = ({ orderImage, styleName }) => {
  const ImageRef = useRef();
  const ImageRef1 = useRef();
  const ImageRef2 = useRef();
  const ImageRef3 = useRef();
  const ImageRef4 = useRef();

  useEffect(() => {
    // console.log(orderImage)
    // console.log(chooseSex)
    // console.log(styleName);
    ImageRef.current.src = orderImage;
    ImageRef1.current.src = orderImage;
    ImageRef2.current.src = orderImage;
    ImageRef3.current.src = orderImage;
    ImageRef4.current.src = orderImage;
  }, [orderImage]);

  let navigate = useNavigate();

  return (
    <div className="clearfix">
      <div className="itemImg">
        <div className="productImg_div">
          <p className="product_para">
            <span onClick={() => navigate(-1)}>
              {/* <Link to={ backarrow ? "/tailoring/malestyle" : "/tailoring/femalestyle"}> */}
              <button className="male_backarrow">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              {/* </Link> */}
            </span>

            <span>{styleName}</span>
          </p>
          <img className="product_img" ref={ImageRef} src={orderImage} />
        </div>
        <div className="sProduct">
          <img ref={ImageRef1} src={orderImage} />
          <img ref={ImageRef2} src={orderImage} />
          <img ref={ImageRef3} src={orderImage} />
          <img ref={ImageRef4} src={orderImage} />
        </div>
      </div>
    </div>
  );
};

export default SpecificStyle;
