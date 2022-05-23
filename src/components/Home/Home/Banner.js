import React from "react";
import banner from "../../../images/baner/download.png";

const Banner = () => {
  return (
    <div className=" mt-5 card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          style={{ width: "700px", height: "400px" }}
          src={banner}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl font-bold">New Electric pars</h2>
        <p>
          Click the button to listen on Spotiwhy Having several years of
          experience, Pars Pipe Electric Company has been having the most
          equipped laboratory equipments including mechanical, chemical, ...
          electric pars from electric-pars.com
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
