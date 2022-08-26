import React, { useState } from "react";
import ProfileImg from "../Assets/Images/profileimg.png";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import PickUp from "../Assets/Images/pickup.png";
import Washing from "../Assets/Images/washing.png";
import Delivery from "../Assets/Images/delivery.png";
import EditProfile from "../Components/Laundry/EditProfile";
import { useNavigate } from "react-router-dom";

const LaundryHistory = ({ editProfile, setEditProfile }) => {
  const [orderType, setOrderType] = useState("");
  let navigate = useNavigate();

  const handleSelect = (e) => {
    console.log("Hello");
    setOrderType(e.target.value);
    if (e.target.value === "laundry") {
      navigate("/laundryhistory");
      // console.log(e.target.value)
    } else if (e.target.value === "tailoring") {
      navigate("/tailoringhistory");
      // console.log(e.target.value)
    }
  };
  return (
    <>
      <div className="col-12 laundryhistory">
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
        <div>
          <span>
            <span>
              <span className="">
                <select
                  value={orderType}
                  onChange={handleSelect}
                  className="form-select laundry-form form-select-lg shadow-none select-order"
                  aria-label=".form-select-lg example"
                >
                  <option value="laundry"> Laundry History</option>
                  <option value="tailoring"> Tailoring History</option>
                </select>
              </span>
            </span>
            {/* <span>History</span> */}
          </span>
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
                <p>Wet Wash and dry clean</p>
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
                <p>Wet Wash and dry clean</p>
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
      </div>
      <EditProfile {...{ editProfile, setEditProfile }} />
    </>
  );
};

export default LaundryHistory;
