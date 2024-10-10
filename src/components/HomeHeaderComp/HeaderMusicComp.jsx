import React, { Fragment } from 'react';
import { HeaderMusic } from '../../styled/Header/HeaderMusic';
import play from '../../img/Play.png';


const HeaderMusicComp = () => {
  return (
    <Fragment>
      <HeaderMusic>
        <img src={play} title='Triple Solutions Services Home' 
                      alt=''/>
      </HeaderMusic>
    </Fragment>
  )
};

export default HeaderMusicComp;