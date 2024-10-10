import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import archi1 from '../../img/archi/archi1.jpg';
import archi2 from '../../img/archi/archi2.jpg';
import archi3 from '../../img/archi/archi3.jpg';


const InteriorArchi1 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={archi1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={archi2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={archi3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default InteriorArchi1;