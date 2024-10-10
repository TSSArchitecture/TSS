import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import urban from '../../img/urban/urban.jpg';
import urban1 from '../../img/urban/urban1.jpg';
import urban2 from '../../img/urban/urban2.jpg';
import urban3 from '../../img/urban/urban3.jpg';


const InteriorUrban1 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior}
        src={urban} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={urban1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={urban2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={urban3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default InteriorUrban1;