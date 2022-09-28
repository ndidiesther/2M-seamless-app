import React, { useRef } from "react";

import "../../Styles/styles.css";
import { Link, useLocation } from "react-router-dom";

const ImageUploaded = () => {
  const location = useLocation();
  const ImageRef = useRef();
  const ImageRef1 = useRef();
  const ImageRef2 = useRef();
  const ImageRef3 = useRef();
  const ImageRef4 = useRef();

  const { state } = location;
  let orderImage = location.state?.src;
  let chooseSex = location.state?.id;


  console.log(chooseSex);
  const reader = new FileReader();
  reader.addEventListener("load", (e) => {
    ImageRef.current.src = e.target.result;
    ImageRef1.current.src = e.target.result;
    ImageRef2.current.src = e.target.result;
    ImageRef3.current.src = e.target.result;
    ImageRef4.current.src = e.target.result;
  });
  reader.readAsDataURL(state?.src);
  return (
    <div>
      <div className="clearfix">
        <div className="itemImg">
          <div className="productImg_div">
            <p className="product_para">
              <Link to="/femalestyle">
                <button className="male_backarrow">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </Link>

              <span>Ankara Bohemian Gown</span>
            </p>
            <img alt="img" className="product_img" ref={ImageRef} src={orderImage} />
          </div>
          <div className="sProduct">
            <img alt="img" ref={ImageRef1} src={orderImage} />
            <img alt="img" ref={ImageRef2} src={orderImage} />
            <img alt="img" ref={ImageRef3} src={orderImage} />
            <img alt="img" ref={ImageRef4} src={orderImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploaded;
