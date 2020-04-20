import React from 'react';
import { useState } from 'react';

function Delivery() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [buildingNumber, setBuildingNumber] = useState('');
    const [localNumber, setLocalNumber] = useState('');
    const [comment, setComment] = useState('');

    const collectDeliveryData = () => {
        return {
            firstName,
            lastName,
            street,
            buildingNumber,
            localNumber,
            comment
        }
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
            <label>Komentarz do zamówienia
                <textarea onChange={e => setComment(e.target.value)}>Tu wpisz swoje uwagi do zamówienia</textarea>
            </label>
            <button>Zamów</button>
        </form>
    )

}

export default Delivery;