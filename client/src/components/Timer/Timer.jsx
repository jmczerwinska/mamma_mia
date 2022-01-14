import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

import "./Timer.scss";

function Timer() {
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(deliveryTime);
  const [endTime, setEndTime] = useState(null);

  const getDeliveryTime = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/orders?status=accepted",
        {
          method: "GET",
        }
      );

      const parseResponse = await response.json();

      const deliveryTime = (await parseResponse.count) * 15 * 60;

      setDeliveryTime(deliveryTime);
      setTimeLeft(deliveryTime);
    } catch (error) {
      //TODO toast
    }
  };

  useEffect(() => {
    getDeliveryTime();
  }, []);

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
    const hours = Math.floor(timeLeft / 60 / 60);
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = (interval) =>
      interval < 10
        ? `0${interval}`
        : interval && interval >= 60
        ? `00`
        : `${interval}`;

    return `${display(hours)}h : ${display(minutes)}min : ${display(seconds)}s`;
  };

  const displayEndTime = () => {
    const end = new Date(endTime);
    const hours = end.getHours();
    const minutes = end.getMinutes();

    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  };

  return (
    <div className="timer">
      <div>
        <h6 className="timer__title">Przewidywany czas dostawy zamówienia:</h6>
        <p className="timer__show-time">
          <FontAwesomeIcon icon={faClock} className="timer__icon" />
          &nbsp;{displayEndTime()}
        </p>
      </div>

      <div>
        <h6 className="timer__title">Pozostało:</h6>
        <p className="timer__show-time">
          <FontAwesomeIcon icon={faStopwatch} className="timer__icon" />
          &nbsp;{displayTimeLeft()}
        </p>
      </div>
    </div>
  );
}

export default Timer;
