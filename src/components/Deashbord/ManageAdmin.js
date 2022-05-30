import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const ManageAdmin = ({ user }) => {
  const [myBooking, setMyBooking] = useState([]);
  console.log(user);
  const { email, role } = user;

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
        .then((res) => res.json())
        .then((data) => setMyBooking(data));
    }
  }, [user]);

  return (
    <div className="mt-6 overflow-x-auto">
      {user.email}
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

                {book.price && !book.paid && <button>Cancel</button>}
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

export default ManageAdmin;
