import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
	return (
		<div className='navigate'>
			<Nav className="justify-content-center mt-4" activeKey="/home">
			<Nav.Item>
				<img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt='pokelogo'></img>
			</Nav.Item>
		</Nav>
		</div>
		
	);
};

export default Navbar;
