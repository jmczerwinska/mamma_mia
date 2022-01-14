import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BasketContext } from '../../context/BasketContext';

import './DeliveryForm.scss';

function DeliveryForm({ history }) {
    const { resetBasket, basket } = useContext(BasketContext);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const sendOrder = async (order) => {
        try {
            await fetch('http://localhost:5000/api/v1/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            });

        } catch (err) {
            console.log();
        }
    }

    const onSubmit = async (data) => {
        const newOrder = {
            list: basket,
            client: data.name,
            email: data.email,
            phone: data.phone,
            deliveryAdress: {
                street: data.street,
                buildingNumber: data.buildingNumber,
                localNumber: data.localNumber,
                city: data.city
            },
            comment: data.comment
        }

        sendOrder(newOrder);

        resetBasket();
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
                    {...register("name", { required: true })} />

                <div className="wrapper">
                    <fieldset className="delivery-form__group  delivery-form__group--single">
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

                    <fieldset className="delivery-form__group  delivery-form__group--single">
                        <label htmlFor="phone" className="delivery-form__label">Telefon</label>
                        <input
                            name="phone"
                            placeholder="Telefon*"
                            className="delivery-form__input"
                            {...register("phone", { required: true, pattern: /^\d{9}$/ })} />
                    </fieldset>
                </div>

            </fieldset>

            <fieldset className="delivery-form__group">
                <label htmlFor="city" className="delivery-form__label">Miasto</label>
                <input
                    name="city"
                    placeholder="Miasto*"
                    className="delivery-form__input"
                    {...register("city", { required: true })} />
            </fieldset>

            <div className="wrapper">
                <fieldset className="delivery-form__group delivery-form__group--single">
                    <label htmlFor="street" className="delivery-form__label">Ulica</label>
                    <input
                        name="street"
                        placeholder="Ulica*"
                        className="delivery-form__input"
                        {...register("street", { required: true })} />
                </fieldset>

                <div className="wrapper wrapper--numbers">
                    <fieldset className="delivery-form__group delivery-form__group--number">
                        <label htmlFor="buildingNumber" className="delivery-form__label">Numer domu</label>
                        <input
                            name="buildingNumber"
                            placeholder="Numer domu"
                            className="delivery-form__input"
                            {...register("buildingNumber", { required: true })} />
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