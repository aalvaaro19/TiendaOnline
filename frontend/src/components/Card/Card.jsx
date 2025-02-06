import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import axios from 'axios';

function Card(props) {
  const token = localStorage.getItem('token');
  const [isFavorito, setIsFavorito] = useState(false);

  const handleAddToFavorites = () => {    
    if (!token) {
      console.log("No hay usuario logueado");
      alert("Por favor, inicia sesión para añadir a favoritos");
      return;
    }
  
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const idUsuario = decodedToken.id;
    console.log("ID de usuario:", idUsuario);
    const idProducto = props.idProducto;
    console.log("ID de producto:", idProducto);
    
    if (!idUsuario || !idProducto) {
      console.error("Faltan idUsuario o idProducto");
      alert("No se puede añadir el producto a favoritos sin un ID válido.");
      return;
    }
  
    axios.post(`/anadirProductoFavoritos/${idUsuario}/${idProducto}`, {})
    .then((response) => {
      setIsFavorito(true); // Marca el producto como favorito
      console.log("Producto añadido a favoritos:", response.data);
    })
    .catch((error) => {
      console.error("Error al añadir producto a favoritos:", error.response ? error.response.data : error);
    });
  };

  return (
    <Link to={`/ProductoIndividual/${props.idProducto}`} className="link-producto-individual">
      <div className="personal-Card">
        <Link to="/PaginaFavoritos" className="link-producto-individual">
          <FaRegHeart 
            className={`cardHeart ${isFavorito ? 'favorito' : ''}`}
            onClick={handleAddToFavorites}
          />
        </Link>
        <img
          className="personal-Image"
          src={require(`../../images/${props.carpeta}/${props.image}.png`)}
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
