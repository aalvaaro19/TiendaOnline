import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';
import { FaRegHeart  } from "react-icons/fa";

function Card(props) {
  return (
    <Link to="/ProductoIndividual">
    <div className="personal-Card">
    <FaRegHeart  className='cardHeart'/>
      <img
       className="personal-Image"
       src= {require(`../../images/${props.carpeta}/${props.image}.png`)}
       alt={`Edicion especial del ${props.image}`}
      />
      <div className="personal-card-text">
        <p className="cardDescription">{props.name}</p>
        <p className="cardDescription">{props.description}</p>
        <p className="cardPrice">{props.price}</p>
      </div>
    </div>
    </Link>
  );
}

export default Card;
