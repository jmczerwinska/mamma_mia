import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './StarRating.scss';

function StarRating({ register, ratingValue, watchRating, setHover, hover }) {

    return (
        < label>
            <input
                type="radio"
                name="rating"
                className="rating__radio"
                value={ratingValue}
                register />
            <FontAwesomeIcon
                className="rating__star"
                icon={faStar}
                color={ratingValue <= (hover || watchRating) ? '#ffc400' : 'lightGrey'}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
            />
        </label >
    )

}

export default StarRating;