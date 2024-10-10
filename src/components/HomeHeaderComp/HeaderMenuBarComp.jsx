import React, { Fragment } from 'react';
import {  useDispatch, useSelector, } from 'react-redux';
import { setSmallMenuState } from '../../actions/allCSS';
import { HeaderMenuBar, HeaderMenuBarImg } from '../../styled/Header/HeaderMenuBar';
import menuBar from '../../img/three-bars.png';

const HeaderMenuBarComp = () => {

  const dispatch = useDispatch();
  const { smallMenuState } = useSelector(state => state.allCSS)

  return (
    <Fragment>
      <HeaderMenuBar>
        <HeaderMenuBarImg onClick = {() => {
          dispatch(setSmallMenuState(!smallMenuState))
        }}  src={menuBar} title='Triple Solutions Services Home' 
                      alt=''/>
      </HeaderMenuBar>
    </Fragment>
  )
};

export default HeaderMenuBarComp;