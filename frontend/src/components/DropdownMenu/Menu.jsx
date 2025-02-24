import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu() {
  function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
  return (
    <div className="menu-container">
        <button className="menu-button" onClick={toggleMenu}>☰ Menú</button>
        <ul className="navBar-list-dropdown" id="dropdownMenu">
          <li className='navBar-element-li'>
            <button className='navBar-element'>
            <Link to="/" className='palabra-menu-drop'><p className='palabra-boton-login'>INICIO</p></Link>
            </button>
          </li>
          <li className='navBar-element-li'>
            <button className='navBar-element'>
              <Link to="/paginaRetro" className='palabra-menu-drop'><p className='palabra-boton-login'>RETRO</p></Link>
            </button>
          </li>
          <li className='navBar-element-li'>
            <button className='navBar-element'>
              <Link to="/paginaFirmadas" className='palabra-menu-drop'><p className='palabra-boton-login'>FIRMADAS</p></Link>
            </button>
          </li>
          <li className='navBar-element-li'>
            <button className='navBar-element'>
              <Link to="/paginaColaboraciones" className='palabra-menu-drop'><p className='palabra-boton-login'>COLABORACIONES</p></Link>
            </button>
          </li>
        </ul>
    </div>
  )
}

export default Menu