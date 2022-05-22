import React from "react";
import Hooks from "../Hooks/Hooks";

const Review = () => {
  const [services, setServices] = Hooks([]);
  return (
    <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-16">
      {services.map((service) => (
        <>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                style={{ width: "200px", height: "200px" }}
                src={service.img}
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title font-bold text-2xl">
                {service.name}
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <h2 className="text-xl font-bold">price: ${service.price} </h2>
              <h2 className="text-xl font-bold">
                quantity :{service.quantity}
              </h2>
              <p className="text-center font-bold">Description</p>
              <p> {service.description}</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">
                  <button> Products</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Review;
