import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';


import int1 from '../../img/interior1.jpg';
import int2 from '../../img/interior2.jpg';
import int3 from '../../img/interior3.jpg';
import int4 from '../../img/interior4.jpg';


const InteriorInt1 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={int1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={int2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={int3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={int4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default InteriorInt1;