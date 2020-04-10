import React from 'react';
import ListElement from '../ListElement/ListElement';
import ornament from './ornament.png';
import './PizzaList.scss';


function PizzaList({ list, title }) {

    return (
        <div className="category">
            <div  className="title">
                <img 
                className="title__ornament" 
                src={ornament} 
                alt="ornament" />
                <h3 className="title__name">{title}</h3>
            </div>


            <ol className="menu">
                {list.map((pizza, i) => <ListElement pizza={pizza} key={i} />)}
            </ol>
        </div>

    )
}

export default PizzaList;