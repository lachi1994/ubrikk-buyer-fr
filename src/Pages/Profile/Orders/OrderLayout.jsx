import React, { useState } from 'react'


import './order-layout.css'
import { BsFilter, BsFillGridFill } from 'react-icons/bs'
import { BiListUl} from 'react-icons/bi'
import order1 from '../../../assets/icons/order1.png'
import order2 from '../../../assets/icons/order2.png'
import order3 from '../../../assets/icons/order3.png'
import order4 from '../../../assets/icons/order4.png'



function OrderLayout() {

  const [filterDesign, setFilterDesign] = useState("All")
  const switchItems = e => {
    setFilterDesign(e.target.value);
  }

  return (
    <div className="mainDiv">

      <div className="header-drop-filter">
        <p>Your Order</p>
        <div>
          <BsFillGridFill className='menu-icon'/>&nbsp;
          <BiListUl className='bar-icon'/>&nbsp;&nbsp;&nbsp;
          <span><BsFilter />&nbsp;Filter</span>
        </div>
      </div>

      <h6 style={{ fontSize: "25px", fontWeight: "800" }}>This Month</h6>
      <div className="items-div">

        <div className="item">
          <img src={order1} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order2} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order3} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order4} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>


      </div>

      <br />
      <h6 style={{ fontSize: "25px", fontWeight: "800" }}>Last Month</h6>
      <div className="items-div">

        <div className="item">
          <img src={order1} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order2} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order3} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order4} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>


      </div>
    </div>
  )
}

export default OrderLayout;