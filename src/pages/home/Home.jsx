import React from "react";
import Hero from "../home/Hero.jsx";
// import TrendingNow from "../home/TrendingNow.jsx";
// import FeaturedCarousel from "../home/EditorsPicks.jsx";
import Beauty from "../home/BeautyFeature.jsx";
import  Fashion  from "../home/FashionFeature.jsx";
import   InOut from "../home/InOutFeature.jsx";
import Reviews from "../home/ReaderNote.jsx";
import Food from "../home/FoodFeature.jsx";
import Lifestyle from "../home/CultureFeature.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Beauty />
      <Fashion />
      <Food />
      <Lifestyle />
      < InOut />
      <Reviews />




    </>
  );
};

export default Home;
