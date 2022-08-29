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
import { Modal } from "react-bootstrap";
import ChartImage from "../../Assets/Images/size_chart.png";
import MaleChart from "../../Assets/Images/size_male_chart.png";
import { useNavigate } from "react-router-dom";
import UploadMeasurement from "./UploadMeasurement";
import "react-dropzone-uploader/dist/styles.css";
import { inputLabelClasses } from "@mui/material/InputLabel";
import Dropzone from "react-dropzone-uploader";

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

const SelectSize = ({ text, files }) => {
  const [size, setSize] = React.useState("");
  const [viewChart, setViewChart] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [uploadMeasurement, setUploadMeasurement] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [chartImage, setChartImage] = useState(1);

  // const [selectedImages, setSelectedImages] = useState([]);
  const closeModalHandler = () => setViewChart(false);

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  // console.log(selectedImage);
  return (
    <div className="select_size">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: "#000",
                [`&.${inputLabelClasses.shrink}`]: {
                  // set the color of the label when shrinked (usually when the TextField is focused)
                  color: "#000",
                },
              },
            }}
            I
            id="demo-simple-select-label"
          >
            Select Size
          </InputLabel>
          <Select className="MenuItem"
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
            
             ".&.Mui-focused .MuiOutlinedInput-notchedOutline-MuiSelect-root:hover": {
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
          <button className="size_btn" onClick={() => setViewChart(true)}>
            View Size Chart
          </button>
          <button className="measurement_btn">
            or Import the measurement from your profile
          </button>
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
            <span>
              {" "}
              <span>{selectedImage && selectedImage.name} </span>
              <span onClick={() => setSelectedImage(null)}>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </span>
            <span
              onClick={() => {
                setUploadMeasurement(true);
                // setSelectedImages([]);
              }}
            >
              Change
            </span>
          </div>
        )}

        <UploadMeasurement
          {...{
            uploadMeasurement,
            setUploadMeasurement,
            setSelectedImage,
          }}
        />

        <Modal
          dialogClassName={"CSRModal"}
          show={viewChart}
          onHide={closeModalHandler}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {chartImage === 1 ? (
            <div>
              <FirstStep {...{ setChartImage }} />
            </div>
          ) : (
            <SecondStep {...{ setChartImage }} />
          )}
          <Modal.Footer>
            {/* <Button onClick={props.onHide}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      </Box>
    </div>
  );
};

const FirstStep = ({ setChartImage }) => {
  return (
    <>
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal-title"
        ></Modal.Title>
      </Modal.Header>
      <Modal.Body className="gender_body">
        <div className="chartimg">
          <span className="angle-left disabled">
            <i className="fa-solid fa-angle-left"></i>
          </span>
          <img className="chart_img" src={ChartImage} />
          <span
            onClick={() => {
              setChartImage(2);
            }}
            className="angle-right"
          >
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </>
  );
};

const SecondStep = ({ setChartImage }) => {
  return (
    <>
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal-title"
        ></Modal.Title>
      </Modal.Header>
      <Modal.Body className="gender_body">
        <div className="chartimg">
          <span
            onClick={() => {
              setChartImage(1);
            }}
            className="angle-left"
          >
            <i className="fa-solid fa-angle-left"></i>
          </span>
          <img className="chart_img" src={MaleChart} />
          <span className="angle-right disabled">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </>
  );
};

// const InputMeasurement = () => {
//   return (
//     <div className="input_measurement">
//       <p>Please input your measurement (in inches)</p>
//       <div className="input_mdiv">
//         <span>
//           <label>Shoulder</label>
//           <input type="number" />
//         </span>
//         <span>
//           <label>Bust</label>
//           <input type="number" />
//         </span>
//         <span>
//           <label>Waist</label>
//           <input type="number" />
//         </span>
//       </div>
//       <div className="input_mdiv">
//         <span>
//           <label>Hip</label>
//           <input type="number" />
//         </span>
//         <span>
//           <label>Blouse Length</label>
//           <input type="number" />
//         </span>
//         <span>
//           <label>Skirt Length</label>
//           <input type="number" />
//         </span>
//       </div>
//     </div>
//   );
// };

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
            <SelectSize />
          </>
        )}
        {noMeasurement && <SelectSize />}
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
