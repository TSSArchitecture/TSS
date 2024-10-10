import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import urban4 from '../../img/urban/urban4.jpg';
import urban5 from '../../img/urban/urban5.jpg';
import urban6 from '../../img/urban/urban6.jpg';


const InteriorUrban2 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={urban4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={urban5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={urban6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default InteriorUrban2;