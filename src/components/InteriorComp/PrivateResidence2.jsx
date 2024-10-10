import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import pr8 from '../../img/pr/pr8.jpg';
import pr9 from '../../img/pr/pr9.jpg';
import pr10 from '../../img/pr/pr10.jpg';
import pr11 from '../../img/pr/pr11.jpg';
import pr12 from '../../img/pr/pr12.jpg';
import pr13 from '../../img/pr/pr13.jpg';
import pr14 from '../../img/pr/pr14.jpg';

const PrivateResidence2 = () => {
 
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={pr8} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr9} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={pr10} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr11} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr12} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr13} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr14} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default PrivateResidence2;