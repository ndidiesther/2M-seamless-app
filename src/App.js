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
import FemaleForm from "./Pages/FemaleForm";
import MaleForm from "./Pages/MaleForm";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  console.log(modalShow);

  return (
    <React.Fragment>
      <Navbar {...{ setModalShow, setModalShow2 }} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="femalestyle" element= {<FemaleStyles />} />
        <Route path="malestyle" element={<MaleStyles />} />
        <Route path="product" element={<Product />} />
        <Route path="femaleform" element={<FemaleForm />} />
        <Route path="maleform" element={<MaleForm />} />
      </Routes>
      <Footer />
 

      <SignInModal {...{ modalShow, setModalShow, setModalShow2 }} />

      <SignUpModal {...{ modalShow2, setModalShow, setModalShow2 }} />

  
    </React.Fragment>
  );
}

export default App;
