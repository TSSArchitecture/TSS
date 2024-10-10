import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import commercial1 from '../../img/commercial/commercial1.jpg';
import commercial2 from '../../img/commercial/commercial2.jpg';


const Commercial1 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior}
        src={commercial1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={commercial2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default Commercial1;