import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Lodeing from "../../Shear/Lodeing";
import CheckoutForm from "./CheckoutForm ";
const stripePromise = loadStripe(
  "pk_test_51L1BneDxVxOlsrqosrgDzVGOOT4Ryed6ML5w26fljr5suZodnYo5lJrrrmF2UdfV8Rj1UmNxvUb2veceuPnCJiYy00PRcg5osF"
);
const Payment = () => {
  const { id } = useParams();

  const url = ` https://mighty-inlet-62276.herokuapp.com/booking/${id}`;
  const { data: booking, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Lodeing></Lodeing>;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="font-bold text-success">Hello, {booking.userName}</p>
          <h2 className="card-title">Please Pay for {booking.parts}</h2>
          <p>Your Quantity: {booking.qun}</p>
          <p>Please pay: ${booking.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
