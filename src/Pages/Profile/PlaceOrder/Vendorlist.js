import React from 'react';
import './Vendorlist.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
//import vendorlist from '../../../assets/icons/Vendorlist.png';
import { Link } from 'react-router-dom';

import VendorListCard from './VendorListCard';
import vendors_data from './VendorsData';
//import Profileheader from '../ProfileHeader/Profileheader';
import VendorNavbar from './VendorNavbar';

function Vendorlist() {
	return (
		<>
			<VendorNavbar />

			<div className='profile'>
				<div className='profile-row1'>
					<Link to='/' style={{ textDecoration: 'none', color: 'black', fontSize: '25px' }}>
						<AiOutlineArrowLeft />
					</Link>
					<Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
						&nbsp; <span>Back</span>
					</Link>
				</div>
				<div className='profile-row2'>
					32 <span>Nameplates</span> vendors found
				</div>
			</div>
			<div className='d-flex justify-content-start flex-wrap gap-5'>
				{vendors_data.map((item) => {
					return <VendorListCard key={item.id} {...item} />;
				})}
			</div>
		</>
	);
}

export default Vendorlist;
