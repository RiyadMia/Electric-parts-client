import React from "react";
import banner from "../../../images/baner/babber1.png";

const Banner = () => {
  return (
    <div className="mt-5 shadow-xl card lg:card-side bg-base-100">
      <figure className="p-8 ">
        <img
          style={{ width: "700px", height: "400px" }}
          src={banner}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-5xl font-bold card-title">Old Electric parts</h2>
        <p>
          Click the button to listen on Spotiwhy Having several years of
          experience, Pars Pipe Electric Company has been having the most
          equipped laboratory equipments including mechanical, chemical, ...
          electric pars from electric-pars.com
        </p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
