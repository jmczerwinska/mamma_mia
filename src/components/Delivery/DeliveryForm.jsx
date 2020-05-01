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
                <form onSubmit={() => collectDeliveryData(context)}>
                    <fieldset>
                        <input
                            name="first-name"
                            type="text"
                            placeholder="Imię*"
                            onChange={e => setFirstName(e.target.value)} required />
                        <input
                            name="last-name"
                            type="text"
                            placeholder="Nazwisko*"
                            onChange={e => setLastName(e.target.value)}
                            required />
                    </fieldset>
                    <fieldset>
                        <input
                            type="text"
                            placeholder="Ulica*"
                            onChange={e => setStreet(e.target.value)}
                            required />
                        <input
                            type="text"
                            placeholder="Nr budynku*"
                            onChange={e => setBuildingNumber(e.target.value)}
                            required />
                        <input
                            text="text"
                            placeholder="Nr lokalu"
                            onChange={e => setLocalNumber(e.target.value)} />
                    </fieldset>
                    <label>Komentarz
                        <textarea 
                            onChange={e => setComment(e.target.value)} 
                            placeholder="Uwagi dotyczące zamówienia..." />
                    </label>
                    <button type="submit">Zamów</button>
                    <button
                        type="button"
                        className=""
                        onClick={()=> history.push('/menu')}>
                            Wróć do menu
                    </button>
                </form>
            )}
        </ContextConsumer>
    )
}

export default withRouter(DeliveryForm);