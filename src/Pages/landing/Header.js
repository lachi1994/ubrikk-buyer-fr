/*import React, { useEffect, useState } from 'react';
import './/Landing.css';
import { MdLogin } from 'react-icons/md';

export function Header() {
	const button = {
		backgroundColor: 'blue',
		color: 'white',
		boxSizing: 'borderBox',
		borderRadius: '5px',
		width: '70px',
		Height: '50px',
		borderWidth: '1px',
	};
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoginBarOpen, setIsLoginBarOpen] = useState(false);
	const toggleLoginBar = () => {
		setIsLoginBarOpen(!isLoginBarOpen);
	};
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	function clickTitle() {
		window.open('/', '_self');
	}

	return (
		<div className='navbar'>
			<nav>
				<div style={{ textAlign: 'center', margin: 'auto' }}>
					<h4 className='title' onClick={clickTitle}>
						Ubrikk
					</h4>
				</div>
				<div className='loginbar' onClick={toggleLoginBar}>
					<MdLogin size={30} />
				</div>

				<div className='menu' onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<div className='nav'>
					<ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
						<li>
							<a href='/aboutus'>About Us</a>
						</li>
						<li>
							<a href='/products'>Products</a>
						</li>
						<li>
							<a href='/services'>Services</a>
						</li>
						<li>
							<a href='/vendorlist'>Vendors</a>
						</li>
					</ul>

					<div className={`button_login ${isLoginBarOpen ? 'show' : ''}`} onClick={toggleLoginBar}>
						<a href='/signin'>
							<button style={button}>Login</button>
						</a>
						<a href='/signup'>
							<button style={button}>Signup</button>
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;*/
