import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import details1 from '../../img/details/details1.jpg';
import details2 from '../../img/details/details2.jpg';
import details3 from '../../img/details/details3.jpg';


const Details1 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={details1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={details2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={details3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default Details1;