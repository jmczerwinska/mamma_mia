import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.scss';
import { faPhoneAlt, faEnvelopeOpenText, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="container container--contact">
      <section className="location">

        <div className="location__info">
          <h4 className="location__title">Pizzeria <span className="location__title--name">Mamma Mia!</span></h4>
          <p>
            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
            <span className="location__address">
              Aleje Ujazdowskie 22AB
            <br />
            00-222 Warszawa
          </span>
          </p>

          <p>
            <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            123-123-123
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} />
            pizzeria@mammamia.pl
          </p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.604266249467!2d21.020613087409266!3d52.220407592150906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecce466b29a8f%3A0x894d7567580963af!2sal.%20Ujazdowskie%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1593690143949!5m2!1spl!2spl" className="location__map" aria-hidden="false" title="map"></iframe>

      </section>
      <section className="contact-form">
        <h4>Napisz do nas!</h4>
      </section>




    </div>
  )
}

export default Contact;
