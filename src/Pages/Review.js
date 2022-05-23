import React, { useState } from "react";
import Hooks from "../Hooks/Hooks";
import BookingMordal from "./BookingMordal";

const Review = () => {
  const [services, setServices] = Hooks([]);
  const [booking, setBooking] = useState(null);
  return (
    <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-16">
      {services.map((service) => (
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                style={{ width: "200px", height: "200px" }}
                src={service.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">
                {service.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <h2 className="text-xl font-bold">price: ${service.price} </h2>
              <h2 className="text-xl font-bold">
                quantity :{service.quantity}
              </h2>
              <p className="text-center font-bold">Description</p>
              <p> {service.description}</p>
              <div className="card-actions justify-end">
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

export default Review;
