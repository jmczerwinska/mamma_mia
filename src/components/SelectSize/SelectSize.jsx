import React, { useState } from 'react';

import './SelectSize.scss';

function SelectSize(props) {
    const sizes = [
        {name: "Mała", size: 600},
        {name: "Średnia", size: 800},
        {name: "Duża", size: 1000}
    ]
    const [base, setBase] = useState(800);

    const addClass = (size) => base === size ? " size--selected" : "";

    const changeSize = size => {
        setBase(size);
        props.sizeSender(size);
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
                            src={`${process.env.PUBLIC_URL}assets/size.png`}
                            alt={`${el.name} pizza`} />
                        <p className="size__name">{el.name}</p>
                    </section>
                ))}
            </div>
        </div>

    )
}

export default SelectSize;