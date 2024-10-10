import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import hotel5 from '../../img/hotel/hotel5.jpg';
import hotel6 from '../../img/hotel/hotel6.jpg';
import hotel7 from '../../img/hotel/hotel7.jpg';
import hotel8 from '../../img/hotel/hotel8.jpg';
import hotel9 from '../../img/hotel/hotel9.jpg';


const Hospitality2 = () => {
 
  return (
    <div>
      <Fragment>
        <img className={interior.interior}  
        src={hotel5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={hotel6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={hotel7} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={hotel8} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
         <img className={interior.interior} 
        src={hotel9} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default Hospitality2;