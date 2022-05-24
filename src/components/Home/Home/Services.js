import React from "react";
import { Link } from "react-router-dom";
import Hooks from "../../../Hooks/Hooks";
const Services = () => {
  const [services, setServices] = Hooks([]);
  return (
    <>
      <h1 className="mt-10 text-5xl font-bold text-center text-amber-500">
        Electric parts
      </h1>
      <div className="grid gap-12 mx-16 my-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <>
            <div
              className="shadow-xl card card-compact w-96 bg-base-100"
              key={service._id}
            >
              <figure>
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={service.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl font-bold card-title">
                  {service.name}{" "}
                </h2>
                <h2 className="text-xl font-bold">price: ${service.price} </h2>
                <h2 className="text-xl font-bold">
                  quantity :{service.quantity}
                </h2>
                <p className="font-bold text-center">Description</p>
                <p> {service.description}</p>
                <div className="justify-end card-actions">
                  <button className="mt-5 btn btn-primary">
                    <Link to="/parchoice">Parchoice</Link>
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Services;
