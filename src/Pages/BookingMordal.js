import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";
const BookingMordal = ({ booking, setBooking }) => {
  const { _id, name, price, quantity } = booking;
  const [user] = useAuthState(auth);
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const hendelBooking = (event) => {
    event.preventDefault();

    const booking = {
      partsId: _id,
      parts: name,
      price,
      qun: event.target.quantity.value,
      userEmail: user.email,
      userName: user.displayName,
      phone: event.target.phone.value,
    };
    const qun = event.target.quantity.value;

    if (qun < 50) {
      setError("quantity  minimam  50 ");
      return;
    }

    // if (qun < quantity) {
    // console.log(quantity);
    // setError1("quantity");
    // return;
    // }

    fetch("https://mighty-inlet-62276.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(" Booking  successfull Added", data);
        setBooking(null);
      });
  };
  return (
    <div className="">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Booking for : {name}</h3>

          <form
            onSubmit={hendelBooking}
            className="grid grid-cols-1 gap-3 mt-5 justify-items-center"
          >
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="number"
              name="quantity"
              placeholder=" Your quantity"
              className="w-full max-w-xs input input-bordered"
            />
            <p className="text-red-600">{error}</p>
            <p className="text-red-600">{error1}</p>

            <input
              type="number"
              name="phone"
              placeholder=" Your Phone Number"
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="submit"
              value=" submit "
              className="w-full max-w-xs input input-bordered btn btn-secondary"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookingMordal;
