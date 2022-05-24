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
    fetch(" https://mighty-inlet-62276.herokuapp.com/user", {
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
      <h2 className="text-2xl">All Users: {users.length}</h2>
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
