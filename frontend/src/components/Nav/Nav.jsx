import '../Nav/Nav.css'
import { Link } from 'react-router-dom';
function Nav(){
	return (
		<nav className='navBar'>
			<ul className='navBar-list'>
				<li><button className='navBar-element'>
					<Link to="/"><p className='palabra-boton-login'>INICIO</p></Link>
				</button></li>
				<li><button className='navBar-element'>
					<Link to="/paginaRetro"><p className='palabra-boton-login'>RETRO</p></Link>
				</button></li>
				<li><button className='navBar-element'>
					<Link to="/paginaFirmadas"><p className='palabra-boton-login'>FIRMADAS</p></Link>
				</button></li>
        <li><button className='navBar-element'>
					<Link to="/paginaColaboraciones"><p className='palabra-boton-login'>COLABORACIONES</p></Link>
				</button></li>
			</ul>
		</nav>
	);
};

export default Nav;