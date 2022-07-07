import React from "react";
import LaundryCart from "../Components/Laundry/LandryCart";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";

const LaundryDetails = ({ setLaundryDetails }) => {
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
                  className="form-select laundry-form form-select-lg mb-3 shadow-none"
                  aria-label=".form-select-lg example"
                >
                  <option>Select type of service</option>
                  <option value="1">Wet Wash</option>
                  <option value="2">Dry Clean</option>
                  <option value="3">Steam Iron</option>
                  <option value="4">Wash and Iron</option>
                  <option value="5">Wash and Fold</option>
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
                <LaundryCart />
              </div>
              <div>
                <p>Delivery</p>
                <select
                  className="form-select laundry-form form-select-lg mb-3 shadow-none"
                  aria-label=".form-select-lg example"
                >
                  <option value="1">Pick up (On Site)</option>
                  <option value="2">Home Delivery</option>
                </select>
              </div>
            </div>
            <div className="laundry-footer">
             
              <div>
                <ButtonContainer>Next</ButtonContainer>
              </div>
              <div>
                <ButtonContainer cart>Cancel</ButtonContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaundryDetails;
