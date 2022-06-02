import React from "react";
import Form from "../Components/Form/Form";
import SpecificStyle from "../Components/Styles/SpecificStyle";
import Test from "../Pages/Test"

const FemaleForm = () => {
  return (
    <>
      <div className="col-12 product form_div">
        <div className="customize_form">
          <div>
            <SpecificStyle />
          </div>
          <div>
            <Form />
          
          </div>
        </div>
      </div>
    </>
  );
};

export default FemaleForm;
