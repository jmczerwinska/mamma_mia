import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StarRating from "../StarRating/StarRating";

import "./ReviewForm.scss";

function ReviewForm() {
  const { register, watch, handleSubmit } = useForm();
  const watchRating = watch("rating", null);
  const [hover, setHover] = useState(null);

  return (
    <form
      className="review-form"
      onSubmit={handleSubmit((data) => console.log(data))}
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
        <label htmlFor="name" className="review-form__label">
          Imię
        </label>
        <input
          name="name"
          placeholder="Imię i Nazwisko*"
          className="review-form__input"
          {...register("name", { required: true })}
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
