import React, { useState } from 'react';
import Size from './size.png';

import './SelectSize.scss';

function SelectSize({ sizeSender }) {
    const sizes = [
        { name: "Mała", size: 600, diameter: 21},
        {name: "Średnia", size: 800, diameter: 30},
        {name: "Duża", size: 1000, diameter: 42}
    ]
    const [base, setBase] = useState(800);

    const addClass = (size) => base === size ? " size--selected" : "";

    const changeSize = size => {
        setBase(size);
        sizeSender(size);
    }

    return (
        <div className="select-size">
            <h4>Wybierz rozmiar</h4>
            <div className="sizes">
                {sizes.map(el => (
                    <section key={el.size}>
                        <img
                            className={`size size--${el.size}` + addClass(el.size)}
                            onClick={() => changeSize(el.size)}
                            src={Size}
                            alt={`${el.name} pizza`} />
                        <p className="size__name">
                            {el.name} &#8960; {el.diameter}
                        </p>
                    </section>
                ))}
            </div>
        </div>

    )
}

export default SelectSize;