import React, { useState } from "react";
import States from "../../Pages/States";

// const HomeDelivery = () => {
//   return (
//     <>
//       <p>Address</p>
//       <textarea
//         placeholder="Enter Delivery Address"
//         className="laundry_textarea"
//       ></textarea>
//     </>
//   );
// };
// const Onsite = () => {
//   return (
//     <>
//       <p>PickUp Address</p>
//       <textarea
//         placeholder="Enter Drop-off address"
//         className="laundry_textarea"
//       ></textarea>
//     </>
//   );
// };
const HomeDelivery = () => {
  return (
    <>
      <div className="home_delivery">
        <p className="p_add">Delivery Address</p>
        <textarea
          placeholder="Enter Delivery Address"
          className="style_textarea"
        ></textarea>

        <States />
      </div>
    </>
  );
};
const Onsite = () => {
  const [yesAbuja, setYesAbuja] = useState(false);
  const [yesKaduna, setYesKaduna] = useState(false);

  const handlePickup = (e) => {
    let currentState = e.target.value;
    if (currentState === "abuja") {
      setYesAbuja(true);
      setYesKaduna(false);
    } else {
      setYesAbuja(false);
      setYesKaduna(true);
    }
  };
  return (
    <>
      <div>
        <p className="p_add">State in Nigeria</p>
        <select
          className="form-select style_form form-select-lg mb-3 shadow-none"
          aria-label=".form-select-lg example"
          // checked={yesOnsite}
          onChange={(e) => {
            handlePickup(e);
          }}
        >
          <option hidden value="">
            Select Abuja/Kaduna
          </option>
          <option value="abuja">Abuja</option>
          <option value="kaduna">Kaduna</option>
        </select>
        <div className="delivery_address">{yesAbuja && <AbujaPickUp />}</div>
        <div className="delivery_address">{yesKaduna && <KadunaPickUp />}</div>
      </div>
    </>
  );
};

const AbujaPickUp = () => {
  return (
    <>
      <div className="pickup_location">
        <p className="p_add ">PickUp Location</p>
        <div>No. 28 Tennesse Crescent, Ministers hill Maitama, Abuja</div>
      </div>
    </>
  );
};

const KadunaPickUp = () => {
  return (
    <>
      <div className="k_location">
        <p className="p_add ">PickUp Location</p>
        <div>
          Suite 4 Ground Floor, Hamza Zayad House, NO 10 Muhammadu Buhari Way,
          City Centre 800283, Kaduna
        </div>
      </div>
    </>
  );
};

const DoLaundry = () => {
  const [yesOnsite, setYesOnsite] = useState(false);
  const [noOnsite, setNoOnsite] = useState(false);

  const checkedSelected = (e) => {
    let currentState = e.target.value;
    if (currentState === "onsite") {
      console.log("onsite");
      setNoOnsite(false);
     
    } else {
      setNoOnsite(true);
    
    }
  };

  const homeCheckedSelected = (e) => {
    let currentState = e.target.value;
    if (currentState === "onsite") {
      console.log("onsite");
      setYesOnsite(false);
     
    } else {
      setYesOnsite(true);
    
    }
  }

  return (
    <>
      <div>
        <p>Pick Up</p>
        <select
          className="form-select style_form form-select-lg mb-3 shadow-none"
          aria-label=".form-select-lg example"
          onChange={(e) => {
            // setYesHomeDelivery(!e.target.value);
            // setNoHomeDelivery(e.target.value);
            checkedSelected(e)
          }}
        >
          <option value="onsite">On Site</option>
          <option value="home">Home Pickup</option>
        </select>
      </div>
      <div>{noOnsite && <Onsite />}</div>

      <div>
        <p>Delivery</p>
        <select
          className="form-select style_form form-select-lg mb-3 shadow-none"
          aria-label=".form-select-lg example"
          checked={!!yesOnsite}
          onChange={(e) => {
            homeCheckedSelected(e)
          }}
        >
          <option value="onsite">On Site</option>
          <option value="home">Home Delivery</option>
        </select>
      </div>

      <div className="delivery_address">{yesOnsite && <HomeDelivery />}</div>

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
