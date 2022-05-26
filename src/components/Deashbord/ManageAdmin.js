import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Hooks from "../../Hooks/Hooks";

const ManageAdmin = ({ users }) => {
  const [myBooking, setMyBooking] = useState([]);
  const { email, role } = users;
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

  return (
    <div className="mt-6 overflow-x-auto">
      <h1 className="mt-4 mb-6 text-2xl font-bold text-center ">
        {users.email}
      </h1>
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
                {book.price && book.paid && (
                  <div className="">
                    <p>
                      <button className=" text-success">Panding</button>
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

export default ManageAdmin;
