import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Add review seccessful ", result);
      });
  };
  return (
    <div className="h-screen mt-8 ">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="mb-3 text-3xl font-bold text-center ">
            Add Youe Review
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs gap-3 form-control">
              <input
                placeholder="Name"
                className="w-full max-w-xs input input-bordered"
                {...register("name")}
              />
              <input
                placeholder="Rating"
                type="number"
                className="w-full max-w-xs input input-bordered"
                {...register("rating")}
              />
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-lg w-full max-w-xs"
                {...register("review")}
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

export default MyReview;
