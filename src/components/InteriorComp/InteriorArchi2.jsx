import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import archi4 from '../../img/archi/archi4.jpg';
import archi5 from '../../img/archi/archi5.jpg';
import archi6 from '../../img/archi/archi6.jpg';


const InteriorArchi1 = () => {
 
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={archi4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={archi5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={archi6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default InteriorArchi1;