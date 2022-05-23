import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";
const BookingMordal = ({ booking, setBooking }) => {
  const { _id, name, price, quantity } = booking;
  const [user, loading, error] = useAuthState(auth);

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
    // if (10 === quantity) {
    //   const qun = event.target.quantity.value;
    //   console.log(qun);
    //   return qun;
    // } else {
    //   toast("minimam 50");
    // }

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(" Booking  successfull Added", data);

        // if (data.success) {
        //   console.log(data);
        //   toast(" Booking  successful set");
        // } else {
        //   toast.error("  Already have and Appoinment ");
        // }
        setBooking(null);
      });
  };
  return (
    <div className="">
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">Booking for : {name}</h3>

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
              value={quantity}
              placeholder=" Your quantity"
              className="w-full max-w-xs input input-bordered"
            />
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
