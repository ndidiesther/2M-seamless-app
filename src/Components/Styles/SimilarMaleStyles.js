import React from "react";
import { useNavigate } from "react-router-dom";
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
                navigate("/tailoring/product", {
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
                navigate("/tailoring/product", {
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
                navigate("/tailoring/product", {
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
