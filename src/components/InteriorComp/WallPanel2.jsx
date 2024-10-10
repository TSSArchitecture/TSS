import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import wallpanel9 from '../../img/wallpanel/wallpanel9.jpg';
import wallpanel10 from '../../img/wallpanel/wallpanel10.jpg';
import wallpanel11 from '../../img/wallpanel/wallpanel11.jpg';
import wallpanel12 from '../../img/wallpanel/wallpanel12.jpg';
import wallpanel13 from '../../img/wallpanel/wallpanel13.jpg';
import wallpanel14 from '../../img/wallpanel/wallpanel14.jpg';
import wallpanel15 from '../../img/wallpanel/wallpanel15.jpg';


const WallPanel2 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={wallpanel9} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={wallpanel10} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={wallpanel11} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={wallpanel12} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={wallpanel13} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={wallpanel14} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={wallpanel15} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default WallPanel2;