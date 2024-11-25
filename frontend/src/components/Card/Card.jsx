import React from "react";
import '../Card/Card.css';

function Card(props) {
  return (
    <div className="personal-Card">
      {/* <img
        className="personal-Image"
        src={require(`../../equipacion-${props.images}.png`)}
        alt={`Edición especial del ${props.name}`}
      /> */}
      <div className="personal-card-text">
        <p className="cardDescription">{props.name}</p>
        <p className="cardDescription">{props.description}</p>
        <p className="cardPrice">{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
