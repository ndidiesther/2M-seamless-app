import React, { useState } from "react";
import EmptyImg from "../Assets/Images/avatar.png";
import ProfileImg from "../Assets/Images/profileimg.png";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import PickUp from "../Assets/Images/pickup.png";
import Washing from "../Assets/Images/washing.png";
import Delivery from "../Assets/Images/delivery.png";
import EditProfile from "../Components/Laundry/EditProfile";
import { useNavigate } from "react-router-dom";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";;
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Modal } from "react-bootstrap";
import ChartImage from "../Assets/Images/size_chart.png";
import MaleChart from "../Assets/Images/size_male_chart.png";
import UploadMeasurement from "../Components/Form/UploadMeasurement";
// import UploadMeasurement from "";

const MeasurementProfile = () => {
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
  return (
    <div className="measurement_profile">
      <div>
        <p>Measurement</p>
        <p>Choose from the standard size chart below </p>
        <div className="size_profile">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={size}
                label="Select Size"
                onChange={handleChange}
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
              <button className="size_btn meas_btn" onClick={() => setViewChart(true)}>
                View Size Chart
              </button>
            
            </div>
            <p className="meas_image">Measurement Image</p>

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
      </div>
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

const TailoringHistory = ({ editProfile, setEditProfile }) => {
  const [orderType, setOrderType] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  let navigate = useNavigate();

  const handleSelect = (e) => {
    console.log("Hello");
    setOrderType(e.target.value);
    if (e.target.value === "laundry") {
      navigate("/laundryhistory");
    } else if (e.target.value === "tailoring") {
      navigate("/tailoringhistory");
    }
  };

  return (
    <>
      <div className="col-12 laundryhistory">
        {profilePic == null ? (
          <div>
            <p className="profiles">Profile</p>
            <div className="profile_img">
              <img src={EmptyImg} />
            </div>

            <div className="profilename">
              <p>Joan Karasha</p>
              <p>Joankarasha@gmail.com</p>
              <div>
                <ButtonContainer onClick={() => setEditProfile(true)}>
                  Edit Profile
                </ButtonContainer>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <p className="profile">Profile</p>
              <img src={ProfileImg} />
            </div>

            <div className="profilename">
              <p>Joan Karasha</p>
              <p>Joankarasha@gmail.com</p>
              <div>
                <ButtonContainer onClick={() => setEditProfile(true)}>
                  Edit Profile
                </ButtonContainer>
              </div>
            </div>
          </div>
        )}

        <div>
          <span>
            <span>
              <span className="">
                <select
                  value={orderType}
                  onChange={handleSelect}
                  className="form-select laundry-form form-select-lg  shadow-none select-order"
                  aria-label=".form-select-lg example"
                >
                  <option value="tailoring"> Tailoring History</option>
                  <option value="laundry"> Laundry History</option>
                </select>
              </span>
            </span>
            {/* <span>History</span> */}
          </span>
          {profilePic == null ? (
            <div>
              <div className="nullContainer">
                <div>
                  <p>It feels empty here.</p>
                  <p>You are yet to make any order</p>

                  <div>
                    <ButtonContainer>Make an order now</ButtonContainer>
                  </div>
                </div>
              </div>
              <MeasurementProfile />
            </div>
          ) : (
            <div>
              <div className="pagedetails">
                <div className="col-12 historydetails">
                  <div className="col-xsm-4">
                    <div>
                      <p>ID-12332</p>
                      <p>
                        <span>12:34 | </span>
                        <span> 3rd May, 2022</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xsm-6">
                    <div>
                      <p>Wet Wash and Dry Clean</p>
                      <p>3 items </p>
                      <p>
                        <span>Pickup: Onsite</span>
                        <span>Delivery: Home Delivery</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xsprice ">
                    <p>₦675.00</p>
                  </div>
                  <div className="col-xsm-12">
                    <span>
                      <img src={PickUp} />
                      <span className="hr-sepe"></span>
                    </span>

                    {/* <span className="hr-seperator"></span> */}
                    <span>
                      <img src={Washing} />
                      <span className="hr-sepe"></span>
                    </span>
                    <span>
                      <img src={Delivery} />
                    </span>
                  </div>
                </div>
                <div className="col-12 historydetails">
                  <div className="col-xsm-4">
                    <div>
                      <p>ID-12332</p>
                      <p>
                        <span>12:34 | </span>
                        <span> 3rd May, 2022</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xsm-6">
                    <div>
                      <p>Wet Wash and Dry Clean</p>
                      <p>3 items </p>
                      <p>
                        <span>Pickup: Onsite</span>
                        <span>Delivery: Home Delivery</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xsprice ">
                    <p>₦675.00</p>
                  </div>
                  <div className="col-xsm-12">
                    <span>
                      <img src={PickUp} />
                      <span className="hr-sepe"></span>
                    </span>

                    {/* <span className="hr-seperator"></span> */}
                    <span>
                      <img src={Washing} />
                      <span className="hr-sepe"></span>
                    </span>
                    <span>
                      <img src={Delivery} />
                    </span>
                  </div>
                </div>
              </div>
              <MeasurementProfile />
            </div>
          )}
        </div>
      </div>
      <EditProfile {...{ editProfile, setEditProfile, setProfilePic }} />
    </>
  );
};

export default TailoringHistory;
