import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './DeliveryForm.scss';

function DeliveryForm({ history }) {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        //TODO skasować koszyk

        history.push("/mamma_mia/order/summary");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <fieldset className="delivery-form__group">
                <legend className="delivery-form__title">Dane do dostawy</legend>

                <label htmlFor="name" className="delivery-form__label">Imię i Nazwisko</label>
                <input
                    name="name"
                    placeholder="Imię i Nazwisko*"
                    className="delivery-form__input"
                    {...register("name")} />

                <div className="wrapper">
                    <fieldset className="delivery-form__group  delivery-form__group--single">
                        <label htmlFor="email" className="delivery-form__label">E-mail</label>
                        <input
                            name="email"
                            placeholder="E-mail*"
                            className="delivery-form__input"
                            {...register("email")} />
                    </fieldset>

                    <fieldset className="delivery-form__group  delivery-form__group--single">
                        <label htmlFor="phone" className="delivery-form__label">Telefon</label>
                        <input
                            name="phone"
                            placeholder="Telefon*"
                            className="delivery-form__input"
                            {...register("phoneNumber")} />
                    </fieldset>
                </div>

            </fieldset>

            <fieldset className="delivery-form__group">
                <label htmlFor="city" className="delivery-form__label">Miasto</label>
                <input 
                    name="city"
                    placeholder="Miasto*"
                    className="delivery-form__input"
                    {...register("city")} />
            </fieldset>

            <div className="wrapper">
                <fieldset className="delivery-form__group delivery-form__group--single">
                    <label htmlFor="street" className="delivery-form__label">Ulica</label>
                    <input 
                        name="street"
                        placeholder="Ulica*"
                        className="delivery-form__input"
                        {...register("street")} />
                </fieldset>

                <div className="wrapper wrapper--numbers">
                    <fieldset className="delivery-form__group delivery-form__group--number">
                        <label htmlFor="buildingNumber" className="delivery-form__label">Numer domu</label>
                        <input
                            name="buildingNumber"
                            placeholder="Numer domu"
                            className="delivery-form__input"
                            {...register("buildingNumber")} />
                    </fieldset>
                    <fieldset className="delivery-form__group delivery-form__group--number">
                        <label htmlFor="localNumber" className="delivery-form__label">Numer lokalu</label>
                        <input 
                            name="localNumber"
                            placeholder="Numer lokalu" 
                            className="delivery-form__input"
                            {...register("localNumber")} />
                    </fieldset>
                </div>
                
            </div>

            <fieldset className="delivery-form__group">
                <legend className="delivery-form__title">Komentarz do zamówienia</legend>
                <textarea
                    className="delivery-form__input delivery-form__input--text"
                    rows="5"
                    placeholder="Uwagi dotyczące zamówienia..."
                    {...register("comment")} />
            </fieldset>

            <div className="button-group">
                <button
                    type="button"
                    className="button button--back"
                    onClick={() => history.push('/mamma_mia/order/basket')}>
                    Wstecz
                </button>
                <input type="submit" value="Zamów" className="button button--next" />
            </div>
            
        </form >
    )
}

export default withRouter(DeliveryForm);