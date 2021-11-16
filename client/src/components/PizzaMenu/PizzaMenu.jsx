import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

// import menuCart from '../../data/menu';
import PizzaList from '../PizzaList/PizzaList';

import './PizzaMenu.scss';

function PizzaMenu({ history }) {
    useEffect(() => window.scrollTo(0,0), []);

    const[list, setList] = useState([]);
  
    const fetchMenu = async() => { 
        try {
          let data = await fetch('http://localhost:5000/api/v1/menu/', {
          method: 'GET',
          });
    
          data = await data.json();
          setList(data.data)
          
        } catch(err) {
          console.log(err);
        }
      }

      useEffect(() => {
        fetchMenu();
      }, [])

    return (
        <div className="container container--menu">
            <PizzaList list={list} title="Pizza Rossa" />
            <PizzaList list={list} title="Pizza Bianca" />
            <div className="redirection">
                <p className="redirection__description" >Nie zanalazłeś pizzy na jaką masz ochotę?</p>
                <button className="redirection__button"onClick={() => history.push('/mamma_mia/compose')}>
                    Skomponuj własną!
                </button>
            </div>

        </div>

    )
}

export default withRouter(PizzaMenu);