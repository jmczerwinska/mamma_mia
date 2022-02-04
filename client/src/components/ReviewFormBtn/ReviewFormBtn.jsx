import React, { useState, useContext } from "react";
import Modal from "../Modal/Modal";
import ReviewForm from "../ReviewForm/ReviewForm";

function ReviewFormBtn() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {
        <button
          className="button button--review-form"
          onClick={() => setShowForm(true)}
        >
          Dodaj opinie
        </button>
      }

      {showForm && (
        <Modal closeModal={() => setShowForm(false)}>
          <ReviewForm closeModal={() => setShowForm(false)} />
        </Modal>
      )}
    </>
  );
}
export default ReviewFormBtn;
