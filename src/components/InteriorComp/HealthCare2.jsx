import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import hospital4 from '../../img/hospital/hospital2.jpg';


const HealthCare2 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={hospital4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default HealthCare2;