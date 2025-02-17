// Header.jsx
import './Header.css';
import balonLogo from '../../images/LogoTienda.png';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline, IoLogInOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

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

    const handleSearch = async () => {
        if (!nombre.trim()) {
            console.error("El nombre no puede estar vacío");
            return;
        }
        
        try {
            const response = await fetch(`/listarProductosPorNombre/${nombre}`);
            const data = await response.json();
            console.log("Resultados de búsqueda:", data);
            navigate('/PaginaBusqueda', { state: { productos: data } });
        } catch (error) {
            console.error('Error al buscar productos:', error);
        }
    };

    return (
        <div className="header">
            <div className="header-display">
                <div className='imagen-header'>
                    <Link to="/">
                        <img className="header-Image" src={balonLogo} alt="logo" />
                    </Link>
                </div>
                <div className="header-Search">
                    <input 
                        type="text" 
                        className="header-Search-input" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder='Buscar productos...'
                    />
                    <button className="header-Search-button" onClick={handleSearch}>
                        <IoSearchOutline />
                    </button>
                </div>
                <div className="header-icons">
                    <div className='display-header-icons'>
                        <Link to="/PaginaFavoritos">
                            <FaRegHeart className="color-iconos"/>
                        </Link>
                        <Link to="/PaginaCarrito">
                            <MdOutlineShoppingBag className="color-iconos"/>
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
        </div>
    );
}

export default Header;