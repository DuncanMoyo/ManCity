import React from 'react';
import PromotionAnimation from './PromotionAnimation';
import Enrol from './Enrol';

const Promotion = () => {
  return (
    <div className='promotion_wrapper' style={{background: '#ffffff'}}>
      <div className='container'>
        <PromotionAnimation />
        <Enrol />
      </div>
    </div>
  );
};

export default Promotion;