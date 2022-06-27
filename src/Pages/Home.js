import React, { useState } from "react";
import Banner from "../Components/Home/Banner";
import GridDisplay from "../Components/Home/GridDisplay";
import Hero from "../Components/Home/Hero";
import TrendingStyles from "../Components/Shared/TrendingStyles";
import Gender from "./Gender";

const Home = ({genderModal, setGenderModal}) => {

  return (
    <div>
      <Hero {...{ setGenderModal }} />
      <GridDisplay />
      <TrendingStyles paragraph= "Trending Styles for You" />
      <Banner {...{ setGenderModal }} />
      <Gender {...{ genderModal, setGenderModal }} />

      {/*  */}
    </div>
  );
};

export default Home;
