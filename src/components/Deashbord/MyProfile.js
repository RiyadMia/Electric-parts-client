import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Lodeing from "../../Shear/Lodeing";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [profile, setprofile] = useState([]);
  const { id, email } = useParams();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/user/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Beare ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            Navigate("/");
          }
          return res.json();
        })
        .then((data) => setprofile(data));
    }
  }, [user]);
  if (loading) {
    return <Lodeing></Lodeing>;
  }

  // useEffect(() => {
  // // fetch(`http://localhost:5000/profile?userEmail=${user.email}`)
  // .then((res) => res.json())
  // .then((data) => setprofile(data));
  // }, []);
  return (
    <div className="flex items-center justify-center mt-4 shadow-xl card w-96 bg-base-100">
      <h1> {user.displayName}</h1>
      <img src={user.img} alt="" />
      <h1> {user.email}</h1>
      <h1> {user.phone}</h1>
      <div className="items-center text-center card-body">
        <button className="btn btn-xs w-26">
          <Link to="/profile">Edit</Link>
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
