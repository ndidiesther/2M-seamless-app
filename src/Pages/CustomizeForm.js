import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Form from "../Components/Form/Form";
import SpecificStyle from "../Components/Styles/SpecificStyle";

const CustomizeForm = () => {
  let location = useLocation();
  const { state } = location;
  let orderImage = location.state?.src;
  let chooseSex = location.state?.id;
  let styleName = location.state?.stylename;
  let text = location.state?.content;
  let amount = location.state?.stylePrice;

  // console.log(location.state.id)
  useEffect(() => {
    orderImage = location.state?.src;
  }, [orderImage]);

  return (
    <>
      <div className="col-12 product form_div">
        <div className="customize_form">
          <div>
            <SpecificStyle
              orderImage={orderImage}
              styleName={styleName}
              chooseSex={chooseSex}
            />
          </div>
          <div>
            <Form
              orderImage={orderImage}
              styleName={styleName}
              chooseSex={chooseSex}
              text={text}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizeForm;
