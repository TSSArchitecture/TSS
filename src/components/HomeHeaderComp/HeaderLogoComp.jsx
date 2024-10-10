import React, { Fragment, } from 'react';
import { useNavigate } from 'react-router-dom';
// import { connect, } from 'react-redux';
import { HeaderLogo, } from '../../styled/Header/HeaderLogo';
import LogoImage from './LogoImage';
// import logo from '../../img/TSSLogoo.png';

const HeaderLogoComp = () => {
  // const styles = {
  //   headerLogo: {
  //     width: "401px",
  //     height:"107px"
  //   },
  // };
  const navigate = useNavigate();
  return (
    <Fragment>
      <HeaderLogo onClick={() =>{
        navigate("/")
      }}>
         <LogoImage />
      </HeaderLogo>
    </Fragment>
  )
};

export default HeaderLogoComp;