import '../Nav/Nav.css'
import { Link } from 'react-router-dom';
import Menu from '../DropdownMenu/Menu';

function Nav(){
	return (
		<nav className='navBar'>
			<ul className='navBar-list'>
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
			<div className='menu-responsive'>
				<Menu />
			</div>
		</nav>
	);
};

export default Nav;