import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Profile = (id) => {
  const imageStorageKey = "dc7c980d43b37d837ac9e55bed5ddca1";
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.success) {
          const img = result.data.url;
          const profile = {
            distric: data.distric,
            phone: data.number,
            img: img,
            address: data.address,
          };
          const url = `https://mighty-inlet-62276.herokuapp.com/profile`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(profile),
          })
            .then((res) => res.json())
            .then((result) => {
              toast("Profile Update seccessful ", result);
            });
        }
      });
  };
  return (
    <div className="flex items-center justify-center h-screen mt-8 ">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="mb-3 text-3xl font-bold text-center ">
            Update Your Profile
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs gap-3 form-control">
              <input
                placeholder="Distric"
                className="w-full max-w-xs input input-bordered"
                {...register("distric")}
              />
              <input
                placeholder="Phone"
                type="number"
                className="w-full max-w-xs input input-bordered"
                {...register("number")}
              />
              <input
                type="text"
                placeholder=" Address Type here"
                className="w-full max-w-xs input input-bordered input-lg"
                {...register("address")}
              />

              <input
                type="file"
                placeholder="Photo"
                className="w-full max-w-xs input input-bordered input-lg"
                {...register("image")}
              />
              <input
                className="w-full max-w-xs text-white btn"
                type="submit"
                value=" Update Profile"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
