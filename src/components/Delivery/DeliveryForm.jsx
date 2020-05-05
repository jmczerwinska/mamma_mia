import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { ContextConsumer } from '../..';
import './DeliveryForm.scss';

function DeliveryForm({ history }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [buildingNumber, setBuildingNumber] = useState('');
    const [localNumber, setLocalNumber] = useState('');
    const [comment, setComment] = useState('');

    const collectDeliveryData = (context) => {
        const data = {
            firstName,
            lastName,
            street,
            buildingNumber,
            localNumber,
            comment
        };
        console.log(data);
        context.refresh([]);

        history.push("/order/summary");
    }

    return (
        <ContextConsumer>
            {context => (
                <form
                    className="delivery-form"
                    onSubmit={() => collectDeliveryData(context)}>

                    <fieldset className="delivery-form__group">
                        <legend className="delivery-form__title">Dane do dostawy</legend>
                        <div className="wrapper">
                            <fieldset className="delivery-form__group delivery-form__group--single">
                                <label
                                    className="delivery-form__label"
                                    htmlFor="first-name">Imię</label>
                                <input
                                    className="delivery-form__input"
                                    name="first-name"
                                    type="text"
                                    placeholder="Imię*"
                                    onChange={e => setFirstName(e.target.value)} required />
                            </fieldset>
                            <fieldset className="delivery-form__group  delivery-form__group--single">
                                <label
                                    className="delivery-form__label"
                                    htmlFor="last-name">Nazwisko</label>
                                <input
                                    className="delivery-form__input"
                                    name="last-name"
                                    type="text"
                                    placeholder="Nazwisko*"
                                    onChange={e => setLastName(e.target.value)}
                                    required />
                            </fieldset>
                        </div>
                    </fieldset>

                    <fieldset className="delivery-form__group">
                        <legend className="delivery-form__title">Adres</legend>
                        <div className="wrapper">
                            <fieldset className="delivery-form__group delivery-form__group--single">
                                <label
                                    className="delivery-form__label"
                                    htmlFor="street">Ulica</label>
                                <input
                                    className="delivery-form__input"
                                    name="street"
                                    type="text"
                                    placeholder="Ulica*"
                                    onChange={e => setStreet(e.target.value)}
                                    required />
                            </fieldset>

                            <div className="wrapper wrapper--numbers">
                                <fieldset className="delivery-form__group
                                delivery-form__group--number">
                                    <label
                                        className="delivery-form__label"
                                        htmlFor="building-no">Nr domu</label>
                                    <input
                                        className="delivery-form__input"
                                        name="building-no"
                                        type="text"
                                        placeholder="Nr budynku*"
                                        onChange={e => setBuildingNumber(e.target.value)}
                                        required />
                                </fieldset>
                                <fieldset className="delivery-form__group delivery-form__group--number">
                                    <label
                                        className="delivery-form__label"
                                        htmlFor="flat-no">Nr lokalu</label>
                                    <input
                                        className="delivery-form__input"
                                        name="flat-no"
                                        text="text"
                                        placeholder="Nr lokalu"
                                        onChange={e => setLocalNumber(e.target.value)} />
                                </fieldset>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="delivery-form__group">
                        <legend className="delivery-form__title">Komentarz do zamówienia</legend>
                        <textarea
                            className="delivery-form__input delivery-form__input--text"
                            rows="5"
                            onChange={e => setComment(e.target.value)}
                            placeholder="Uwagi dotyczące zamówienia..." />
                    </fieldset>

                    <div className="button-group">
                        <button
                            type="button"
                            className="button button--back"
                            onClick={() => history.push('/order/basket')}>
                            Wstecz
                        </button>
                        <button
                            type="submit"
                            className="button button--next"
                            onClick={() => collectDeliveryData(context)}>
                            Zamów
                        </button>
                    </div>
                </form>
            )}
        </ContextConsumer>
    )
}

export default withRouter(DeliveryForm);