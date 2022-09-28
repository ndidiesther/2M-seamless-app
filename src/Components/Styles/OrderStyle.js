import React from "react";
import "../../Styles/styles.css";
import { useLocation } from "react-router-dom";
import Form from "../Form/Form";
import ImageUploaded from "../UploadStyles/ImageUploaded";

const SpecificStyle = () => {
  const location = useLocation();

  let orderImage = location.state?.src;
  let chooseSex = location.state?.id;
  return (
    <div className="col-12 product form_div">
      <div className="order_details">
        <ImageUploaded orderImage={orderImage} chooseSex={chooseSex} />
        <div>
          <Form orderImage={orderImage} chooseSex={chooseSex} />
        </div>
      </div>
    </div>
  );
};

export default SpecificStyle;
