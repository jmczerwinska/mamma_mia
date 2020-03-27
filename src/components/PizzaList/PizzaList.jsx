import React from 'react';
import ListElement from '../ListElement/ListElement';

function PizzaList({ list }) {

    return (
        <ol>
            {list.map((pizza, i) => <ListElement pizza={pizza} key={i} />)}
        </ol>
    )
}

export default PizzaList;