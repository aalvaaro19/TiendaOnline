import '../header/Header.css';
import balonLogo from '../../images/LogoTienda.png';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import Nav from '../Nav/Nav';



function HeaderProductos(){
  return (
    <div className="header">
			<div className="header-display">
				<div className='imagen-header'>
				<img  
					className="header-Image"
					src= {balonLogo}
					alt="logo" 
				/>
				</div>
				<div class="header-Search">
					<input type="text" placeholder="Search..." className="header-Search-input"/>
					<button className="header-Search-button"><IoSearchOutline /></button>
				</div>
				<div className="header-icons">
					<FaRegHeart />
					<MdOutlineShoppingBag />
					<FaRegUser />
				</div>
			</div>
            <Nav />
		</div>
  )
};

export default HeaderProductos;