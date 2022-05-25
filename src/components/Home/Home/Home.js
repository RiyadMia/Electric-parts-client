import React from "react";
import Banner from "./Banner";
import Footer from "../../../Shear/Footer";
import Services from "./Services";
import UserReview from "../../../Pages/UserReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <UserReview></UserReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
