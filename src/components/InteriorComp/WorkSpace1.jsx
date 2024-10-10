import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import workspace1 from '../../img/officeSpaces/office1.jpg';
import workspace2 from '../../img/officeSpaces/office2.jpg';
import workspace55 from '../../img/officeSpaces/office5.jpg';
import workspace5 from '../../img/officeSpaces/photo1.jpg';
import workspace8 from '../../img/officeSpaces/office11.jpg';
import workspace9 from '../../img/officeSpaces/office12.jpg';
import workspace10 from '../../img/officeSpaces/office13.jpg';
import workspace80 from '../../img/officeSpaces/office15.jpg';
import workspace11 from '../../img/officeSpaces/office14.jpg';
import workspace12 from '../../img/officeSpaces/office10.jpg';


const WorkSpace1 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={workspace1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={workspace2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={workspace5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={workspace8} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={workspace9} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={workspace10} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={workspace55} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
          <img className={interior.interior}  
        src={workspace80} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={workspace11} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}  
        src={workspace12} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default WorkSpace1;