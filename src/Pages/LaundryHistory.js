import React, { useEffect, useRef, useState } from "react";
import ProfileImg from "../Assets/Images/profileimg.png";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import PickUp from "../Assets/Images/pickup.png";
import Washing from "../Assets/Images/washing.png";
import Delivery from "../Assets/Images/delivery.png";
import EditProfile from "../Components/Laundry/EditProfile";
import { useNavigate } from "react-router-dom";
import LaundryOrders from "../Components/Laundry/LaundryOrders";
import EmptyImg from "../Assets/Images/avatar.png";
import LaundryOrderSuccess from "../Components/History/LaundryOrderSuccess";

const LaundryHistory = ({ editProfile, setEditProfile }) => {
  const [orderType, setOrderType] = useState("");
  const [laundryOrders, setLaundryOrders] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState({});
  // const [laundryOrderSuccess, setLaundryOrderSuccess] = useState(false);

  const [orderArr, setOrderArr] = useState([
    {
      orderId: "ID-12332",
      time: "12:34 ",
      date: "3rd May, 2022",
      service: "Wet Wash and dry clean",
      itemCount: "3",
      pickUp: "Onsite",
      delivery: "Home delivery",
      amount: "#625.00",
      status: "Washing",
    },
    {
      orderId: "ID-12360",
      time: "12:34 ",
      date: "3rd May, 2022",
      service: "Wet Wash",
      itemCount: "3",
      pickUp: "Onsite",
      delivery: "Home delivery",
      amount: "#625.00",
      status: "Washing",
    },
  ]);

  let navigate = useNavigate();
  const ImageRef = useRef();

  useEffect(() => {
    if (profilePic == null) {
      return;
    }
    // console.log(profilePic);
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      ImageRef.current.src = e.target.result;
    });
    reader.readAsDataURL(profilePic);
  }, [profilePic]);

  const handleSelect = (e) => {
    // console.log("Hello");
    setOrderType(e.target.value);
    if (e.target.value === "laundry") {
      navigate("/laundry/laundryhistory");
      // console.log(e.target.value)
    } else if (e.target.value === "tailoring") {
      navigate("/tailoring/tailoringhistory");
      // console.log(e.target.value)
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
              <img className="select_img" ref={ImageRef} src={EmptyImg} />
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
            </div>
          ) : (
            <div className="historyDiv">
              {orderArr.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setLaundryOrders(true);
                    setSelectedOrder(item);
                  }}
                  className="col-12 historydetails hd"
                >
                  <div className="col-xsm-4">
                    <div>
                      <p>{item.orderId}</p>
                      <p>
                        <span>{item.time}| </span>
                        <span> {item.date}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xsm-6">
                    <div>
                      <p>{item.service}</p>
                      <p>{item.itemCount} items </p>
                      <p>
                        <span>Pickup: {item.pickUp}</span>
                        <span>Delivery: {item.delivery}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xsprice ">
                    <p>{item.amount}</p>
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
              ))}
            </div>
          )}
        </div>
      </div>
      <EditProfile {...{ editProfile, setEditProfile, setProfilePic }} />
      <LaundryOrders
        {...{
          laundryOrders,
          setLaundryOrders,
          orderArr,
          setOrderArr,
          selectedOrder,
        }}
      />
    </>
  );
};

export default LaundryHistory;
