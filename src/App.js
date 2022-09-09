import React, { useState, createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Shared/Footer";
import SignInModal from "./Pages/SignInModal";
import SignUpModal from "./Pages/SignUpModal";
import FemaleStyles from "./Pages/FemaleStyles";
import Product from "./Pages/Product";
import MaleStyles from "./Pages/MaleStyles";
import CustomizeForm from "./Pages/CustomizeForm";
import OrderStyle from "./Components/Styles/OrderStyle";
import OrderDetails from "./Pages/OrderDetails";
import CartItem from "./Components/Add To Cart/CartItem";
import ForgetPassword from "./Pages/ForgetPassword";
import Laundry from "./Pages/Laundry";
import OtpInput from "./Components/Password/OtpInput";
import ResetPassword from "./Components/Password/ResetPassword";
import PasswordSuccessful from "./Components/Password/PasswordSuccessful";
import LaundryHistory from "./Pages/LaundryHistory";
import TailoringHistory from "./Pages/TailoringHistory";
import FirstStyle from "../src/Assets/Images/malepic1.png";
import SecondStyle from "../src/Assets/Images/malepic2.png";
import ThirdStyle from "../src/Assets/Images/malepic3.png";
import FourthStyle from "../src/Assets/Images/malepic4.png";
import FifthStyle from "../src/Assets/Images/malepic5.png";
import SixthStyle from "../src/Assets/Images/malepic6.png";
import FemaleStyle1 from "../src/Assets/Images/Product1.png";
import FemaleStyle2 from "../src/Assets/Images/Product2.png";
import FemaleStyle3 from "../src/Assets/Images/Product3.png";

export const CartContext = createContext();
export const ProductsContext = createContext();

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);
  const [otpInput, setOtpInput] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [passwordSuccessful, setPasswordSuccessful] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [subTotalValue, setSubTotalValue] = useState();
  const [totalValue, setTotalValue] = useState();
  const [laundryDetails, setLaundryDetails] = useState(false);
  const [laundrySummary, setLaundrySummary] = useState(false);
  const [laundryUpload, setLaundryUpload] = useState(false);
  const [laundryPayment, setLaundryPayment] = useState(false);
  const [laundryCartItems, setLaundryCartItems] = useState([]);
  const [editProfile, setEditProfile] = useState(false);
  const [products, setProducts] = useState([
    {
      stylename: "Plain Kaftan",
      price: "166076.00",
      img: FirstStyle,
      category: "Men",
    },
    {
      stylename: "African Print Shirt",
      price: "166076.00",
      img: SecondStyle,
      category: "Men",
    },
    {
      stylename: "Cashmere Jacket",
      price: "166076.00",
      img: ThirdStyle,
      category: "Men",
    },
    {
      stylename: "One Piece Senator",
      price: "166076.00",
      img: FourthStyle,
      category: "Men",
    },
    {
      stylename: "One Piece Senator",
      price: "166076.00",
      img: FifthStyle,
      category: "Men",
    },
    {
      stylename: "One Piece Senator",
      price: "166076.00",
      img: SixthStyle,
      category: "Men",
    },
    {
      stylename: "Ankara Gown",
      price: "166076.00",
      img: FemaleStyle1,
      category: "Women",
    },
    {
      stylename: "Ankara Gown",
      price: "166076.00",
      img: FemaleStyle2,
      category: "Women",
    },
    {
      stylename: "Ankara Gown",
      price: "166076.00",
      img: FemaleStyle3,
      category: "Women",
    },
  ]);

  // console.log(modalShow);

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          setCartItems,
          subTotalValue,
          setSubTotalValue,
          laundryDetails,
          setLaundryDetails,
          laundrySummary,
          setLaundrySummary,
          laundryUpload,
          setLaundryUpload,
          laundryPayment,
          setLaundryPayment,
          laundryCartItems,
          setLaundryCartItems,
          totalValue,
          setTotalValue,
        }}
      >
        <ProductsContext.Provider value={{
          products, setProducts
        }}>
          <Navbar {...{ setModalShow, setGenderModal }} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home {...{ genderModal, setGenderModal }} />}
            />
            <Route
              path="/tailoring"
              element={<Home {...{ genderModal, setGenderModal }} />}
            />
            <Route path="/tailoring/femalestyle" element={<FemaleStyles />} />
            <Route path="/tailoring/malestyle" element={<MaleStyles />} />
            <Route path="/tailoring/product" element={<Product />} />
            <Route
              path="/tailoring/customizeform"
              element={<CustomizeForm />}
            />
            <Route path="/tailoring/orderstyle" element={<OrderStyle />} />
            <Route path="/tailoring/orderdetails" element={<OrderDetails />} />
            <Route path="/cartitem" element={<CartItem />} />
            <Route path="laundry" element={<Laundry />} />
            <Route
              path="/laundry/laundryhistory"
              element={<LaundryHistory {...{ editProfile, setEditProfile }} />}
            />
            <Route
              path="/tailoring/tailoringhistory"
              element={
                <TailoringHistory {...{ editProfile, setEditProfile }} />
              }
            />
          </Routes>
          <Footer />

          <SignInModal
            {...{
              modalShow,
              setModalShow,
              setModalShow2,
              setForgetPasswordModal,
            }}
          />

          <SignUpModal {...{ modalShow2, setModalShow, setModalShow2 }} />

          <ForgetPassword
            {...{ forgetPasswordModal, setForgetPasswordModal, setOtpInput }}
          />

          <OtpInput {...{ otpInput, setOtpInput, setResetPassword }} />

          <ResetPassword
            {...{ resetPassword, setResetPassword, setPasswordSuccessful }}
          />

          <PasswordSuccessful
            {...{ passwordSuccessful, setPasswordSuccessful }}
          />
        </ProductsContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
