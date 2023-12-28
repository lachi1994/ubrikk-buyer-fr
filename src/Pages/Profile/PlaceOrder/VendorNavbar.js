import React from 'react';
import './VendorNavbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import { FiLogIn } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import team1 from '../../../assets/img/profile/team-1.jpg';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { getUser, LogoutUser } from 'redux/features/auth';
function VendorNavbar() {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const [istablet, setIstablet] = useState(false);
	const [ismobile, setIsmobile] = useState(false);

	const logout = () => dispatch(LogoutUser());
	return (
		<div className='navbar'>
			<div className='mobile-menu' onClick={() => setIsmobile(!ismobile)}>
				{!ismobile ? <GiHamburgerMenu className='hamburger' /> : <AiOutlineClose />}
			</div>
			<div className='logo'>
				<Link to='/' style={{ textDecoration: 'none', color: 'black', marginTop: '-10px' }}>
					<h4>Ubrikk</h4>
				</Link>
			</div>
			<ul className={ismobile ? 'nav-list-mobile' : 'nav-list'}>
				<Link to='/aboutus' className='link-tab'>
					<li>About Us</li>
				</Link>
				<Link to='/productpage' className='link-tab'>
					<li>Products</li>
				</Link>
				<Link to='#' className='link-tab'>
					<li>Service</li>
				</Link>
				<Link to='/vendorlist' className='link-tab'>
					<li>Vendors</li>
				</Link>
			</ul>
			<div></div>

			<div>
				<div className='order-user-detail' style={{ cursor: 'pointer' }}>
					<a href='/order'>
						<ShoppingCartOutlined className='shopping-cart' />
					</a>

					<p>John Kumar</p>
					<Link to='/settings' style={{ textDecoration: 'none' }}>
						<img src={team1} alt='error' />
					</Link>
					{/* <DownOutlined /> */}
				</div>
			</div>
		</div>
	);
}

export default VendorNavbar;
