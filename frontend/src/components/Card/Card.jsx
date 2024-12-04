import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';
import { FaRegHeart  } from "react-icons/fa";

function Card(props) {
  return (
    <Link to="/ProductoIndividual" className="link-producto-individual">
      <div className="personal-Card">
      <Link to="/PaginaFavoritos" className="link-producto-individual"><FaRegHeart className='cardHeart'/></Link>
        <img
        className="personal-Image"
        src= {require(`../../images/${props.carpeta}/${props.image}.png`)}
        alt={`Edicion especial del ${props.image}`}
        />
          <div className="personal-card-text">
            <p className="cardDescription">{props.name}</p>
            <p className="cardPrice">{props.price}</p>
          </div>
      </div>
    </Link>
    
  );
}

export default Card;
