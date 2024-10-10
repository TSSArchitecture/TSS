import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import hospital1 from '../../img/hospital/hospital1.jpg';


const HealthCare01 = () => {
 
  return (
    <div>
      <Fragment>
        <img className={interior.interior}
        src={hospital1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default HealthCare01;