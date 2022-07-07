import React from "react";
import LaundryAbout from "../Components/Laundry/LaundryAbout";
import LaundryGallery from "../Components/Laundry/LaundryGallery";
import LaundryServices from "../Components/Laundry/LaundryServices";
import "../Styles/Laundry.css";

const Laundry = () => {
  return (
    <>
      <div className="laundry">
        <LaundryAbout />
        <LaundryServices />
        <LaundryGallery />
      </div>
    </>
  );
};

export default Laundry;
