import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hooks from "../../Hooks/Hooks";

const ManageItems = () => {
  const [services, setServices] = Hooks([]);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/deashbord/manage";

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div className="overflow-x-auto mt-5">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Photo</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr>
              <th>1</th>
              <td>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={service.img}
                  alt=""
                />
              </td>
              <td> {service.name}</td>
              <td> {service.price}</td>
              <td>{service.quantity} </td>
              <td>
                <button
                  className="btn btn-outline btn-error"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
