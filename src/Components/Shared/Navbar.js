import { useState, React } from "react";
import "../../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/seamless_logo.png";
import Stroke from "../../Assets/Images/Stroke.png";
import Search from "../../Assets/Images/Search.png";
import Bag from "../../Assets/Images/Bag.png";
import { NavLink } from "react-router-dom";

export default function Navbar({ setModalShow, setGenderModal }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <div className="col-12 navbar">
        <div className="top-nav col-12">
          <span className="nav-icons">
            <span>
              <Link to="">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </span>
            <span>
              <Link to="">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </span>
            <span>
              <Link to="">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </span>
            <span>About Us</span>
            <span>Contact </span>
          </span>
          <span className="nav-mini">
            {" "}
            {/* <Login /> */}
            <button
              className="gf_btn"
              onClick={() => {
                setModalShow(true);
                setGenderModal(false);
              }}
            >
              Login
            </button>
          </span>
        </div>
        <div className="main-nav col-12">
          <div className="nav-list col-lg-5 col-sm-6 col-xs-6">
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
                    to="/"
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
          <div className="nav-logo col-lg-2 col-sm-6 col-xs-6">
            <div>
              <Link to="/">
                <img src={Logo} />
                <p className="site_name">2M Seamless</p>
              </Link>
            </div>
          </div>
          <div className=" nav-sublist col-lg-5">
            <span>
              <ul>
                <li>
                  {" "}
                  {/* <Login /> */}
                  <button className="gf_btn" onClick={() => setModalShow(true)}>
                    Login
                  </button>
                </li>
                <li>
                  <img src={Search} />
                </li>
                <li>
                  <img src={Stroke} />
                </li>
                <li>
                  <img src={Bag} />
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>

      <nav className="navigation">
        <div>
          <Link to="">
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
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-activ" : "lin"
                  }
                  to=""
                >
                  Home - Classic
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menulink-active" : "menulink"
                  }
                  to="/"
                >
                  Tailoring
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menulink-active" : "menulink"
                  }
                  to="/laundry"
                >
                  Laundry
                </NavLink>
              </li>
              <li>
                <Link to="">Search</Link>
              </li>
              <li>
                <Link to="">Favourites</Link>
              </li>
              <li>
                <Link to="">Cart</Link>
              </li>
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
              <li className="social_list">
                <Link to="">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link to="">
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
