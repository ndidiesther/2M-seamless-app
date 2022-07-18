import React, { useState } from "react";

const HomeDelivery = () => {
  return (
    <>
      <p>Address</p>
      <textarea
        placeholder="Enter Delivery Address"
        className="laundry_textarea"
      ></textarea>
    </>
  );
};
const Onsite = () => {
  return (
    <>
      <p>Address</p>
      <textarea
        placeholder="Enter Drop-off address"
        className="laundry_textarea"
      ></textarea>
    </>
  );
};

const DoLaundry = () => {
  const [yesOnsite, setYesOnsite] = useState(false);
  const [noOnsite, setNoOnsite] = useState(false);

  const [yesHomeDelivery, setYesHomeDelivery] = useState(false);
  const [noHomeDelivery, setNoHomeDelivery] = useState(false);

  const checkedSelected = (e) => {
    // console.log("I am selected");
    if (e.target.value != 2) {
      setNoOnsite(!e.target.value);
    }
  };

  const homeDeliverySelected = (e) => {
    if (e.target.value != 2) {
      setNoHomeDelivery(!e.target.value);
    }
  };

  return (
    <>
      <div>
        <p>Pick Up</p>
        <select
          className="form-select laundry-form form-select-lg mb-3 shadow-none"
          aria-label=".form-select-lg example"
          checked={!!yesHomeDelivery}
          onChange={(e) => {
            setYesHomeDelivery(!e.target.value);
            setNoHomeDelivery(e.target.value);
            homeDeliverySelected(e);
          }}
        >
          <option value="1">On Site</option>
          <option value="2">Home Pickup</option>
        </select>
      </div>
      <div>{noHomeDelivery && <Onsite />}</div>

      <div>
        <p>Delivery</p>
        <select
          className="form-select laundry-form form-select-lg mb-3 shadow-none"
          aria-label=".form-select-lg example"
          checked={!!yesOnsite}
          onChange={(e) => {
            setYesOnsite(!e.target.value);
            setNoOnsite(e.target.value);
            checkedSelected(e);
          }}
        >
          <option value="1">On Site</option>
          <option value="2">Home Delivery</option>
        </select>
      </div>

      <div  className="delivery_address">{noOnsite && <HomeDelivery />}</div>

      <div className="laundry_contact">
        <p>Enter WhatsApp Contact</p>
        <textarea
          placeholder="Enter Number here"
          className="laundry_textarea"
        ></textarea>
      </div>
    </>
  );
};

export default DoLaundry;
