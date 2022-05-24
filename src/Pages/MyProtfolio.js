import React from "react";
import img from "../images/pg.png";

const MyProtfolio = () => {
  return (
    <div class="hero min-h-screen bg-base-200 gap-7      ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold"> Md Riyad Mia</h1>
          <h1 className="mt-4 text-xl font-bold">
            Email : md. reayad11@gmail.com
          </h1>
          <h1 className="mt-4 text-xl font-bold">
            Education : Mymenshing Noter Dame collage
          </h1>
          <h1 className="mt-4 text-sm font-bold">
            Adress : purbadhala, Netrakona
          </h1>
          <h1 className="mt-4 text-sm font-bold">
            Mobile : 01902438895, 01321094603
          </h1>
          <p class="py-6">
            A website is a collection of web pages and related content that is
            identified by a common domain name and published on at least one web
            server.
          </p>
          <h1 className="mt-4 mb-5 text-xl font-bold">My Wibeside Link </h1>
          <div className="gap-5">
            <button class="btn btn-primary">
              <a href="https://acinment-1afa0.web.app">Wibeside-1</a>
            </button>
            <button class="btn btn-primary ml-4">
              <a href=" https://cars-shoping-acinment-9.netlify.app">
                Wibeside-2
              </a>
            </button>
            <button class="btn btn-primary ml-4">
              <a href="https://acinment-11.web.app">Wibeside-3</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProtfolio;
