import React from "react";
import Banner from "./Banner";

import Footer from "../../../Shear/Footer";
import Service from "./Service";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      {/* <Service></Service> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
