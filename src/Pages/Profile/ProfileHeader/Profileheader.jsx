import React from 'react'
import { Link } from 'react-router-dom'
import team1 from '../../../assets/img/profile/team-1.jpg'
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import './profile-header.css'
function Profileheader() {
  return (
    <div className="navbar-div">
      <div className="logo">
  <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
    <h3>Ubrikk</h3>
  </Link>
</div>


      <div className="nav">
       <a href='#'> About Us </a>
        <a href="/">Services</a>
        <Link to='/vendorlist'>Vendors</Link>
      </div>

      <div className="order-user-detail" style={{cursor: 'pointer'}}>
        <a href="/order">
          <ShoppingCartOutlined style={{ fontSize: '25px', margin: "0px 40px" }} /></a>
         
        <p>John Kumar</p>
        <Link to='/settings'>
        <img src={team1} alt="error" />
        </Link>
        <DownOutlined />
      </div>
    </div>
  )
}

export default Profileheader