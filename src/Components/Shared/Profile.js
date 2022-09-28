import React from "react";
import Logo from "../../Assets/Images/navprofile.png";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  return (
    <span className="profile_div">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          <span className="title-span">
            <img alt="img" src={Logo} />
            <span>Joan</span>
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => navigate("/laundry/laundryhistory")}
            href=""
          >
            View Profile
          </Dropdown.Item>
          <Dropdown.Item href="/tailoring">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </span>
  );
};

export default Profile;
