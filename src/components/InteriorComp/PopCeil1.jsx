import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import pop1 from '../../img/pop/pop1.jpg';
import pop2 from '../../img/pop/pop2.jpg';
import pop3 from '../../img/pop/pop3.jpg';
import pop4 from '../../img/pop/pop4.jpg';
// import pop5 from '../../img/pop/pop5.jpg';
import pop6 from '../../img/pop/pop6.jpg';
import pop13 from '../../img/pop/pop13.jpg';
import pop14 from '../../img/pop/pop14.jpg';

const PopCeil1 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior}
        src={pop1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={pop2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={pop3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
          <img className={interior.interior}
        src={pop4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        {/* <img style={styles.glimpsePhoto} 
        src={pop5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/> */}
        <img className={interior.interior} 
        src={pop6} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pop13} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={pop14} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default PopCeil1;