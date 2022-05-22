import React, { useEffect, useState } from "react";
import Hooks from "../../../Hooks/Hooks";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = Hooks([]);
  // const [services, setService] = useState([]);
  // useEffect(() => {
  // fetch("service.json")
  // .then((res) => res.json())
  // .then((data) => setService(data));
  // }, []);

  // const sliceRsult = services.slice(0, 6);
  // let navegat = useNavigate();
  return (
    <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-16">
      {services.map((service) => (
        <>
          <div
            class="card card-compact w-96 bg-base-100 shadow-xl"
            key={service._id}
          >
            <figure>
              <img
                style={{ width: "200px", height: "200px" }}
                src={service.img}
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title font-bold text-2xl">{service.name} </h2>
              <h2 className="text-xl font-bold">price: ${service.price} </h2>
              <h2 className="text-xl font-bold">
                quantity :{service.quantity}{" "}
              </h2>
              <p className="text-center font-bold">Description</p>
              <p> {service.description}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Services;
