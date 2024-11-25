import React from "react";
import './Card.css';
import equipacion from '../../images/equipacion-ajax.png'

function Card(props) {
  return (
    <div className="personal-Card">
      <img
        className="personal-Image"
        src={equipacion}
      />
      <div className="personal-card-text">
        <p className="cardDescription">{props.name}</p>
        <p className="cardDescription">{props.description}</p>
        <p className="cardPrice">{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
