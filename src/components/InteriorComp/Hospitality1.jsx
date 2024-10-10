import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import hotel1 from '../../img/hotel/hotel1.jpg';
import hotel2 from '../../img/hotel/hotel2.jpg';
import hotel3 from '../../img/hotel/hotel3.jpg';
import hotel4 from '../../img/hotel/hotel4.jpg';


const Hospitality1 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior}  
        src={hotel1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={hotel2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={hotel3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={hotel4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default Hospitality1;