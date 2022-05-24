import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ManageAdmin = ({ users }) => {
  const [myBooking, setMyBooking] = useState([]);
  const [user] = useAuthState(auth);
  const { email, role } = users;

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
            Navigate("/");
          }
          return res.json();
        })
        .then((data) => setMyBooking(data));
    }
  }, [user]);
  return (
    <div className="mt-4 text-center">
      <h1 className="text-2xl font-bold "> {users.email}</h1>
      <div className="mt-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
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
                <td>{book.qun}</td>
                <td>{book.parts}</td>
                <td>
                  {book.price && book.paid && (
                    <div className="">
                      <p>
                        <span className=" text-success">Pending</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAdmin;
