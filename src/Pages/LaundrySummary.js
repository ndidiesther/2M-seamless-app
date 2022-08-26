import React, { useContext, useEffect, useState } from "react";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import { CartContext } from "../App";

import LaundryUpload from "../Components/Laundry/LaundryUpload";

const LaundrySummary = ({ setLaundrySummary, setLaundryDetails }) => {
  const cartContext = useContext(CartContext);
  const { laundryUpload, setLaundryUpload, laundryCartItems } = cartContext;

  const [subTotalValue, setSubTotalValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const ourServices = [
    {
      name: "Shorts",
      price: 1000,
    },
    {
      name: "Blouse",
      price: 500,
    },
    {
      name: "Trousers",
      price: 1500,
    },
    {
      name: "Skirt",
      price: 1200,
    },
    {
      name: "Shirt",
      price: 800,
    },
  ];

  const setPrices = () => {
    const returnPrice = laundryCartItems.map((item, index) => {
      const serviceName = ourServices.find((services) => {
        // console.log(services);
        return services.name == item.name;
      });
      item.price = serviceName.price;
      item.totalPrice = serviceName.price * item.quantity;
      return item;
      // console.log(serviceName)
    });
    // console.log(returnPrice);
  };
  setPrices();

  useEffect(() => {
    const subTotal = laundryCartItems.reduce((total, item) => {
      // console.log(item);
      total = total + parseFloat(item.totalPrice);

      return total;
    }, 0);
    // console.log(subTotal);
    setSubTotalValue(subTotal.toFixed(2));

    let TotalPrice = subTotal + 250 + 25;
    setTotalValue(TotalPrice.toFixed(2));
    // console.log(typeof(subTotalValue));
    // console.log(subTotal.toFixed(2))
  }, [laundryCartItems]);
  const showLaundryUpload = () => {
    setLaundryUpload(!laundryUpload);
    // console.log("upload");
  };
  return (
    <div className="col-12">
      <div className="col-12 side-menu ">
        {/* <div className="side-menu__overlay" /> */}
        <div className="side-menu__content laundry_sum">
          <div className="laundrySummary_header">
            <button
              onClick={() => setLaundrySummary(false)}
              className="backArrow"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back</span>
            </button>
            <div>
              <p>Order Summary</p>
              <p className="summary_items">
                {laundryCartItems.length <= 1
                  ? `${laundryCartItems.length} Item `
                  : `${laundryCartItems.length} Items`}
              </p>
            </div>
          </div>
          <div className="laundrySummary-content">
            <div>
              <div>Services</div>
              <div>Rate</div>
              <div>Qty</div>
            </div>
            {laundryCartItems.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="cloth_type ">{item.name}</div>
                  <div className="service_type">({item.services})</div>
                </div>
                <div>{item.price}</div>
                <div>{item.quantity}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="col-12 laundrySummary-footer">
              <div>
                <span>Subtotal:</span>
                <span>#{subTotalValue}</span>
              </div>
              <div>
                <span>Shipping:</span>
                <span>#250.00</span>
              </div>
              <div>
                <span>Tax:</span>
                <span>#25.00</span>
              </div>
              <div>
                <span>Total:</span>
                <span>#{totalValue}</span>
              </div>
            </div>
            <div className="laundry-footer laundry_summary">
              <div>
                <ButtonContainer onClick={showLaundryUpload}>
                  Next
                </ButtonContainer>
              </div>
              <div>
                <ButtonContainer cart>Cancel</ButtonContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          laundryUpload ? "laundryUpload-menu-expanded" : "laundryUpload-menu"
        }
      >
        <div>
          <LaundryUpload {...{ setLaundryUpload, setLaundryDetails, setLaundrySummary }} />
        </div>
      </div>
    </div>
  );
};

export default LaundrySummary;
