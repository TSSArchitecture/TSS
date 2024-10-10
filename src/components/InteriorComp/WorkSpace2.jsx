import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import workspace3 from '../../img/officeSpaces/office3.jpg';
import workspace4 from '../../img/officeSpaces/office4.jpg';
import workspace6 from '../../img/officeSpaces/photo3.jpg';
import workspace7 from '../../img/officeSpaces/photo4.jpg';
import workspace13 from '../../img/officeSpaces/official1.jpg';
import workspace14 from '../../img/officeSpaces/official2.jpg';
import workspace15 from '../../img/officeSpaces/official3.jpg';
import workspace16 from '../../img/officeSpaces/official4.jpg';
import workspace17 from '../../img/officeSpaces/official5.jpg';
import workspace18 from '../../img/officeSpaces/official7.jpg';


const WorkSpace2 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
          src={workspace3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
          src={workspace4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
          src={workspace6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
          src={workspace7} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
          src={workspace13} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
          src={workspace14} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
         src={workspace15} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
          src={workspace16} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
          src={workspace17} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
          src={workspace18} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default WorkSpace2;