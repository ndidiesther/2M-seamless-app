import { useState, React } from "react";
import "../../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/seamless_logo.png";
import Search from "../../Assets/Images/Search.png";
import Bag from "../../Assets/Images/Bag.png";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import SearchIcon from "./SearchIcon";

export default function Navbar({ setModalShow, setGenderModal }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Desktop view of Navbar */}
      <div className="col-12 navbar">
        {/* Top Nav containing social media links */}
        <div className="top-nav col-12">
          <span className="nav-icons">
            <span>
              <Link to="#">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </span>
            <span>
              <Link to="#">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </span>
            <span>
              <Link to="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </span>
            <span>About Us</span>
            <span>Contact </span>
          </span>
        </div>
        {/* Main Nav for desktop view */}
        <div className="main-nav col-12">
          <div className="nav-list col-lg-5 col-sm-5 col-xs-6">
            <ul>
              <li>
                <i className="fa-solid fa-bars"></i>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-activ" : "lin"
                  }
                  to="#"
                >
                  Home - Classic
                </NavLink>
              </li>
              <li>
                <span>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/tailoring"
                  >
                    Tailoring
                  </NavLink>
                </span>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                  to="/laundry"
                >
                  Laundry
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-logo col-lg-2 col-sm-2 col-xs-6">
            <div>
              <Link to="#">
                <img src={Logo} />
                <p className="site_name">2M Seamless</p>
              </Link>
            </div>
          </div>
          <div className=" nav-sublist col-lg-5 col-sm-5">
            <span>
              <ul>
                {/* <li>
                  {" "}
                 
                  <button className="gf_btn" onClick={() => setModalShow(true)}>
                    Login
                  </button>
                </li> */}
                <li onClick={() => setShowSearch(true)}>
                  <img src={Search} />
                </li>

                <Link to="/cartitem">
                  <li>
                    <img src={Bag} />
                  </li>
                </Link>

                <li>
                  <Profile />
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      {showSearch && <SearchIcon {...{ showSearch, setShowSearch }} />}

      <nav className="navigation">
        <div>
          <Link to="#">
            <img src={Logo} />
          </Link>

          <p className="site_name">2M Seamless</p>
        </div>

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            setModalShow(false);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="menu">
            <ul>
              <li onClick={() => setIsNavExpanded(false)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-activ" : "lin"
                  }
                  to="#"
                >
                  Home - Classic
                </NavLink>
              </li>
              <li onClick={() => setIsNavExpanded(false)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menulink-active" : "menulink"
                  }
                  to="/tailoring"
                >
                  Tailoring
                </NavLink>
              </li>
              <li onClick={() => setIsNavExpanded(false)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menulink-active" : "menulink"
                  }
                  to="/laundry"
                >
                  Laundry
                </NavLink>
              </li>
              <li onClick={() => setIsNavExpanded(false)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-activ" : "lin"
                  }
                  to="#"
                >
                  Search
                </NavLink>
              </li>
              <li onClick={() => setIsNavExpanded(false)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menulink-active" : "menulink"
                  }
                  to="/tailoring/tailoringhistory"
                >
                  Profile
                </NavLink>
              </li>
              <li onClick={() => setIsNavExpanded(false)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menulink-active" : "menulink"
                  }
                  to="/cartitem"
                >
                  Cart
                </NavLink>
              </li>
              {/* <li>
                <Link to="/laundryhistory">View Profile</Link>
              </li> */}
              <hr className="hr_mb" />
              <li className="log_li">
                {/* <Link to="">
                    <span>Login</span>
                  </Link> */}
                <button
                  className="gf_btn"
                  onClick={() => {
                    if (true) {
                      setModalShow(true);
                      // console.log("true");
                      setIsNavExpanded(false);
                      setGenderModal(false);
                    }
                  }}
                >
                  Login
                </button>
              </li>
              {/* <li className="log_li">
                <button
                  className="gf_btn"
                  onClick={() => {
                    if (true) {
                      // console.log("true");
                      setIsNavExpanded(false);
                      setGenderModal(false);
                    }
                  }}
                >
                  Log Out
                </button>
              </li> */}
              {/* <li>
                <Link to="#">Logout</Link>
              </li> */}
              <li className="social_list">
                <Link to="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
