import React, { useState } from 'react';
import { HomeFilled, HistoryOutlined, FolderFilled, QuestionCircleFilled, SettingFilled } from '@ant-design/icons'
import './sidebar.css'
import {NavLink} from 'react-router-dom'
function Sidebar(props) {
	/*const navigate=useNavigate()
	function clickLogout(){
		navigate("/")
	}*/
	const [showButton,setShowbutton]=useState(true)
	const handleLogout=()=>{
		window.open('/')
	}
  

	return (
		
		<div className="menu-bar" >
			{showButton &&
			<button type='button' className='logout_btn' onClick={handleLogout}>Logout</button>}
			<div className="menu-logo">
				<p>Menu</p>
			</div>
		<div className="menu-items">

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/profile'  >
				  <HomeFilled style={{ fontSize: "25px" }} />&nbsp;
				  <span>Home</span>
			 </NavLink></div>

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/order' >
				  <HistoryOutlined style={{ fontSize: "25px" }} />&nbsp;
				  <span>Orders</span>
			 </NavLink></div>

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/drafts' >
				  <FolderFilled style={{ fontSize: "25px" }} />&nbsp;
				  <span>Drafts</span>
			 </NavLink></div>
			 <hr style={{ width: "85%" }} />
			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/help'  >
				  <QuestionCircleFilled style={{ fontSize: "25px" }} />&nbsp;
				  <span>Help</span>
			 </NavLink></div>

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/settings' >
				  <SettingFilled style={{ fontSize: "25px" }} />&nbsp;
				  <span>Settings</span>
			 </NavLink></div>		
			 </div>
			 </div>

	)
}

export default Sidebar
