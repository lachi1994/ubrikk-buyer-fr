import React from 'react';
import Header from './Header';
import './Landing.css';

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { GrPinterest } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import bgimage from '../../assets/img/bg.jpg';
import bag from '../../bag.svg';
import nameplate from '../../nameplate.svg';
import label from '../../label.svg';
import car from '../../assets/img/car.png';
import Navbar from './Navbar';

function Landing() {
	return (
		<div
			style={{
				backgroundImage: `url(${bgimage})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				width: '100%',
				height: '100vh',
				minHeight: '900px',
				marginTop: '-15px',
			}}>
			{/*	<Header />*/}
			<Navbar />
			<div className='landing-body'>
				<div className='landing-content'>
					<p>CUSTOM ORDERS JUST FOR YOU</p>
					<h2>
						Pick a product and have it delivered <br />
						according to your <span>specifications</span>
					</h2>
				</div>
				<div className='three-lables'>
					<a className='links'>
						<div>
							<img src={bag} alt='error' />
							<p>Kid's Bags</p>
						</div>
					</a>
					<a href='/landingpage' className='links'>
						<div>
							<img src={nameplate} alt='error' />
							<p>Nameplates</p>
						</div>
					</a>
					<a className='links'>
						<div>
							<img src={label} height='55%' alt='error' />
							<p>Labels</p>
						</div>
					</a>
					<a href='/customizecar' className='links'>
						<div>
							<img src={car} alt='error' />
							<p>Cars</p>
						</div>
					</a>
				</div>
				<div className='footer-body'>
					<div className='footer'>
						<div className='footer-section'>
							<h3>Products</h3>
							<p className='p_li'>Kids Bag</p>
							<p className='p_li'>Plastic cars</p>
							<p className='p_li'>Labels</p>
							<p className='p_li'>Nameplates</p>
						</div>

						<div className='footer-callus'>
							<h3 style={{ marginTop: '-25px' }}>Call Us</h3>
							<p className='p_li'>Phone Number: 123-456-789</p>
							<p className='p_li'>Email: ubrikk@gmail.com</p>
							<p className='p_li'>Bangalore</p>
						</div>
					</div>
					<div className='footer-icons'>
						<BsFacebook size={36} />
						<AiFillTwitterCircle size={40} />
						<AiFillInstagram size={40} />
						<GrPinterest size={36} />
						<GrGithub size={36} />
					</div>
				</div>
				<div className='copyright'>
					<p className='para'>&copy; ubrikk | All rights reserved | Terms of Service|Privacy</p>
				</div>
			</div>
		</div>
	);
}

export default Landing;
