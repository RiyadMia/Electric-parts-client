import React, { useState } from "react";
import Hooks from "../Hooks/Hooks";
import BookingMordal from "./BookingMordal";

const ParChoice = () => {
  const [services, setServices] = Hooks([]);
  const [booking, setBooking] = useState(null);
  return (
    <div className="grid gap-12 mx-16 my-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <>
          <div className="shadow-xl card w-96 bg-base-100">
            <figure>
              <img
                style={{ width: "200px", height: "200px" }}
                src={service.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold card-title">
                {service.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <h2 className="text-xl font-bold">price: ${service.price} </h2>
              <h2 className="text-xl font-bold">
                quantity :{service.quantity}
              </h2>
              <p className="font-bold text-center">Description</p>
              <p> {service.description}</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div>
                  <label
                    onClick={() => setBooking(service)}
                    for="my-modal-6"
                    className="btn modal-button"
                  >
                    Booking
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}

      {booking && (
        <BookingMordal
          booking={booking}
          setBooking={setBooking}
        ></BookingMordal>
      )}
    </div>
  );
};

export default ParChoice;
