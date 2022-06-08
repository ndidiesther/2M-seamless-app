import React from "react";
import "../../Styles/Home.css";
import LadyOne from "../../Assets/Images/lady1.png";
import LadyTwo from "../../Assets/Images/lady2.png";

const Banner = ({ setGenderModal }) => {
  return (
    <div className="col-12">
      <div className="mini_banner col-12">
        <div className="col-lg-7 col-md-7 ">
          <div>
            <p>
              Got a Style You Like? <br />
              Let’s Sew It...
            </p>
            <p>
              Welcome to the tailoring atelier in 2M Seamless. We offer many
              kinds of made to measure services such as suits, pants, senator
              wears, shirts, skirts and lots more.
            </p>
            <button
              className="btnn"
              onClick={() => {
                setGenderModal(true);
              }}
            >
              Sew Now
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-md-5">
          <img className="mask_group" src={LadyTwo} />
          <img className="lady_one" src={LadyOne} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
