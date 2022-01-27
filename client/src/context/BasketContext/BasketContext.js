import React, { createContext, useReducer } from "react";
import BasketReducer from "./BasketReducer";

const initialBasket = [];

export const BasketContext = createContext(initialBasket);

export function BasketContextProvider({ children }) {
    const [basket, dispatch] = useReducer(BasketReducer, initialBasket);

    const addToBasket = (pizza) => {
        dispatch({
            type: "ADD_TO_BASKET",
            payload: pizza
        });
    }

    const removeFromBasket = (i) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: i
        });

    }

    const resetBasket = () => {
        dispatch({
            type: "RESET_BASKET"
        });

    }

    return (
        <BasketContext.Provider value={
            { basket, addToBasket, removeFromBasket, resetBasket }
        }>
            {children}
        </BasketContext.Provider>
    )

}

