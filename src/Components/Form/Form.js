import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../Styles/styles.css";
import { ButtonContainer } from "../Shared/ButtonComponent";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import UploadMeasurement from "./UploadMeasurement";
import "react-dropzone-uploader/dist/styles.css";
import MaleSizeChart from "./MaleSizeChart";
import FemaleSizeChart from "./FemaleSizeChart";

const PickUpLocation = () => {
  return (
    <div className="fabric_pickup">
      <p>Fabric PickUp Address</p>
      <textarea></textarea>
    </div>
  );
};
const DeliveryLocation = () => {
  return (
    <div className="fabric_pickup">
      <p>Oufit Delivery Address</p>
      <textarea></textarea>
    </div>
  );
};

const SelectSize = ({ chooseSex }) => {
  const [size, setSize] = React.useState("");
  const [viewChart, setViewChart] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [uploadMeasurement, setUploadMeasurement] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // const [selectedImages, setSelectedImages] = useState([]);
  // const closeModalHandler = () => setViewChart(false);

  const handleChange = (event) => {
    setSize(event.target.value);
  };
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
  // console.log(chooseSex);

  // console.log(selectedImage);
  return (
    <div className="select_size">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
          <Select
            className="MenuItem"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Select Size"
            onChange={handleChange}
            sx={{
              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "1px solid rgba(0, 0, 0, 0.23)",
              },

              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#bc9a43",
                borderWidth: "2px",
              },
              "& label": {
                color: "white",
              },

              ".&.Mui-focused .MuiOutlinedInput-notchedOutline-MuiSelect-root:hover":
                {
                  "& > fieldset": {
                    borderColor: "#bc9a43",
                    borderWidth: "2px",
                  },
                },
            }}
          >
            <MenuItem value={1}>US 4/ UK 8</MenuItem>
            <MenuItem value={2}>US 6/ UK 10</MenuItem>
            <MenuItem value={3}>US 8/ UK 12</MenuItem>
            <MenuItem value={4}>US 10/ UK 14</MenuItem>
            <MenuItem value={5}>US 12/ UK 16</MenuItem>
            <MenuItem value={6}>US 14/ UK 18</MenuItem>
            <MenuItem value={7}>US 16/ UK 20</MenuItem>
          </Select>
        </FormControl>
        <div className="view_sizebtn">
          {chooseSex == 1 ? (
            <button className="size_btn" onClick={() => setViewChart(true)}>
              View Size Chart
            </button>
          ) : (
            <button className="size_btn" onClick={() => setViewModal(true)}>
              View Size Chart
            </button>
          )}
        </div>

        {selectedImage == null ? (
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

const Form = ({ orderImage, styleName, chooseSex }) => {
  const [yesFabric, setyesFabric] = useState(false);
  const [noFabric, setnoFabric] = useState(false);

  const [yesMeasurement, setyesMeasurement] = useState(false);
  const [noMeasurement, setnoMeasurement] = useState(false);

  const navigate = useNavigate();

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
            <SelectSize {...{ chooseSex }} />
          </>
        )}
        {noMeasurement && <SelectSize {...{ chooseSex }} />}
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

      <div className="form_button">
        <ButtonContainer
          onClick={() =>
            navigate("/tailoring/orderdetails", {
              state: { src: orderImage, stylename: styleName, id: chooseSex },
            })
          }
        >
          Proceed
        </ButtonContainer>
      </div>
    </>
  );
};
export default Form;
