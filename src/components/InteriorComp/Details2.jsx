import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import details4 from '../../img/details/details4.jpg';
import details5 from '../../img/details/details5.jpg';


const Details2 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior}  
        src={details4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={details5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default Details2;