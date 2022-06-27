import React, { useState } from "react";
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
import OrderStyle from "./Components/Styles/OrderStyle"
import OrderDetails from "./Pages/OrderDetails";
import CartItem from "./Components/Add To Cart/CartItem";
import ForgetPassword from "./Pages/ForgetPassword"


function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);


  // console.log(modalShow);

  return (
    <React.Fragment>
      <Navbar {...{ setModalShow, setGenderModal }} />
      <Routes>
        <Route exact path="/" element={<Home {...{genderModal, setGenderModal}} />} />
        <Route path="femalestyle" element= {<FemaleStyles  />} />
        <Route path="malestyle" element={<MaleStyles />} />
        <Route path="product" element={<Product />} />
        <Route path="customizeform" element={<CustomizeForm />} />
        <Route path="orderstyle" element={<OrderStyle />} />
        <Route path="orderdetails" element={<OrderDetails />}/>
        <Route path="cartitem" element={<CartItem />}/>
      </Routes>
      <Footer />
 

      <SignInModal {...{ modalShow, setModalShow, setModalShow2, setForgetPasswordModal }} />

      <SignUpModal {...{ modalShow2, setModalShow, setModalShow2 }} />

      <ForgetPassword {...{forgetPasswordModal, setForgetPasswordModal}} />

    

  
    </React.Fragment>
  );
}

export default App;
