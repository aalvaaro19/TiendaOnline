import './HeaderProductos.css';
import balonLogo from '../../images/LogoTienda.png';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline, IoLogInOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';

function HeaderProductos() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = async () => {
    try {
        const response = await fetch('/logout', { method: 'POST' });
        const data = await response.json();
        console.log(data.message); // Mensaje del backend
        
        // Eliminar el token del almacenamiento local
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        alert('Sesión cerrada exitosamente');
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};

    return (
        <div className="header">
            <div className="header-display">
                <div className='imagen-header'>
                    <Link to="/">
                        <img  
                            className="header-Image"
                            src={balonLogo}
                            alt="logo" 
                        />
                    </Link>
                </div>
                <div className="header-Search">
                    <input type="text" placeholder="Search..." className="header-Search-input"/>
                    <button className="header-Search-button"><IoSearchOutline /></button>
                </div>
                <div className="header-icons">
                    <div className='display-header-icons'>
                        <Link to="/PaginaFavoritos">
                            <FaRegHeart className="color-iconos"/>
                        </Link>
                        <Link to="/PaginaCarrito">
                            <MdOutlineShoppingBag  className="color-iconos"/>
                        </Link>
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="color-iconos">
                                <IoLogInOutline className="color-icono-logout"/>
                            </button>
                        ) : (
                            <Link to="/login">
                                <FaRegUser className="color-iconos"/>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <Nav />
        </div>
    )
}

export default HeaderProductos;
