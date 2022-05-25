import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://mighty-inlet-62276.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="grid gap-12 mx-16 my-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {review.map((r) => (
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title"> {r.name}</h2>
            <p>{r.rating} star</p>
            <p>{r.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
