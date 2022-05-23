import React, { useEffect, useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import Lodeing from "../../Shear/Lodeing";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import google from "../../images/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { async } from "@firebase/util";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const emailRef = useRef("");
  const PasswordRef = useRef("");
  const [email, setEmail] = useState("");
  const [signInWithGoogle, guser, gloading, gError] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  /*Reset Password  */
  const [sendPasswordResetEmail, sending, perror] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(user || guser);
  console.log(token);
  let siginErroe;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      console.log(user);
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gloading || sending) {
    return <Lodeing></Lodeing>;
  }

  if (error || gError || perror) {
    siginErroe = (
      <p className="text-red-600">
        {error?.message || gError?.message || perror?.message}
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  // resetPassword

  if (email) {
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;

    // if (email) {
    //   console.log(email);
    //   await sendPasswordResetEmail(email);
    //   toast("Sent email");
    // } else {
    //   toast("please enter your email address");
    // }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className=" text-center text-3xl font-bold ">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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

          <p>
            Forget your Password?
            <button
              className=" btn btn-link text-primary pe-autotext-decoration-none"
              onClick={async () => {
                await sendPasswordResetEmail(email);
                toast("Sent email");
              }}
            >
              Reset Password
            </button>
          </p>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline gap-4"
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
