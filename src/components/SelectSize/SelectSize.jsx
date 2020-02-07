import React, { useState } from 'react';

function SelectSize(props) {
    const [base, setBase] = useState(800);
    
    const addClass = (size) => base === size ? " selected" : "";
    
    const changeSize = size => {
        setBase(size);
        props.sizeSender(size);        
    }


    console.log(props)
    return (
        <div className="selectSize">
            <h4>Wybierz rozmiar</h4>
            <img
                className={"size small" + addClass(600)}
                onClick={() => changeSize(600)}
                src={`${process.env.PUBLIC_URL}assets/size.png`}
                alt="mała pizza" />
            <p>Mała</p>
            <img
                className={"size medium" + addClass(800)}
                onClick={() => changeSize(800)}
                src={`${process.env.PUBLIC_URL}assets/size.png`}
                alt="średnia pizza" />
            <p>Średnia</p>
            <img
                className={"size large" + addClass(1000)}
                onClick={() => changeSize(1000)}
                src={`${process.env.PUBLIC_URL}assets/size.png`}
                alt="duża pizza" />
            <p>Duża</p>
        </div>
    )
}

export default SelectSize;