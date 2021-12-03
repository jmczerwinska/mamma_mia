import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './StarRating.scss';

function StarRating() {
    const { register, watch, handleSubmit } = useForm();
    const watchRating = watch('rating', null);
    const [hover, setHover] = useState(null);

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            {[...Array(5)].map((el, i) => {
                const ratingValue = i + 1;
                return (
                    < label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            className="rating__radio"
                            value={ratingValue}
                            {...register("rating")} />
                        <FontAwesomeIcon
                            className="rating__star"
                            icon={faStar}
                            color={ratingValue <= (hover || watchRating) ? '#ffc400' : 'lightGrey'}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                             />
                    </label >
                )
            })}
            < input type="submit" value="Zapisz" />
        </form>
    )
}

export default StarRating;