import React, { useContext } from "react";
import { CartContext } from "../../App";
import LaundryHero from "../../Assets/Images/Laundry_Hero.png";
import LaundryBanner from "../../Assets/Images/Laundry_Banner.png";
import LaundryDetails from "../../Pages/LaundryDetails";

const LaundryAbout = () => {
  const cartContext = useContext(CartContext);
  const { laundryDetails, setLaundryDetails } = cartContext;

  const showLaundryDetails = () => {
    setLaundryDetails(!laundryDetails)
  }

 
  return (
    <>
      <div className="col-12 laundryHome">
        <div className="col-12 laundryBanner">
          <div className="col-lg-6 ">
            <div className="laundryBanner_content">
              <p>
                Get your garments
                <br /> cleaned and delivered.
              </p>
              <p>
                Welcome to 2M Seamless laundry services. We offer cleaning at
                its best and we also so make delivery seamless
              </p>
              <button className="btnn" onClick={showLaundryDetails} >
                Do Laundry
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-6 ">
            <img className="laundryBanner_img" src={LaundryHero} />
          </div>
        </div>
        <div className="col-12 laundryAbout">
          <div className="col-5">
            <img src={LaundryBanner} />
          </div>
          <div className="col-7 aboutDetails">
            <p>About</p>
            <p>
              Welcome to 2mseamless Laundry
            </p>
            <p>
              Welcome to 2M Seamless laundry services. <br /> Here our clients are
              royals and are meant to be treated with care. <br /> We offer clenaing at
              its best and a we also so make delivery seamless
            </p>
          </div>
        </div>
        <div className={laundryDetails ? "laundry-menu-expanded" : "laundry-menu"} >
          <div>
            <LaundryDetails {...{ setLaundryDetails }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LaundryAbout;
