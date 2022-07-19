import React, { useContext, useState } from "react";
import DoLaundry from "../Components/Laundry/DoLaundry";
import LaundryCart from "../Components/Laundry/LandryCart";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import { CartContext } from "../App";
import LaundrySummary from "./LaundrySummary";

const LaundryDetails = ({ setLaundryDetails }) => {
  const cartContext = useContext(CartContext);
  const { laundrySummary, setLaundrySummary } = cartContext;
  // console.log(setLaundryCartItems);

  const [services, setServices] = useState("Wet Wash");

  const handleChange = (e) => {
    setServices(e.target.value);
    // console.log(e.target.value);
  };

  const showLaundrySummary = () => {
    setLaundrySummary(!laundrySummary);
    // console.log("summary");
  };

  return (
    <>
      <div className="col-12">
        <div className="col-12 side-menu">
          <div className="side-menu__overlay" />
          <div className="side-menu__content laundry_details">
            <div className="laundry_header">
              <span onClick={() => setLaundryDetails(false)}>
                <i className="fa-solid fa-xmark"></i>
              </span>
              <div>
                <p>Do Laundry</p>
                <p>Please fill this form with the correct details</p>
              </div>
            </div>
            <div className="laundry-content">
              <div>
                <p>Please select the type of service you want</p>
                <select
                  value={services}
                  onChange={handleChange}
                  className="form-select laundry-form form-select-lg mb-3 shadow-none"
                  aria-label=".form-select-lg example"
                >
                  <option value="Wet Wash">Wet Wash</option>
                  <option value="Dry Clean">Dry Clean</option>
                  <option value="Steam Iron">Steam Iron</option>
                  <option value="Wash and Iron">Wash and Iron</option>
                  <option value="Wash and Fold">Wash and Fold</option>
                </select>
              </div>
              <div>
                <p>Gender</p>
                <select
                  className="form-select laundry-form form-select-lg mb-3 shadow-none"
                  aria-label=".form-select-lg example"
                >
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
              <div>
                <LaundryCart services={services} />
              </div>

              <DoLaundry />
            </div>
            <div className="laundry-footer">
              <div>
                <ButtonContainer onClick={showLaundrySummary}>
                  Next
                </ButtonContainer>
              </div>
              <div>
                <ButtonContainer onClick={() => setLaundryDetails(false)} cart>
                  Cancel
                </ButtonContainer>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            laundrySummary
              ? "laundrySummary-menu-expanded"
              : "laundrySummary-menu"
          }
        >
          <div>
            <LaundrySummary {...{ setLaundrySummary }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LaundryDetails;
