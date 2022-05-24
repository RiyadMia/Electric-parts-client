import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = (id) => {
  const [user, loading, error] = useAuthState(auth);
  const [profile, setprofile] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/profile`)
      .then((res) => res.json())
      .then((data) => setprofile(data));
  }, []);
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <h2 class="card-title">{user.displayName} </h2>
      <p>Email : {user.email}</p>
      <figure class="px-10 pt-10">
        {profile.map((p) => (
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src={p.img} />
              <p>{p.phone}</p>
              <p>{p.distric}</p>
            </div>
          </div>
        ))}
      </figure>
      <div class="card-body items-center text-center">
        <button class="btn btn-xs w-26">
          <Link to="/profile">Edit</Link>
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
