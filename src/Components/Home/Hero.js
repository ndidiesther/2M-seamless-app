import React from "react";
import "../../Styles/Home.css";
import Banner from "../../Assets/Images/banner.png";
import Message from "../../Assets/Images/message.png";

const Hero = ({ setGenderModal }) => {
  return (
    <div className="col-12 home">
      <div className="col-12 banner">
        <div className="col-lg-5 ">
          <img alt="img" className="banner_img" src={Banner} />
        </div>
        <div className="col-lg-7 ">
          <div className="banner_content">
            <p>
              Quality Products <br /> Tailored Just For You.
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
        <div className="chat_icon">
          <span>
            <img alt="img" src={Message} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
