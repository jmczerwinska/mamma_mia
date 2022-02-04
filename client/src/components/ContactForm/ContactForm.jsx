import React from "react";
import { useForm } from "react-hook-form";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

import "./ContactForm.scss";

function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form form--contact">
      {Object.entries(errors).some((err) => err[1].type === "required") && (
        <ValidationMessage message={"Uzupełnij puste pola"} />
      )}
      {/* <fieldset className="contact-form__group">
        <label htmlFor="name" className="contact-form__label">
          Imię i Nazwisko
        </label>
        <input
          name="name"
          placeholder="Imię i Nazwisko*"
          className="contact-form__input"
          {...register("name", { required: true })}
        />
      </fieldset> */}

      {errors.email && errors.email?.type !== 'required' && <ValidationMessage message={errors.email.message} />}
      <fieldset className="contact-form__group">
        <label htmlFor="email" className="contact-form__label">
          E-mail
        </label>
        <input
          name="email"
          placeholder="E-mail*"
          className="contact-form__input"
          {...register("email", {
            required: true,
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Podany adres e-mail jest nieprawidłowy",
            },
          })}
        />
      </fieldset>

      {errors.title && errors.title?.type !== 'required' && <ValidationMessage message={errors.title.message} />}
      <fieldset className="contact-form__group">
        <label htmlFor="title" className="contact-form__label">
          Tytuł
        </label>
        <input
          name="title"
          placeholder="Tytuł*"
          className="contact-form__input"
          {...register("title", {
            required: true,
            maxLength: {
              value: 50,
              message: "Tytuł nie może przekroczyć 50 znaków",
            },
          })}
        />
      </fieldset>

      <fieldset className="contact-form__group">
        <label htmlFor="message" className="contact-form__label">
          Wiadomość
        </label>
        <textarea
          className="contact-form__input contact-form__input--text"
          rows="5"
          placeholder="Miejsce na Twoją wiadomość..."
          {...register("message", { required: true })}
        />
      </fieldset>

      <input type="submit" value="Wyślij" className="button button--send" />
    </form>
  );
}

export default ContactForm;
