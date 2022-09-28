import React, { useEffect, useRef, useState } from "react";
import EmptyImg from "../Assets/Images/avatar.png";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import EditProfile from "../Components/Laundry/EditProfile";
import { useNavigate } from "react-router-dom";
import TailoringOrders from "../Components/Laundry/TailoringOrders";

const TailoringHistory = ({ editProfile, setEditProfile }) => {
  const [orderType, setOrderType] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [tailoringOrders, setTailoringOrders] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

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
      status: "Delivery in 5 days",
      initialStatus: "In Progress",
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
      status: "Delivery in 10 days",
      initialStatus: "In Progress",
    },
  ]);

  const ImageRef = useRef();

  useEffect(() => {
    if (profilePic == null) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      ImageRef.current.src = e.target.result;
    });
    reader.readAsDataURL(profilePic);
  }, [profilePic]);

  let navigate = useNavigate();

  const handleSelect = (e) => {
    // console.log("Hello");
    setOrderType(e.target.value);
    if (e.target.value === "laundry") {
      navigate("/laundry/laundryhistory");
    } else if (e.target.value === "tailoring") {
      navigate("/tailoring/tailoringhistory");
    }
  };

  return (
    <>
      <div className="col-12 laundryhistory">
        {profilePic == null ? (
          <div>
            <p className="profiles">Profile</p>
            <div className="profile_img">
              <img alt="" src={EmptyImg} />
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
              <img alt="" className="select_img" ref={ImageRef} src={EmptyImg} />
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
            </div>
          ) : (
            <div className="historyDiv">
              {orderArr.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setTailoringOrders(true);
                    setSelectedOrder(item);
                  }}
                  className="col-12 historydetails td"
                >
                  <div className="col-xm-4">
                    <div>
                      <p>{item.orderId}</p>
                      <p>
                        <span>{item.time} | </span>
                        <span> {item.date}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xm-6 tailoring_history">
                    <div>
                      <p>
                        Ankara Bohemian Gown | <span>Custom Order</span>
                      </p>

                      <p>
                        <span>Fabric Pickup: {item.pickUp}</span>
                        <span>Outfit-Delivery: {item.delivery}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xprice ">
                    <p>{item.amount}</p>
                  </div>
                  <div className="col-xm-12 history_progress">
                    <span>{item.initialStatus}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <EditProfile {...{ editProfile, setEditProfile, setProfilePic }} />
      <TailoringOrders
        {...{
          tailoringOrders,
          setTailoringOrders,
          orderArr,
          setOrderArr,
          selectedOrder,
        }}
      />
    </>
  );
};

export default TailoringHistory;
