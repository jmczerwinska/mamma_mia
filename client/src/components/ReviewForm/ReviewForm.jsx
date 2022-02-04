import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import StarRating from "../StarRating/StarRating";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

import "./ReviewForm.scss";

function ReviewForm({ closeModal }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [hover, setHover] = useState(null);
  const watchRating = watch("rating", null);

  const sendReview = async (data) => {
    try {
      const response = await fetch("/api/v1/reviews/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const parseResponse = await response.json();

      if (!parseResponse.success) {
        throw new Error(`${response.status} - ${parseResponse.message}`);
      }

      toast.success("Dodano komentarz!");
      console.log(parseResponse);
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  };

  return (
    <div className="box"  onClick={(e) => e.stopPropagation()}>
      <button className="exit-btn" onClick={closeModal}>
        <FontAwesomeIcon icon={faTimes} className="exit-btn__icon" />
      </button>
      <form
        className="review-form"
        onSubmit={handleSubmit((data) => sendReview(data))}
      >
        {Object.entries(errors).some((err) => err[1].type === "required") && (
          <ValidationMessage message={"Uzupełnij brakujące pola"} />
        )}
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
    </div>
  );
}

export default ReviewForm;
