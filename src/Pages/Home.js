import React, { useState } from "react"
import Banner from "../Components/Home/Banner";
import GridDisplay from "../Components/Home/GridDisplay";
import Hero from "../Components/Home/Hero";
import TrendingStyles from "../Components/Shared/TrendingStyles";
import Gender from "./Gender";


const Home = () => {
  const [genderModal, setGenderModal] = useState(false);
  return (
    <div>
      <Hero {...{setGenderModal}} />
      <GridDisplay />
      <TrendingStyles />
      <Banner />
      <Gender {...{ genderModal, setGenderModal }} />

      {/*  */}
    </div>
  );
};

export default Home;
