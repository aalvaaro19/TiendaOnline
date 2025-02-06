import React, { useState } from "react";
import './ProductosFavoritos.css';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import axios from 'axios';

function ProductoFavoritos(props) {
  const idUsuario = localStorage.getItem('idUsuario');
  const [isFavorito, setIsFavorito] = useState(false);

  const handleDeleteToFavorites = () => {
    const idProducto = props.idProducto;

    axios.delete(`/eliminarProductoFavoritos/${idUsuario}/${idProducto}`)
      .then(() => {
        setIsFavorito(false);
        props.onRemoveFavorite(idProducto);
      })
      .catch((error) => {
        console.error("Error al eliminar producto de favoritos:", error);
      });
  };

  return (
    <Link to={`/ProductoIndividual/${props.idProducto}`} className="link-producto-individual">
      <div className="personal-Card">
        <Link to="/PaginaFavoritos" className="link-producto-individual">
          <FaHeart
            className={`favoritosHeart ${isFavorito ? 'favorito' : ''}`}
            onClick={handleDeleteToFavorites}
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

export default ProductoFavoritos;
