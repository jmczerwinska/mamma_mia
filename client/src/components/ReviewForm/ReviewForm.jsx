import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StarRating from "../StarRating/StarRating";

import "./ReviewForm.scss";

function ReviewForm() {
  const { register, watch, handleSubmit } = useForm();
  const watchRating = watch("rating", null);
  const [hover, setHover] = useState(null);

  const sendReview = async (data) => {
    try {
      const response = await fetch("/api/v1/reviews/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      const parseResponse = await response.json();

      if (!parseResponse.success) {
        throw new Error(`${response.status} - ${parseResponse.message}`);
      }
      console.log(parseResponse);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="review-form"
      onSubmit={handleSubmit((data) => sendReview(data))}
    >
      <fieldset className="review-form__group review-form__group--rating">
        <legend className="review-form__legend">Ocena:</legend>
        {[...Array(5)].map((el, i) => {
          const ratingValue = i + 1;
          return (
            <StarRating
              key={i}
              register={register}
              ratingValue={ratingValue}
              watchRating={watchRating}
              setHover={setHover}
              hover={hover}
            />
          );
        })}
      </fieldset>
      <fieldset className=" review-form__group review-form__group--name">
        <label htmlFor="title" className="review-form__label">
          Tytuł
        </label>
        <input
          title="tytuł"
          placeholder="Tytuł"
          className="review-form__input"
          {...register("title", { required: true })}
        />
      </fieldset>

      <fieldset className="review-form__group">
        <label htmlFor="text" className="review-form__label">
          Twoja opinia
        </label>
        <textarea
          className="review-form__input review-form__input--text"
          rows="5"
          placeholder="Miejsce na Twoją opinię..."
          {...register("text", { required: true })}
        />
      </fieldset>

      <input className="button" type="submit" value="Zapisz" />
    </form>
  );
}

export default ReviewForm;
