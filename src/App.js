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
import Test from "./Pages/Test"

export const CartContext = createContext();

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
  const [laundryDetails, setLaundryDetails] = useState(false);
  const [laundrySummary, setLaundrySummary] = useState(false);
  const [laundryUpload, setLaundryUpload] = useState(false);
  const [laundryPayment, setLaundryPayment] = useState(false);
  const [laundryCartItems, setLaundryCartItems] = useState([]);
  const [editProfile, setEditProfile] = useState(false);

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
        }}
      >
        <Navbar {...{ setModalShow, setGenderModal }} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home {...{ genderModal, setGenderModal }} />}
          />
          <Route path="femalestyle" element={<FemaleStyles />} />
          <Route path="malestyle" element={<MaleStyles />} />
          <Route path="product" element={<Product />} />
          <Route path="customizeform" element={<CustomizeForm />} />
          <Route path="orderstyle" element={<OrderStyle />} />
          <Route path="orderdetails" element={<OrderDetails />} />
          <Route path="cartitem" element={<CartItem />} />
          <Route path="laundry" element={<Laundry />} />
          <Route path="laundryhistory" element={<LaundryHistory {...{editProfile, setEditProfile}} />} />
          <Route path="/test"  element={<Test /> }/>
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
      </CartContext.Provider>
    </>
  );
}

export default App;
