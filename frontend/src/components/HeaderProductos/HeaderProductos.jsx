import '../header/Header.css';
import balonLogo from '../../images/LogoTienda.png';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';



function HeaderProductos(){
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
				<div class="header-Search">
					<input type="text" placeholder="Search..." className="header-Search-input"/>
					<button className="header-Search-button"><IoSearchOutline /></button>
				</div>
				<div className="header-icons">
                <Link to="/#">
                    <FaRegHeart className="color-icono"/>
                </Link>
                <Link to="/#">
                    <MdOutlineShoppingBag className="color-icono"/>
                </Link>
                <Link to="/login">
                    <FaRegUser className="color-icono"/>
                </Link>
            </div>
			</div>
            <Nav />
		</div>
  )
};

export default HeaderProductos;
