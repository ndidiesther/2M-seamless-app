import React from "react";
import ImageOne from "../../Assets/Images/img1.png";
import ImageTwo from "../../Assets/Images/img2.png";
import ImageThree from "../../Assets/Images/img3.png";
import "../../Styles/Home.css";

const GridDisplay = () => {
  return (
    <div className="col-12">
      <div className="sub_banner col-12 ">
        <div>
          <img src={ImageOne} />
          <p className="img_header">Sleek & Trending Designs</p>
          <p className="img_body">
            We always strive to give the best in designs and materials used,
            sewing, finishing, and packaging.
          </p>
        </div>
        <div>
          <img src={ImageTwo} />
          <p className="img_header">Fast & Reliable</p>
          <p className="img_body">
            We are here to change the perception of tailors being late. We
            always stick to time given in everything we do.
          </p>
        </div>
        <div>
          <img src={ImageThree} />
          <p className="img_header">What You Order Is What You Get</p>
          <p className="img_body">
            We set a high production quality that is always aimed at meeting the
            needs of our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridDisplay;
