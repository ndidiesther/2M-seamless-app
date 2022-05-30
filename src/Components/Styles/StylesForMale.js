import React from "react";
import { Link } from "react-router-dom";
import FirstStyle from "../../Assets/Images/malepic1.png";
import SecondStyle from "../../Assets/Images/malepic2.png";
import ThirdStyle from "../../Assets/Images/malepic3.png";
import FourthStyle from "../../Assets/Images/malepic4.png";
import FifthStyle from "../../Assets/Images/malepic5.png";
import SixthStyle from "../../Assets/Images/malepic3.png";

const StylesForMale = () => {
  return (
    <>
      <div className="col-12 styles_for_male">
        <div>
          <div>
            <Link to="">
              <img src={FirstStyle} />
              <p className="styles_name">
                <span>Plain Kaftan</span>
                <span>₦166,076.00</span>
              </p>
            </Link>
          </div>
          <div>
            <Link to="">
              <img src={SecondStyle} />
              <p className="styles_name">
                <span>African Print Shirt</span>
                <span>₦166,076.00</span>
              </p>
            </Link>
          </div>
          <div>
            <Link to="">
              <img src={ThirdStyle} />
              <p className="styles_name">
                <span>Cashmere Jacket</span>
                <span>₦166,076.00</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-12 styles_for_male">
        <div>
          <div>
            <Link to="">
              <img src={FourthStyle} />
              <p className="styles_name">
                <span>One Piece Senator</span>
                <span>₦166,076.00</span>
              </p>
            </Link>
          </div>
          <div>
            <Link to="">
              <img src={FifthStyle} />
              <p className="styles_name">
                <span>Two Piece African Print </span>
                <span>₦166,076.00</span>
              </p>
            </Link>
          </div>
          <div>
            <Link to="">
              <img src={SixthStyle} />
              <p className="styles_name">
                <span>Two Piece Senator</span>
                <span>₦166,076.00</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StylesForMale;
