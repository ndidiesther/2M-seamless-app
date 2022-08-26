import React from "react";
import Logo from "../../Assets/Images/navprofile.png";
import Dropdown from "react-bootstrap/Dropdown";


const Profile = () => {
  return (
    <span className="profile_div">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          <span className="title-span">
            <img src={Logo} />
            <span>Joan</span>
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/laundryhistory">View Profile</Dropdown.Item>
          <Dropdown.Item href="/" >Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </span>
  );
};

export default Profile;
