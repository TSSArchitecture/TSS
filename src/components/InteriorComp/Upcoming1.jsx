import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import upcoming1 from '../../img/upcoming/upcoming1.jpg';
import upcoming2 from '../../img/upcoming/upcoming2.jpg';
import upcoming3 from '../../img/upcoming/upcoming3.jpg';
import upcoming4 from '../../img/upcoming/upcoming4.jpg';
import upcoming5 from '../../img/upcoming/upcoming5.jpg';
import upcoming6 from '../../img/upcoming/upcoming6.jpg';
import upcoming7 from '../../img/upcoming/upcoming7.jpg';
import upcoming8 from '../../img/upcoming/upcoming8.jpg';
import upcoming9 from '../../img/upcoming/upcoming9.jpg';
import upcoming11 from '../../img/upcoming/upcoming11.jpg';


const Upcoming1 = () => {
 
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={upcoming1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={upcoming2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={upcoming3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={upcoming4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={upcoming5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={upcoming6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={upcoming7} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
          <img className={interior.interior} 
        src={upcoming8} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={upcoming9} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={upcoming11} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default Upcoming1;