import React from "react";
import { useNavigate } from "react-router-dom";
import FirstStyle from "../../Assets/Images/malepic1.png";
import SecondStyle from "../../Assets/Images/malepic2.png";
import ThirdStyle from "../../Assets/Images/malepic3.png";
import FourthStyle from "../../Assets/Images/malepic4.png";
import FifthStyle from "../../Assets/Images/malepic5.png";
import SixthStyle from "../../Assets/Images/malepic6.png";

const StylesForMale = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-12 styles_for_male">
        <div>
          <div>
            <img
              onClick={() =>
                navigate("/product", {
                  state: { src: FirstStyle, id: 1, stylename: "Plain Kaftan" },
                })
              }
              src={FirstStyle}
            />
            <p className="styles_name">
              <span>Plain Kaftan</span>
              <span>₦166,076.00</span>
            </p>
          </div>
          <div>
            <img
              onClick={() =>
                navigate("/product", {
                  state: {
                    src: SecondStyle,
                    id: 1,
                    stylename: "African Print Shirt",
                  },
                })
              }
              src={SecondStyle}
            />
            <p className="styles_name">
              <span>African Print Shirt</span>
              <span>₦166,076.00</span>
            </p>
          </div>
          <div>
            <img
              onClick={() =>
                navigate("/product", {
                  state: {
                    src: ThirdStyle,
                    id: 1,
                    stylename: "Cashmere Jacket",
                  },
                })
              }
              src={ThirdStyle}
            />
            <p className="styles_name">
              <span>Cashmere Jacket</span>
              <span>₦166,076.00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 styles_for_male">
        <div>
          <div>
            <img
              onClick={() =>
                navigate("/product", {
                  state: {
                    src: FourthStyle,
                    id: 1,
                    stylename: "One Piece Senator",
                  },
                })
              }
              src={FourthStyle}
            />
            <p className="styles_name">
              <span>One Piece Senator</span>
              <span>₦166,076.00</span>
            </p>
          </div>
          <div>
            <img
              onClick={() =>
                navigate("/product", {
                  state: {
                    src: FifthStyle,
                    id: 1,
                    stylename: "Two Piece African Print",
                  },
                })
              }
              src={FifthStyle}
            />
            <p className="styles_name">
              <span>Two Piece African Print </span>
              <span>₦166,076.00</span>
            </p>
          </div>
          <div>
            <img
              onClick={() =>
                navigate("/product", {
                  state: {
                    src: SixthStyle,
                    id: 1,
                    stylename: "Two Piece Senator",
                  },
                })
              }
              src={SixthStyle}
            />
            <p className="styles_name">
              <span>Two Piece Senator</span>
              <span>₦166,076.00</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StylesForMale;
