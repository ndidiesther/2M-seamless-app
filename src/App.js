import React from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home"
import Footer from "./Components/Shared/Footer";
import Example from "./Pages/SignInModal"


function App() {
  return <React.Fragment>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    <Footer />
    <Example />
  </React.Fragment>;
}

export default App;
