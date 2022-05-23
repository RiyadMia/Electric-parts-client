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

  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
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
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="font-bold text-success">
            Hello, {appointment.userName}
          </p>
          <h2 class="card-title">Please Pay for {appointment.parts}</h2>
          <p>Your Quantity: {appointment.qun}</p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
