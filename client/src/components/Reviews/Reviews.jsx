import React, { useState, useEffect } from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import SingleReview from "../SingleReview/SingleReview";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/reviews/", {
        method: "GET",
      });

      const parseResponse = await response.json();

      if (!parseResponse.success) {
        throw new Error(`${response.status} - ${parseResponse.message}`);
      }

      setReviews(parseResponse.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="container container--reviews">
      <button className="button" onClick={()=> setShowForm(prevState => !prevState)}>
        {showForm ? "Ukryj formularz" : "Dodaj opinie"}
      </button>
      {showForm ? <ReviewForm /> : null}
      {reviews.map((el, i) => (
        <SingleReview key={i} review={el} />
      ))}
    </div>
  );
}

export default Reviews;
