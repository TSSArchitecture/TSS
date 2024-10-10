import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import pr1 from '../../img/pr/pr1.jpg';
import pr2 from '../../img/pr/pr2.jpg';
import pr3 from '../../img/pr/pr3.jpg';
import pr4 from '../../img/pr/pr4.jpg';
import pr5 from '../../img/pr/pr5.jpg';
import pr6 from '../../img/pr/pr6.jpg';
import pr7 from '../../img/pr/pr7.jpg';


const PrivateResidence1 = () => {

  return (
    <div>
      <Fragment>
        <img className={interior.interior}
        src={pr1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={pr6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pr7} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default PrivateResidence1;