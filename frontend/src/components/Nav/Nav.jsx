import '../Nav/Nav.css'
function Nav(){
	return (
		<nav className='navBar'>
			<ul className='navBar-list'>
				<li><button className='navBar-element'>INICIO</button></li>
				<li><button className='navBar-element'>RETRO</button></li>
				<li><button className='navBar-element'>FIRMADAS</button></li>
                <li><button className='navBar-element'>COLABORACIONES</button></li>
			</ul>
		</nav>
	);
};

export default Nav;