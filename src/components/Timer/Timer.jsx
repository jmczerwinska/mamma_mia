import React, { useState, useEffect } from 'react';
import './Timer.scss';

function Timer({ deliveryTime }) {

    const [timeLeft, setTimeLeft] = useState(deliveryTime);
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        const now = Date.now();
        const then = now + deliveryTime * 1000;
        setEndTime(then);
    }, [deliveryTime]);

    useEffect(() => {
        if (!timeLeft) return;
        let countdown;
        countdown = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearTimeout(countdown);
    }, [timeLeft]);

    const displayTimeLeft = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const display = (interval) => interval < 10 ? `0${interval}` : interval;

        return `${display(minutes)}min : ${display(seconds)}s`;
    }

    const displayEndTime = () => {
        const end = new Date(endTime);
        const hours = end.getHours();
        const minutes = end.getMinutes();

        return `${hours}:${minutes}`;
    }

    return (
        <div className="timer">
            <p className="timer__end-time">
                Przewidywany czas dostawy zamówienia {displayEndTime()}
            </p>
            <p className="timer__countdown">
                Pozostało: {displayTimeLeft()}
                </p>
        </div>
    )
}

export default Timer;  