import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import StarRating from '../StarRating/StarRating';

import './ReviewForm.scss';


function ReviewForm() {
    const { register, watch, handleSubmit } = useForm();
    const watchRating = watch('rating', null);
    const [hover, setHover] = useState(null);

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <div className="wrapper">
                <fieldset className="contact-form__group">
                    <label htmlFor="name" className={`contact-form__label`}>Imię i Nazwisko</label>
                    <input
                        name="name"
                        placeholder="Imię i Nazwisko*"
                        className="contact-form__input"
                        {...register("name", { required: true })} />
                </fieldset>

                <fieldset className="contact-form__group">
                    <legend>Ocena</legend>
                    {[...Array(5)].map((el, i) => {
                        const ratingValue = i + 1;
                        return (
                            <StarRating
                                key={i}
                                register={{ ...register("rating") }}
                                ratingValue={ratingValue}
                                watchRating={watchRating}
                                setHover={setHover}
                                hover={hover} />
                        )
                    })}
                </fieldset>

            </div>

            <fieldset className="contact-form__group">
                <label htmlFor="text" className={`contact-form__label`}>Wiadomość</label>
                <textarea
                    className="contact-form__input contact-form__input--text"
                    rows="5"
                    placeholder="Miejsce na Twoją wiadomość..."
                    {...register("text", { required: true })} />
            </fieldset>
            < input type="submit" value="Zapisz" />
        </form>
    )
}

export default ReviewForm;