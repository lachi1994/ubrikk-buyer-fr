import React, { useState } from 'react'
import DesignsItems from '../Component/DesignsItems';
import UploadsItems from '../Component/UploadsItems'
import Profileheader from '../ProfileHeader/Profileheader';
import Sidebar from '../Sidebar/Sidebar';
import './draft.css'
import { BsFilter, BsFillGridFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { BiListUl, BiRupee } from 'react-icons/bi'
import order1 from '../../../assets/icons/order1.png'
import order2 from '../../../assets/icons/order2.png'
import order3 from '../../../assets/icons/order3.png'
import order4 from '../../../assets/icons/order4.png'



function Drafts() {

  const [filterDesign, setFilterDesign] = useState("All")
  const switchItems = e => {
    setFilterDesign(e.target.value);
  }

  return (


    <div className="profile-container">
    <Profileheader />

    <div className="profile-body">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="outlet"> 


    <div className="mainDiv">

      <div className="header-drop-filter">
        <p>Your Drafts</p>
        <div>
          <BsFillGridFill className='menu-icon' />&nbsp;
          <BiListUl className='bar-icon' />&nbsp;&nbsp;&nbsp;
          <span><BsFilter />&nbsp;Filter</span>
        </div>
      </div>

      <h6 style={{ fontSize: "25px", fontWeight: "800" }}>Recent Customizations</h6>
      <div className="items-div">

        <div className="item">
          <img src={order1} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={order2} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={order3} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={order4} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
          </div>
        </div>

      </div>

      <div className="menu-div">
        <button onClick={switchItems} value="All">All</button>
        <button onClick={switchItems} value="Designs">Designs</button>
        <button onClick={switchItems} value="Uploads">Uploads</button>
      </div>

      {
        filterDesign === "All" && <> 
        <button style={{border:"none",fontWeight:"800",fontSize:"20px"}}  onClick={switchItems} value="Designs">Designs <IoIosArrowForward /></button > <br /><br />
        <button style={{border:"none",fontWeight:"800",fontSize:"20px"}} onClick={switchItems} value="Uploads">Uploads <IoIosArrowForward /></button >
        </>
      }
      {
        filterDesign === "Designs" && <>
        <DesignsItems />
        </>
      }
      {
        filterDesign === "Uploads" && <>
          <UploadsItems />
        </>
      }
    </div>
    </div>
    </div>
    </div>
  
  )
}

export default Drafts