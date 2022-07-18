import React from "react";
import ProfileImg from "../Assets/Images/profileimg.png";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import PickUp from "../Assets/Images/pickup.png";
import Washing from "../Assets/Images/washing.png";
import Delivery from "../Assets/Images/delivery.png";
import EditProfile from "../Components/Laundry/EditProfile";

const LaundryHistory = ({editProfile, setEditProfile }) => {
  return (
    <>
      <div className="col-12 laundryhistory">
        <div>
          <p>Profile</p>
          <img src={ProfileImg} />
          <div className="profilename">
            <p>Joan Karasha</p>
            <p>Joankarasha@gmail.com</p>
            <ButtonContainer onClick={()=> setEditProfile(true)} >Edit Profile</ButtonContainer>
          </div>
        </div>
        <div>
          <span>
            <span>Orders</span>
            <span>History</span>
          </span>
          <div className="historydetails">
            <div>
              <p>ID-12332</p>
              <p>
                <span>12:34 | </span>
                <span> 3rd May, 2022</span>
              </p>
            </div>
            <div>
              <p>3 items </p>
              <p>
                <span>Pickup: Onsite</span>
                <span>Delivery: Home Delivery</span>
              </p>
            </div>
            <div>
              <p>₦675.00</p>
            </div>
            <div>
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
          <div className="historydetails">
            <div>
              <p>ID-12332</p>
              <p>
                <span>12:34 | </span>
                <span> 3rd May, 2022</span>
              </p>
            </div>
            <div>
              <p>3 items </p>
              <p>
                <span>Pickup: Onsite</span>
                <span>Delivery: Home Delivery</span>
              </p>
            </div>
            <div>
              <p>₦675.00</p>
            </div>
            <div>
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
      <EditProfile {...{editProfile, setEditProfile}} />
    </>
  );
};

export default LaundryHistory;
