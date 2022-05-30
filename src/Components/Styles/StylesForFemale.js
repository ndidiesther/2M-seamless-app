import React from "react";
import { Link } from "react-router-dom";
import FirstStyle from "../../Assets/Images/Product1.png";
import SecondStyle from "../../Assets/Images/Product2.png";
import ThirdStyle from "../../Assets/Images/Product3.png";

const StylesForFemale = () => {
  return (
    <div className="col-12 styles_for_female">
      <div>
        <div>
          <Link to="/product">
            <img src={FirstStyle} />
            <p className="styles_name">
              <span>Ankara Bohemian Gown</span>
              <span>₦166,076.00</span>
            </p>
          </Link>
        </div>
        <div>
          <Link to="/product">
            <img src={SecondStyle} />
            <p className="styles_name">
              <span>Ankara Bohemian Gown</span>
              <span>₦166,076.00</span>
            </p>
          </Link>
        </div>
        <div>
          <Link to="/product">
            <img src={ThirdStyle} />
            <p className="styles_name">
              <span>Ankara Bohemian Gown</span>
              <span>₦166,076.00</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StylesForFemale;
