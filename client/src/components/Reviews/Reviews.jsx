import React, { useState, useEffect } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import StarRating from '../StarRating/StarRating';

function Reviews() {
    const [reviews, setReviews] = useState([])

    const fetchreviews = async () => {
        try {
            const data = await fetch('http://localhost:5000/api/v1/reviews', {
                method: 'GET',
            });

            const parseData = await data.json();

            setReviews(parseData.data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchreviews();
    }, [])

    return (
        <div className="container container--reviews">
            <StarRating />
            {reviews.map((el, i) => <SingleReview key={i} review={el} />)}
        </div>

    )
}

export default Reviews;