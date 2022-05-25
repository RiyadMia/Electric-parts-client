import React from "react";
import img1 from "../../../images/macanical/img.png";
import img2 from "../../../images/macanical/img1.png";
import img3 from "../../../images/macanical/imf2.png";

const NewComeItems = () => {
  return (
    <>
      <h1 className="m-6 text-3xl font-bold text-center text-secondary ">
        New Items Comeing soon
      </h1>
      <div className="grid gap-12 mx-16 my-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              Kits Spare <div class="badge badge-secondary">NEW</div>
            </h2>

            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Comeing soon</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              Electric parts<div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Comeing soon</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              Electric New Model
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Comeing soon</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewComeItems;
