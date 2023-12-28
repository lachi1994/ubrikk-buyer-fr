import React from 'react'
import Profileheader from '../ProfileHeader/Profileheader';
import Sidebar from '../Sidebar/Sidebar';
import OrderLayout from './OrderLayout'
import Drafts from '../Drafts/Drafts';

function Orders() {
  return (
    <>
      <Profileheader />
      <div style={{ position: "absolute", top: "60px", display: "flex",width:"95%" }}>
        <div style={{ margin: "40px" }}>
          <Sidebar />
        </div>
        <OrderLayout />

      </div>
    </>
  )
}

export default Orders