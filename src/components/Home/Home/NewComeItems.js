import React from "react";
import img1 from "../../../images/macanical/img.png";
import img2 from "../../../images/macanical/img1.png";
import img3 from "../../../images/macanical/imf2.png";

const NewComeItems = () => {
  return (
    <>
      <h1 className="m-6 text-3xl font-bold text-center uppercase text-secondary ">
        New Items Comeing soon
      </h1>
      <div className="grid gap-12 mx-16 my-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">
              Kits Spare <div className="badge badge-secondary">NEW</div>
            </h2>

            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Comeing soon</button>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">
              Electric parts<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Comeing soon</button>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">
              Electric New Model
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Comeing soon</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewComeItems;
