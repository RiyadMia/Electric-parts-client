import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/deashbord/addservice";
  const onSubmit = (data) => {
    const url = ` https://mighty-inlet-62276.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Add items seccessful ", result);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="mb-3 text-3xl font-bold text-center ">
            Add Youe Items
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs gap-3 form-control">
              <input
                placeholder="Name"
                className="w-full max-w-xs input input-bordered"
                {...register("name")}
              />
              <input
                placeholder="description"
                className="w-full max-w-xs input input-bordered"
                {...register("description")}
              />
              <input
                placeholder="price"
                type="number"
                className="w-full max-w-xs input input-bordered"
                {...register("price")}
              />
              <input
                placeholder="quantity"
                type="number"
                className="w-full max-w-xs input input-bordered"
                {...register("quantity")}
              />
              <input
                placeholder="Photo URL "
                type="text"
                className="w-full max-w-xs input input-bordered"
                {...register("img")}
              />
              <input
                className="w-full max-w-xs text-white btn"
                type="submit"
                value=" Add Items"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
