import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import commercial3 from '../../img/commercial/commercial3.jpg';
import commercial4 from '../../img/commercial/commercial4.jpg';


const Commercial2 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={commercial3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={commercial4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default Commercial2;