import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItemDetails from "../Components/Styles/ItemDetails";
import SpecificStyle from "../Components/Styles/SpecificStyle";
import ImageUploaded from "../Components/UploadStyles/ImageUploaded";

const OrderDetails = () => {
  let location = useLocation();
  const { state } = location;
  let orderImage = location.state?.src;
  let chooseSex = location.state?.id;
  let orderSummary = "Order Summary";
  let styleName = location.state?.stylename;
  console.log(chooseSex);
  useEffect(() => {
    orderImage = location.state?.src;
    console.log(chooseSex);
  }, [orderImage]);

  return (
    <>
      <div className="col-12 product form_div">
        <div className="order_details">
          <div>
            {chooseSex == 10 ? (
              <ImageUploaded orderImage={orderImage} />
            ) : (
              <SpecificStyle
                orderImage={orderImage}
                styleName={orderSummary}
                chooseSex={chooseSex}
              />
            )}
          </div>
          <div>
            <ItemDetails styleName={styleName} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
