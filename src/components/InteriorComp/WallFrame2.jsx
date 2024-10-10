import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import wallframe9 from '../../img/wallframe/wallframe9.JPG';
import wallframe10 from '../../img/wallframe/wallframe10.JPG';
import wallframe11 from '../../img/wallframe/wallframe11.JPG';
import wallframe12 from '../../img/wallframe/wallframe12.JPG';
import wallframe13 from '../../img/wallframe/wallframe13.JPG';
import wallframe14 from '../../img/wallframe/wallframe14.JPG';
import wallframe15 from '../../img/wallframe/wallframe15.JPG';


const WallFrame2 = () => {
 
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={wallframe9} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallframe10} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={wallframe11} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallframe12} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallframe13} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallframe14} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={wallframe15} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default WallFrame2;