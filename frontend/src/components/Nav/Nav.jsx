import '../Nav/Nav.css'
import { Link } from 'react-router-dom';
function Nav(){
	return (
		<nav className='navBar'>
			<ul className='navBar-list'>
				<li><button className='navBar-element'>
					<Link to="/" className='palabra-boton-login'>INICIO</Link>
				</button></li>
				<li><button className='navBar-element'>
					<Link to="/paginaRetro" className='palabra-boton-login'>RETRO</Link>
				</button></li>
				<li><button className='navBar-element'>
					<Link to="/paginaFirmadas" className='palabra-boton-login'>FIRMADAS</Link>
				</button></li>
        <li><button className='navBar-element'>
					<Link to="/paginaColaboraciones" className='palabra-boton-login'>COLABORACIONES</Link>
				</button></li>
			</ul>
		</nav>
	);
};

export default Nav;