import React, { useState } from "react";
import Banner from "../Components/Home/Banner";
import GridDisplay from "../Components/Home/GridDisplay";
import Hero from "../Components/Home/Hero";
import TrendingStyles from "../Components/Shared/TrendingStyles";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const Home = () => {
  return (
    <div>
      <Hero />
      <GridDisplay />
      <TrendingStyles />
      <Banner />

      {/*  */}
    </div>
  );
};

export default Home;
