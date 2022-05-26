import React from "react";
import Banner from "./Banner";
import Footer from "../../../Shear/Footer";
import Services from "./Services";
import UserReview from "../../../Pages/UserReview";
import Contact from "../../../Pages/Contact";
import Slider from "../../../Pages/Slider";
import HellowClint from "./HellowClint";
import NewComeItems from "./NewComeItems";
import Bussince from "./Bussince";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <NewComeItems></NewComeItems>
      <Banner></Banner>
      <Services></Services>
      <HellowClint></HellowClint>
      <UserReview></UserReview>
      <Bussince></Bussince>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
