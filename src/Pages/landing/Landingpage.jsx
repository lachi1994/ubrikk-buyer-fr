import React from 'react'
import "./Landingpage.css";
import { useNavigate } from 'react-router-dom';

import { AiFillAudio, AiFillVideoCamera, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs'

import bgimage from '../../assets/img/bg.jpg'; 
import Header from './Header';

function LandingPage() {
  const navigate=useNavigate();
  
  const handleClick=()=>{
navigate('/customize')
  }
  return (
    <div style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "120vh" }} >
      <Header />
      <div className='landing-body'>
        <div className='landing-content'>
          <p>CUSTOMIZING A <strong>NAMEPLATE</strong></p>
          <h2>What do you need this product for ?</h2>
          <input type="text" />
          <b>OR</b>
        </div>

        <div className='ado-vdo-lables'>
          <div>
            <AiFillVideoCamera className='icon' />
            <p>Upload Video</p>
          </div>
          <div>
            <AiFillAudio className='icon' />
            <p>Upload Audio</p>
          </div> 
        </div>

        <div className="btn-groups">
          <button  onClick={()=>navigate(-1)} className='btn-transparent'>Back</button>
          <button onClick={handleClick}>Next</button>
        </div>

        <div className='social-icons'>
          <BsFacebook className='icon' />
          <AiFillTwitterCircle className='icon' />
          <AiFillInstagram className='icon' />
        </div>
      </div>
</div>
  )
}

export default LandingPage;