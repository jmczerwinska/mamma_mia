import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./SingleReview.scss";

function SingleReview({ review }) {
  const { title, rating, text } = review;

  return (
    <div className="review">
      <h3 className="review__title">{title}</h3>
      <h4 className="review__rating">
        {rating}/5
        <span className="review__stars">
          {[...Array(5)].map((el, i) => {
            const ratingValue = i + 1;
            return (
              <FontAwesomeIcon
                key={ratingValue}
                className="rating__star"
                icon={faStar}
                color={ratingValue <= rating ? "#ffc400" : "lightGrey"}
              />
            );
          })}
        </span>
      </h4>

      <p className="review__text">{text}</p>
    </div>
  );
}

export default SingleReview;
