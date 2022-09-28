import React from "react";
import { useLocation } from "react-router-dom";
import ItemDetails from "../Components/Styles/ItemDetails";
import SpecificStyle from "../Components/Styles/SpecificStyle";
import ImageUploaded from "../Components/UploadStyles/ImageUploaded";


const OrderDetails = () => {
  let location = useLocation();

  let orderImage = location.state?.src;
  let chooseSex = location.state?.id;
  let orderSummary = "Order Summary";
  let styleName = location.state?.stylename;
  let uniqueId = location.state?.uniqueId;
  let amount = location.state?.price;
  let description = location.state?.description;
  // console.log(chooseSex);
  // useEffect(() => {
  //   orderImage = location.state?.src;
  //   // console.log(chooseSex);
  // }, [orderImage]);
//  console.log(state)

  return (
    <>
      <div className="col-12 product form_div">
        <div className="order_details">
          <div>
            {chooseSex === 10 ? (
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
            <ItemDetails styleName={styleName} uniqueId={uniqueId} amount={amount} description={description} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
