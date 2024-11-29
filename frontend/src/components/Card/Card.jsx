import React from "react";
import './Card.css';

function Card(props) {
  return (
    <div className="personal-Card">
      <img
       className="personal-Image"
       src= {require(`../../images/${props.image}.png`)}
       alt={`Edicion especial del ${props.image}`}
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
