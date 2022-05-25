import React from "react";
import { useQuery } from "react-query";
import Lodeing from "../../Shear/Lodeing";
import ManageAdmin from "./ManageAdmin";

const ManageOrders = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
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
      <div className="overflow-x-auto">
        {users.map((users) => (
          <ManageAdmin
            key={users._id}
            users={users}
            refetch={refetch}
          ></ManageAdmin>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
