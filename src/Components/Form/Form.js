import React, { useState } from "react";
import "../../Styles/styles.css";
import Box from "@mui/material/Box";
import "react-dropzone-uploader/dist/styles.css";
import MaleSizeChart from "./MaleSizeChart";
import FemaleSizeChart from "./FemaleSizeChart";
import States from "../../Pages/States";

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

const DeliveryLocation = () => {
  const [yesOnsite, setYesOnsite] = useState(true);
  const [noOnsite, setNoOnsite] = useState(false);
  const checkedSelected = (e) => {
    let currentState = e.target.value;
    if (currentState === "onsite") {
      console.log("onsite");
      setNoOnsite(false);
      setYesOnsite(true);
    } else {
      setNoOnsite(true);
      setYesOnsite(false);
    }
  };

  return (
    <div className="fabric_pickup">
      <p>Delivery</p>
      <select
        className="form-select style_form form-select-lg mb-3 shadow-none"
        aria-label=".form-select-lg example"
        // checked={yesOnsite}
        onChange={(e) => {
          checkedSelected(e);
        }}
      >
        <option value="onsite">On Site</option>
        <option value="home">Home Delivery</option>
      </select>
      <div className="delivery_address">{noOnsite && <HomeDelivery />}</div>
      <div className="delivery_address">{yesOnsite && <Onsite />}</div>
    </div>
  );
};

const SelectSize = ({ chooseSex, setSelectSize, setCheckFabric }) => {
  const [viewChart, setViewChart] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const handleSize = (event) => {
    // console.log(event.target.value)
    setSelectSize(event.target.value);
  };

  return (
    <div className="select_size">
      <Box sx={{ minWidth: 120 }}>
        <p>Please select a size</p>
        <select
          className="form-select form-select-lg mb-3 shadow-none style_form"
          aria-label=".form-select-lg example"
          onChange={handleSize}
        >
          <option defaultValue="Select a Size">Select a Size</option>
          <option value="US 4/ UK 8">US 4/ UK 8</option>
          <option value="US 6/ UK 10">US 6/ UK 10</option>
          <option value="US 8/ UK 12">US 8/ UK 12</option>
          <option value="US 10/ UK 14">US 10/ UK 14</option>
          <option value="US 12/ UK 16">US 12/ UK 16</option>
          <option value="US 14/ UK 18">US 14/ UK 18</option>
          <option value="US 16/ UK 20">US 16/ UK 20</option>
        </select>
        <div className="view_sizebtn">
          {chooseSex === 1 ? (
            <button className="size_btn" onClick={() => setViewChart(true)}>
              View Size Chart
            </button>
          ) : (
            <button className="size_btn" onClick={() => setViewModal(true)}>
              View Size Chart
            </button>
          )}
        </div>

        <MaleSizeChart {...{ viewChart, setViewChart }} />
        <FemaleSizeChart {...{ viewModal, setViewModal }} />
      </Box>
    </div>
  );
};

const Form = ({ chooseSex, selectSize, setSelectSize, setCheckFabric }) => {
  return (
    <>
      <SelectSize
        {...{ chooseSex, selectSize, setSelectSize, setCheckFabric }}
      />

      <div>{selectSize !== "Select a Size" && <DeliveryLocation />}</div>
    </>
  );
};
export default Form;
