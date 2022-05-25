import React from "react";

import people1 from "../images/pg.png";
import people3 from "../images/biplob.PNG";
import people2 from "../images/yousuf.PNG";

const UserReview = () => {
  const reviews = [
    {
      _id: 1,
      name: "Md Riyad Mia",
      review:
        "Affordable Freelancer Web Development Services. Hire a freelance web development expert services and get your project done remotely online within 24hr.",
      location: "Dhaka",
      img: people1,
    },
    {
      _id: 2,
      name: "   Yousuf Ahamed",
      review:
        "The Web Developer career guide can help you take the first steps toward a lucrative career in web development. Find out how to become a Web Developer.",
      location: "Mymenshing",
      img: people2,
    },
    {
      _id: 3,
      name: "Biplob Sorkar",
      review:
        "Web Developer Web Design JobsWeb Development Jobs WordPress. See More. React Redux Consultant to help with SaaS Dashboard",
      location: "Netrakona",
      img: people3,
    },
  ];
  return (
    <section className="mx-16 my-28">
      <div className="flex justify-between">
        <div className="">
          <h4 className="text-xl font-bold text-primary">
            Electrical Engineer
          </h4>
          <h2 className="mt-4 font-mono text-3xl font-bold ">
            Electrical Engineering Top in Bangladesh{" "}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div className="shadow-xl card lg:max-w-lg bg-base-100">
            <div className="card-body">
              <p>{review.review}</p>

              <div className="flex items-center ">
                <div className="avatar">
                  <div className="w-16 mt-5 mr-5 rounded-full ring ring-primary ring-offset-base-100">
                    <img src={review.img} />
                  </div>
                </div>
                <div className="text-xl ">
                  <h4 className="font-bold ">{review.name}</h4>
                  <p>{review.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserReview;
