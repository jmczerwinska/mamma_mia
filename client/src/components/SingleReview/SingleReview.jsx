import React from 'react';

function SingleReview({ review }) {
    const { title, rating, text } = review;

    return (
        <div>
            <h1>{title}</h1>
            <h2>Ocena: {raiting}/5</h2>
            <p>{text}</p>
        </div>
    )
}

export default SingleReview;