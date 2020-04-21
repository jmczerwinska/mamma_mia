import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Delivery({history}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [buildingNumber, setBuildingNumber] = useState('');
    const [localNumber, setLocalNumber] = useState('');
    const [comment, setComment] = useState('');

    const collectDeliveryData = () => {
        const data = {
            firstName,
            lastName,
            street,
            buildingNumber,
            localNumber,
            comment
        };
        console.log(data);
        history.push("/order/summary");
    }

    return (
        <form onSubmit={collectDeliveryData}>
            <fieldset>
                <input name="first-name" type="text" placeholder="Imię*" onChange={e => setFirstName(e.target.value)} required />
                <input name="last-name" type="text" placeholder="Nazwisko*" onChange={e => setLastName(e.target.value)} required />
            </fieldset>
            <fieldset>
                <input type="text" placeholder="Ulica*" onChange={e => setStreet(e.target.value)}required />
                <input type="text" placeholder="Nr budynku*" onChange={e => setBuildingNumber(e.target.value)}required />
                <input text="text" placeholder="Nr lokalu" onChange={e => setLocalNumber(e.target.value)} />
            </fieldset>
            <label>Komentarz
                <textarea onChange={e => setComment(e.target.value)} placeholder="Tu wpisz uwagi dotyczące zamówienia..."/>
            </label>
            <button>Zamów</button>
        </form>
    )

}

export default withRouter(Delivery);