import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Shared/Footer";
import Example from "./Pages/SignInModal";
import SignInModal from "./Pages/SignInModal";
import SignUpModal from "./Pages/SignUpModal";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  console.log(modalShow);

  return (
    <React.Fragment>
      <Navbar {...{ setModalShow, setModalShow2 }} />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Example />

      <SignInModal {...{ modalShow, setModalShow, setModalShow2 }} />

      <SignUpModal {...{ modalShow2, setModalShow, setModalShow2 }} />
    </React.Fragment>
  );
}

export default App;
