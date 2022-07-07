import React, { useContext } from "react";
import { CartContext } from "../../App";
import WetWash from "../../Assets/Images/wet_wash.png";
import DryClean from "../../Assets/Images/Dry_clean.png";
import SteamIron from "../../Assets/Images/Steam_iron.png";
import WashFold from "../../Assets/Images/wash_fold.png";
import WashIron from "../../Assets/Images/wash_iron.png";
import LaundryDetails from "../../Pages/LaundryDetails";

const LaundryServices = () => {
  const cartContext = useContext(CartContext);
  const { laundryDetails, setLaundryDetails } = cartContext;

  const showLaundryDetails = () => {
    setLaundryDetails(!laundryDetails);
  };
  return (
    <>
      <div className="laundryServices">
        <p>Services</p>
        <p>What we do</p>
        <div className="first_services">
          <div>
            <img src={WetWash} />
            <p>Wet Wash</p>
          </div>
          <div>
            <img src={DryClean} />
            <p>Dry Clean</p>
          </div>
          <div>
            <img src={SteamIron} />
            <p>Steam Iron</p>
          </div>
        </div>
        <div className="second_services">
          <div>
            <img src={WashFold} />
            <p>Wash and Fold</p>
          </div>
          <div>
            <img src={WashIron} />
            <p>Wash and Iron</p>
          </div>
        </div>
      </div>
      <div className="laundry_subbanner">
        <div>
          <p>Get your laundry done and delivered</p>
          <p>We offer cleaning at its best and make delivery seamless</p>
          <button className="btnn" onClick={showLaundryDetails}>
            Do Laundry
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
      <div
        className={laundryDetails ? "laundry-menu-expanded" : "laundry-menu"}
      >
        <div>
          <LaundryDetails {...{ setLaundryDetails }} />
        </div>
      </div>
    </>
  );
};

export default LaundryServices;
