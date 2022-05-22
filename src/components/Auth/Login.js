import React, { useEffect } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import Lodeing from "../../Shear/Lodeing";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import google from "../../images/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [signInWithGoogle, guser, gloading, gError] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let siginErroe;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || guser) {
      navigate(from, { replace: true });
    }
  }, [user, guser, from, navigate]);

  if (loading || gloading) {
    return <Lodeing></Lodeing>;
  }

  if (error || gError) {
    siginErroe = (
      <p className="text-red-600">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div class=" shadow-xl card w-96 bg-base-100">
        <div class="card-body">
          <h2 class=" text-center text-3xl font-bold ">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full max-w-xs input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full max-w-xs input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {siginErroe}
            <input
              className="w-full max-w-xs text-white btn"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to Electric parts
              <Link className="text-primary ml-4" to="/signup">
                Create New Account
              </Link>
            </small>
          </p>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline gap-4"
          >
            <img className="google" src={google} alt="" />
            <span> Continue With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
