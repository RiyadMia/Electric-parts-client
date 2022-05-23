import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/deashbord/addservice";
  const onSubmit = (data) => {
    const url = `http://localhost:5000/service`;
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
      <div class=" shadow-xl card w-96 bg-base-100">
        <div class="card-body">
          <h2 class=" text-center text-3xl font-bold mb-3 ">Add Youe Items </h2>
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
