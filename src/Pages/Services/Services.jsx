import React from 'react';
import './Services.css';
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import bgimage from "../../assets/img/bg.jpg";
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';
 export const Services = () => {

  return (
	 <div className='section' style={{backgroundImage:`url(${bgimage})`,backgroundSize:'cover',height:'100vh'}}>

		<div className='title'>
		<div className='profile-row1'>
					<Link to='/'  style={{ color: 'black', textDecoration: 'none',fontSize:'25px'}}><AiOutlineArrowLeft /></Link>
					<Link to='/' style={{ color: 'black', textDecoration: 'none',fontSize:'25px' }}>
						&nbsp; <span>Back</span>
					</Link>
				</div>
		
			<h1 style={{color:'blue'}}>Services</h1>
			
		</div>

		<div className='services'>
			<div className='card'>
				<div className='icon'>
					<i><FaCalendar /></i>
					</div>
					<h2>Planning</h2>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel voluptatem fugiat est dignissimos iure fugit a consectetur assumenda quod dolorum!</p>
					<a href='' className='button'>Read More</a>
					</div>
				
			<div className='card'>
				<div className='icon'>
					<i><FaScrewdriverWrench/></i>
					</div>
					<h2>Renovation</h2>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel voluptatem fugiat est dignissimos iure fugit a consectetur assumenda quod dolorum!</p>
					<a href='' className='button'>Read More</a>
					</div>

					<div className='card'>
				<div className='icon'>
					<i><FaHandshakeSimple/></i>
					</div>
					<h2>Support</h2>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel voluptatem fugiat est dignissimos iure fugit a consectetur assumenda quod dolorum!</p>
					<a href='' className='button'>Read More</a>
					</div>
					
		</div>
		{/*<div>
					<h2 className='title' style={{textAlign:'center',textDecoration:'underline',marginBottom:'10px'}}>Our Services</h2>
					</div>
					<div className='card-item'>
						<div className='card_item'>
						<h4> Shipping and Delivery</h4>
							<li>Fast and reliable shipping options</li>
                     <li>Order tracking for real-time updates</li>
                     <li>Easy returns and exchanges</li>
							</div>

							<div className='card_item1'>
							<h4>Customer Support</h4>
							<li>24/7 customer support availability</li>
							<li>Knowledgeable and friendly support team</li>
							<li>Live chat, email, and phone support options</li>
							</div>

							<div className='card_item2'>
							<h4> Customization</h4>
							<li>Personalized product options</li>
							<li>Customized packaging and gift options</li>
							<li>Tailored solutions to meet individual needs</li>
							</div>
						
  </div>*/}
  </div>
  )
}













/*import './/Services.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

export const Services = () => {
	const navigate=useNavigate()
	function clickButton(){
		navigate('/')	
	}
	return (
		<div className='body'>
			<h1 className='header'>SERVICES</h1>
			<FaArrowLeft className='arrow-back' size={30} />
			<button className='back-button' onClick={clickButton}>Back</button>

			<div className='service'>
				<div className='body-content'>
					<p className='para_p'>
						The service page in an ecommerce website typically contains information about the
						services offered by the website.
					</p>
					<ol className='order-list'>
						<li>Shipping and delivery information</li>

						<li>Return and refund policy</li>

						<li>Customer support</li>

						<li>Privacy policy:</li>

						<li>Terms and conditions</li>

						<li>FAQs:</li>

						<li>Blog: </li>
					</ol>
				</div>
				<img
					src='https://cdn.vectorstock.com/i/preview-1x/50/81/girl-sitting-on-pile-books-vector-32735081.jpg'
					alt='img'
					width='550px'
					height='550px'
					className='service-img'></img>
			</div>
		</div>
	);
};*/

