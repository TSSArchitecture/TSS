import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import wallframe1 from '../../img/wallframe/wallframe1.JPG';
import wallframe2 from '../../img/wallframe/wallframe2.JPG';
import wallframe3 from '../../img/wallframe/wallframe3.JPG';
import wallframe4 from '../../img/wallframe/wallframe4.JPG';
import wallframe5 from '../../img/wallframe/wallframe5.JPG';
import wallframe6 from '../../img/wallframe/wallframe6.JPG';
import wallframe7 from '../../img/wallframe/wallframe7.JPG';
import wallframe8 from '../../img/wallframe/wallframe8.JPG';


const WallFrame1 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior}  
        src={wallframe1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={wallframe2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallframe3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallframe4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallframe5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallframe6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={wallframe7} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
          <img className={interior.interior}  
        src={wallframe8} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default WallFrame1;