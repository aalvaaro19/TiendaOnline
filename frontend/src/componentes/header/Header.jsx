import './Header.css';
import balonLogo from '../../imagenes/LogoTienda.png'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";


function Header(){
    return (
        <div className="header">
			<div className='nombre-tienda'>
				<h1>Limited Football</h1>
			</div>
			<div className="header-display">
				<img  
					className="header-Image"
					src= {balonLogo}
					alt="logo" 
				/>
				<div class="header-Search">
					<input type="text" placeholder="Search..." className="header-Search-input"/>
					<button className="header-Search-button">Buscar producto</button>
				</div>
				<div className="header-icons">
					<FaRegHeart />
					<MdOutlineShoppingBag />
					<FaRegUser />
				</div>
			</div>
        </div>
    )
};

export default Header;