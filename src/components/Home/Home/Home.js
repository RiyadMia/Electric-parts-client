import React from "react";
import Banner from "./Banner";
import Footer from "../../../Shear/Footer";
import Services from "./Services";
import UserReview from "../../../Pages/UserReview";
import Contact from "../../../Pages/Contact";
import Slider from "../../../Pages/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Banner></Banner>
      <Services></Services>
      <UserReview></UserReview>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
