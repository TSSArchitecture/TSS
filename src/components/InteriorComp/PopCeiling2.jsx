import React, { Fragment } from 'react';
import interior from '../CSS/Others/interior.module.css';

import pop4 from '../../img/pop/pop4.jpg';
import pop5 from '../../img/pop/pop5.jpg';
import pop7 from '../../img/pop/pop7.jpg';
import pop8 from '../../img/pop/pop8.jpg';
import pop9 from '../../img/pop/pop9.jpg';
import pop10 from '../../img/pop/pop10.jpg';
import pop11 from '../../img/pop/pop11.jpg';
import pop12 from '../../img/pop/pop12.jpg';

const PopCeiling2 = () => {
  
  return (
    <div>
      <Fragment>
        <img className={interior.interior} 
        src={pop4} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior} 
        src={pop5} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
            <img className={interior.interior}
        src={pop7} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={pop8} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={pop9} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
            <img className={interior.interior}
        src={pop10} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={pop11} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
        <img className={interior.interior}
        src={pop12} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
      </Fragment>
    </div>
  )  
};  

export default PopCeiling2;