import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import upcoming12 from '../../img/upcoming/upcoming12.jpg';
import upcoming13 from '../../img/upcoming/upcoming13.jpg';
import upcoming14 from '../../img/upcoming/upcoming14.jpg';
import upcoming15 from '../../img/upcoming/upcoming15.jpg';
import upcoming16 from '../../img/upcoming/upcoming16.jpg';
import upcoming20 from '../../img/upcoming/upcoming20.jpg';
import upcoming21 from '../../img/upcoming/upcoming21.jpg';


const Upcoming2 = () => {
 
  return (
    <div>
      <Fragment>
        <img className={interior.interior}  
        src={upcoming12} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={upcoming13} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={upcoming14} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={upcoming15} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={upcoming16} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={upcoming20} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={upcoming21} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default Upcoming2;