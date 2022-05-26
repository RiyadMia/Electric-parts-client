import React from "react";
import {
  ThumbUpIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  FlagIcon,
} from "@heroicons/react/solid";
const Bussince = () => {
  return (
    <div className="mx-20 mb-10 text-center mb-36 ">
      <h1 className="mb-5 text-4xl font-bold text-secondary">
        MILLIONS BUSINESS TRUST US
      </h1>
      <p>TRY TO UNDERSTAND USERS EXPECTATION</p>

      <div className="flex items-center justify-center mt-12 ">
        <div className="stats shadow   gap-10">
          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">
              <ThumbUpIcon></ThumbUpIcon>
            </div>
            <div className="stat-value text-secondary">532 K +</div>
            <div className="stat-desc">Feedback</div>
          </div>

          <div className="stat">
            <div className="stat-title">
              <ViewGridAddIcon></ViewGridAddIcon>
            </div>
            <div className="stat-value text-secondary">600 K +</div>
            <div className="stat-desc">Complact project</div>
          </div>
          <div className="stat">
            <div className="stat-title">
              <UserGroupIcon></UserGroupIcon>
            </div>
            <div className="stat-value text-secondary">500 K +</div>
            <div className="stat-desc">Happy Client </div>
          </div>

          <div className="stat">
            <div className="stat-title">
              <FlagIcon style={{ hight: "150px", width: "150px" }}></FlagIcon>
            </div>
            <div className="stat-value text-secondary">80</div>
            <div className="stat-desc">Countris </div>
          </div>
        </div>
      </div>

      <div className="hero   bg-base-200   ">
        <div className="hero-content flex-col lg:flex-row  ">
          <h1 className="text-xl font-bold text-secondary">
            Have any question about us or get a products request ?
          </h1>
          <p>Don't hesitate to contact us .</p>
          <div className="gap-5 ">
            <button className="btn btn-success">Request For Quote</button>
            <button className="text-secondary"></button>

            <button className="btn btn-primary ml-5">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bussince;
