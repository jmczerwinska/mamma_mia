import React from 'react';
import { useForm } from 'react-hook-form';

import './ContactForm.scss';

function ContactForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <fieldset className="contact-form__group">
                <label htmlFor="name" className={`contact-form__label`}>Imię i Nazwisko</label>
                <input
                    name="name"
                    placeholder="Imię i Nazwisko*"
                    className="contact-form__input"
                    {...register("name", { required: true })} />
            </fieldset>

            <fieldset className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">E-mail</label>
                <input
                    name="email"
                    placeholder="E-mail*"
                    className="contact-form__input"
                    {...register("email", {
                        required: true,
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })} />
            </fieldset>

            <fieldset className="contact-form__group">
                <label htmlFor="title" className={`contact-form__label`}>Tytuł</label>
                <input
                    name="title"
                    placeholder="Tytuł*"
                    className="contact-form__input"
                    {...register("title", { required: true })} />
            </fieldset>

            <fieldset className="contact-form__group">
                <label htmlFor="message" className={`contact-form__label`}>Wiadomość</label>
                <textarea
                    className="contact-form__input contact-form__input--text"
                    rows="5"
                    placeholder="Miejsce na Twoją wiadomość..."
                    {...register("message", { required: true })} />
            </fieldset>
            
            <input type="submit" value="Wyślij" className="button button--send" />

        </form>
    )
}

export default ContactForm;
