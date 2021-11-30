import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <fieldset className="delivery-form__group">
                <label htmlFor="name" className={`delivery-form__label`}>Imię i Nazwisko</label>
                <input
                    name="name"
                    placeholder="Imię i Nazwisko*"
                    className="delivery-form__input"
                    {...register("name", { required: true })} />
            </fieldset>

            <fieldset className="delivery-form__group">
                <label htmlFor="email" className="delivery-form__label">E-mail</label>
                <input
                    name="email"
                    placeholder="E-mail*"
                    className="delivery-form__input"
                    {...register("email", {
                        required: true,
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })} />
            </fieldset>

            <fieldset className="delivery-form__group">
                <label htmlFor="title" className={`delivery-form__label`}>Tytuł</label>
                <input
                    name="title"
                    placeholder="Tytuł*"
                    className="delivery-form__input"
                    {...register("title", { required: true })} />
            </fieldset>

            <fieldset className="delivery-form__group">
                <label htmlFor="message" className={`delivery-form__label`}>Wiadomość</label>
                <textarea
                    className="delivery-form__input delivery-form__input--text"
                    rows="5"
                    placeholder="Miejsce na Twoją wiadomość..."
                    {...register("message", { required: true })} />
            </fieldset>
            <input type="submit" value="Wyślij" className="button button--next" />

        </form>
    )
}

export default ContactForm;
