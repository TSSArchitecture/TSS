import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';


import int5 from '../../img/interior5.jpg';
import int6 from '../../img/interior6.jpg';
import int7 from '../../img/interior7.jpg';


const InteriorInt2 = () => {

  return (
    <div>
      <Fragment>
        <img className={interior.interior}
        src={int5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={int6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={int7} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default InteriorInt2;