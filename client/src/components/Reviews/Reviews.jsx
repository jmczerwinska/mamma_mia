import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import ReviewFormBtn from "../ReviewFormBtn/ReviewFormBtn";
import SingleReview from "../SingleReview/SingleReview";

function Reviews() {
  const [reviews, setReviews] = useState([]);  
  const { user } = useContext(UserContext);

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
      {user && <ReviewFormBtn />}
    
      {reviews.map((el, i) => (
        <SingleReview key={i} review={el} />
      ))}
    </div>
  );
}

export default Reviews;
