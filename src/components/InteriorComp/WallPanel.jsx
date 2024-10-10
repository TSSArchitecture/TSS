import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import wallpanel1 from '../../img/wallpanel/wallpanel1.jpg';
import wallpanel2 from '../../img/wallpanel/wallpanel2.jpg';
import wallpanel3 from '../../img/wallpanel/wallpanel3.jpg';
import wallpanel4 from '../../img/wallpanel/wallpanel4.jpg';
import wallpanel5 from '../../img/wallpanel/wallpanel5.jpg';
import wallpanel6 from '../../img/wallpanel/wallpanel6.jpg';
import wallpanel7 from '../../img/wallpanel/wallpanel7.jpg';
import wallpanel8 from '../../img/wallpanel/wallpanel8.jpg';


const WallPanel1 = () => {
 
  return (
    <div>
      <Fragment>
        <img className={interior.interior}  
        src={wallpanel1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallpanel2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={wallpanel3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallpanel4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallpanel5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallpanel6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={wallpanel7} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
          <img className={interior.interior}  
        src={wallpanel8} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default WallPanel1;