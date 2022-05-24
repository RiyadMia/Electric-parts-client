import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="grid gap-12 my-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {review.map((r) => (
        <div class="card w-96 bg-base-100 shadow-xl ">
          <div class="card-body">
            <h2 class="card-title"> {r.name}</h2>
            <p>{r.rating} star</p>
            <p>{r.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
