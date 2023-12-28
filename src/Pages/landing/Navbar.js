import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';

import { getUser, LogoutUser } from 'redux/features/auth';
function Navbar() {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const [istablet, setIstablet] = useState(false);
	const [ismobile, setIsmobile] = useState(false);
	const logout = () => dispatch(LogoutUser());

	const styles =
		(ismobile || istablet) && window.innerWidth <= 870
			? { fontSize: '17px', fontWeight: '700' }
			: {};
	return (
		<div className='navbar'>
			<div className='mobile-menu' onClick={() => setIsmobile(!ismobile)}>
				{!ismobile ? <GiHamburgerMenu /> : <AiOutlineClose />}
			</div>
			<div className='logo'>
				<h4>Ubrikk</h4>
			</div>

			<ul className={ismobile ? 'nav-list-mobile' : 'nav-list'}>
				<Link to='/aboutus' className='link-tab'>
					<li style={styles}>About Us</li>
				</Link>
				<Link to='/products' className='link-tab'>
					<li style={styles}>Products</li>
				</Link>
				<Link to='/services' className='link-tab'>
					<li style={styles}>Service</li>
				</Link>
				<Link to='/vendorlist' className='link-tab'>
					<li style={styles}>Vendors</li>
				</Link>
			</ul>
			<div>
				{user ? (
					<ul className={istablet ? 'nav-links-tablet' : 'nav-links'}>
						<li className='login'>{user.profile.full_name}</li>
						<li onClick={logout} className='signup'>
							Logout
						</li>
					</ul>
				) : (
					<ul className={istablet ? 'nav-links-tablet' : 'nav-links'}>
						<Link to='/signin' className='signup'>
							<li style={styles}>Login</li>
						</Link>
						<Link to='/signup' className='signup'>
							<li style={styles}>Signup</li>
						</Link>
					</ul>
				)}
			</div>
			<div className='tablet-menu' onClick={() => setIstablet(!istablet)}>
				{!istablet ? <FiLogIn /> : <AiOutlineClose />}
			</div>
		</div>
	);
}

export default Navbar;
