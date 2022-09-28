import React from "react";
import { useNavigate } from "react-router-dom";
import FirstStyle from "../../Assets/Images/Product1.png";
import SecondStyle from "../../Assets/Images/Product2.png";
import ThirdStyle from "../../Assets/Images/Product3.png";

const StylesForFemale = () => {
  const navigate = useNavigate();
  return (
    <div className="col-12 styles_for_female">
      <div>
        <div>
          <img alt="img"
            onClick={() =>
              navigate("/tailoring/product", {
                state: {
                  src: FirstStyle,
                  id: 2,
                  stylename: "Ankara Bohemian Gown",
                  price: "166076.00",
                  uniqueId: 3,
                  description: "Gowns",
                },
              })
            }
            src={FirstStyle}
          />
          <p className="styles_name">
            <span>Ankara Bohemian Gown</span>
            <span>₦166,076.00</span>
          </p>
        </div>
        <div>
          <img alt="img"
            onClick={() =>
              navigate("/tailoring/product", {
                state: {
                  src: SecondStyle,
                  id: 2,
                  stylename: "Ankara Bohemian Gown",
                  price: "166076.00",
                  uniqueId: 4,
                  description: "Vintage",
                },
              })
            }
            src={SecondStyle}
          />
          <p className="styles_name">
            <span>Ankara Bohemian Gown</span>
            <span>₦166,076.00</span>
          </p>
        </div>
        <div>
          <img alt="img"
            onClick={() =>
              navigate("/tailoring/product", {
                state: {
                  src: ThirdStyle,
                  id: 2,
                  stylename: "Ankara Bohemian Gown",
                  price: "166076.00",
                  uniqueId: 5,
                  description: "African Prints",
                },
              })
            }
            src={ThirdStyle}
          />
          <p className="styles_name">
            <span>Ankara Bohemian Gown</span>
            <span>₦166,076.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StylesForFemale;
