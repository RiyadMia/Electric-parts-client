import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Hooks from "../../Hooks/Hooks";

const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);
  const [services, setServices] = Hooks([]);
  const location = useLocation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://mighty-inlet-62276.herokuapp.com/booking?userEmail=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Beare ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setMyBooking(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://mighty-inlet-62276.herokuapp.com/booking/${id}
   `;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = myBooking.filter((book) => book._id !== id);
          setMyBooking(remaining);
        });
    }
  };
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Quantity</th>
            <th>Parts</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {myBooking.map((book, index) => (
            <tr key={book._id}>
              <th>{index + 1}</th>
              <td>{book.userName}</td>
              <td>{book.userEmail}</td>
              <td>{book.qun}</td>
              <td>{book.parts}</td>
              <td>
                {book.price && !book.paid && (
                  <Link to={`/deashbord/payment/${book._id}`}>
                    <button className=" btn btn-xs btn-success">Pay</button>
                  </Link>
                )}

                {book.price && !book.paid && (
                  <button
                    onClick={() => handleDelete(book._id)}
                    class="btn btn-ghost text-red-600"
                  >
                    Cancel
                  </button>
                )}
                {book.price && book.paid && (
                  <div className="">
                    <p>
                      <span className=" text-success">Paid</span>
                    </p>
                    <p>
                      Transaction id :
                      <span className=" text-success">
                        {book.transactionId}
                      </span>
                    </p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooking;
