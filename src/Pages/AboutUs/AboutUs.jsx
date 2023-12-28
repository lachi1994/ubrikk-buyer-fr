// src/components/AboutUs.js
import React from 'react';
import './Aboutus.css';
import vevdor from '../../assets/icons/vevdor.png';
import bgimage from '../../assets/img/bg.jpg';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';

 const AboutUs = () => {
  return (
      <section className='hero' style={{backgroundImage: `url(${bgimage})`,backgroundSize:'cover',height:'100vh'}}>
        <div className='heading'>
		  <div className='profile-row1'>
					<Link to='/'  style={{ color: 'black', textDecoration: 'none',fontSize:'25px'}}><AiOutlineArrowLeft /></Link>
					<Link to='/' style={{ color: 'black', textDecoration: 'none',fontSize:'25px', }}>
						&nbsp; <span>Back</span>
					</Link>
				</div>
          <h1> About Us</h1>
        </div>
        <div className='container'>
          <div className='hero-content'>
            <h2>Welcome to our website</h2>
            <p>Describe the latest trends and technology, design and more.Our team of experts brings you the best content and insights to help you stay ahead of the curve </p>
            <button className='cta-button'>Learn More</button>
            

          </div>
          <div className='hero-image'>
            <img src={vevdor} alt='aboutImage' />
          </div>
        </div>

		 
      </section>
      
  )
}
export default AboutUs;








/*import React from 'react';
import './Aboutus.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


const AboutUsPage = () => {
	const navigate=useNavigate()
	function clickButton(){
		navigate('/')	
	}
	
  // Define your dynamic content using state or props
  const aboutContent = 'Welcome to our About Us page! We are a dedicated team of developers building amazing web applications with React.';

  return (
	<div className="about-us">
		<div>
		<h1 style={{color:'brown',top:'-10px'}}>About Us</h1>
		<FaArrowLeft className='arrow-back' size={30} style={{float:'left',color:'black',position:'absolute',left:'1px',top:'60px'}} />
			<button className='back-button' onClick={clickButton} style={{float:'left',top:'-50px',left:'50px'}}>Back</button>
		</div>
		<p>{aboutContent}</p>
      <div>
      <h2 className='h2'>UBRIKK PLATFORM</h2>
      <p>
					A next generation platform that connect vendor with cumstomers.<br></br> Here the products
					are goods are designed online and delivered at customer specs.<br></br> Our unique
					algorithem is delivered such that a user can design his perfective goods online with
					WYSIWYG interface.<br></br>This also enables the vendor manufacture the custom product as
					per client specs.<br></br>Hence one part of this platform is user is buyers, while the
					other is vendors.<br></br>We have to built the core MVP.Our current focus is to integrate
					first vendor type to our application.
				</p>
        <h3>SOCIO ECONOMIC IMPACT OF THE UBRIKK</h3>
        <p>
						<li className='list'>
							Enhances local manufacture and vendors to deliver custom goods as service and hence
							improve life
						</li>
						<li className='list'>
							Create 10x additinal workforce in each villages and cities across india,starting from
							bangalore as first hub
						</li>
						<li className='list'>
							Availability of easy custom made goods enable 20% reduction in the buy and throw
							culture, thus carbon footprint
						</li>
						<li className='list'>
							Attract more reluctant customers to online sector ,which further improves the tax
							generation for the governments.
						</li>
						<li className='list'>Market disruption in high end goods manufactures and distributors</li>
				</p>
        </div>
    </div>

  );
};

export default AboutUsPage;*/
