import React from 'react';
import { useState } from 'react';
import { AiTwotoneStar, AiOutlineArrowRight } from 'react-icons/ai';
import OrderSidebar from './OrderSidebar';
import './Vendorlist.css';

export default function VendorListCard(props) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className='mx-2'>
      <div>
        <img src={props.image} alt='here' />
      </div>
      <div className='rating'>
        <div>{props.name}</div>
        <div>
          {props.rating}
          <AiTwotoneStar />
        </div>
      </div>
      <div className='type'>{props.tag}</div>
      <div className='placeorder'>
        <button onClick={handleToggle} className='placeorder'>
          Place order
          <AiOutlineArrowRight style={{ fontWeight: '800', marginLeft: '0.3rem' }} />
        </button>
        {toggle && <OrderSidebar close={() => setToggle(false)} source={props} />}
      </div>
    </div>
  );
}