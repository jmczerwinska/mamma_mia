import React from 'react';
import ListElement from '../ListElement/ListElement';

function PizzaList({ list, title }) {

    return (
        <div className="category">
            <h3 className="category__name">{title}</h3>
            <ol className="menu">
                {list.map((pizza, i) => <ListElement pizza={pizza} key={i} />)}
            </ol>
        </div>

    )
}

export default PizzaList;