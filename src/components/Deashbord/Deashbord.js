import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin ";

const Deashbord = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="text-center  drawer-content">
        <h2 className="text-2xl font-bold text-purple-600">
          Wwalcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashbord-sidebar" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/deashbord/myprofile">My Profile</Link>
          </li>
          <li>
            {!admin && (
              <>
                <Link to="/deashbord/myreview">Add A Review </Link>
                <Link to="/deashbord/mybooking">My Orders</Link>
              </>
            )}
            {admin && (
              <>
                <Link to="/deashbord/user">Make Admin</Link>
                <Link to="/deashbord/manageorder">Manage All Orders</Link>
                <Link to="/deashbord/addservice"> Add Electric parts </Link>
                <Link to="/deashbord/manage"> Manage parts </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Deashbord;
