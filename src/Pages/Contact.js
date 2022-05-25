import React from "react";
import bgimg from "../images/ima.png";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${bgimg})`,
      }}
      className="w-full px-10 bg-primary py-14 "
    >
      <div className="text-center text-white pb-14">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary">
          Contact Us
        </p>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 justify-items-center">
        <input
          type="text"
          placeholder="Email Address"
          className="w-full max-w-md input"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full max-w-md input"
        />
        <textarea
          className="w-full max-w-md textarea"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <button className="btn btn-accent">Button</button>
      </div>
    </div>
  );
};

export default Contact;
