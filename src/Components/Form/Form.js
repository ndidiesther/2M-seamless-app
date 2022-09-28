import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../Styles/styles.css";
import Box from "@mui/material/Box";
import UploadMeasurement from "./UploadMeasurement";
import "react-dropzone-uploader/dist/styles.css";
import MaleSizeChart from "./MaleSizeChart";
import FemaleSizeChart from "./FemaleSizeChart";
import States from "../../Pages/States";

const HomeDelivery = () => {
  return (
    <>
      <p className="p_add">Delivery Address</p>
      <textarea
        placeholder="Enter Delivery Address"
        className="style_textarea"
      ></textarea>

      <States />
    </>
  );
};
const Onsite = () => {
  return (
    <>
      <p className="p_add">PickUp Address</p>
      <textarea
        placeholder="Enter Drop-off address"
        className="style_textarea"
      ></textarea>
    </>
  );
};

const PickUpLocation = () => {
  const [yesHomeDelivery, setYesHomeDelivery] = useState(false);
  const [noHomeDelivery, setNoHomeDelivery] = useState(false);

  const homeDeliverySelected = (e) => {
    if (e.target.value !== 2) {
      setNoHomeDelivery(!e.target.value);
    }
  };
  return (
    <div className="fabric_pickup">
      <p>Fabric PickUp</p>
      <select
        className="form-select style_form form-select-lg mb-3 shadow-none"
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
      <div>{noHomeDelivery && <Onsite />}</div>
    </div>
  );
};
const DeliveryLocation = () => {
  const [yesOnsite, setYesOnsite] = useState(false);
  const [noOnsite, setNoOnsite] = useState(false);
  const checkedSelected = (e) => {
    // console.log("I am selected");
    if (e.target.value !== 2) {
      setNoOnsite(!e.target.value);
    }
  };

  return (
    <div className="fabric_pickup">
      <p>Delivery</p>
      <select
        className="form-select style_form form-select-lg mb-3 shadow-none"
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
      <div className="delivery_address">{noOnsite && <HomeDelivery />}</div>
    </div>
  );
};

const SelectSize = ({ chooseSex, selectSize, setSelectSize }) => {

  const [viewChart, setViewChart] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [uploadMeasurement, setUploadMeasurement] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [selectSize, setSelectSize] = useState('')
  

  // const [selectedImages, setSelectedImages] = useState([]);
  // const closeModalHandler = () => setViewChart(false);

  // const handleChange = (event) => {
  //   setSize(event.target.value);
  // };
  function trimContent(imgName) {
    console.log(imgName.length);
    console.log(imgName);
    if (imgName.length < 15) {
      return imgName;
    }
    let start = imgName.slice(0, 10);
    let end = imgName.slice(-5);
    let trimmedString = start + "..." + end;
    return trimmedString;
  }

  const handleSize = (event) => {
    // console.log(event.target.value)
    setSelectSize(event.target.value)
  }
  // console.log(selectSize)
  // console.log(chooseSex);

  // console.log(selectedImage);
  return (
    <div className="select_size">
      <Box sx={{ minWidth: 120 }}>
        <select 
        className="form-select form-select-lg mb-3 shadow-none style_form"
        aria-label=".form-select-lg example"
        onChange={handleSize}
        // checked={!!yesOnsite}
        // onChange={(e) => {
        //   setYesOnsite(!e.target.value);
        //   setNoOnsite(e.target.value);
        //   checkedSelected(e);
        // }}
      >        
        <option hidden defaultValue="0">Select a Size</option>
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

        {selectedImage === null ? (
          <div className="uploadimage">
            <button
              className="uploadimage_btn"
              onClick={() => setUploadMeasurement(true)}
            >
              Or Upload an image of your measurements
            </button>
          </div>
        ) : (
          <div className="selected_image">
            <div>
              {" "}
              <span>{selectedImage && trimContent(selectedImage.name)} </span>
              <span onClick={() => setSelectedImage(null)}>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
            <div
              onClick={() => {
                setUploadMeasurement(true);
                // setSelectedImages([]);
              }}
            >
              Change
            </div>
          </div>
        )}

        <UploadMeasurement
          {...{
            uploadMeasurement,
            setUploadMeasurement,
            setSelectedImage,
          }}
        />

        <MaleSizeChart {...{ viewChart, setViewChart }} />
        <FemaleSizeChart {...{ viewModal, setViewModal }} />
      </Box>
    </div>
  );
};

const Form = ({ orderImage, styleName, chooseSex, selectSize, setSelectSize, setCheckFabric }) => {
  const [yesFabric, setyesFabric] = useState(false);
  const [noFabric, setnoFabric] = useState(false);

  const [yesMeasurement, setyesMeasurement] = useState(false);
  const [noMeasurement, setnoMeasurement] = useState(false);

 



  return (
    <>
      <div className="fabric_radio">
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            className="form_label"
          >
            Do you have your fabric?
          </FormLabel>
          <RadioGroup
            className="label_class"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#bc9a43",
                    },
                  }}
                />
              }
              label="Yes I do"
              checked={!!yesFabric}
              onChange={(e) => {
                setyesFabric(!e.target.value);
                setnoFabric(e.target.value);
                setCheckFabric(e.target.value)
              }}
            />
            <FormControlLabel
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#bc9a43",
                    },
                  }}
                />
              }
              label="No I don't"
              checked={!!noFabric}
              onChange={(e) => {
                setnoFabric(!e.target.value);
                setyesFabric(e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="measurement_radio">
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            className="form_label"
          >
            Do you have your measurement?
          </FormLabel>
          <RadioGroup
            className="label_class"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#bc9a43",
                    },
                  }}
                />
              }
              label="Yes I do"
              checked={!!yesMeasurement}
              onChange={(e) => {
                setyesMeasurement(!e.target.value);
                setnoMeasurement(e.target.value);
              }}
            />
            <FormControlLabel
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#bc9a43",
                    },
                  }}
                />
              }
              label="No I don't"
              checked={!!noMeasurement}
              onChange={(e) => {
                setnoMeasurement(!e.target.value);
                setyesMeasurement(e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        {yesMeasurement && (
          <>
            <SelectSize {...{ chooseSex, selectSize, setSelectSize }} />
          </>
        )}
        {noMeasurement && <SelectSize {...{ chooseSex, selectSize, setSelectSize }} />}
      </div>

      <div>
        {yesFabric && (
          <>
            <PickUpLocation />
            <DeliveryLocation />
          </>
        )}
        {noFabric && <DeliveryLocation />}
      </div>

      {/* <div className="form_button">
        <ButtonContainer
          onClick={() =>
            navigate("/tailoring/orderdetails", {
              state: { src: orderImage, stylename: styleName, id: chooseSex },
            })
          }
        >
          Proceed
        </ButtonContainer>
      </div> */}
    </>
  );
};
export default Form;
